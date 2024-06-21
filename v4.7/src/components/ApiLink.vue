<template>
  <vxe-link :router-link="{name: 'DocsApi', params: { name }, query: { q: q || prop }}" :content="q || prop" />
</template>

<script lang="ts" setup>
defineProps({
  name: String,
  q: String,
  prop: String
})
</script>
