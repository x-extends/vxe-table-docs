<template>
  <pre class="code-render">
    <code ref="codeRef" :class="['hljs', language]"></code>
    <div class="oper-btns">
      <vxe-button v-if="showOpenButton && code && code.length > 5" class="open-btn" icon="vxe-icon-send-fill" :title="$t('app.docs.button.openCode')" @click.stop="openCode">{{ $t('app.docs.button.openCode') }}</vxe-button>
      <vxe-button v-if="showCopyButton && code && code.length > 5" class="copy-btn" icon="vxe-icon-copy" :title="$t('app.docs.button.copyCode')" circle @click.stop="copyCode"></vxe-button>
    </div>
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
    code: {
      type: String,
      default: ''
    },
    showCopyButton: Boolean,
    showOpenButton: Boolean
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
    },
    openCode () {
      if (this.code) {
        const blob = new Blob([this.code], { type: 'text/html' })
        const url = URL.createObjectURL(blob)
        window.open(url, '_blank')
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
}
.oper-btns {
  display: inline-flex;
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
</style>
