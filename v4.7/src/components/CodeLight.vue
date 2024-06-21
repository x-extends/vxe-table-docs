<template>
  <div class="code-light">
    <div class="example-tip">
      <div class="tip">
        <slot name="tip"></slot>
      </div>
    </div>

    <div v-if="$slots.use" class="example-use">
      <slot name="use"></slot>
    </div>

    <div v-if="$slots.preview" class="example-preview">
      <h2 class="example-preview-header" :class="{active: showPreview}" @click="showPreview = !showPreview">
        <vxe-icon class="example-preview-icon" name="arrow-right"></vxe-icon>
        <span class="example-preview-title">操作&预览</span>
      </h2>
      <div v-show="showPreview" class="example-preview-body">
        <slot name="preview"></slot>
      </div>
    </div>

    <div v-if="path" class="example-demo">
      <DemoCode />
    </div>

    <div v-if="$slots.describe" class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div v-if="path" class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.docs.button.fixDocTip')">
          <vxe-button class="example-btn" mode="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.docs.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button class="example-btn" mode="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showJsCode && !showTsCode">{{ $t('app.docs.button.copyCode') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showJsCode ? 'primary' : ''" :loading="jsLoading" :icon="showJsCode ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleJsVisible">{{ $t(showJsCode ? 'app.docs.button.hideCode' : 'app.docs.button.showJsCode') }}</vxe-button>
        <vxe-button class="example-btn" mode="text" :status="showTsCode ? 'primary' : ''" :loading="tsLoading" :icon="showTsCode ? 'vxe-icon-eye-fill' : 'vxe-icon-eye-fill-close'" @click="toggleTsVisible">{{ $t(showTsCode ? 'app.docs.button.hideCode' : 'app.docs.button.showTsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showJsCode">
        <div v-for="(item, index) in importJsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
          </div>
          <CodeRender language="html" :code="jsCodeText"></CodeRender>
        </div>
      </div>
      <div class="example-code-warpper" v-show="showTsCode">
        <div v-for="(item, index) in importTsCodes" :key="index" class="example-code-item">
          <div class="example-code-file" :class="{'is-expand': item.isExpand}" @click="toggleItemExpand(item)">
            <vxe-icon name="arrow-right" class="example-code-file-icon"></vxe-icon>
            <span class="example-code-file-name">{{ item.name }}</span>
          </div>
          <CodeRender v-if="item.isExpand" :language="item.lang" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <vxe-link icon="vxe-icon-link" :href="`${gitDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank"></vxe-link>
            <span class="example-code-file-name">{{ getFileName(`${path}.vue`) }}</span>
          </div>
          <CodeRender language="html" :code="tsCodeText"></CodeRender>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineAsyncComponent, PropType } from 'vue'
import { codeJsMaps, codeTsMaps } from '@/common/cache'
import { VxeUI } from 'vxe-pc-ui'
import { useAppStore } from '@/store/app'

interface ImportItemVO {
  path: string
  name: string
  lang: string
  text: string
  isExpand: boolean
}

const appStore = useAppStore()

const props = defineProps({
  path: String,
  extraImports: {
    type: Array as PropType<string[]>,
    defalt: () => []
  }
})

const showUse = ref(false)
const showPreview = ref(true)

const jsCodeText = ref('')
const tsCodeText = ref('')

const showJsCode = ref(false)
const showTsCode = ref(false)
const jsLoading = ref(false)
const tsLoading = ref(false)

const importTsCodes = ref<ImportItemVO[]>([])
const importJsCodes = ref<ImportItemVO[]>([])

const DemoCode = props.path ? defineAsyncComponent(() => import(`@/views/${props.path}`)) : null

const gitDir = computed(() => {
  return `${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${compDir.value}`
})

const compDir = computed(() => {
  const paths = props.path?.split('/') || []
  return paths.slice(0, paths.length - 1).join('/')
})

const getFileName = (path: string) => {
  return path.split('/').slice(-1)[0]
}

const transformFilePath = (path: string) => {
  return path.replace(/^\.\//, `${compDir.value}/`)
}

const parseFilePath = (path: string) => {
  const [fullPath, filePath, fileType] = path.match(/(.*)\.(vue|js|jsx|ts|tsx)$/) || [path, '.vue', 'vue']
  return {
    filePath: transformFilePath(filePath),
    codeLang: ['js', 'ts', 'jsx', 'tsx'].includes(fileType) ? 'javascript' : 'html',
    fileType: fileType
  }
}

const parseJsFilePath = (path: string) => {
  const rest = parseFilePath(path)
  rest.fileType = rest.fileType.replace('ts', 'js')
  return rest
}

const parseTsFilePath = (path: string) => {
  const rest = parseFilePath(path)
  rest.fileType = rest.fileType.replace('js', 'ts')
  return rest
}

const loadJsCode = () => {
  const compPath = props.path
  if (compPath) {
    if (codeJsMaps[compPath]) {
      jsCodeText.value = codeJsMaps[compPath]
      jsLoading.value = false
    } else {
      jsLoading.value = true
      Promise.all([
        fetch(`${process.env.BASE_URL}example/js/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
          if (response.status >= 200 && response.status < 400) {
            return response.text()
          }
          return '暂无示例'
        }),
        ...(props.extraImports?.map(impPath => {
          const { filePath, fileType, codeLang } = parseJsFilePath(impPath)
          return fetch(`${process.env.BASE_URL}example/js/${filePath}.${fileType}?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
            if (response.status >= 200 && response.status < 400) {
              return response.text().then(text => {
                return {
                  path: `${filePath}.${fileType}`,
                  name: getFileName(`${filePath}.${fileType}`),
                  lang: codeLang,
                  text,
                  isExpand: false
                }
              })
            }
            return {
              path: `${filePath}.${fileType}`,
              name: getFileName(`${filePath}.${fileType}`),
              lang: codeLang,
              text: '',
              isExpand: false
            }
          })
        }) || [])
      ]).then(([text1, ...impTexts]) => {
        jsCodeText.value = text1 || ''
        codeJsMaps[compPath] = jsCodeText.value
        importJsCodes.value = impTexts || '暂无'
        jsLoading.value = false
      }).catch(() => {
        jsLoading.value = false
      })
    }
  } else if (jsCodeText.value) {
    jsLoading.value = false
  }
  return Promise.resolve()
}

const loadTsCode = () => {
  const compPath = props.path
  if (compPath) {
    if (codeTsMaps[compPath]) {
      tsCodeText.value = codeTsMaps[compPath]
      tsLoading.value = false
    } else {
      tsLoading.value = true
      Promise.all([
        fetch(`${process.env.BASE_URL}example/ts/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
          if (response.status >= 200 && response.status < 400) {
            return response.text()
          }
          return '暂无示例'
        }),
        ...(props.extraImports?.map(impPath => {
          const { filePath, fileType, codeLang } = parseTsFilePath(impPath)
          return fetch(`${process.env.BASE_URL}example/ts/${filePath}.${fileType}?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
            if (response.status >= 200 && response.status < 400) {
              return response.text().then(text => {
                return {
                  path: `${filePath}.${fileType}`,
                  name: getFileName(`${filePath}.${fileType}`),
                  lang: codeLang,
                  text,
                  isExpand: false
                }
              })
            }
            return {
              path: `${filePath}.${fileType}`,
              name: getFileName(`${filePath}.${fileType}`),
              lang: codeLang,
              text: '',
              isExpand: false
            }
          })
        }) || [])
      ]).then(([text1, ...impTexts]) => {
        tsCodeText.value = text1 || ''
        codeTsMaps[compPath] = tsCodeText.value
        importTsCodes.value = impTexts || '暂无'
        tsLoading.value = false
      }).catch(() => {
        tsLoading.value = false
      })
    }
  } else if (tsCodeText.value) {
    tsLoading.value = false
  }
  return Promise.resolve()
}

const toggleJsVisible = () => {
  showTsCode.value = false
  showJsCode.value = !showJsCode.value
  if (showJsCode.value) {
    loadJsCode()
  }
}

const toggleTsVisible = () => {
  showJsCode.value = false
  showTsCode.value = !showTsCode.value
  if (showTsCode.value) {
    loadTsCode()
  }
}

const copyCode = () => {
  let codeContent = ''
  if (showJsCode.value) {
    codeContent = jsCodeText.value
  } else if (showTsCode.value) {
    codeContent = tsCodeText.value
  }
  if (codeContent) {
    if (VxeUI.clipboard.copy(codeContent)) {
      VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
    }
  }
}

const toggleItemExpand = (item: ImportItemVO) => {
  item.isExpand = !item.isExpand
}

const openDocs = () => {
  open(`${process.env.VUE_APP_DOCS_GITHUB_URL}/src/views/${props.path}.vue`)
}
</script>

<style lang="scss">
.code-light {
  margin: 30px 0;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  border-radius: 4px;
  ::v-deep(.tip) {
    margin: 0;
  }
}
.example-tip {
  padding: 8px 24px 8px 24px;
}
.example-use {
  padding: 0 24px 0 24px;
}
.example-demo {
  margin: 30px;
}

.example-describe {
  margin: 30px;
}
.example-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-top: 1px dashed var(--vxe-ui-docs-layout-border-color);
  .example-btn {
    min-width: 100px;
  }
}
.example-code-warpper {
  padding: 0 30px;
  margin: 0;
  pre {
    display: flex;
    margin: 0;
    padding: 0 0 30px 0;
    code {
      flex-grow: 1;
    }
  }
}
.example-code-item {
  display: block;
  position: relative;
}
.example-code-file {
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  margin: 6px 0;
  &.is-expand {
    .example-code-file-icon {
      transform: rotate(90deg);
    }
  }
  .example-code-file-icon {
    display: inline-block;
    transition: transform 0.2s ease-in-out;
    margin-right: 8px;
  }
}

.example-use-header {
  line-height: 2em;
  font-size: 1.4em;
  cursor: pointer;
  .example-use-icon,
  .example-use-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .example-use-icon {
    transition: transform 0.2s ease-in-out;
  }
  .example-use-title {
    padding-left: 10px;
  }
  &.active {
    .example-use-icon {
      transform: rotate(90deg);
    }
  }
}
.example-use-body {
  padding: 20px 64px 0 64px;
  & > img {
    max-width: 100%;
    max-height: 300px;
  }
}

.example-preview-header {
  line-height: 2em;
  font-size: 1.4em;
  cursor: pointer;
  .example-preview-icon,
  .example-preview-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .example-preview-icon {
    transition: transform 0.2s ease-in-out;
  }
  .example-preview-title {
    padding-left: 10px;
  }
  &.active {
    .example-preview-icon {
      transform: rotate(90deg);
    }
  }
}
.example-preview-body {
  padding: 20px 64px 0 64px;
  text-align: center;
  & > img {
    max-width: 100%;
    max-height: 300px;
  }
}
</style>
