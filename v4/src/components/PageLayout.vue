<template>
  <VxeLayoutContainer :class="['app-container', pageName]" vertical>
    <VxeLayoutHeader>
      <PageHeader />
    </VxeLayoutHeader>
    <VxeLayoutContainer>
      <VxeLayoutAside class="layout-aside" :width="asideWidth" :collapsed="!showLeft">
        <PageAside :nav-config-list="navConfigList" :showLeft="showLeft" />
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

<script lang="ts" setup>
import { ref, computed, reactive, provide } from 'vue'
import { VxeLayoutBodyPropTypes } from 'vxe-pc-ui'
import { useRoute } from 'vue-router'
import { navConfigList } from '@/common/nav-config'
import { useAppStore } from '@/store/app'
import XEUtils from 'xe-utils'
import PageHeader from '@/components/PageHeader.vue'
import PageAside from '@/components/PageAside.vue'
import PageFooter from '@/components/PageFooter.vue'

const route = useRoute()
const appStore = useAppStore()

const isUtilDocs = computed(() => appStore.isUtilDocs)

const showLeft = ref(true)
const asideWidth = ref(360)

if (window.innerWidth > 2000) {
  asideWidth.value = 500
} else if (window.innerWidth > 1600) {
  asideWidth.value = 400
} else if (window.innerWidth < 1000) {
  asideWidth.value = 300
}

const backtopConfig = reactive<VxeLayoutBodyPropTypes.BacktopConfig>({
  position: 'fixed',
  circle: true
})

const pageName = computed(() => {
  return route ? XEUtils.kebabCase(`${String(route.name).replace('VxeIcon', 'VxeIco')}`) : ''
})

const isFullView = computed(() => {
  return !isUtilDocs.value && route.name === 'DocsApi'
})

const showOperBtn = computed(() => {
  return true// route.name === 'DocsApi'
})

provide('pluginType', route.query.pt || '')
</script>

<style lang="scss">
.app-container {
  .layout-content-container {
    position: relative;
    min-width: 720px;
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
    width: 1em;
    font-size: 14px;
    .oper-btn {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 3.2em;
      width: 100%;
      border-radius: 4px;
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
        font-size: 0.9em;
      }
    }
  }
}
</style>
