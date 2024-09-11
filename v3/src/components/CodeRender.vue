<template>
  <pre>
    <code class="hljs " :class="language" ref="codeRef"></code>
  </pre>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import hljs from 'highlight.js'

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
          codeEl.innerHTML = hljs.highlight(this.code || '', { language: this.language }).value
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
