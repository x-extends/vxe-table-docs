import XEUtils from 'xe-utils'

interface ParseTemplateObj {
  code: string
  content: string
  attrs: Record<string, string | boolean>
}

interface ParseStyleObj {
  lang: string
  scoped: boolean
  code: string
  content: string
  attrs: Record<string, string | boolean>
}

interface ParseScriptObj {
  lang: string
  setup: boolean
  src: string
  code: string
  content: string
  attrs: Record<string, string | boolean>
}

interface ParseBlockAttrs {
  [key: string]: string | boolean
}

export function parseVueWithDOMParser (source: string) {
  const raw = source || ''

  const parseAttrs = (attrStr: string): ParseBlockAttrs => {
    const attrs: ParseBlockAttrs = {}
    if (!attrStr) return attrs
    const re = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g
    let m: RegExpExecArray | null
    while ((m = re.exec(attrStr))) {
      attrs[m[1]] = m[2] ?? m[3] ?? m[4] ?? true
    }
    return attrs
  }

  const elAttrs = (el: Element | null): ParseBlockAttrs => {
    const attrs: ParseBlockAttrs = {}
    if (!el) return attrs
    Array.from(el.attributes).forEach(a => {
      attrs[a.name] = a.value === '' ? true : a.value
    })
    return attrs
  }

  // 1) template：原始字符串扫描，保真 Vue 模板语法（大小写、自闭合、嵌套）
  const extractRawTemplate = (src: string): ParseTemplateObj => {
    const openRe = /<template(\s[^>]*)?>/i
    const m = openRe.exec(src)
    if (!m) return { code: '', content: '', attrs: {} }

    const attrs = parseAttrs(m[1] || '')

    const lower = src.toLowerCase()
    const openTag = '<template'
    const closeTag = '</template'
    let depth = 1
    let i = m.index + m[0].length

    while (i < src.length) {
      const nextOpen = lower.indexOf(openTag, i)
      const nextClose = lower.indexOf(closeTag, i)
      if (nextClose === -1) return { code: '', content: '', attrs }

      if (nextOpen !== -1 && nextOpen < nextClose) {
        const gt = src.indexOf('>', nextOpen)
        if (gt === -1) return { code: '', content: '', attrs }
        if (src[gt - 1] !== '/') depth++
        i = gt + 1
      } else {
        depth--
        if (depth === 0) {
          const closeEnd = src.indexOf('>', nextClose)
          return {
            code: src.slice(m.index + m[0].length, nextClose),
            content: src.slice(m.index, closeEnd + 1),
            attrs
          }
        }
        const closeEnd = src.indexOf('>', nextClose)
        i = closeEnd + 1
      }
    }
    return { code: '', content: '', attrs }
  }

  // 2) script / style / 自定义块：DOMParser 提取（raw text 保真）
  //    只取 <root> 直接子元素，排除 template 内嵌的 <script>/<style>
  const wrapped = `<root>${raw}</root>`
  const doc = new DOMParser().parseFromString(wrapped, 'text/html')
  const rootEl = doc.querySelector('root')
  const directChildren = rootEl ? Array.from(rootEl.children) : []

  const scriptEls = directChildren.filter(el => el.tagName === 'SCRIPT')
  const styleEls = directChildren.filter(el => el.tagName === 'STYLE')

  const normalScriptEl = scriptEls.find(el => !el.hasAttribute('setup')) || null
  const setupScriptEl = scriptEls.find(el => el.hasAttribute('setup')) || null
  const firstStyleEl = styleEls[0] || null

  const toScriptObj = (el: Element | null): ParseScriptObj => ({
    lang: el ? el.getAttribute('lang') || 'js' : 'js',
    setup: el ? el.hasAttribute('setup') : false,
    src: el ? el.getAttribute('src') || '' : '',
    code: el ? el.textContent || '' : '',
    content: el ? el.outerHTML.replace('setup=""', 'setup') : '',
    attrs: elAttrs(el)
  })

  const toStyleObj = (el: Element): ParseStyleObj => ({
    lang: el.getAttribute('lang') || 'css',
    scoped: el.hasAttribute('scoped'),
    code: el.textContent || '',
    content: el.outerHTML,
    attrs: elAttrs(el)
  })

  // 3) 自定义块（<docs>、<i18n> 等）
  const BUILTIN = new Set(['TEMPLATE', 'SCRIPT', 'STYLE'])
  const customBlocks = directChildren
    .filter(el => !BUILTIN.has(el.tagName))
    .map(el => ({
      tag: el.tagName.toLowerCase(),
      attrs: elAttrs(el),
      code: el.textContent || '',
      content: el.outerHTML
    }))

  return {
    template: extractRawTemplate(raw),
    script: toScriptObj(normalScriptEl),
    style: {
      code: firstStyleEl ? firstStyleEl.textContent || '' : '',
      content: firstStyleEl ? firstStyleEl.outerHTML : ''
    },
    styles: styleEls.map(toStyleObj),

    scriptSetup: setupScriptEl ? toScriptObj(setupScriptEl) : null,
    customBlocks,
    raw
  }
}

interface ScriptUrlResult {
  scriptCode: string
  scriptUrls: string[]
  unresolved: string[]
}

function getScriptUrl (srcCode: string): ScriptUrlResult {
  const importMap: Record<string, string> = {
    axios: 'https://cdn.jsdelivr.net/npm/axios@1.20.0/dist/axios.min.js'
  }

  const scriptUrls: string[] = []
  const unresolved: string[] = []

  const resolve = (pkg: string): string | null => {
    const url = importMap[pkg] || importMap[pkg.split('/')[0]]
    if (url) {
      if (!scriptUrls.includes(url)) {
        scriptUrls.push(`<script src="${url}"></script>`)
      }
      return url
    }
    if (!unresolved.includes(pkg)) {
      unresolved.push(pkg)
    }
    return null
  }

  let scriptCode = srcCode.replace(
    /^[ \t]*import\s+[\s\S]*?from\s+['"]([^'"]+)['"][ \t]*;?[ \t]*$/gm,
    (stmt, pkg) => resolve(pkg) ? '' : stmt
  )

  scriptCode = scriptCode.replace(
    /^[ \t]*import\s+['"]([^'"]+)['"][ \t]*;?[ \t]*$/gm,
    (stmt, pkg) => resolve(pkg) ? '' : stmt
  )

  if (unresolved.length) {
    console.warn('[getScriptUrl] 未映射的 import：', unresolved)
  }

  return { scriptCode, scriptUrls, unresolved }
}

function getTemplate (scrTemplate: string) {
  return scrTemplate.replace(/^/gm, '  ')
}

function getScript (srcCode: string) {
  const code = srcCode
    .replace('import XEUtils from \'xe-utils\'\n', '')
    .replace('export default {', 'var App = {')

  return (code || 'var App = {}').replace(/^/gm, '      ')
}

function getStyle (styles: ParseStyleObj[]) {
  let styleCode = ''
  styles.forEach(style => {
    if (['scss', 'sass'].includes(style.lang)) {
      styleCode += `<style type="text/css">\n${(window as any).compileScss(style.code).replace(/^/gm, '  ')}\n</style>`
    } else {
      styleCode += `<style type="text/css">${style.code.replace(/^/gm, '  ')}</style>`
    }
  })
  return styleCode
}

function transformImport (code: string) {
  const importMaps: Record<string, string> = {
    'xe-utils': 'XEUtils',
    vue: 'Vue',
    'vxe-pc-ui': 'VxeUIBase',
    'vxe-table': 'VxeUITable',
    'vxe-gantt': 'VxeUIGantt',
    'vxe-design': 'VxeUIDesign'
  }
  return code.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g,
    (full, specifiers: string, pkg: string) => {
      const globalName = importMaps[pkg]
      if (!globalName) return full
      const normalized = specifiers
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .map(s => {
          const m = s.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/)
          return m ? `${m[1]}: ${m[2]}` : s
        })
        .join(', ')
      return `const { ${normalized} } = ${globalName}`
    }
  )
}

export function getCdnHtmlTemplate (tmpl: string, code: string) {
  const fileRest = parseVueWithDOMParser(code)
  const { template, script, styles } = fileRest
  const { scriptCode, scriptUrls } = getScriptUrl(script.code)
  return XEUtils.toFormatString(tmpl, {
    scriptUrl: scriptUrls.join('\n'),
    styleLink: '',
    templateCode: getTemplate(template.code),
    scriptCode: getScript(transformImport(scriptCode)),
    styleCode: getStyle(styles)
  })
}
