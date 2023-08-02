<template>
  <div class="code-light">
    <div class="example-tip">
      <p class="tip">
        <slot name="tip"></slot>
      </p>
    </div>

    <div class="example-demo">
      <DemoCode />
    </div>

    <div class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.body.button.fixDocTip')">
          <vxe-button type="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.body.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button type="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showTsCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button type="text" :loading="loading" :icon="showTsCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleVisible">{{ $t(showTsCode ? 'app.body.button.hideCode' : 'app.body.button.showTsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showTsCode">
        <div v-for="(item, index) in importCodes" :key="index" class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${item.name}`" title="点击查看" target="_blank">{{ item.name }}</a>
          </div>
          <pre>
            <code class="javascript" ref="importRef">{{ item.text }}</code>
          </pre>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank">{{ getFileName(`${path}.vue`) }}</a>
          </div>
          <pre>
            <code class="html" ref="codeRef">{{ tsCodeText }}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, computed, defineAsyncComponent, PropType } from 'vue'
import { codeMaps } from '@/common/cache'
import { VXETable } from 'vxe-table'
import hljs from 'highlight.js'
import XEClipboard from 'xe-clipboard'

const props = defineProps({
  path: String,
  extraImports: {
    type: Array as PropType<string[]>,
    defalt: () => []
  }
})

const codeRef = ref<HTMLElement>()
const importRef = ref<HTMLElement>()
const tsCodeText = ref('')

const gitBaseUrl = 'https://github.com/x-extends/vxe-table-docs/tree/main/v4'

const showTsCode = ref(false)
const loading = ref(false)

const importCodes = ref<{
  path: string
  name: string
  text: string
}[]>([])

const DemoCode = defineAsyncComponent(() => import(`@/views/${props.path}`))

const compDir = computed(() => {
  const paths = props.path?.split('/') || []
  return `${gitBaseUrl}/src/views/${paths.slice(0, paths.length - 1).join('/')}`
})

const getFileName = (path: string) => {
  return path.split('/').slice(-1)[0]
}

const buildCode = () => {
  nextTick(() => {
    const blockEl = codeRef.value
    if (blockEl) {
      hljs.highlightElement(blockEl)
    }
    const impsRefs: any = importRef.value
    if (impsRefs) {
      impsRefs.forEach((el) => {
        hljs.highlightElement(el)
      })
    }
  })
}

const loadCode = () => {
  const compPath = props.path
  if (compPath) {
    if (codeMaps[compPath]) {
      tsCodeText.value = codeMaps[compPath]
      buildCode()
      loading.value = false
    } else {
      loading.value = true
      Promise.all([
        fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
          if (response.status >= 200 && response.status < 400) {
            return response.text()
          }
          return '暂无示例'
        }),
        ...(props.extraImports?.map(impPath => {
          return fetch(`${process.env.BASE_URL}example/${impPath}.ts?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
            if (response.status >= 200 && response.status < 400) {
              return response.text().then(text => {
                return {
                  path: `${impPath}.ts`,
                  name: getFileName(`${impPath}.ts`),
                  text
                }
              })
            }
            return {
              path: `${impPath}.ts`,
              name: getFileName(`${impPath}.ts`),
              text: ''
            }
          })
        }) || [])
      ]).then(([text1, ...impTexts]) => {
        tsCodeText.value = text1 || ''
        codeMaps[compPath] = tsCodeText.value
        importCodes.value = impTexts || '暂无'
        buildCode()
        loading.value = false
      }).catch(() => {
        loading.value = false
      })
    }
  } else if (tsCodeText.value) {
    buildCode()
    loading.value = false
  }
  return Promise.resolve()
}

const toggleVisible = () => {
  showTsCode.value = !showTsCode.value
  if (showTsCode.value) {
    loadCode()
  }
}

const copyCode = () => {
  let codeContent = ''
  if (showTsCode.value) {
    codeContent = tsCodeText.value
  }
  if (codeContent) {
    if (XEClipboard.copy(codeContent)) {
      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
    }
  } else {
    loadCode().then(() => {
      if (XEClipboard.copy(codeContent)) {
        VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
      }
    })
  }
}

const openDocs = () => {
  open(`${gitBaseUrl}/src/views/${props.path}.vue`)
}
</script>

<style lang="scss" scoped>
.code-light {
  margin: 60px 0;
  border: 1px solid #e8eaec;
  border-radius: 4px;
  ::v-deep(.tip) {
    margin: 0;
  }
}
.example-tip {
  padding: 30px 30px 0 30px;
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
  border-top: 1px dashed #f0f0f0;
}
.example-code-warpper {
  padding: 0 30px;
  margin: 0;
  pre {
    margin: 0;
    padding: 0;
  }
}
.example-code-item {
  display: block;
  position: relative;
}
.example-code-file {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  .link {
    color: #666666;
  }
}
</style>
