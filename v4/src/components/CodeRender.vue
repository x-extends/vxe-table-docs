<template>
  <pre class="code-render">
    <code ref="codeRef" :class="['hljs', language]"></code>
    <div class="oper-btns">
      <vxe-button v-if="showOpenButton" class="open-btn" icon="vxe-icon-send-fill" :title="$t('app.docs.button.openCode')" @click.stop="openCode">{{ $t('app.docs.button.openCode') }}</vxe-button>
      <vxe-button v-if="showCopyButton" class="copy-btn" icon="vxe-icon-copy" :title="$t('app.docs.button.copyCode')" circle @click.stop="copyCode"></vxe-button>
    </div>
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
  code: {
    type: String,
    default: ''
  },
  showCopyButton: Boolean,
  showOpenButton: Boolean
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

const openCode = () => {
  if (props.code) {
    const blob = new Blob([props.code], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
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
}
.oper-btns {
  display: inline-flex;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
</style>
