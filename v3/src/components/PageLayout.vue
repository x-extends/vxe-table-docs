<template>
  <VxeLayoutContainer :class="['app-container', pageName]" vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside" :width="asideWidth" :collapse-width="1" :collapsed="!showLeft">
        <PageAside :navConfigList="navConfigList" />
      </VxeLayoutAside>
      <VxeLayoutContainer class="layout-content-container page-container" vertical>
        <VxeLayoutBody class="layout-body" :class="{'is-full': isFullView}" show-backtop :backtop-config="backtopConfig">
          <div class="body-view">
            <RouterView />
          </div>
          <VxeLayoutFooter class="layout-footer">
            <PageFooter></PageFooter>
          </VxeLayoutFooter>
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
import Vue from 'vue'
import { VxeLayoutBodyPropTypes } from 'vxe-pc-ui'
import { navConfigList } from '@/common/nav-config'
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
      pluginType,
      navConfigList
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
      asideWidth = 220
    } else if (window.innerWidth < 900) {
      asideWidth = 200
    }

    return {
      showLeft: true,
      asideWidth,
      backtopConfig
    }
  },
  computed: {
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
    &.is-full {
      .body-view {
        height: 100%;
        overflow: hidden;
      }
      .layout-footer {
        display: none;
      }
    }
    & > .vxe-layout-body--inner {
      position: relative;
      padding: 16px 300px 16px 16px;
    }
    .body-view {
      min-height: 80vh;
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
    width: 0.68em;
    font-size: 14px;
    .oper-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 3.2em;
      width: 100%;
      color: var(--vxe-ui-layout-background-color);
      border-radius: 4px;
      background-color: #8b8b8b;
      border: 1px solid var(--vxe-ui-input-border-color);
      pointer-events: all;
      cursor: pointer;
      user-select: none;
      transition: all .1s ease-in-out;
      &:hover {
        color: #ffffff;
        background-color: var(--vxe-ui-font-primary-color);
      }
      &:active {
        transform: scale(0.9);
      }
      i {
        font-size: 0.5em;
      }
    }
  }
}
</style>
