<template>
  <VxeLayoutContainer :size="componentsSize">
    <RouterView />
    <vxe-loading :model-value="pageLoading"></vxe-loading>
  </VxeLayoutContainer>
</template>

<script lang="tsx" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'
import {VxeUI} from 'vxe-table'
import axios from 'axios'

const appStore = useAppStore()
const siteBaseUrl = computed(() => appStore.siteBaseUrl)
const pageLoading = computed(() => appStore.pageLoading)
const componentsSize = computed(() => appStore.componentsSize)

axios.get(`${siteBaseUrl.value}/component-api/system-config.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  appStore.setSystemConfig(res.data)
})
axios.get(`${siteBaseUrl.value}/component-api/vxe-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  appStore.setVersionConfig(res.data)
})

const voteKey = 'VXE_VOTE_2025_4'
if (!localStorage.getItem(voteKey)) {
  VxeUI.modal.confirm({
    width: 500,
    title: 'vxe-table 正在参加 Gitee 2025 最受欢迎的开源软件投票活动',
    confirmButtonText: '去投票',
    cancelButtonText: '忽略，不再弹出',
    slots: {
      default () {
        return <div>
          <div>如果该项目对您有帮助，快来投票！</div>
          <div><vxe-link status="primary" href="https://gitee.com/activity/2025opensource?ident=IX0B8Q" target="_blank">https://gitee.com/activity/2025opensource?ident=IX0B8Q</vxe-link></div>
        </div>
      }
    }
  }).then((type) => {
    if (type === 'confirm') {
      localStorage.setItem(voteKey, '1')
      open('https://gitee.com/activity/2025opensource?ident=IX0B8Q')
    } else if (type === 'cancel') {
      localStorage.setItem(voteKey, '1')
    }
  })
}
</script>
