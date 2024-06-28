<template>
  <VxeLayoutContainer>
    <PageLayout />

    <vxe-modal v-model="showUpgrade" title="重要提醒，由于 v4.7 版本的重构" :width="540" :mask="false" :lock-view="false" resize show-zoom show-footer show-cancel-button show-confirm-button confirm-button-text="忽略，不再提醒" @confirm="confirmUpgrade">
      <div>由于 v4.7 版本将 vxe-table 拆分为 2 个库： <a class="link" href="https://vxetable.cn/" target="_blank">vxe-table</a> 纯表格库和 <a class="link" href="https://vxeui.com/" target="_blank">vxe-pc-ui</a>组件库。</div>
      <div>v4.0 可以无缝升级 v4.6。</div>
      <div class="red">v4.6 不能直接升级 v4.7，需要调一下安装方式，代码无需改动。</div>
    </vxe-modal>
    <vxe-loading :model-value="appStore.pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/store/app'
import PageLayout from '@/components/PageLayout.vue'

const appStore = useAppStore()

const showUpgrade = ref(!localStorage.getItem('VISIBLE_4D6_UPGRADE'))

const confirmUpgrade = () => {
  localStorage.setItem('VISIBLE_4D6_UPGRADE', '1')
}
</script>
