<template>
  <code ref="codeRef" :class="['hljs', language]">
    <slot></slot>
  </code>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    language: {
      type: String,
      default: 'javascript'
    },
    content: String
  },
  methods: {
    handleHigh  () {
      this.$nextTick(() => {
        const codeEl = this.$refs.codeRef as HTMLElement
        if (codeEl) {
          codeEl.innerHTML = window.hljs.highlight(decodeURIComponent(this.content || ''), { language: this.language }).value
        }
      })
    }
  },
  watch: {
    content () {
      this.handleHigh()
    }
  },
  created () {
    this.$nextTick(() => {
      if (this.content) {
        this.handleHigh()
      } else {
        const block = this.$refs.codeRef as HTMLElement
        window.hljs.highlightBlock(block)
      }
    })
  }
})
</script>
