<template>
  <code ref="codeRef" :class="['hljs', language]">
    <slot></slot>
  </code>
</template>

<script lang="ts" setup>
import { nextTick, watch, ref, Ref } from 'vue'

const props = defineProps({
  language: {
    type: String,
    default: 'javascript'
  },
  content: String
})

const codeRef = ref() as Ref<HTMLElement>

const handleHigh = () => {
  nextTick(() => {
    const codeEl = codeRef.value
    if (codeEl) {
      codeEl.innerHTML = window.hljs.highlight(decodeURIComponent(props.content || ''), { language: props.language }).value
    }
  })
}

watch(() => props.content, () => {
  handleHigh()
})

nextTick(() => {
  if (props.content) {
    handleHigh()
  } else {
    const block = codeRef.value
    window.hljs.highlightBlock(block)
  }
})
</script>
