<template>
  <pre>
    <code class="hljs " :class="language" ref="codeRef"></code>
  </pre>
</template>

<script>
import hljs from 'highlight.js'

export default {
  name: 'CodeRender',
  props: {
    language: String,
    code: String
  },
  watch: {
    code () {
      this.handleHigh()
    }
  },
  created () {
    this.handleHigh()
  },
  methods: {
    handleHigh () {
      this.$nextTick(() => {
        const codeEl = this.$refs.codeRef
        if (codeEl) {
          codeEl.innerHTML = hljs.highlight(this.code || '', { language: this.language }).value
        }
      })
    }
  }
}
</script>
