<template>
  <code ref="codeRef" :class="['hljs', language]">
    <slot></slot>
  </code>
</template>

<script lang="ts">
import Vue from 'vue'
import hljs from 'highlight.js'

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
          codeEl.innerHTML = hljs.highlight(this.content || '', { language: this.language }).value
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
        hljs.highlightBlock(block)
      }
    })
  }
})
</script>
