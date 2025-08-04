<template>
  <div ref="asideElemRef" class="page-aside">
    <div class="nav-top">
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
                  <span v-else v-html="node.title"></span>
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
    <div class="nav-item nav-level1" v-for="(item1, index1) in navList" :key="index1" :class="[{'is-expand': item1.isExpand}]">
      <div class="nav-name" :class="{'is-plugin': item1.isPlugin, 'is-enterprise': item1.isEnterprise}" :title="item1.describe || item1.title" @click="toggleExpand(item1)">
        <vxe-link v-if="item1.routerLink" class="nav-item-link" :status="item1.linkStatus" :router-link="item1.routerLink" :content="item1.title"></vxe-link>
        <vxe-link v-else-if="item1.linkUrl" class="nav-item-link" :status="item1.linkStatus" :href="item1.linkUrl" :target="item1.linkTarget || '_blank'" :content="item1.title"></vxe-link>
        <vxe-link v-else-if="item1.isBack" class="nav-item-link" :status="item1.linkStatus" :content="item1.title" @click="backEvent"></vxe-link>
        <span v-else>
          <span class="vxe-icon-arrow-right nav-link-icon"></span>
          <span class="nav-item-text">
            <span> {{ item1.title }}</span>
            <vxe-text v-if="['API'].includes(item1.title || '') && item1.children" status="success">（{{ item1.children.length }}）</vxe-text>
          </span>
        </span>
      </div>
      <div v-if="item1.isExpand && item1.children && item1.children.length" class="nav-subs">
        <div class="nav-item nav-level2" v-for="(item2, index2) in item1.children" :key="`${index1}${index2}`" :class="[{'is-expand': item2.isExpand}]">
          <div class="nav-name" :class="{'is-plugin': item2.isPlugin, 'is-enterprise': item2.isEnterprise}" :title="item2.describe || item2.title" @click="toggleExpand(item2)">
            <vxe-link v-if="item2.routerLink" :class="['nav-item-link']" :data-code="getApiKey(item2)" :router-link="item2.routerLink">
              <span>{{ item2.title }}</span>
              <span v-if="item2.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
              <span v-else-if="item2.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
              <span v-else-if="item2.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
            </vxe-link>
            <vxe-link v-else-if="item2.linkUrl" class="nav-item-link" :status="item2.linkStatus" :href="item2.linkUrl" :target="item2.linkTarget || '_blank'">
              <span>{{ item2.title }}</span>
              <span v-if="item2.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
              <span v-else-if="item2.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
              <span v-else-if="item2.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
            </vxe-link>
            <vxe-text v-else class="nav-item-text" icon="vxe-icon-arrow-right" :content="item2.title"></vxe-text>
          </div>
          <div v-if="!['API'].includes(item1.title || '') && item2.isExpand && item2.children && item2.children.length" class="nav-subs">
            <div class="nav-item nav-level3" v-for="(item3, index3) in item2.children" :key="`${index1}${index2}${index3}`" :class="[{'is-expand': item3.isExpand}]">
              <div class="nav-name" :class="{'is-plugin': item3.isPlugin, 'is-enterprise': item3.isEnterprise}" :title="item3.describe || item3.title" @click="toggleExpand(item3)">
                <vxe-link v-if="item3.routerLink" :class="['nav-item-link']" :data-code="getApiKey(item3)" :router-link="item3.routerLink">
                  <span>{{ item3.title }}</span>
                  <span v-if="item3.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                  <span v-else-if="item3.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                  <span v-else-if="item3.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                </vxe-link>
                <vxe-link v-else-if="item3.linkUrl" class="nav-item-link" :status="item3.linkStatus" :href="item3.linkUrl" :target="item3.linkTarget || '_blank'">
                  <span>{{ item3.title }}</span>
                  <span v-if="item3.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                  <span v-else-if="item3.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                  <span v-else-if="item3.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                </vxe-link>
                <vxe-text v-else class="nav-item-text" icon="vxe-icon-arrow-right" :content="item3.title"></vxe-text>
              </div>
              <div v-if="item3.isExpand && item3.children && item3.children.length" class="nav-subs">
                <div class="nav-item nav-level4" v-for="(item4, index4) in item3.children" :key="`${index1}${index2}${index3}${index4}`" :class="[{'is-expand': item4.isExpand}]">
                  <div class="nav-name" :class="{'is-plugin': item4.isPlugin, 'is-enterprise': item4.isEnterprise}" :title="item4.describe || item4.title" @click="toggleExpand(item4)">
                    <vxe-link v-if="item4.routerLink" :class="['nav-item-link']" :data-code="getApiKey(item4)" :router-link="item4.routerLink">
                      <span>{{ item4.title }}</span>
                      <span v-if="item4.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                      <span v-else-if="item4.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                      <span v-else-if="item4.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                    </vxe-link>
                    <vxe-link v-else-if="item4.linkUrl" class="nav-item-link" :status="item4.linkStatus" :href="item4.linkUrl" :target="item4.linkTarget || '_blank'">
                      <span>{{ item4.title }}</span>
                      <span v-if="item4.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                      <span v-else-if="item4.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                      <span v-else-if="item4.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                    </vxe-link>
                    <vxe-text v-else class="nav-item-text" icon="vxe-icon-arrow-right" :content="item4.title"></vxe-text>
                  </div>
                  <div v-if="item4.isExpand && item4.children && item4.children.length" class="nav-subs">
                    <div class="nav-item nav-level5" v-for="(item5, index5) in item4.children" :key="`${index1}${index2}${index3}${index5}`" :class="[{'is-expand': item5.isExpand}]">
                      <div class="nav-name" :class="{'is-plugin': item5.isPlugin, 'is-enterprise': item5.isEnterprise}" :title="item5.describe || item5.title" @click="toggleExpand(item5)">
                        <vxe-link v-if="item5.routerLink" :class="['nav-item-link']" :data-code="getApiKey(item5)" :router-link="item5.routerLink">
                          <span>{{ item5.title }}</span>
                          <span v-if="item5.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                          <span v-else-if="item5.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                          <span v-else-if="item5.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                        </vxe-link>
                        <vxe-link v-else-if="item5.linkUrl" class="nav-item-link" :status="item5.linkStatus" :href="item5.linkUrl" :target="item5.linkTarget || '_blank'">
                          <span>{{ item5.title }}</span>
                          <span v-if="item5.isEnterprise" class="nav-item-enterprise-icon">{{ $t('app.aside.enterpriseVersion') }}</span>
                          <span v-else-if="item5.isPlugin" class="nav-item-plugin-icon">{{ $t('app.aside.pluginVersion') }}</span>
                          <span v-else-if="item5.isTemplate" class="nav-item-template-icon">{{ $t('app.aside.templateVersion') }}</span>
                        </vxe-link>
                        <vxe-text v-else class="nav-item-text" icon="vxe-icon-arrow-right" :content="item5.title"></vxe-text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { navConfigList } from '@/common/nav-config'
import { NavVO } from '@/common/nav'
import { VxeTreeInstance } from 'vxe-pc-ui'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'
import VersionList from './VersionList.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const treeRef = ref<VxeTreeInstance>()

const navList = ref<NavVO[]>([])

const asideElemRef = ref<HTMLElement>()
const searchName = ref('')
const showSearchList = ref(false)
const searchLoading = ref(false)
const searchList = ref<NavVO[]>([])
let isInit = false
let loadApiStatus = false

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

const createNavList = () => {
  XEUtils.eachTree(navConfigList, item => {
    item.title = item.i18nKey ? i18n.global.t(item.i18nKey) : item.title
    item.isExpand = item.isExpand || false
    handleNavApiParams(item)
  }, { children: 'children' })
  const apiItem = navConfigList.find(item => item.title === 'API')
  if (apiItem) {
    const apiList: NavVO[] = []
    XEUtils.each(XEUtils.clone(appStore.compApiMaps, true), (list, compName) => {
      const name = compName.split('-').slice(1).join('-')
      apiList.push({
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
  const list = XEUtils.clone(navConfigList, true)
  navList.value = list
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

const toggleExpand = (item: NavVO) => {
  if (item.children && item.children.length) {
    item.isExpand = !item.isExpand
  }
}

const backEvent = () => {
  router.back()
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

const scrollToNav = (item: NavVO) => {
  nextTick(() => {
    const asideElem = asideElemRef.value
    if (asideElem && item.routerLink) {
      const linkEl = asideElem.querySelector(`[data-code="${getApiKey(item)}"]`)
      if (linkEl) {
        if ((linkEl as any).scrollIntoViewIfNeeded) {
          (linkEl as any).scrollIntoViewIfNeeded()
        } else if (!isInit && (linkEl as any).scrollIntoView) {
          (linkEl as any).scrollIntoView()
          isInit = true
        }
      }
    }
  })
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
    rest.nodes.forEach(item => {
      item.isExpand = true
    })
    scrollToNav(rest.item)
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

<style lang="scss" scoped>
.page-aside {
  .nav-top {
    position: sticky;
    top: 0;
    left: 0;
    padding: 16px 0;
    text-align: center;
    background-color: var(--vxe-ui-docs-layout-background-color);
    box-shadow: inset 0px 12px 8px -8px rgba(0,0,0,.12);
    z-index: 3;
  }
  .search-input {
    width: 100%;
  }
  .nav-item {
    position: relative;
    user-select: none;
  }
  .nav-name {
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      display: inline-block;
    }
  }
  .nav-link-icon {
    font-size: 13px;
    margin-right: 8px;
    transition: transform .2s ease-in-out;
  }
  .nav-item-link {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.router-link-exact-active {
      color: var(--vxe-ui-docs-primary-color);
      font-weight: 700;
    }
  }
  .nav-item-enterprise-icon,
  .nav-item-plugin-icon,
  .nav-item-template-icon {
    position: absolute;
    top: 0.2em;
    font-size: 12px;
    line-height: 15px;
    height: 16px;
    padding: 0 5px 0 5px;
    border-radius: 4px;
    transform: rotate(-7deg) translate(6px, 4px);
    &::after {
      content: "";
      position: absolute;
      left: -9px;
      bottom: 4px;
      border: 5px solid transparent;
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
  ::v-deep(.nav-item) {
    & > .nav-subs {
      display: none;
    }
    &.is-expand {
      & > .nav-name {
        .nav-link-icon {
          transform: rotate(90deg);
        }
        .vxe-text--icon {
          transform: rotate(90deg);
        }
      }
      & > .nav-subs {
        display: block;
      }
    }
    .vxe-text--icon {
      display: inline-block;
      font-size: 12px;
      transition: transform .2s ease-in-out;
    }
    .nav-item-text {
      cursor: pointer;
      &:hover {
        color: var(--vxe-ui-docs-primary-color);
      }
    }
  }
  .nav-level1 {
    & > .nav-name {
      padding: 0 1.2em 0.4em 1.2em;
      line-height: 40px;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        bottom: 0.2em;
        left: 1.2em;
        width: calc(100% - 2.4em);
        border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
      }
      .nav-item-text,
      .nav-item-link {
        font-size: 15px;
        font-weight: 700;
      }
    }
  }
  .nav-level2 {
    & > .nav-name {
      line-height: 36px;
      padding-left: 3.4em;
      .nav-item-text,
      .nav-item-link {
        font-size: 14px;
      }
    }
    .nav-item-text {
      color: var(--vxe-ui-docs-layout-menu-color);
      font-weight: 700;
    }
  }
  .nav-level3 {
    & > .nav-name {
      line-height: 32px;
      padding-left: 5em;
      .nav-item-text,
      .nav-item-link {
        font-size: 14px;
      }
    }
  }
  .nav-level4 {
    & > .nav-name {
      line-height: 28px;
      padding-left: 7.4em;
      .nav-item-text,
      .nav-item-link {
        font-size: 14px;
      }
    }
  }
  .nav-level5 {
    & > .nav-name {
      line-height: 28px;
      padding-left: 9em;
      .nav-item-text,
      .nav-item-link {
        font-size: 14px;
      }
    }
  }
}
</style>

<style lang="scss">
.vxe-layout-aside.is--collapse {
  .page-aside {
    visibility: hidden;
  }
}
.nav-search-wrapper {
  max-height: 70vh;
  width: 600px;
  padding: 32px;
  overflow: auto;
  border-radius: 4px;
  font-size: 18px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  background-color: var(--vxe-ui-docs-layout-background-color);
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
.nav-search-empty {
  padding: 40px 16px;
  text-align: center;
  font-size: 18px;
  word-break: break-all;
}
</style>
