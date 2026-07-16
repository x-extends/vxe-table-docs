<template>
  <div ref="asideElemRef" class="page-aside">
    <div v-if="showLeft" class="nav-top">
      <VersionList />
      <vxe-pulldown v-model="showSearchList" transfer>
        <vxe-input v-model="searchName" class="search-input" type="search" :placeholder="$t('app.aside.docsSearch')" clearable @click="clickSearchEvent" @change="changeSearchEvent"></vxe-input>

        <template #dropdown>
          <div class="nav-search-wrapper">
            <div v-if="searchName && searchList.length">
              <vxe-tree
                is-hover
                ref="treeRef"
                :data="searchList"
                title-field="title"
                children-field="searchResult"
                trigger="node">
                <template #title="{ node }">
                  <vxe-link v-if="node.routerLink" status="primary" :data-code="getApiKey(node)" :router-link="node.routerLink" @click="searchRowClickEvent">
                    <span v-html="node.title"></span>
                  </vxe-link>
                  <vxe-link v-else-if="node.linkUrl" status="primary" :href="node.linkUrl" target="_blank">
                    <span v-html="node.title"></span>
                  </vxe-link>
                  <span v-else v-html="node.title" ></span>
                </template>
              </vxe-tree>
            </div>
            <div v-else class="nav-search-empty">
              <div v-if="!searchName">{{ $t('app.aside.searchPlaceholder') }}</div>
              <div v-else-if="searchLoading">
                <vxe-icon name="refresh" roll></vxe-icon>
                <span>{{ $t('app.aside.searchLoadingText') }}</span>
              </div>
              <div v-else v-html="$t('app.aside.searchResultHtml', [searchName])"></div>
            </div>
          </div>
        </template>
      </vxe-pulldown>
    </div>
    <div class="nav-body">
      <vxe-menu ref="menuRef" v-model="selectNavId" v-bind="menuOptions" :options="navList" @click="clickMenuEvent">
        <template #option-title="{ option }">
          <span>{{ option.title }}</span>
          <span v-if="option.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterprisePluginVersion') }}</span>
          <span v-else-if="option.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
          <span v-else-if="option.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
          <span v-else-if="option.isProcess" class="nav-item-process-icon">{{ $t('app.aside.processVersion') }}</span>
          <vxe-text v-if="option.showCount && option.children && option.children.length" status="success">（{{ option.children.length }}）</vxe-text>
        </template>
      </vxe-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick, PropType, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { NavVO } from '@/common/nav'
import { VxeTreeInstance, VxeMenuInstance, VxeMenuProps, VxeMenuEvents } from 'vxe-pc-ui'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'
import VersionList from './VersionList.vue'

const props = defineProps({
  navConfigList: Array as PropType<NavVO[]>,
  showLeft: Boolean
})

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const treeRef = ref<VxeTreeInstance>()
const menuRef = ref<VxeMenuInstance>()

const navList = ref<NavVO[]>([])
const selectNavId = ref()

const searchName = ref('')
const showSearchList = ref(false)
const searchLoading = ref(false)
const searchList = ref<NavVO[]>([])
let loadApiStatus = false

const menuOptions = reactive<VxeMenuProps>({
  collapseFixed: true,
  expandKeys: [],
  optionProps: {
    name: 'nId',
    title: 'title',
    icon: 'icon',
    linkUrl: 'linkUrl',
    linkTarget: 'linkTarget',
    routerLink: 'routerLink'
  }
})

const clickMenuEvent: VxeMenuEvents.Click = ({ option }) => {
  if (option.isBack) {
    router.back()
  }
}

const handleNavApiParams = (item: NavVO) => {
  if (item.isSelfAPI) {
    if (item.routerLink && item.routerLink.params) {
      item.name = `${item.routerLink.params.name}`
      item.routerLink.query = Object.assign({}, item.routerLink.query, { apiKey: item.routerLink.params.name })
    }
  }
}

const updateTitle = () => {
  XEUtils.eachTree(navList.value, (item) => {
    item.title = item.i18nKey ? i18n.global.t(item.i18nKey) : item.title
  }, { children: 'children' })
}

let navKey = 1000000

const createNavList = () => {
  const expandKeys: number[] = []
  const navLst = XEUtils.clone(props.navConfigList, true) || []
  XEUtils.eachTree(navLst, item => {
    if (!item.nId) {
      item.nId = ++navKey
    }
    item.title = item.i18nKey ? i18n.global.t(item.i18nKey) : item.title
    item.isExpand = item.isExpand || false
    if (item.isExpand) {
      expandKeys.push(item.nId)
    }
    handleNavApiParams(item)
  }, { children: 'children' })
  const apiItem = navLst.find(item => item.title === 'API')
  if (apiItem) {
    const apiList: NavVO[] = []
    XEUtils.each(XEUtils.clone(appStore.compApiMaps, true), (list, compName) => {
      const name = compName.split('-').slice(1).join('-')
      apiList.push({
        nId: ++navKey,
        title: `${compName}`,
        name: name,
        isAllAPI: true,
        routerLink: { name: 'DocsApi', params: { name } },
        children: XEUtils.mapTree(list, obj => {
          obj.title = obj.name
          obj.routerLink = {
            name: 'DocsApi',
            params: { name },
            query: { q: obj.name }
          }
          return obj
        }, { children: 'list', mapChildren: 'children' })
      })
    })
    apiItem.children = apiList
  }
  const list = XEUtils.clone(navLst, true)
  navList.value = list
  menuOptions.expandKeys = expandKeys
  updateExpand()
}

const handleSearch = () => {
  const filterName = XEUtils.toValueString(searchName.value).trim()
  if (filterName) {
    const filterRE = new RegExp(`${filterName}|${XEUtils.camelCase(filterName)}|${XEUtils.kebabCase(filterName)}`, 'i')
    const rest = XEUtils.searchTree(navList.value, (item) => {
      return filterRE.test(item.title || '') || (item.describe && filterRE.test(item.describe || '')) || !!(item.keywords && item.keywords.split(',').some(key => filterRE.test(key)))
    }, { children: 'children', mapChildren: 'searchResult' })
    XEUtils.eachTree(rest, (item) => {
      if (filterRE.test(item.title || '')) {
        item.title = `${item.title || ''}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
      } else if (item.describe && filterRE.test(item.describe || '')) {
        item.title = `${item.describe}`.replace(filterRE, (match) => `<span class="keyword-lighten">${match}</span>`)
      } else if (item.keywords && item.keywords.split(',').some(key => filterRE.test(key))) {
        item.title = `<span>${item.title || ''}<span class="keyword-lighten"> ...${filterName}...</span></span>`
      }
    }, { children: 'searchResult' })
    searchList.value = rest
    searchList.value.forEach(group => {
      group.isExpand = true
    })
  } else {
    searchList.value = []
  }
  searchLoading.value = false
  setTimeout(() => expandAllApiTree(), 100)
}

// 调用频率间隔 500 毫秒
const searchEvent = XEUtils.debounce(handleSearch, 500, { leading: false, trailing: true })

const clickSearchEvent = () => {
  searchLoading.value = true
  if (!showSearchList.value) {
    handleSearch()
  }
  showSearchList.value = true
  if (!loadApiStatus) {
    loadApiStatus = true
    appStore.updateAllComponentApiJSON()
  }
}

const changeSearchEvent = () => {
  searchLoading.value = true
  showSearchList.value = true
  searchEvent()
}

const searchRowClickEvent = () => {
  showSearchList.value = false
}

const expandAllApiTree = () => {
  const $tree = treeRef.value
  if ($tree) {
    $tree.setAllExpandNode(true)
  }
}

const getApiKey = (item: NavVO) => {
  if (!item.routerLink) {
    return ''
  }
  if (item.routerLink.name === 'EnterprisePreview') {
    return `${item.routerLink.name}-${item.routerLink.params?.previewCode}-${item.routerLink.query?.previewPath}`.toLowerCase()
  }
  if (item.isAllAPI) {
    return `${item.routerLink.name}-all-${item.name}`.toLowerCase()
  }
  if (item.isSelfAPI) {
    return `${item.routerLink.name}-self-${item.name}`.toLowerCase()
  }
  return `${item.routerLink.name}`.toLowerCase()
}

const updateExpand = () => {
  const routeName = route.name
  const apiKey = route.query.apiKey
  const apiName = route.params.name
  const rest = XEUtils.findTree(navList.value, (item) => {
    const { routerLink } = item
    if (!routerLink) {
      return false
    }
    if (routerLink.name === routeName) {
      if (routeName === 'EnterprisePreview') {
        return !!((routerLink.params && routerLink.params.previewCode === route.params.previewCode) && (routerLink.query && routerLink.query.previewPath === route.query.previewPath))
      }
      if (item.isSelfAPI) {
        return !!(routerLink.params && routerLink.params.name === apiKey)
      }
      if (item.isAllAPI) {
        return !!(routerLink.params && routerLink.params.name === apiName)
      }
      return true
    }
    return false
  }, { children: 'children' })
  if (rest) {
    selectNavId.value = rest.item.nId
    nextTick(() => {
      const $menu = menuRef.value
      if ($menu) {
        $menu.scrollToActiveMenu()
      }
    })
  }
}

watch(route, () => {
  updateExpand()
})

watch(() => appStore.compApiMaps, () => {
  createNavList()
})

watch(() => i18n.global.locale, () => {
  updateTitle()
})

createNavList()
updateExpand()

if (!appStore.isUtilDocs) {
  appStore.updateComponentApiJSON()
}
</script>

<style lang="scss">
.page-aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  .nav-top {
    flex-shrink: 0;
    padding: 16px 0;
    text-align: center;
    background-color: var(--vxe-ui-docs-layout-background-color);
    box-shadow: inset 0px 12px 8px -8px rgba(0,0,0,.12);
  }
  .nav-body {
    flex-grow: 1;
    border-top: 1px solid var(--vxe-ui-docs-layout-border-color);
    overflow-x: hidden;
    overflow-y: auto;
  }
  .search-input {
    width: 18em;
  }
}

.vxe-menu--item-link-title {
  position: relative;
  height: 100%;
  line-height: var(--vxe-ui-menu-current-item-height);
}

.nav-item-enterprise-icon,
.nav-item-plugin-icon,
.nav-item-template-icon,
.nav-item-process-icon {
  position: absolute;
  top: 50%;
  line-height: 1em;
  padding: 0.2em 0.5em;
  border-radius: 4px;
  transform: rotate(-7deg) translate(0.5em, -50%);
  user-select: none;
  &::after {
    content: "";
    position: absolute;
    left: -0.75em;
    top: 50%;
    transform: translateY(-50%);
    border: 0.4em solid transparent;
  }
}
.nav-item-enterprise-icon {
  color: #333;
  background-color: #f5c28f;
  &::after {
    border-right-color: #f5c28f;
  }
}
.nav-item-plugin-icon,
.nav-item-template-icon {
  color: #efebeb;
  background-color: #3eb910;
  &::after {
    border-right-color: #3eb910;
  }
}
.nav-item-process-icon {
  color: #fff;
  background-color: #f7d3d3;
  &::after {
    border-right-color: #f7d3d3;
  }
}

.nav-search-wrapper {
  max-height: 70vh;
  width: 600px;
  padding: 32px;
  overflow: auto;
  border-radius: 4px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  background-color: var(--vxe-ui-docs-layout-background-color);
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.nav-search-empty {
  padding: 40px 16px;
  text-align: center;
  word-break: break-all;
}
</style>
