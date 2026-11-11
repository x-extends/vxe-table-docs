const path = require('node:path')
const fs = require('node:fs')
const fsp = fs.promises
const { parse } = require('@vue/compiler-sfc')
const ts = require('typescript')
const glob = require('glob')
const config = require('./build-config')

const { src, outTsDist, outJsDist } = config

function compileTs (code, lang) {
  const isTsx = lang === 'tsx'
  return ts.transpileModule(code, {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      esModuleInterop: true,
      removeComments: false,
      jsx: isTsx ? ts.JsxEmit.Preserve : undefined
    }
  }).outputText
}

function transformVue (source) {
  const { descriptor } = parse(source)
  const scriptBlock = descriptor.script || descriptor.scriptSetup
  let script = scriptBlock ? scriptBlock.content : ''
  const lang = scriptBlock ? scriptBlock.lang : null

  // 输出 script 标签的 lang：ts -> 普通 js（无 lang），tsx -> jsx
  let outLang = null

  if (lang === 'ts' || lang === 'tsx') {
    script = compileTs(script, lang)
    script = script
      .replace("import Vue from 'vue';\n", '')
      .replace(/export\s+default\s+Vue\.extend\s*\(\s*/, 'export default ')
      .replace(/\)\s*;?\s*$/, '')

    if (lang === 'tsx') {
      outLang = 'jsx'
    }
  }

  const langAttr = outLang ? ` lang="${outLang}"` : ''

  return source.replace(
    /<script[^>]*>[\s\S]*?<\/script>/,
    `<script${langAttr}>\n` + script + '\n</script>'
  )
}

async function processFile (file) {
  const rel = path.relative(src, file)
  const code = await fsp.readFile(file, 'utf-8')

  const tsOut = path.join(outTsDist, rel)
  await fsp.writeFile(tsOut, code)

  let jsRel = rel
  let jsCode

  if (file.endsWith('.vue')) {
    jsCode = transformVue(code)
  } else if (file.endsWith('.tsx')) {
    jsRel = rel.replace(/\.tsx$/, '.jsx')
    jsCode = compileTs(code, 'tsx')
  } else if (file.endsWith('.ts')) {
    jsRel = rel.replace(/\.ts$/, '.js')
    jsCode = compileTs(code, 'ts')
  } else {
    return
  }

  await fsp.writeFile(path.join(outJsDist, jsRel), jsCode)
}

async function build () {
  console.time('⏱ build:examples')

  await Promise.all([
    fsp.rm(outTsDist, { recursive: true, force: true }),
    fsp.rm(outJsDist, { recursive: true, force: true })
  ])

  const files = glob.sync(path.join(src, '**/*.{vue,ts,tsx}'))

  // 预建目录树：收集去重后一次性 mkdir
  const dirs = new Set([outTsDist, outJsDist])
  for (const file of files) {
    const rel = path.relative(src, file)
    dirs.add(path.dirname(path.join(outTsDist, rel)))
    let jsRel = rel
    if (file.endsWith('.tsx')) jsRel = rel.replace(/\.tsx$/, '.jsx')
    else if (file.endsWith('.ts')) jsRel = rel.replace(/\.ts$/, '.js')
    dirs.add(path.dirname(path.join(outJsDist, jsRel)))
  }
  await Promise.all([...dirs].map(d => fsp.mkdir(d, { recursive: true })))

  // IO 并发 + 同步编译
  const CONCURRENCY = 32
  let i = 0
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (i < files.length) {
      await processFile(files[i++])
    }
  }))

  console.timeEnd('⏱ build:examples')
  console.log(`  files: ${files.length}`)
  console.log(`  ts  -> ${outTsDist}`)
  console.log(`  js  -> ${outJsDist}`)
}

build().catch(e => { console.error(e); process.exit(1) })