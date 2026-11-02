/**
 * build-clean.js
 */

const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')

console.log('🧹 Cleaning dist/ ...')

if (fs.existsSync(DIST)) {
  fs.rmSync(DIST, { recursive: true, force: true })
}

fs.mkdirSync(DIST, { recursive: true })

console.log('✅ dist/ cleaned')
