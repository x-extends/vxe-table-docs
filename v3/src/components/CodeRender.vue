<template>
  <pre>
    <code ref="codeRef" :class="['hljs', language]"></code>
  </pre>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
  props: {
    language: {
      type: String as PropType<'' | 'html' | 'javascript'>,
      default: ''
    },
    code: String
  },
  methods: {
    handleHigh  () {
      this.$nextTick(() => {
        const codeEl = this.$refs.codeRef as HTMLElement
        if (codeEl) {
          codeEl.innerHTML = window.hljs.highlight(this.code || '', { language: this.language }).value
        }
      })
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
