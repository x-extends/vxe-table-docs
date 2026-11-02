/**
 * 用法：
 *   node scripts/build-pack.js v3
 *   node scripts/build-pack.js v3 v4 other4
 *   node scripts/build-pack.js                 // 默认全部 + docs_all.zip
 *
 * 稳定性优先：
 *   - 所有文件读成 Buffer 后 append，杜绝流/stat 不一致导致的 zip 损坏
 *   - 不传 stats，archiver 用 buffer.length 作为真实 size
 *   - 低并发（读 32/批，遍历 16/层），避免 fd 峰值
 *   - target 串行，零 IO 争抢
 *
 * 当 target === defaultTarget 时，额外把 dist 根级以下文件写一份到 zip 根目录：
 *   - index.html / 404.html → 注入版
 *   - *.html / *.ico / *.png / *.txt → 原文件
 *
 * 当传全部目标（无参数 / pack:all）时，额外生成 docs_all.zip。
 */
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ZipArchive } from 'archiver'
import XEUtils from 'xe-utils'
import UglifyJS from 'uglify-js'

import {
  defaultTargets,
  defaultTarget,
  enableAd,
  enableSponsors,
  isForceAd
} from './build-config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const root = path.resolve(__dirname, '..')
const adDir = path.join(root, 'ad')

/** 已压缩格式：跳过 zlib。其余（含未知/无扩展名）默认 deflate */
const storeRegex = /\.(?:png|jpe?g|gif|webp|avif|bmp|ico|woff2?|ttf|otf|eot|wasm|gz|br|zip|7z|rar|mp4|webm|mp3|ogg|wav|flac|pdf|swf|jar|bin)$/i
const smallFileThreshold = 32 * 1024
/** 降低并发：每批读 32 个文件，避免 fd 峰值 */
const readBatchSize = 32
/** 目录遍历：每层同时处理 16 个子项 */
const walkConcurrency = 16

/** defaultTarget 额外拷贝到 zip 根的文件类型 */
const rootLevelRegex = /\.(?:html|ico|png|txt)$/i

/** 按文件大小选择 zlib level */
function pickLevel(size) {
  if (size <= 4 * 1024) return 1
  if (size <= 32 * 1024) return 4
  return 6
}

/** 通用并发池：同时最多 limit 个任务 */
async function asyncPool(limit, items, fn) {
  if (items.length === 0) return []
  const results = new Array(items.length)
  let idx = 0
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (idx < items.length) {
      const i = idx++
      results[i] = await fn(items[i], i)
    }
  })
  await Promise.all(workers)
  return results
}

/* ==================== 脚本顶部：粘贴的变量 ==================== */
const adVariable = {
  VXE_AD_WRAPPER_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 18).join(''),
  VXE_AD_WRAPPER_STYLE: `position: fixed !important;right: 20px !important;top: ${XEUtils.sample([60, 80, 100, 120, 140])}px !important;width: 240px !important;padding: 0 !important;margin: 0 !important;z-index: 99 !important;display: block !important;text-align: left !important;`,
  VXE_AD_SPONSOR_ID: XEUtils.sample('qazxswedcvfrtgbnhyujmkiolp0123456789'.split(''), 16).join(''),
  VXE_AD_WWADS_STYLE: 'max-width: 200px !important;visibility: visible !important;display: block !important;z-index: 999 !important;'
}

const minify = (file) =>
  UglifyJS.minify(XEUtils.toFormatString(fs.readFileSync(path.join(adDir, file), 'utf-8'), adVariable), {
    toplevel: true,
    output: { beautify: false }
  }).code

const ssTmpJS = minify('ssTmpl.js')
const ssTmplScript = `<script>(function(){${ssTmpJS}})()</script>`
const sponsorsJS = minify('sponsors.js')
const sponsorsTmplScript = `<script>(function(){${sponsorsJS}})()</script>`

const adTmpJS = minify('adTmpl.js')
const adTmplScript = `<script>(function(){${adTmpJS}})()</script>`
const adCheckJS = minify('check.js')
const adCheckScript = `<script>${adCheckJS}</script>`
const adScript = `<script data-mode="hash" type="text/javascript" charset="UTF-8" src="https://cdn.wwads.cn/js/makemoney.js" async></script>`

const tjTmpJS = minify('tjTmpl.js')
const hmScript = `<script>${tjTmpJS}</script>`
/* ==================== 粘贴变量结束 ==================== */

function transformHtml(html) {
  return html
    .replace('</head>', enableAd ? `${adScript}${isForceAd ? adCheckScript : ''}${hmScript}</head>` : '</head>')
    .replace('</body>', `${enableSponsors ? ssTmplScript : ''}${enableSponsors ? sponsorsTmplScript : ''}${enableAd ? adTmplScript : ''}</body>`)
}

/**
 * 递归收集文件，每层限 walkConcurrency 个并发
 * 用 asyncPool 控制 fd 峰值，避免大目录瞬间开几千 fd
 */
async function collectFiles(dir, base = dir, out = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true })

  const dirs = []
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) dirs.push(full)
    else if (e.isFile()) files.push(full)
  }

  // 当前层文件：并发 stat
  await asyncPool(walkConcurrency, files, async (full) => {
    const stats = await fsp.stat(full)
    out.push({
      fullPath: full,
      relative: path.relative(base, full).split(path.sep).join('/'),
      stats
    })
  })

  // 子目录：并发递归
  await asyncPool(walkConcurrency, dirs, (full) => collectFiles(full, base, out))

  return out
}

async function collectRootLevelFiles(distDir, injectedHtml) {
  const result = {
    'index.html': Buffer.from(injectedHtml, 'utf-8'),
    '404.html': Buffer.from(injectedHtml, 'utf-8')
  }

  const skip = new Set(['index.html', '404.html'])
  const entries = await fsp.readdir(distDir, { withFileTypes: true })

  const targets = entries
    .filter((e) => e.isFile())
    .filter((e) => !skip.has(e.name))
    .filter((e) => rootLevelRegex.test(e.name))

  await Promise.all(
    targets.map(async (e) => {
      result[e.name] = await fsp.readFile(path.join(distDir, e.name))
    })
  )

  return result
}

/**
 * 把所有文件读成 Buffer 后 append —— 稳定性最高
 * 不传 stats：archiver 用 buffer.length 作为真实 size，杜绝 CRC 风险
 */
async function appendDistFiles(archive, rootPrefix, files) {
  const smallFiles = []
  const bigFiles = []
  for (const f of files) {
    if (f.relative === 'index.html' || f.relative === '404.html') continue
    const entry = { ...f, store: storeRegex.test(f.relative) }
    if (f.stats.size <= smallFileThreshold) smallFiles.push(entry)
    else bigFiles.push(entry)
  }

  // 小文件：批量读
  for (let i = 0; i < smallFiles.length; i += readBatchSize) {
    const batch = smallFiles.slice(i, i + readBatchSize)
    const buffers = await Promise.all(batch.map((f) => fsp.readFile(f.fullPath)))
    for (let j = 0; j < batch.length; j++) {
      const f = batch[j]
      archive.append(buffers[j], {
        name: `${rootPrefix}/${f.relative}`,
        store: f.store,
        zlib: { level: pickLevel(buffers[j].length) }
      })
    }
  }

  // 大文件：也读成 Buffer（单个最大几 MB，内存完全可承受）
  for (const f of bigFiles) {
    const buf = await fsp.readFile(f.fullPath)
    archive.append(buf, {
      name: `${rootPrefix}/${f.relative}`,
      store: f.store,
      zlib: { level: pickLevel(buf.length) }
    })
  }
}

/** 安全删除已存在文件（Windows 上防止文件被占用时的 WriteStream 失败） */
async function removeIfExists(file) {
  try {
    await fsp.unlink(file)
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
}

/**
 * 打单个 target 的独立 zip
 */
async function packZip(distDir, rootPrefix, outFile, extraFiles, rootFiles, files) {
  if (!files) files = await collectFiles(distDir)
  await removeIfExists(outFile)

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outFile)
    const archive = new ZipArchive({
      statConcurrency: 16,
      highWaterMark: 256 * 1024
    })

    let settled = false
    const done = (err) => {
      if (settled) return
      settled = true
      if (err) {
        try { output.destroy() } catch {}
        return reject(err)
      }
      resolve()
    }
    output.on('close', () => done())
    output.on('error', done)
    archive.on('error', done)
    archive.pipe(output)

    for (const [name, content] of Object.entries(extraFiles)) {
      archive.append(content, {
        name: `${rootPrefix}/${name}`,
        zlib: { level: 6 }
      })
    }

    if (rootFiles) {
      for (const [name, content] of Object.entries(rootFiles)) {
        archive.append(content, {
          name,
          zlib: { level: 6 }
        })
      }
    }

    appendDistFiles(archive, rootPrefix, files)
      .then(() => archive.finalize())
      .catch(done)
  })
}

/** 打全部目标的大包 docs_all.zip */
async function packAllZip(items) {
  const outFile = path.join(root, 'docs_all.zip')
  await removeIfExists(outFile)

  return new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outFile)
    const archive = new ZipArchive({
      statConcurrency: 16,
      highWaterMark: 256 * 1024
    })

    let settled = false
    const done = (err) => {
      if (settled) return
      settled = true
      if (err) {
        try { output.destroy() } catch {}
        return reject(err)
      }
      resolve()
    }
    output.on('close', () => done())
    output.on('error', done)
    archive.on('error', done)
    archive.pipe(output)

    ;(async () => {
      for (const item of items) {
        if (item.rootFiles) {
          for (const [name, content] of Object.entries(item.rootFiles)) {
            archive.append(content, { name, zlib: { level: 6 } })
          }
        }
        for (const [name, content] of Object.entries(item.extraFiles)) {
          archive.append(content, {
            name: `${item.target}/${name}`,
            zlib: { level: 6 }
          })
        }
        await appendDistFiles(archive, item.target, item.files)
      }
      archive.finalize()
    })().catch(done)
  })
}

async function packOne(target) {
  const distDir = path.join(root, target, 'dist')
  const indexPath = path.join(distDir, 'index.html')

  try {
    await fsp.access(indexPath)
  } catch {
    throw new Error(`[${target}] 未找到 ${indexPath}`)
  }

  const t0 = Date.now()
  const files = await collectFiles(distDir)
  console.log(`  [${target}] 扫描 ${files.length} 个文件（${Date.now() - t0}ms）`)

  const html = transformHtml(await fsp.readFile(indexPath, 'utf-8'))
  const outFile = path.join(root, `docs_${target}.zip`)

  const extraFiles = {
    'index.html': html,
    '404.html': html
  }
  const rootFiles = target === defaultTarget
    ? await collectRootLevelFiles(distDir, html)
    : null

  await packZip(distDir, target, outFile, extraFiles, rootFiles, files)

  const stat = await fsp.stat(outFile)
  const mb = (stat.size / 1024 / 1024).toFixed(2)
  console.log(`✔ ${target} -> docs_${target}.zip (${mb} MB, ${files.length} files)`)

  return { target, files, extraFiles, rootFiles }
}

async function main() {
  const raw = process.argv.slice(2).filter((a) => !a.startsWith('-'))
  const targets = [...new Set(raw)]

  if (targets.length) {
    const checks = await Promise.all(
      targets.map(async (t) => {
        try {
          await fsp.access(path.join(root, t, 'dist', 'index.html'))
          return null
        } catch {
          return t
        }
      })
    )
    const unknown = checks.filter(Boolean)
    if (unknown.length) {
      console.error(`✘ 未找到目标：${unknown.join(', ')}`)
      console.error(`  可用目标：${defaultTargets.join(', ')}`)
      process.exit(1)
    }
  }

  const list = targets.length ? targets : defaultTargets
  const isAll = defaultTargets.every((t) => list.includes(t))

  const start = Date.now()
  console.log(`开始打包：${list.join(', ')}${isAll ? '（含 docs_all.zip）' : ''}`)

  // ⚠️ 串行处理 target，杜绝 IO 争抢
  const succeeded = []
  let failed = 0
  for (const target of list) {
    try {
      const r = await packOne(target)
      succeeded.push(r)
    } catch (err) {
      failed++
      console.error(`✘ ${target}: ${err?.message ?? err}`)
    }
  }

  // 仅当全部成功时打大包
  if (isAll && failed === 0) {
    succeeded.sort(
      (a, b) => defaultTargets.indexOf(a.target) - defaultTargets.indexOf(b.target)
    )
    try {
      const t = Date.now()
      console.log(`开始打包 docs_all.zip ...`)
      await packAllZip(succeeded)
      const stat = await fsp.stat(path.join(root, 'docs_all.zip'))
      const mb = (stat.size / 1024 / 1024).toFixed(2)
      console.log(`✔ all -> docs_all.zip (${mb} MB) [${Date.now() - t}ms]`)
    } catch (err) {
      failed++
      console.error(`✘ docs_all.zip: ${err?.message ?? err}`)
    }
  }

  const total = list.length + (isAll ? 1 : 0)
  console.log(`\n完成 ${total - failed}/${total}，耗时 ${Date.now() - start}ms`)
  if (failed) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})