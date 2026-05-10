<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :model-value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const resBaseUrl = computed(() => appStore.resBaseUrl)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
const pageLoading = computed(() => appStore.pageLoading)
const componentsSize = computed(() => appStore.componentsSize)

fetch(`${resBaseUrl.value}/component-api/system-config.json?v=${import.meta.env.VITE_APP_DATE_NOW}`)
  .then(res => res.json())
  .then(data => {
    appStore.setSystemConfig(data)
  })

fetch(`${resBaseUrl.value}/component-api/vxe-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`)
  .then(res => res.json())
  .then(data => {
    appStore.setVersionConfig(data)
  })
</script>
