<template>
  <div class="page-footer">
    <VxeLink href="http://beian.miit.gov.cn/" target="_blank" content="粤ICP备2022010374号-2">
      <template #icon>
        <img src="/badge.png" style="height: 14px;padding-bottom: 0.2em;">
      </template>
    </VxeLink>
    <span style="margin-left: 20px;">
      <span>©</span>
      <span><VxeLink status="primary" :href="siteBaseUrl" target="_blank">Vxe UI</VxeLink> 2018-{{serveTY}}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const serveTY = computed(() => appStore.serveTY)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
</script>

<style lang="scss">
.page-footer {
  width: calc(100% - 300px);
  text-align: center;
}
</style>
