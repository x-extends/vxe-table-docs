<template>
  <div>
    <div class="preview-btn">
      <vxe-button status="warning" icon="vxe-icon-question-circle" title="点击查看企业版" @click="openEvent">点击查看</vxe-button>
    </div>
    <div class="preview-img">
      <vxe-image :src="previewUrl"></vxe-image>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/store/app'

const route = useRoute()

const appStore = useAppStore()
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const previewUrl = computed(() => {
  return `${siteBaseUrl.value}/resource/docsImg/${route.params.previewCode}.gif`
})

const openEvent = () => {
  open(`https://vxetable.cn/pluginDocs/table${process.env.VUE_APP_VXE_VERSION}/#${decodeURIComponent(`${route.query.previewPath || ''}`)}`)
}
</script>

<style lang="scss" scoped>
.preview-btn {
  text-align: center;
  padding-bottom: 16px;
}
.preview-img {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
