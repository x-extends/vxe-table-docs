<template>
  <code ref="codeElem">
    <slot>{{ content }}</slot>
  </code>
</template>

<script lang="ts" setup>
import { nextTick, ref, Ref } from 'vue'
import hljs from 'highlight.js'

defineProps({
  content: String
})

const codeElem = ref() as Ref<HTMLElement>

nextTick(() => {
  const block = codeElem.value
  hljs.highlightBlock(block)
})
</script>
