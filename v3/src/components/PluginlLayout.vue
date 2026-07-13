<template>
  <VxeLayoutContainer :class="['app-container', pageName]" vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside" :width="asideWidth" :collapse-width="1" :collapsed="!showLeft">
        <PageAside :nav-config-list="navConfigList" />
      </VxeLayoutAside>
      <VxeLayoutContainer class="layout-content-container" vertical>
        <VxeLayoutBody class="layout-body" :class="{'is-full': isFullView}" show-backtop :backtop-config="backtopConfig">
          <template #default>
            <div class="body-view">
              <RouterView />
            </div>
            <VxeLayoutFooter class="layout-footer">
              <PageFooter></PageFooter>
            </VxeLayoutFooter>
          </template>
          <template #backtop-top>
            <VxeButton status="success" icon="vxe-icon-wechat" title="企业版在线客服" circle shadow @click="wxKfEvent"></VxeButton>
          </template>
        </VxeLayoutBody>
        <div v-if="showOperBtn" class="oper-wrapper">
          <div class="oper-btn" @click="showLeft = !showLeft">
            <i :class="showLeft ? 'vxe-icon-arrow-left' : 'vxe-icon-arrow-right'"></i>
          </div>
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
    return {
      pluginType: (this as any).pluginType || ''
    }
  },
  data () {
    const backtopConfig: VxeLayoutBodyPropTypes.BacktopConfig = {
      position: 'fixed',
      circle: true
    }
    let asideWidth = 360

    if (window.innerWidth > 2000) {
      asideWidth = 460
    } else if (window.innerWidth > 1600) {
      asideWidth = 400
    } else if (window.innerWidth < 1000) {
      asideWidth = 320
    }

    return {
      showLeft: true,
      asideWidth,
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
    isFullView () {
      const route = this.$route
      return route.name === 'DocsApi'
    },
    showOperBtn () {
      const route = this.$route
      return true// route.name === 'DocsApi'
    }
  },
  methods: {
    wxKfEvent () {
      open(`${(this as any).pluginBuyUrl}?wx=1`)
    }
  }
})
</script>
