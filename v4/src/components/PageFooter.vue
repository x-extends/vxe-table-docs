<template>
  <div class="page-footer">
    <VxeLink href="http://beian.miit.gov.cn/" target="_blank" :content="aqCode">
      <template #icon>
        <img :src="`${resBaseUrl}/badge.png`" style="height: 14px;padding-bottom: 0.2em;">
      </template>
    </VxeLink>
    <span style="margin-left: 20px;">
      <span>©</span>
      <span><VxeLink status="primary" :href="siteBaseUrl" target="_blank">VXE</VxeLink> 2018-{{serveTY}}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const serveTY = computed(() => appStore.serveTY)
const resBaseUrl = computed(() => appStore.resBaseUrl)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const aqCode = computed(() => {
  if (location.origin && location.origin.indexOf('vxeui.com')) {
    return '粤ICP备2022010374号'
  }
  return '粤ICP备2022010374号'
})
</script>

<style lang="scss">
.page-footer {
  padding-top: 4em;
  text-align: center;
}
</style>
