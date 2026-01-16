<template>
  <VxeLayoutContainer :class="['app-container', pageName]" vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside" width="360" :collapsed="!showLeft">
        <PageAside />
      </VxeLayoutAside>
      <VxeLayoutContainer class="layout-content-container page-container" vertical>
        <VxeLayoutBody class="layout-body" show-backtop :backtop-config="backtopConfig">
          <RouterView />
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
import Vue from 'vue'
import { VxeLayoutBodyPropTypes } from 'vxe-pc-ui'
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
  provide () {
    const route = this.$route
    const pluginType = route.query.pt || ''
    return {
      pluginType
    }
  },
  data () {
    const backtopConfig: VxeLayoutBodyPropTypes.BacktopConfig = {
      position: 'fixed',
      circle: true
    }

    return {
      showLeft: true,
      backtopConfig
    }
  },
  computed: {
    pageName () {
      const route = this.$route
      return route ? XEUtils.kebabCase(`${String(route.name).replace('VxeIcon', 'VxeIco')}`) : ''
    },
    showOperBtn () {
      const route = this.$route
      return route.name === 'DocsApi'
    }
  }
})
</script>

<style lang="scss">
.app-container {
  .layout-content-container {
    position: relative;
    min-width: 800px;
    box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.12);
  }
  .layout-body {
    & > .vxe-layout-body--inner {
      position: relative;
      padding: 16px 300px 16px 16px;
    }
  }
  .layout-aside {
    & > .vxe-layout-aside--inner {
      overflow-y: scroll;
    }
  }
  .app-container {
    &.docs-api {
      .layout-body {
        height: 100%;
      }
      .layout-footer {
        display: none;
      }
    }
  }
  .oper-wrapper {
    position: absolute;
    top: 46vh;
    width: 16px;
    .oper-btn {
      height: 60px;
      user-select: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
      border: 1px solid var(--vxe-ui-docs-layout-border-color);
      background: var(--vxe-ui-docs-layout-background-color);
      z-index: 19;
      &:active {
        outline: 0;
      }
      &.type--button {
        padding: 0;
      }
    }
  }
}
</style>
