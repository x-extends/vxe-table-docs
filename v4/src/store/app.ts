import { defineStore } from 'pinia'
import { VxeUI, VxeGlobalI18nLocale, VxeComponentSizeType } from 'vxe-pc-ui'
import tinycolor2 from 'tinycolor2'
import axios from 'axios'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

function updatePrimaryColor (color: string) {
  if (color) {
    document.documentElement.style.setProperty('--vxe-ui-font-primary-color', color)
    document.documentElement.style.setProperty('--vxe-ui-font-primary-tinge-color', tinycolor2(color).lighten(28).toString())
    document.documentElement.style.setProperty('--vxe-ui-font-primary-lighten-color', tinycolor2(color).lighten(6).toString())
    document.documentElement.style.setProperty('--vxe-ui-font-primary-darken-color', tinycolor2(color).darken(12).toString())
    document.documentElement.style.setProperty('--vxe-ui-font-primary-disabled-color', tinycolor2(color).lighten(15).toString())
  } else {
    document.documentElement.style.removeProperty('--vxe-ui-font-primary-color')
    document.documentElement.style.removeProperty('--vxe-ui-font-primary-tinge-color')
    document.documentElement.style.removeProperty('--vxe-ui-font-primary-lighten-color')
    document.documentElement.style.removeProperty('--vxe-ui-font-primary-darken-color')
    document.documentElement.style.removeProperty('--vxe-ui-font-primary-disabled-color')
  }
}

const currTheme = (localStorage.getItem('VXE_DOCS_THEME') || 'light') as 'dark' | 'light'
const currPrimaryColor = localStorage.getItem('VXE_DOCS_PRIMARY_COLOR') || ''
const currComponentsSize = (localStorage.getItem('VXE_DOCS_COMPONENTS_SIZE') || '') as VxeComponentSizeType
const currLanguage = (localStorage.getItem('VXE_DOCS_LANGUAGE') || 'zh-CN') as VxeGlobalI18nLocale

VxeUI.setLanguage(currLanguage)
setTimeout(() => {
  VxeUI.setTheme(currTheme)
})

if (currPrimaryColor) {
  updatePrimaryColor(currPrimaryColor)
}

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

let pluginAppPromise: Promise<any> | null = null
let simplifyaApiPromise: Promise<any> | null = null
let fullApiPromise: Promise<any> | null = null
const i18nPromise: Record<string, Promise<any> | null> = {}
const i18nStatus: Record<string, boolean> = {
  [currLanguage]: true
}
const apiLangPromise: Record<string, Promise<any> | null> = {}

const apiMapPromise: Record<string, Promise<any> | null> = {}

function handleLibVersion (libName: string) {
  return function (status: any) {
    const uiConf = status.versionConfig[libName]
    return `${libName}@${(uiConf ? uiConf[`v${status.docsVersion}-latest`] : '') || status.docsVersion}`
  }
}

export const useAppStore = defineStore('app', {
  state () {
    return {
      pageLoading: false,
      pageTitle: process.env.VUE_APP_PAGE_TITLE,
      packName: process.env.VUE_APP_PACKAGE_NAME,
      isExtendDocs: process.env.VUE_APP_IS_EXTEND_DOCS === 'true',
      isPluginDocs: process.env.VUE_APP_IS_PLUGIN_DOCS === 'true',
      theme: currTheme,
      primaryColor: currPrimaryColor,
      componentsSize: currComponentsSize,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      language: currLanguage,
      siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
      pluginBuyUrl: process.env.VUE_APP_PLUGIN_BUY_URL,
      pluginDocsUrl: process.env.VUE_APP_PLUGIN_DOCS_URL,
      compApiMaps: null as any,
      showAuthMsgFlag: localStorage.getItem('SHOW_AUTH_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
      showTopMenuMsgFlag: localStorage.getItem('SHOW_TOP_MENU_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
      systemConfig: {
        previewVersion: '',
        i18nVersion: '',
        v3Version: '',
        v4Version: ''
      },
      versionConfig: {},
      pluginAppList: [] as {
        value: string
        label: string
        code: string
        uri: string
        isEnterprise: boolean
      }[]
    }
  },
  getters: {
    vueCDNLib: handleLibVersion('vue'),
    uiCDNLib: handleLibVersion('vxe-pc-ui'),
    tableCDNLib: handleLibVersion('vxe-table'),
    designCDNLib: handleLibVersion('vxe-design'),
    pluginExportPdfCDNLib: handleLibVersion('@vxe-ui/plugin-export-pdf'),
    pluginExportXlsxCDNLib: handleLibVersion('@vxe-ui/plugin-export-xlsx'),
    pluginMenuCDNLib: handleLibVersion('@vxe-ui/plugin-menu'),
    pluginRenderAntdCDNLib: handleLibVersion('@vxe-ui/plugin-render-antd'),
    pluginRenderChartCDNLib: handleLibVersion('@vxe-ui/plugin-render-chart'),
    pluginRenderEchartsCDNLib: handleLibVersion('@vxe-ui/plugin-render-echarts'),
    pluginRenderElementCDNLib: handleLibVersion('@vxe-ui/plugin-render-element'),
    pluginRenderNaiveCDNLib: handleLibVersion('@vxe-ui/plugin-render-naive'),
    pluginRenderIViewCDNLib: handleLibVersion('@vxe-ui/plugin-render-iview'),
    pluginRenderWangEditorCDNLib: handleLibVersion('@vxe-ui/plugin-render-wangeditor'),
    pluginValidatorCDNLib: handleLibVersion('@vxe-ui/plugin-validator'),
    pluginShortcutKeyCDNLib: handleLibVersion('@vxe-ui/plugin-shortcut-key')
  },
  actions: {
    setPageLoading (status: boolean) {
      this.pageLoading = status
    },
    setTheme (name: 'dark' | 'light') {
      this.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_DOCS_THEME', name)
    },
    setPrimaryColor (color: string) {
      updatePrimaryColor(color)
      this.primaryColor = color
      localStorage.setItem('VXE_DOCS_PRIMARY_COLOR', color)
    },
    setComponentsSize (size: VxeComponentSizeType) {
      this.componentsSize = size
      localStorage.setItem('VXE_DOCS_COMPONENTS_SIZE', size || '')
    },
    setLanguage (language: VxeGlobalI18nLocale) {
      if (i18nStatus[language]) {
        this.language = language || 'zh-CN'
        VxeUI.setLanguage(language)
        i18n.global.locale = language
        localStorage.setItem('VXE_DOCS_LANGUAGE', language)
      } else {
        if (!i18nPromise[language]) {
          this.pageLoading = true
          i18nPromise[language] = axios.get(`${this.siteBaseUrl}/i18n/${language}.json?v=${process.env.VUE_APP_DATE_NOW}`).then((res) => {
            i18n.global.setLocaleMessage(language, res.data)
            this.language = language || 'zh-CN'
            VxeUI.setLanguage(language)
            i18n.global.locale = language
            localStorage.setItem('VXE_DOCS_LANGUAGE', language)
            i18nStatus[language] = true
            this.pageLoading = false
          }).catch(() => {
            i18nPromise[language] = null
            this.pageLoading = false
          })
        }
      }
    },
    getComponentI18nJSON () {
      if (!apiLangPromise[this.language]) {
        apiLangPromise[this.language] = axios.get(`${this.siteBaseUrl}/component-api/i18n/${this.language}.json?v=${this.systemConfig.i18nVersion || process.env.VUE_APP_DATE_NOW}`).then((res) => {
          i18n.global.mergeLocaleMessage(this.language, res.data)
        }).catch(() => {
          apiLangPromise[this.language] = null
        })
      }
      return apiLangPromise[this.language]
    },
    updateComponentApiJSON () {
      if (!simplifyaApiPromise) {
        simplifyaApiPromise = fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiKeys.json?v=?v=${this.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              const compApiMaps: Record<string, any[]> = {}
              data.forEach(name => {
                compApiMaps[name] = []
              })
              this.compApiMaps = compApiMaps
            }
          })
        }).catch(() => {
          simplifyaApiPromise = null
        })
      }
      return simplifyaApiPromise
    },
    updateAllComponentApiJSON () {
      if (!fullApiPromise) {
        fullApiPromise = fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${this.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              this.compApiMaps = Object.assign({}, this.compApiMaps, data)
            }
          })
        }).catch(() => {
          fullApiPromise = null
        })
      }
      return fullApiPromise
    },
    getComponentApiConf (apiName: string) {
      if (!apiMapPromise[apiName]) {
        apiMapPromise[apiName] = fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/api/vxe-${apiName}.json?v=?v=${this.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`)
          .then(res => res.json())
          .catch(() => {
            apiMapPromise[apiName] = null
            return []
          })
      }
      return apiMapPromise[apiName]
    },
    getPluginAppList () {
      if (!pluginAppPromise) {
        pluginAppPromise = fetch(`${this.siteBaseUrl}/component-api/vxe-plugin-app-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          res.json().then(data => {
            this.pluginAppList = data.map(item => {
              item.label = i18n.global.t(`shopping.apps.${item.code}`)
              item.value = XEUtils.kebabCase(item.code)
              return item
            })
          })
        }).catch(() => {
          pluginAppPromise = null
        })
      }
      return pluginAppPromise
    },
    readAuthMsgFlagVisible () {
      this.showAuthMsgFlag = false
      localStorage.setItem('SHOW_AUTH_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    readTopMenuMsgFlagVisible () {
      this.showTopMenuMsgFlag = false
      localStorage.setItem('SHOW_TOP_MENU_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    setSystemConfig (conf: any) {
      this.systemConfig = conf
    },
    setVersionConfig (conf: any) {
      this.versionConfig = conf
    }
  }
})
