<template>
  <pre class="code-render">
    <code ref="codeRef" :class="['hljs', language]"></code>
    <vxe-button v-if="showCopyButton" class="copy-btn" status="primary" icon="vxe-icon-copy" @click.stop="copyCode" :title="$t('app.docs.button.copyCode')" circle></vxe-button>
  </pre>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  props: {
    language: {
      type: String as PropType<'' | 'html' | 'javascript'>,
      default: ''
    },
    code: String,
    showCopyButton: Boolean
  },
  methods: {
    handleHigh  () {
      this.$nextTick(() => {
        const codeEl = this.$refs.codeRef as HTMLElement
        if (codeEl) {
          codeEl.innerHTML = window.hljs.highlight(this.code || '', { language: this.language }).value
        }
      })
    },
    copyCode () {
      if (this.code) {
        if (VxeUI.clipboard.copy(this.code)) {
          VxeUI.modal.message({ content: '已复制到剪贴板！', status: 'success' })
        }
      }
    }
  },
  watch: {
    code () {
      this.handleHigh()
    }
  },
  created () {
    this.handleHigh()
  }
})
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
