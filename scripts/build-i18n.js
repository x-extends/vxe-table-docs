/**
 * 打包 i18n/** 为 i18n.zip
 */
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { ZipArchive } from 'archiver'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

const i18nDir = path.join(root, 'i18n')
const outFile = path.join(root, 'i18n.zip')

async function collectFiles(dir, base = dir, out = []) {
  const entries = await fsp.readdir(dir, { withFileTypes: true })
  await Promise.all(
    entries.map(async (e) => {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        await collectFiles(full, base, out)
      } else if (e.isFile()) {
        out.push({
          fullPath: full,
          relative: path.relative(base, full).split(path.sep).join('/')
        })
      }
    })
  )
  return out
}

async function main() {
  const start = Date.now()

  try {
    await fsp.access(i18nDir)
  } catch {
    throw new Error(`未找到 ${i18nDir}`)
  }

  const files = await collectFiles(i18nDir)
  if (files.length === 0) {
    throw new Error(`i18n 目录为空：${i18nDir}`)
  }

  console.log(`扫描 ${files.length} 个文件`)

  // 并发读全部文件
  const contents = await Promise.all(files.map((f) => fsp.readFile(f.fullPath)))

  await new Promise((resolve, reject) => {
    const output = fs.createWriteStream(outFile)
    const archive = new ZipArchive({ zlib: { level: 9 } })   // ← 最高压缩

    let settled = false
    const done = (err) => {
      if (settled) return
      settled = true
      err ? reject(err) : resolve()
    }
    output.on('close', () => done())
    output.on('error', done)
    archive.on('error', done)
    archive.pipe(output)

    files.forEach((f, i) => {
      // 不含 i18n 层：直接用 relative 作为 name
      archive.append(contents[i], { name: f.relative })
    })

    archive.finalize()
  })

  const stat = await fsp.stat(outFile)
  const mb = (stat.size / 1024 / 1024).toFixed(2)
  console.log(`✔ ${path.basename(outFile)} (${mb} MB)`)
  console.log(`耗时 ${Date.now() - start}ms`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})