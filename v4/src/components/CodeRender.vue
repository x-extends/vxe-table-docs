<template>
  <pre class="code-render">
    <code ref="codeRef" :class="['hljs', language]"></code>
    <vxe-button v-if="showCopyButton" class="copy-btn" status="primary" icon="vxe-icon-copy" @click.stop="copyCode" :title="$t('app.docs.button.copyCode')" circle></vxe-button>
  </pre>
</template>

<script lang="ts" setup>
import { ref, watch, PropType, nextTick } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

const props = defineProps({
  language: {
    type: String as PropType<'' | 'html' | 'javascript'>,
    default: ''
  },
  code: String,
  showCopyButton: Boolean
})

const codeRef = ref<HTMLElement>()

const handleHigh = () => {
  nextTick(() => {
    const codeEl = codeRef.value
    if (codeEl) {
      codeEl.innerHTML = window.hljs.highlight(props.code || '', { language: props.language }).value
    }
  })
}

const copyCode = () => {
  if (props.code) {
    if (VxeUI.clipboard.copy(props.code)) {
      VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
    }
  }
}

watch(() => props.code, () => {
  handleHigh()
})

handleHigh()
</script>

<style lang="scss" scoped>
.code-render {
  position: relative;
  &:hover {
    .copy-btn {
      display: inline-block;
    }
  }
}
.copy-btn {
  display: none;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
</style>
