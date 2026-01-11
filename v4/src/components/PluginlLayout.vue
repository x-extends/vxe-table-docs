<template>
  <VxeLayoutContainer :class="['app-container', pageName]" vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside" width="360" :collapsed="!showLeft">
        <PageAside :navConfigList="navConfigList" />
      </VxeLayoutAside>
      <VxeLayoutContainer class="layout-content-container" vertical>
        <VxeLayoutBody class="layout-body" show-backtop :backtop-config="backtopConfig">
          <template #default>
            <RouterView />
          </template>
          <template #backtop-top>
            <VxeButton status="success" icon="vxe-icon-wechat" title="企业版在线客服" circle shadow @click="wxKfEvent"></VxeButton>
          </template>
        </VxeLayoutBody>
        <VxeLayoutFooter class="layout-footer">
          <PageFooter></PageFooter>
        </VxeLayoutFooter>
        <div v-if="showOperBtn" class="oper-wrapper">
          <vxe-button class="oper-btn" status="info" :icon="showLeft ? 'vxe-icon-arrow-left' : 'vxe-icon-arrow-right'" @click="showLeft = !showLeft"></vxe-button>
        </div>
      </VxeLayoutContainer>
    </VxeLayoutContainer>
  </VxeLayoutContainer>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, PropType, provide } from 'vue'
import { VxeLayoutBodyPropTypes } from 'vxe-pc-ui'
import { useAppStore } from '@/store/app'
import { useRoute } from 'vue-router'
import { NavVO } from '@/common/nav'
import XEUtils from 'xe-utils'
import PageHeader from '@/components/PageHeader.vue'
import PageAside from '@/components/PageAside.vue'
import PageFooter from '@/components/PageFooter.vue'

const props = defineProps({
  pluginType: String,
  navConfigList: Array as PropType<NavVO[]>
})

const route = useRoute()

const appStore = useAppStore()
const pluginBuyUrl = computed(() => appStore.pluginBuyUrl)

const showLeft = ref(true)

const backtopConfig = reactive<VxeLayoutBodyPropTypes.BacktopConfig>({
  circle: true,
  position: 'fixed'
})

const pageName = computed(() => {
  return route ? XEUtils.kebabCase(`${String(route.name).replace('VxeIcon', 'VxeIco')}`) : ''
})

const showOperBtn = computed(() => {
  return route.name === 'DocsApi'
})

const wxKfEvent = () => {
  open(`${pluginBuyUrl.value}?wx=1`)
}

provide('pluginType', props.pluginType || '')
</script>
