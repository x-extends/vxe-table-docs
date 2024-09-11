<template>
  <code ref="codeElem">
    <slot>{{ content }}</slot>
  </code>
</template>

<script lang="ts">
import Vue from 'vue'
import hljs from 'highlight.js'

export default Vue.extend({
  props: {
    content: String
  },
  created () {
    this.$nextTick(() => {
      const block = this.$refs.codeElem as HTMLElement
      hljs.highlightBlock(block)
    })
  }
})
</script>
