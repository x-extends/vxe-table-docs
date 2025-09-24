<template>
  <div class="page-header">
    <div class="header-left">
      <a class="logo" :href="siteBaseUrl">
        <img :src="`${siteBaseUrl}/logo.png`">
        <span class="title">{{ pageTitle }}</span>
      </a>
      <a :href='`https://gitee.com/x-extends/${packName}/stargazers`'>
        <img :src='`https://gitee.com/x-extends/${packName}/badge/star.svg?theme=gvp`' alt='star'>
      </a>
      <a :href="`http://npm-stat.com/charts.html?package=${packName}`">
        <img :src="`https://img.shields.io/npm/dm/${packName}.svg`">
      </a>
      <a :href="`https://github.com/x-extends/${packName}/stargazers`">
        <img :src="`https://img.shields.io/github/stars/x-extends/${packName}.svg`">
      </a>
    </div>
    <div class="header-middle"></div>
    <div class="header-right">
      <vxe-pulldown v-model="showPluginApp" show-popup-shadow>
        <vxe-button class="system-menu-btn" mode="text" @click="togglePluginAppEvent">
          <span v-if="pluginType" class="system-menu-btn-text" style="color: var(--vxe-ui-font-primary-color);">{{ $t('app.header.morePlugin') }} - {{ currBuyPluginName }}</span>
          <span v-else class="system-menu-btn-text" style="color: var(--vxe-ui-font-primary-color);">{{ $t('app.header.pluginDocs') }}</span>
          <vxe-icon class="system-menu-btn-icon" name="arrow-down"></vxe-icon>
        </vxe-button>

        <template #dropdown>
          <ul class="plugin-app-wrapper">
            <li v-for="(item, index) in pluginAppList" :key="index">
              <vxe-link :href="`${tablePluginDocsUrl}/${item.uri}`" :content="$t(`shopping.apps.${item.code}`)"></vxe-link>
              <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.pluginVersion') }}</span>
            </li>
          </ul>
        </template>
      </vxe-pulldown>
      <vxe-pulldown v-model="showSystemMenu" show-popup-shadow>
        <vxe-button class="system-menu-btn" mode="text" @click="toggleSystemMenuEvent">
          <span :class="['system-menu-btn-text', {'unread': showTopMenuMsgFlag}]">{{ $t('app.header.moreProducts') }}</span>
          <vxe-icon class="system-menu-btn-icon" name="arrow-down"></vxe-icon>
        </vxe-button>

        <template #dropdown>
          <ul class="system-menu-wrapper">
            <li v-for="(item, index) in systemMenuList" :key="index">
              <vxe-link target="_blank" :href="item.href" :content="item.content"></vxe-link>
              <span v-if="item.isStore" class="enterprise">{{ $t('app.header.pluginStore') }}</span>
              <span v-else-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
            </li>
          </ul>
        </template>
      </vxe-pulldown>

      <vxe-select v-model="currSysVersion" class="switch-version" size="mini" :options="sysVersionOptions" @change="vChangeEvent"></vxe-select>

      <vxe-switch
        class="link switch-theme"
        v-model="currTheme"
        size="mini"
        open-value="light"
        :open-label="$t('app.base.light')"
        close-value="dark"
        :close-label="$t('app.base.dark')">
      </vxe-switch>

      <vxe-color-picker class="switch-primary-color" v-model="currPrimaryColor" :colors="colorList" size="mini" show-eye-dropper click-to-copy></vxe-color-picker>

      <vxe-radio-group class="switch-size" v-model="currCompSize" :options="sizeOptions" type="button" size="mini"></vxe-radio-group>

      <vxe-pulldown :options="langOptions" trigger="click" show-popup-shadow @option-click="langClickEvent">
        <vxe-button class="switch-lang-btn" mode="text" icon="vxe-icon-language-switch" :content="currLangLabel"></vxe-button>

        <template #option="{ option }">
          <div class="switch-lang-item">
            <div class="switch-lang-name">{{ option.label }}</div>
            <div class="switch-lang-icon">
              <vxe-link class="github" :href="`https://github.com/x-extends/vxe-ui-docs/tree/main/i18n/${option.value}.json`" icon="vxe-icon-github-fill" target="_blank"></vxe-link>
            </div>
          </div>
        </template>
      </vxe-pulldown>

      <a v-if="isPluginDocs" :class="['plugin-shopping', {'unread': showAuthMsgFlag}]" :href="currBuyPluginBUrl" target="_blank" @click="openPluginEvent">{{ $t('app.header.buyPlugin') }}</a>
      <a v-else :class="['plugin-shopping', {'unread': showAuthMsgFlag}]" :href="currBuyPluginBUrl" target="_blank" @click="openPluginEvent">{{ $t('app.header.pluginStore') }}</a>

      <vxe-link v-if="!isPluginDocs" class="free-donation" status="primary" :router-link="{name: 'FreeDonation'}" :content="$t('app.header.supportUs')"></vxe-link>

      <vxe-link class="git-btn" status="error" :href="giteeUrl" icon="vxe-icon-gitee-fill" target="_blank"></vxe-link>
      <vxe-link class="git-btn" :href="githubUrl" icon="vxe-icon-github-fill" target="_blank"></vxe-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, inject } from 'vue'
import { useAppStore } from '@/store/app'
import { VxePulldownEvents } from 'vxe-pc-ui'
import { tablePluginDocsUrl } from '@/common/nav'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

const appStore = useAppStore()
const pageTitle = computed(() => appStore.pageTitle)
const packName = computed(() => appStore.packName)
const showTopMenuMsgFlag = computed(() => appStore.showTopMenuMsgFlag)
const showAuthMsgFlag = computed(() => appStore.showAuthMsgFlag)
const isExtendDocs = computed(() => appStore.isExtendDocs)
const isPluginDocs = computed(() => appStore.isPluginDocs)
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const pluginType = inject('pluginType', '' as string)

const showPluginApp = ref(false)
const pluginAppList = ref<{
  value: string
  label: string
  code: string
  uri: string
  isEnterprise: boolean
}[]>([])

const showSystemMenu = ref(false)
const systemMenuList = ref<any[]>()

const prevSysVersion = ref(import.meta.env.VITE_APP_VXE_VERSION)
const currSysVersion = ref(import.meta.env.VITE_APP_VXE_VERSION)
const systemVersionList = ref<any[]>([])
const pluginUrlMaps = ref<Record<string, string>>({})

const currBuyPluginBUrl = computed(() => {
  if (pluginUrlMaps.value[pluginType]) {
    return `${appStore.pluginBuyUrl}#${pluginUrlMaps.value[pluginType]}`
  }
  return appStore.pluginBuyUrl
})

const currBuyPluginName = computed(() => {
  const appItem = pluginAppList.value.find(item => item.value === pluginType)
  return appItem ? appItem.label : pluginType
})

const currTheme = computed({
  get () {
    return appStore.theme
  },
  set (name) {
    appStore.setTheme(name)
  }
})

const currPrimaryColor = computed({
  get () {
    return appStore.primaryColor
  },
  set (color) {
    appStore.setPrimaryColor(color || '')
  }
})

const currCompSize = computed({
  get () {
    return appStore.componentsSize
  },
  set (size) {
    appStore.setComponentsSize(size)
  }
})

const langOptions = ref<{
  value: string
  label: string
}[]>([])

const colorList = ref([
  '#409eff', '#29D2F8', '#31FC49', '#3FF2B3', '#B52DFE', '#FC3243', '#FA3077', '#D1FC44', '#FEE529', '#FA9A2C'
])

const sizeOptions = ref([
  { label: '默认', value: '' },
  { label: '中', value: 'medium' },
  { label: '小', value: 'small' },
  { label: '迷你', value: 'mini' }
])

const currLanguage = computed(() => {
  return langOptions.value.find(item => item.value === appStore.language)
})

const currLangLabel = computed(() => {
  return currLanguage.value ? currLanguage.value.label : appStore.language
})

const githubUrl = computed(() => {
  return `https://github.com/x-extends/${appStore.packName}`
})

const giteeUrl = computed(() => {
  return `https://gitee.com/x-extends/${appStore.packName}`
})

const sysVersionOptions = computed(() => {
  return systemVersionList.value.map(item => {
    return {
      label: i18n.global.t(`app.version.${import.meta.env.VITE_APP_PACKAGE_NAME}.v${(item.i18nKey || item.version).replace('.', 'd')}`),
      value: item.version,
      disabled: !!item.isDisabled,
      className: item.isStop ? 'due-to-stop' : (item.isAbandoned ? 'about-to-stop' : '')
    }
  })
})

const selectSysVersion = computed(() => {
  return systemVersionList.value.find(item => item.version === currSysVersion.value)
})

const langClickEvent: VxePulldownEvents.OptionClick = ({ option }) => {
  appStore.setLanguage(option.value as any)
}

const togglePluginAppEvent = () => {
  showPluginApp.value = !showPluginApp.value
}

const toggleSystemMenuEvent = () => {
  showSystemMenu.value = !showSystemMenu.value
  appStore.readTopMenuMsgFlagVisible()
}

const vChangeEvent = () => {
  const selectSysItem = selectSysVersion.value
  if (selectSysItem) {
    const oldItem = systemVersionList.value.find(item => item.version === prevSysVersion.value)
    if (oldItem && oldItem.isSync && selectSysItem.isSync) {
      location.href = selectSysItem.url + location.hash
    } else {
      location.href = selectSysItem.url
    }
  }
}

const openPluginEvent = () => {
  appStore.readAuthMsgFlagVisible()
}

fetch(`${siteBaseUrl.value}/component-api/language-list.json?v=?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    langOptions.value = data
  })
})

fetch(`${siteBaseUrl.value}/component-api/system-list.json?v=?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    systemMenuList.value = data
  })
})

fetch(`${siteBaseUrl.value}/component-api/vxe-plugin-app-list.json?v=?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    pluginAppList.value = data.map(item => {
      item.label = i18n.global.t(`shopping.apps.${item.code}`)
      item.value = XEUtils.kebabCase(item.code)
      return item
    })
  })
})

if (isPluginDocs.value) {
  fetch(`${siteBaseUrl.value}/component-api/vxe-plugin-url.json?v=?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
    res.json().then(data => {
      pluginUrlMaps.value = data
    })
  })
  fetch(`${siteBaseUrl.value}/component-api/${import.meta.env.VITE_APP_PACKAGE_NAME}-plugin-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
    res.json().then(data => {
      systemVersionList.value = data
    })
  })
} else if (isExtendDocs.value) {
  fetch(`${siteBaseUrl.value}/component-api/${import.meta.env.VITE_APP_PACKAGE_NAME}-extend-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
    res.json().then(data => {
      systemVersionList.value = data
    })
  })
} else {
  fetch(`${siteBaseUrl.value}/component-api/${import.meta.env.VITE_APP_PACKAGE_NAME}-version.json?v=${import.meta.env.VITE_APP_DATE_NOW}`).then(res => {
    res.json().then(data => {
      systemVersionList.value = data
    })
  })
}
</script>

<style lang="scss" scoped>
.page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 50px;
  border-bottom: 1px solid var(--vxe-ui-docs-layout-border-color);
  .header-left,
  .header-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-shrink: 0;
  }
  .header-right {
    padding: 0 16px;
  }
  .header-middle {
    flex-grow: 1;
  }
  .system-menu-btn,
  .switch-theme,
  .switch-primary-color,
  .switch-size,
  .switch-lang-btn,
  .switch-lang,
  .switch-version,
  .free-donation,
  .plugin-shopping,
  .git-btn {
    flex-shrink: 0;
    margin-right: 16px;
  }
  .git-btn {
    font-size: 1.4em;
    margin-right: 8px;
  }
  .plugin-shopping {
    position: relative;
    color: #333;
    padding: 2px 15px;
    border-radius: 15px;
    background-color: #f6ca9d;
    user-select: none;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.unread {
      &::after {
        content: "";
        position: absolute;
        top: 2px;
        right: 8px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: red;
      }
    }
  }
}
.header-left {
  padding: 0 16px;
  .logo {
    text-decoration: none;
    color: var(--vxe-ui-docs-font-color);
    padding: 0 0.4em;
    font-weight: 700;
    font-size: 18px;
    padding: 0 8px;
    cursor: pointer;
    img {
      height: 20px;
      margin-right: 16px;
    }
    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }
  }
}
.switch-lang-item {
  display: flex;
  flex-direction: row;
  width: 120px;
}
.switch-lang-name {
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.switch-lang-icon {
  flex-shrink: 0;
  .github,
  .gitee {
    margin-left: 0.5em;
  }
  .github {
    color: var(--vxe-ui-font-color);
  }
  .gitee {
    color: var(--vxe-ui-status-error-color);
  }
}
.system-menu-btn-text {
  display: inline-block;
  position: relative;
  padding: 4px 8px 4px 8px;
  &.unread {
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background-color: red;
    }
  }
}
.system-menu-btn-icon {
  font-size: 12px;
}
.system-menu-wrapper {
  padding: 8px 0;
  margin: 0;
  list-style: none;
  width: 360px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  & > li {
    position: relative;
    line-height: 28px;
    padding: 0 16px;
    font-size: 14px;
    .enterprise {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      background-color: #f6ca9d;
      border-radius: 10px;
      font-size: 12px;
      padding: 0 8px;
      color: #606266;
      transform: scale(0.8);
    }
  }
}
.plugin-app-wrapper {
  padding: 8px 0;
  margin: 0;
  list-style: none;
  width: 180px;
  border: 1px solid var(--vxe-ui-docs-layout-border-color);
  & > li {
    position: relative;
    line-height: 28px;
    padding: 0 16px;
    font-size: 14px;
    .enterprise {
      display: inline-block;
      height: 22px;
      line-height: 22px;
      background-color: #f6ca9d;
      border-radius: 10px;
      font-size: 12px;
      padding: 0 8px;
      color: #606266;
      transform: scale(0.8);
    }
  }
}
</style>
