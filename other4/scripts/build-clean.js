/**
 * build-clean.mjs
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')

console.log('🧹 Cleaning dist/ ...')

if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true })
}

fs.mkdirSync(DIST, { recursive: true })

console.log('✅ dist/ cleaned')
