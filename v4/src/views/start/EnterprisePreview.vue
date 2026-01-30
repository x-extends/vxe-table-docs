<template>
  <div>
    <CodeLight :previewPath="previewUrl">
      <template #describe>
        <div style="text-align: center;">
          <vxe-button status="error" title="点击在线体验企业版功能" @click="openEvent">点击在线体验</vxe-button>
        </div>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'

const route = useRoute()

const appStore = useAppStore()
const resBaseUrl = computed(() => appStore.resBaseUrl)

const previewCode = computed(() => {
  return route.params.previewCode || ''
})

const previewUrl = computed(() => {
  if (previewCode.value) {
    return `${resBaseUrl.value}/resource/pluginImg/${previewCode.value}.gif?v=${import.meta.env.VITE_APP_DATE_NOW}`
  }
  return ''
})

const openEvent = () => {
  open(`${import.meta.env.VITE_APP_SITE_PLUGIN_URL}/pluginDocs/table${import.meta.env.VITE_APP_VXE_VERSION}/#${decodeURIComponent(`${route.query.previewPath || ''}`)}`)
}
</script>

<style lang="scss" scoped>
::v-deep(.example-preview-body) {
  .vxe-image {
    max-height: 800px;
  }
}
</style>
