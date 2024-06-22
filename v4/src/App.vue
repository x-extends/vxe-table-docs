<template>
  <VxeLayoutContainer>
    <PageLayout />
    <vxe-loading :model-value="appStore.pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import PageLayout from '@/components/PageLayout.vue'

const appStore = useAppStore()
</script>
