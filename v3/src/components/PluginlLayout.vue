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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeLayoutBodyPropTypes } from 'vxe-pc-ui'
import { NavVO } from '@/common/nav'
import { mapState } from 'vuex'
import XEUtils from 'xe-utils'
import PageHeader from '@/components/PageHeader.vue'
import PageAside from '@/components/PageAside.vue'
import PageFooter from '@/components/PageFooter.vue'

export default Vue.extend({
  components: {
    PageHeader,
    PageAside,
    PageFooter
  },
  props: {
    pluginType: String,
    navConfigList: Array as PropType<NavVO[]>
  },
  provide () {
    return (this as any).pluginType || ''
  },
  data () {
    const showLeft = true

    const backtopConfig: VxeLayoutBodyPropTypes.BacktopConfig = {
      circle: true,
      showTop: (this as any).isPluginDocs,
      position: 'fixed'
    }

    return {
      showLeft,
      backtopConfig
    }
  },
  computed: {
    ...mapState([
      'isPluginDocs',
      'pluginBuyUrl'
    ]),
    pageName () {
      const route = this.$route
      return route ? XEUtils.kebabCase(`${String(route.name).replace('VxeIcon', 'VxeIco')}`) : ''
    },
    showOperBtn () {
      const route = this.$route
      return route.name === 'DocsApi'
    }
  },
  methods: {
    wxKfEvent () {
      open(`${(this as any).pluginBuyUrl}?wx=1`)
    }
  }
})
</script>
