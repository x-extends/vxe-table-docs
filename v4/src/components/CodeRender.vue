<template>
  <pre>
    <code ref="codeRef" :class="['hljs', language]"></code>
  </pre>
</template>

<script lang="ts" setup>
import { ref, watch, PropType, nextTick } from 'vue'

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
      codeEl.innerHTML = window.hljs.highlight(props.code || '', { language: props.language }).value
    }
  })
}

watch(() => props.code, () => {
  handleHigh()
})

handleHigh()
</script>
