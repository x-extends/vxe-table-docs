<template>
  <div class="code-light">
    <div class="example-tip">
      <p class="tip">
        <slot name="tip"></slot>
      </p>
    </div>

    <div v-if="$slots.use" class="example-use">
      <slot name="use"></slot>
    </div>

    <div class="example-demo">
      <DemoCode />
    </div>

    <div v-if="$slots.describe" class="example-describe">
      <slot name="describe"></slot>
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-tooltip :content="$t('app.body.button.fixDocTip')">
          <vxe-button class="example-btn" type="text" icon="vxe-icon-warning-triangle-fill" @click="openDocs">{{ $t('app.body.button.fixDocs') }}</vxe-button>
        </vxe-tooltip>
        <vxe-button class="example-btn" type="text" icon="vxe-icon-copy" @click="copyCode" :disabled="!showJsCode && !showTsCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button class="example-btn" type="text" :status="showJsCode ? 'primary' : ''" :loading="jsLoading" :icon="showJsCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleJsVisible">{{ $t(showJsCode ? 'app.body.button.hideCode' : 'app.body.button.showJsCode') }}</vxe-button>
        <vxe-button class="example-btn" type="text" :status="showTsCode ? 'primary' : ''" :loading="tsLoading" :icon="showTsCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleTsVisible">{{ $t(showTsCode ? 'app.body.button.hideCode' : 'app.body.button.showTsCode') }}</vxe-button>
      </div>
      <div class="example-code-warpper" v-show="showJsCode">
        <div v-for="(item, index) in importJsCodes" :key="index" class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${item.name}`" title="点击查看" target="_blank">{{ item.name }}</a>
          </div>
          <CodeRender language="javascript" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank">{{ getFileName(`${path}.vue`) }}</a>
          </div>
          <CodeRender language="html" :code="jsCodeText"></CodeRender>
        </div>
      </div>
      <div class="example-code-warpper" v-show="showTsCode">
        <div v-for="(item, index) in importTsCodes" :key="index" class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${item.name}`" title="点击查看" target="_blank">{{ item.name }}</a>
          </div>
          <CodeRender language="javascript" :code="item.text"></CodeRender>
        </div>
        <div class="example-code-item">
          <div class="example-code-file">
            <a class="link" :href="`${compDir}/${getFileName(`${path}.vue`)}`" title="点击查看" target="_blank">{{ getFileName(`${path}.vue`) }}</a>
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
import { VXETable } from 'vxe-table'
import XEClipboard from 'xe-clipboard'

const props = defineProps({
  path: String,
  extraImports: {
    type: Array as PropType<string[]>,
    defalt: () => []
  }
})

const jsCodeText = ref('')
const tsCodeText = ref('')

const gitBaseUrl = 'https://github.com/x-extends/vxe-table-docs/tree/main/v4'

const showJsCode = ref(false)
const showTsCode = ref(false)
const jsLoading = ref(false)
const tsLoading = ref(false)

const importTsCodes = ref<{
  path: string
  name: string
  text: string
}[]>([])
const importJsCodes = ref<{
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
          return fetch(`${process.env.BASE_URL}example/js/${impPath}.js?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
            if (response.status >= 200 && response.status < 400) {
              return response.text().then(text => {
                return {
                  path: `${impPath}.js`,
                  name: getFileName(`${impPath}.js`),
                  text
                }
              })
            }
            return {
              path: `${impPath}.js`,
              name: getFileName(`${impPath}.js`),
              text: ''
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
          return fetch(`${process.env.BASE_URL}example/ts/${impPath}.ts?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
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
    if (XEClipboard.copy(codeContent)) {
      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
    }
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
.example-use {
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
  .example-btn {
    min-width: 100px;
  }
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
