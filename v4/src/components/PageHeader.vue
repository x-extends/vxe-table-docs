<template>
  <div class="page-header">
    <div class="header-left">
      <a class="logo" :href="siteBaseUrl">
        <img src="/logo.png">
        <span class="title">{{ appStore.pageTitle }}</span>
      </a>
      <a v-if="appStore.packName === 'vxe-table'" href='https://gitee.com/xuliangzhan/vxe-table/stargazers'>
        <img src='https://gitee.com/xuliangzhan/vxe-table/badge/star.svg?theme=gvp' alt='star'>
      </a>
      <a v-else :href='`https://gitee.com/x-extends/${appStore.packName}/stargazers`'>
        <img :src='`https://gitee.com/x-extends/${appStore.packName}/badge/star.svg?theme=gvp`' alt='star'>
      </a>
      <a :href="`http://npm-stat.com/charts.html?package=${appStore.packName}`">
        <img :src="`https://img.shields.io/npm/dm/${appStore.packName}.svg`">
      </a>
      <a :href="`https://github.com/x-extends/${appStore.packName}/stargazers`">
        <img :src="`https://img.shields.io/github/stars/x-extends/${appStore.packName}.svg`">
      </a>
    </div>
    <div class="header-middle"></div>
    <div class="header-right">
      <vxe-pulldown v-model="showSystemMenu" show-popup-shadow>
        <vxe-button class="system-menu-btn" mode="text" @click="toggleSystemMenuEvent">
          <vxe-icon class="system-menu-btn-icon" name="arrow-down"></vxe-icon>
          <span :class="['system-menu-btn-text', {'unread': appStore.showTopMenuMsgFlag}]">{{ $t('app.header.moreProducts') }}</span>
        </vxe-button>

        <template #dropdown>
          <ul class="system-menu-wrapper">
            <li v-for="(item, index) in systemMenuList" :key="index">
              <vxe-link target="_blank" :href="item.href" :content="item.content"></vxe-link>
              <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
            </li>
          </ul>
        </template>
      </vxe-pulldown>

      <vxe-select v-if="!appStore.isPluginDocs" v-model="currSysVersion" class="switch-version" size="mini" :options="sysVersionOptions" @change="vChangeEvent"></vxe-select>

      <vxe-switch
        class="link switch-theme"
        v-model="currTheme"
        size="mini"
        open-value="light"
        :open-label="$t('app.base.light')"
        close-value="dark"
        :close-label="$t('app.base.dark')">
      </vxe-switch>

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

      <a v-if="appStore.isPluginDocs" :class="['plugin-shopping', {'unread': appStore.showAuthMsgFlag}]" :href="appStore.pluginBuyUrl" target="_blank" @click="openPluginEvent">{{ $t('app.header.buyPlugin') }}</a>
      <a v-else :class="['plugin-shopping', {'unread': appStore.showAuthMsgFlag}]" :href="appStore.pluginBuyUrl" target="_blank" @click="openPluginEvent">{{ $t('app.header.pluginStore') }}</a>

      <vxe-link v-if="!appStore.isPluginDocs" class="free-donation" status="success" :router-link="{name: 'FreeDonation'}" :content="$t('app.header.supportUs')"></vxe-link>

      <vxe-link class="git-btn" status="error" :href="giteeUrl" icon="vxe-icon-gitee-fill" target="_blank"></vxe-link>
      <vxe-link class="git-btn" :href="githubUrl" icon="vxe-icon-github-fill" target="_blank"></vxe-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'
import { VxePulldownEvents } from 'vxe-pc-ui'
import i18n from '@/i18n'

const appStore = useAppStore()
const siteBaseUrl = computed(() => appStore.siteBaseUrl)

const showSystemMenu = ref(false)
const systemMenuList = ref<any[]>()

const currSysVersion = ref(process.env.VUE_APP_VXE_VERSION)
const systemVersionList = ref<any[]>([])

const currTheme = computed({
  get () {
    return appStore.theme
  },
  set (name) {
    appStore.setTheme(name)
  }
})

const langOptions = ref<{
  value: string
  label: string
}[]>([])

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
  if (appStore.packName === 'vxe-table') {
    return 'https://gitee.com/xuliangzhan/vxe-table'
  }
  return `https://gitee.com/x-extends/${appStore.packName}`
})

const sysVersionOptions = computed(() => {
  return systemVersionList.value.map(item => {
    return {
      label: i18n.global.t(`app.version.${process.env.VUE_APP_PACKAGE_NAME}.v${item.version.replace('.', 'd')}`),
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

const toggleSystemMenuEvent = () => {
  showSystemMenu.value = !showSystemMenu.value
  appStore.readTopMenuMsgFlagVisible()
}

const vChangeEvent = () => {
  const selectSysItem = selectSysVersion.value
  if (selectSysItem) {
    location.href = selectSysItem.url
  }
}

const openPluginEvent = () => {
  appStore.readAuthMsgFlagVisible()
}

fetch(`${siteBaseUrl.value}/component-api/language-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    langOptions.value = data
  })
})

fetch(`${siteBaseUrl.value}/component-api/system-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    systemMenuList.value = data
  })
})

fetch(`${siteBaseUrl.value}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  res.json().then(data => {
    systemVersionList.value = data
  })
})
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
  .switch-lang-btn,
  .switch-lang,
  .switch-version,
  .free-donation,
  .plugin-shopping,
  .git-btn {
    flex-shrink: 0;
    margin-right: 20px;
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
</style>
