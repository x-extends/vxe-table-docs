<template>
  <pre>
    <code class="hljs " :class="language" ref="codeRef"></code>
  </pre>
</template>

<script lang="ts" setup>
import { ref, watch, PropType, nextTick } from 'vue'
import hljs from 'highlight.js'

const props = defineProps({
  language: {
    type: String as PropType<'' | 'html' | 'javascript'>,
    default: ''
  },
  code: String
})

const codeRef = ref<HTMLElement>()

const handleHigh = () => {
  nextTick(() => {
    const codeEl = codeRef.value
    if (codeEl) {
      codeEl.innerHTML = hljs.highlight(props.code || '', { language: props.language }).value
    }
  })
}

watch(() => props.code, () => {
  handleHigh()
})

handleHigh()
</script>

<style lang="scss" scoped>
.def-tmpl {
  display: none;
}
</style>
