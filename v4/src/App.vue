<template>
  <VxeLayoutContainer>
    <RouterView />
    <vxe-loading :model-value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const pageLoading = computed(() => appStore.pageLoading)
</script>
