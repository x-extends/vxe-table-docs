#!/usr/bin/env node
/**
 * 用法：
 *   node scripts/clean-pack.js
 *
 * 清理根目录下打包产物：
 *   - docs_*.zip（docs_v4.zip、docs_all.zip 等）
 *   - i18n.zip
 */
import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

/** 需要清理的 zip 文件匹配规则 */
const isPackZip = (name) =>
  name === 'i18n.zip' || /^docs_.+\.zip$/i.test(name)

async function main() {
  const start = Date.now()
  const entries = await fsp.readdir(root, { withFileTypes: true })
  const targets = entries.filter((e) => e.isFile() && isPackZip(e.name))

  if (targets.length === 0) {
    console.log('没有需要清理的 zip 文件')
    return
  }

  console.log(`清理 ${targets.length} 个文件：`)
  let removed = 0
  let freed = 0

  for (const e of targets) {
    const full = path.join(root, e.name)
    try {
      const stat = await fsp.stat(full)
      await fsp.unlink(full)
      freed += stat.size
      removed++
      console.log(`  ✔ ${e.name} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`)
    } catch (err) {
      console.error(`  ✘ ${e.name}: ${err?.message ?? err}`)
    }
  }

  console.log(`\n完成 ${removed}/${targets.length}，释放 ${(freed / 1024 / 1024).toFixed(2)} MB，耗时 ${Date.now() - start}ms`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})