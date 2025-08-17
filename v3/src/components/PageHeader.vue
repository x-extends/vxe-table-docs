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
              <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
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
              <span v-if="item.isEnterprise" class="enterprise">{{ $t('app.header.enterpriseVersion') }}</span>
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

      <vxe-color-picker class="switch-primary-color" v-model="currPrimaryColor" :colors="colorList" type="rgb" size="mini" show-eye-dropper click-to-copy></vxe-color-picker>

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

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
import { tablePluginDocsUrl } from '@/common/nav'
import XEUtils from 'xe-utils'

export default Vue.extend({
  inject: {
    pluginType: {
      default: ''
    }
  },
  data () {
    return {
      tablePluginDocsUrl,

      showPluginApp: false,
      pluginAppList: [] as {
        value: string
        label: string
        code: string
        uri: string
        isEnterprise: boolean
      }[],

      showSystemMenu: false,
      systemMenuList: [] as any[],

      prevSysVersion: process.env.VUE_APP_VXE_VERSION as string,
      currSysVersion: process.env.VUE_APP_VXE_VERSION as string,
      systemVersionList: [] as any[],

      langOptions: [] as {
        value: string
        label: string
      }[],

      colorList: [
        '#409eff', '#29D2F8', '#31FC49', '#3FF2B3', '#B52DFE', '#FC3243', '#FA3077', '#D1FC44', '#FEE529', '#FA9A2C'
      ],

      sizeOptions: [
        { label: '默认', value: '' },
        { label: '中', value: 'medium' },
        { label: '小', value: 'small' },
        { label: '迷你', value: 'mini' }
      ],

      pluginUrlMaps: {} as Record<string, string>
    }
  },
  computed: {
    ...mapState([
      'packName',
      'theme',
      'primaryColor',
      'componentsSize',
      'language',
      'pageTitle',
      'isExtendDocs',
      'isPluginDocs',
      'siteBaseUrl',
      'pluginBuyUrl',
      'showTopMenuMsgFlag',
      'showAuthMsgFlag'
    ]),
    ...({} as {
      pluginType () : string
      theme(): string
      primaryColor(): string
      componentsSize(): string
      packName(): string
      language(): string
      siteBaseUrl(): string
      pageTitle(): string
      isExtendDocs(): boolean
      isPluginDocs(): boolean
      pluginBuyUrl(): string
      showTopMenuMsgFlag(): boolean
      showAuthMsgFlag(): boolean
    }),
    currBuyPluginBUrl () {
      const { pluginType, pluginUrlMaps } = this
      if (pluginUrlMaps[pluginType]) {
        return `${this.pluginBuyUrl}#${pluginUrlMaps[pluginType]}`
      }
      return this.pluginBuyUrl
    },
    currBuyPluginName () {
      const appItem = this.pluginAppList.find(item => item.value === this.pluginType)
      return appItem ? appItem.label : this.pluginType
    },
    currTheme: {
      get () {
        return this.theme
      },
      set (name) {
        this.setTheme(name)
      }
    } as any,
    currPrimaryColor: {
      get () {
        return this.primaryColor
      },
      set (color) {
        this.setPrimaryColor(color || '')
      }
    } as any,
    currCompSize: {
      get () {
        return this.componentsSize
      },
      set (size) {
        this.setComponentsSize(size)
      }
    } as any,
    currLanguage (): any {
      return this.langOptions.find(item => item.value === this.language)
    },
    currLangLabel (this: any) {
      return this.currLanguage ? this.currLanguage.label : this.language
    },
    githubUrl () {
      return `https://github.com/x-extends/${this.packName}`
    },
    giteeUrl () {
      return `https://gitee.com/x-extends/${this.packName}`
    },
    sysVersionOptions () {
      return this.systemVersionList.map(item => {
        return {
          label: this.$t(`app.version.${process.env.VUE_APP_PACKAGE_NAME}.v${(item.i18nKey || item.version).replace('.', 'd')}`),
          value: item.version,
          disabled: !!item.isDisabled,
          className: item.isStop ? 'due-to-stop' : (item.isAbandoned ? 'about-to-stop' : '')
        }
      })
    },
    selectSysVersion (): any {
      return this.systemVersionList.find(item => item.version === this.currSysVersion)
    }

  },
  methods: {
    ...mapMutations([
      'setTheme',
      'setLanguage',
      'setPrimaryColor',
      'setComponentsSize',
      'readTopMenuMsgFlagVisible',
      'readAuthMsgFlagVisible'
    ]),
    langClickEvent (this: any, { option }: any) {
      this.setLanguage(option.value as any)
    },
    togglePluginAppEvent () {
      this.showPluginApp = !this.showPluginApp
    },
    toggleSystemMenuEvent  (this: any) {
      this.showSystemMenu = !this.showSystemMenu
      this.readTopMenuMsgFlagVisible()
    },
    vChangeEvent (this: any) {
      const selectSysItem = this.selectSysVersion
      if (selectSysItem) {
        const oldItem = this.systemVersionList.find(item => item.version === this.prevSysVersion)
        if (oldItem && oldItem.isSync && selectSysItem.isSync) {
          location.href = selectSysItem.url + location.hash
        } else {
          location.href = selectSysItem.url
        }
      }
    },
    openPluginEvent (this: any) {
      this.readAuthMsgFlagVisible()
    }
  },
  created () {
    fetch(`${this.siteBaseUrl}/component-api/language-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        this.langOptions = data
      })
    })

    fetch(`${this.siteBaseUrl}/component-api/system-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        this.systemMenuList = data
      })
    })

    fetch(`${this.siteBaseUrl}/component-api/vxe-plugin-app-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
      res.json().then(data => {
        this.pluginAppList = data.map(item => {
          item.label = this.$t(`shopping.apps.${item.code}`)
          item.value = XEUtils.kebabCase(item.code)
          return item
        })
      })
    })

    if (this.isPluginDocs) {
      fetch(`${this.siteBaseUrl}/component-api/vxe-plugin-url.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
        res.json().then(data => {
          this.pluginUrlMaps = data
        })
      })
      fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-plugin-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
        res.json().then(data => {
          this.systemVersionList = data
        })
      })
    } else if (this.isExtendDocs) {
      fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-extend-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
        res.json().then(data => {
          this.systemVersionList = data
        })
      })
    } else {
      fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-version.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
        res.json().then(data => {
          this.systemVersionList = data
        })
      })
    }
  }
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
