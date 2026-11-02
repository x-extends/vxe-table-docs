/**
 * 用法：
 *   node scripts/sync-i18n.js
 *
 * 逻辑：
 *   以 zh-CN.json 为骨架基准，其他语言文件只覆盖 zh-CN 中已存在的 key，
 *   不新增 key，也不删除其他语言独有的 key（避免翻译丢失）。
 *
 * 即最终每个语言文件的 key 集合 = zh-CN 的 key 集合。
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '..')

const langDir = path.join(root, 'i18n')

const languages = [
  'zh-CN',
  'zh-CHT',
  'uk-UA',
  'ru-RU',
  'pt-BR',
  'ko-KR',
  'ja-JP',
  'fr-FR',
  'es-ES',
  'en-US',
  'de-DE',
  'ar-EG'
]
const baseLanguage = 'zh-CN'

/**
 * 将 source 对象的属性覆盖到 target，但只覆盖 target 中已存在的属性（不添加新属性）
 * @param {object} target - 目标对象（会被修改）
 * @param {object} source - 源对象
 * @returns {object} 修改后的 target 对象
 */
function deepAssignIfExists(target, source) {
  if (!target || typeof target !== 'object') {
    return target
  }
  if (!source || typeof source !== 'object') {
    return target
  }

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        const sourceVal = source[key]
        const targetVal = target[key]

        if (
          sourceVal && typeof sourceVal === 'object' && !Array.isArray(sourceVal) &&
          targetVal && typeof targetVal === 'object' && !Array.isArray(targetVal)
        ) {
          deepAssignIfExists(targetVal, sourceVal)
        } else {
          target[key] = sourceVal
        }
      }
    }
  }

  return target
}

function sync() {
  const start = Date.now()

  const baseFile = path.join(langDir, `${baseLanguage}.json`)
  let baseStr
  try {
    baseStr = fs.readFileSync(baseFile, 'utf-8')
  } catch {
    throw new Error(`未找到基准语言文件：${baseFile}`)
  }
  try {
    JSON.parse(baseStr) // 校验基准合法
  } catch (err) {
    throw new Error(`基准语言 ${baseLanguage} 解析失败：${err.message}`)
  }

  const otherLanguages = languages.filter((l) => l !== baseLanguage)
  const changed = []
  const skipped = []

  for (const lang of otherLanguages) {
    const file = path.join(langDir, `${lang}.json`)

    let langJson
    try {
      langJson = JSON.parse(fs.readFileSync(file, 'utf-8'))
    } catch (err) {
      skipped.push({ lang, reason: err.message })
      continue
    }

    // 每次循环都用一份干净的 base 副本，避免跨语言污染
    const merged = JSON.parse(baseStr)
    deepAssignIfExists(merged, langJson)

    fs.writeFileSync(file, JSON.stringify(merged, null, 2) + '\n')
    changed.push(lang)
  }

  if (changed.length) {
    console.log(`✔ 已同步 ${changed.length}/${otherLanguages.length} 个语言（基准：${baseLanguage}）`)
    console.log(`  ${changed.join(', ')}`)
  }
  if (skipped.length) {
    console.warn(`⚠ 跳过 ${skipped.length} 个语言：`)
    skipped.forEach(({ lang, reason }) => console.warn(`  ${lang}: ${reason}`))
  }
  console.log(`耗时 ${Date.now() - start}ms`)

  if (skipped.length) process.exit(1)
}

try {
  sync()
} catch (err) {
  console.error(err.message ?? err)
  process.exit(1)
}