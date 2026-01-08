<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :model-value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="tsx" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'
import axios from 'axios'

const appStore = useAppStore()
const resBaseUrl = computed(() => appStore.resBaseUrl)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
const pageLoading = computed(() => appStore.pageLoading)
const componentsSize = computed(() => appStore.componentsSize)

axios.get(`${resBaseUrl.value}/component-api/system-config.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  appStore.setSystemConfig(res.data)
})
axios.get(`${resBaseUrl.value}/component-api/vxe-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  appStore.setVersionConfig(res.data)
})
</script>
