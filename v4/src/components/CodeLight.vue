<template>
  <div class="code-light">
    <div class="example-tip">
      <slot name="tip"></slot>
    </div>

    <div class="example-demo">
      <DemoCode />
    </div>

    <div class="example-code">
      <div class="example-btns">
        <vxe-button type="text" icon="vxe-icon-copy" @click="copyCode">{{ $t('app.body.button.copyCode') }}</vxe-button>
        <vxe-button type="text" :loading="loading" :icon="showCode ? 'vxe-icon-arrow-up' : 'vxe-icon-arrow-down'" @click="toggleVisible">{{ $t(showCode ? 'app.body.button.hideCode' : 'app.body.button.showCode') }}</vxe-button>
      </div>
      <pre class="example-code-warpper" v-show="showCode">
        <code ref="codeRef">{{ codeText }}</code>
      </pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, defineProps, watch, defineAsyncComponent } from 'vue'
import { codeMaps } from '@/common/cache'
import { VXETable } from 'vxe-table'
import hljs from 'highlight.js'
import XEClipboard from 'xe-clipboard'

const props = defineProps({
  path: String,
  content: String
})

const codeRef = ref<HTMLElement>()
const codeText = ref(props.content || '')

const showCode = ref(false)
const loading = ref(false)

const DemoCode = defineAsyncComponent(() => import(`@/views/${props.path}`))

const buildCode = () => {
  nextTick(() => {
    const blockEl = codeRef.value
    if (blockEl) {
      hljs.highlightBlock(blockEl)
    }
  })
}

const loadCode = () => {
  const compPath = props.path
  if (compPath) {
    if (codeMaps[compPath]) {
      codeText.value = codeMaps[compPath]
      buildCode()
      loading.value = false
    } else {
      loading.value = true
      fetch(`${process.env.BASE_URL}example/${compPath}.vue?v=${process.env.VUE_APP_DATE_NOW}`).then(response => response.text()).then(text => {
        codeText.value = text || ''
        codeMaps[compPath] = codeText.value
        buildCode()
        loading.value = false
      }).catch(() => {
        loading.value = false
      })
    }
  } else if (codeText.value) {
    buildCode()
    loading.value = false
  }
}

const toggleVisible = () => {
  showCode.value = !showCode.value
  if (showCode.value) {
    loadCode()
  }
}

const copyCode = () => {
  if (XEClipboard.copy(codeText.value)) {
    VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })
  }
}

watch(() => props.content, (val) => {
  codeText.value = val || ''
  buildCode()
})
</script>

<style lang="scss" scoped>
.code-light {
  margin: 60px 0;
  border: 1px solid #e8eaec;
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
