/**
 * 编译示例文件
 */

import { promises as fs } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
import { transform } from 'esbuild'

/* ---------------- 常量 ---------------- */

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC_DIR = path.join(ROOT, 'src/views')
const TS_DIR = path.join(ROOT, 'dist/example/ts')
const JS_DIR = path.join(ROOT, 'dist/example/js')

const EXTS = new Set(['.vue', '.ts', '.tsx'])
const CONCURRENCY = Math.max(4, Math.min(64, os.cpus().length * 4))

/* ---------------- 通用转译 ---------------- */

/**
 * 剥离 TS 类型，保留模块格式；中文原样保留（不转 \uXXXX）。
 * @param {string}  code
 * @param {boolean} jsxPreserve true 保留 JSX 语法（用于 .tsx / <script lang="tsx">）
 */
async function stripTs (code, jsxPreserve = false) {
  const { code: out } = await transform(code, {
    loader: jsxPreserve ? 'tsx' : 'ts',
    format: 'esm',
    target: 'es2020',
    sourcemap: false,
    legalComments: 'none',
    charset: 'utf8', // 中文原样保留
    ...(jsxPreserve ? { jsx: 'preserve' } : {}) // 保留 JSX 语法
  })
  return out
}

/* ---------------- .vue：仅剥离 <script> 内的 TS ---------------- */

const SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi

async function transformVue (filename, source) {
  const blocks = [...source.matchAll(SCRIPT_RE)]
  if (!blocks.length) return source

  const replacements = await Promise.all(blocks.map(async (m) => {
    const [, attrs, body] = m
    const langMatch = attrs.match(/\blang\s*=\s*["']([^"']+)["']/i)
    const lang = langMatch ? langMatch[1].toLowerCase() : ''
    if (lang !== 'ts' && lang !== 'tsx') return null

    const jsxPreserve = lang === 'tsx'

    let newBody
    try {
      newBody = await stripTs(body, jsxPreserve)
    } catch (err) {
      throw new Error(
        `[vue] ${path.relative(ROOT, filename)} 转译失败: ${err.message}`,
        { cause: err }
      )
    }

    // 移除原 lang 属性；tsx → 换成 lang="jsx"
    let cleaned = attrs.replace(/\s*\blang\s*=\s*["'][^"']+["']/i, '').trim()
    if (jsxPreserve) cleaned = cleaned ? `${cleaned} lang="jsx"` : 'lang="jsx"'
    const newAttrs = cleaned ? ' ' + cleaned : ''

    return `<script${newAttrs}>${newBody}</script>`
  }))

  // 按原顺序重组
  let out = ''
  let last = 0
  blocks.forEach((m, i) => {
    out += source.slice(last, m.index)
    out += replacements[i] ?? m[0]
    last = m.index + m[0].length
  })
  out += source.slice(last)
  return out
}

/* ---------------- 文件收集 / 并发池 ---------------- */

async function collectFiles (dir) {
  const out = []
  const stack = [dir]
  while (stack.length) {
    const cur = stack.pop()
    for (const e of await fs.readdir(cur, { withFileTypes: true })) {
      const full = path.join(cur, e.name)
      if (e.isDirectory()) stack.push(full)
      else if (EXTS.has(path.extname(e.name))) out.push(full)
    }
  }
  return out
}

async function runPool (items, limit, fn) {
  let cursor = 0
  const errors = []
  const workerCount = Math.min(limit, items.length)
  await Promise.all(Array.from({ length: workerCount }, async () => {
    while (true) {
      const i = cursor++
      if (i >= items.length) return
      try { await fn(items[i], i) } catch (err) { errors.push({ item: items[i], err }) }
    }
  }))
  return errors
}

/* ---------------- 输出文件名映射 ---------------- */

function outputName (rel) {
  const ext = path.extname(rel)
  if (ext === '.vue') return rel
  if (ext === '.ts') return rel.slice(0, -3) + '.js'
  if (ext === '.tsx') return rel.slice(0, -4) + '.jsx'
  return rel
}

/* ---------------- 单文件处理 ---------------- */

async function buildOne (file) {
  const rel = path.relative(SRC_DIR, file)
  const ext = path.extname(file)
  const source = await fs.readFile(file, 'utf8')

  // ① 原样复制到 ts 目录
  const tsTarget = path.join(TS_DIR, rel)
  await fs.mkdir(path.dirname(tsTarget), { recursive: true })
  await fs.writeFile(tsTarget, source)

  // ② 转译后写入 js 目录
  const jsTarget = path.join(JS_DIR, outputName(rel))
  await fs.mkdir(path.dirname(jsTarget), { recursive: true })

  let code
  if (ext === '.vue') code = await transformVue(file, source)
  else if (ext === '.ts') code = await stripTs(source, false)
  else code = await stripTs(source, true) // .tsx

  await fs.writeFile(jsTarget, code)
}

/* ---------------- 主流程 ---------------- */

async function main () {
  try { await fs.access(SRC_DIR) } catch { return console.warn(`[build-example] 目录不存在: ${SRC_DIR}`) }

  const t0 = Date.now()
  const files = await collectFiles(SRC_DIR)
  if (!files.length) return console.warn('[build-example] src/views 下无 .vue/.ts/.tsx')

  console.log(`[build-example] ${files.length} 个文件，并发=${CONCURRENCY}`)

  await fs.rm(TS_DIR, { recursive: true, force: true })
  await fs.rm(JS_DIR, { recursive: true, force: true })
  await fs.mkdir(TS_DIR, { recursive: true })
  await fs.mkdir(JS_DIR, { recursive: true })

  let done = 0
  const errors = await runPool(files, CONCURRENCY, async (file) => {
    await buildOne(file)
    if (++done % 25 === 0 || done === files.length) { process.stdout.write(`\r[build-example] 进度 ${done}/${files.length}`) }
  })
  process.stdout.write('\n')

  if (errors.length) {
    for (const { item, err } of errors) {
      console.error(`[build-example] ✗ ${path.relative(ROOT, item)}`)
      console.error(`  ${err.stack || err.message}`)
    }
    console.error(`[build-example] 失败 ${errors.length} 个`)
    process.exit(1)
  }

  console.log(`[build-example] ✓ 完成 ${Date.now() - t0}ms`)
  console.log(`  源码: ${path.relative(ROOT, TS_DIR)}`)
  console.log(`  产物: ${path.relative(ROOT, JS_DIR)}`)
}

main().catch((err) => {
  console.error('[build-example] 致命错误:', err)
  process.exit(1)
})
