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
      <pre class="example-code-warpper" v-show="showTsCode">
        <code class="html" ref="codeRef">{{ tsCodeText }}</code>
        <!-- <code class="javascript" ref="extraRef">{{ tsCodeText }}</code> -->
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, defineAsyncComponent } from 'vue'
import { codeMaps } from '@/common/cache'
import { VXETable } from 'vxe-table'
import hljs from 'highlight.js'
import XEClipboard from 'xe-clipboard'

const props = defineProps({
  path: String
})

const codeRef = ref<HTMLElement>()
// const extraRef = ref<HTMLElement>()
const tsCodeText = ref('')

const showTsCode = ref(false)
const loading = ref(false)

const DemoCode = defineAsyncComponent(() => import(`@/views/${props.path}`))

const buildCode = () => {
  nextTick(() => {
    const blockEl = codeRef.value
    if (blockEl) {
      hljs.highlightElement(blockEl)
    }
    // const jsRef = extraRef.value
    // if (jsRef) {
    //   hljs.highlightElement(jsRef)
    // }
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
      return fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => {
        if (response.status >= 200 && response.status < 400) {
          return response.text()
        }
        return '暂无示例'
      }).then(text => {
        tsCodeText.value = text || ''
        codeMaps[compPath] = tsCodeText.value
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
  open(`https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/views/${props.path}.vue`)
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
}
</style>
