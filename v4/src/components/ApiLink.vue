<template>
  <vxe-link v-if="redirect && !hasUIDoMain" :href="`https://vxeui.com/#/${name}/api?q=${q || prop || ''}`" :content="q || prop || `vxe-${name}`"></vxe-link>
  <vxe-link v-else :router-link="{name: 'DocsApi', params: { name }, query: { q: q || prop || '' }}" :content="q || prop || `vxe-${name}`" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

defineProps({
  name: String,
  q: String,
  prop: String,
  redirect: Boolean
})

const hasUIDoMain = computed(() => {
  return location.origin.indexOf('vxeui') > -1
})
</script>
