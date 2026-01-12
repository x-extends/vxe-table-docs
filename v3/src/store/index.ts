import Vue from 'vue'
import Vuex from 'vuex'
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
let fullsimplifyaApiPromise: Promise<any> | null = null
const i18nPromise: Record<string, Promise<any> | null> = {}
const i18nStatus: Record<string, boolean> = {
  [currLanguage]: true
}

const apiLangPromise: Record<string, Promise<any> | null> = {}

const apiMapPromise: Record<string, Promise<any> | null> = {}

Vue.use(Vuex)

function handleLibVersion (libName: string, version?: string) {
  return function (status: any) {
    const uiConf = status.versionConfig[libName]
    return `${libName}@${(uiConf ? uiConf[`v${version || status.docsVersion}-latest`] : '') || version || status.docsVersion}`
  }
}

export default new Vuex.Store({
  state: {
    pageLoading: false,
    pageTitle: process.env.VUE_APP_PAGE_TITLE,
    packName: process.env.VUE_APP_PACKAGE_NAME,
    isExtendDocs: process.env.VUE_APP_IS_EXTEND_DOCS === 'true',
    isPluginDocs: process.env.VUE_APP_IS_PLUGIN_DOCS === 'true',
    isUtilDocs: process.env.VUE_APP_IS_UTIL_DOCS === 'true',
    theme: currTheme,
    primaryColor: currPrimaryColor,
    componentsSize: currComponentsSize,
    docsVersion: '3',
    serveTY: new Date().getFullYear(),
    language: currLanguage,
    apiBaseUrl: process.env.VUE_APP_SERVEICE_API_URL,
    testApiBaseUrl: process.env.VUE_APP_TEST_API_URL,
    resBaseUrl: process.env.VUE_APP_RES_URL,
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
  },
  getters: {
    utilCDNLib: handleLibVersion('xe-utils', process.env.VUE_APP_UTIL_VERSION),
    vueCDNLib: handleLibVersion('vue'),
    uiCDNLib: handleLibVersion('vxe-pc-ui'),
    tableCDNLib: handleLibVersion('vxe-table'),
    designCDNLib: handleLibVersion('vxe-design'),
    ganttCDNLib: handleLibVersion('vxe-gantt'),
    pluginExportPdfCDNLib: handleLibVersion('@vxe-ui/plugin-export-pdf'),
    pluginExportXlsxCDNLib: handleLibVersion('@vxe-ui/plugin-export-xlsx'),
    pluginMenuCDNLib: handleLibVersion('@vxe-ui/plugin-menu'),
    pluginRenderAntdCDNLib: handleLibVersion('@vxe-ui/plugin-render-antd'),
    pluginRenderChartCDNLib: handleLibVersion('@vxe-ui/plugin-render-chart'),
    pluginRenderEchartsCDNLib: handleLibVersion('@vxe-ui/plugin-render-echarts'),
    pluginRenderElementCDNLib: handleLibVersion('@vxe-ui/plugin-render-element'),
    pluginRenderNaiveCDNLib: handleLibVersion('@vxe-ui/plugin-render-naive'),
    pluginRenderIViewCDNLib: handleLibVersion('@vxe-ui/plugin-render-iview'),
    pluginRenderArcoCDNLib: handleLibVersion('@vxe-ui/plugin-render-arco'),
    pluginRenderTDesignCDNLib: handleLibVersion('@vxe-ui/plugin-render-tdesign'),
    pluginRenderWangEditorCDNLib: handleLibVersion('@vxe-ui/plugin-render-wangeditor'),
    pluginValidatorCDNLib: handleLibVersion('@vxe-ui/plugin-validator'),
    pluginShortcutKeyCDNLib: handleLibVersion('@vxe-ui/plugin-shortcut-key')
  },
  mutations: {
    setPageLoading (state, status: boolean) {
      state.pageLoading = status
    },
    setTheme (state, name: 'dark' | 'light') {
      state.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_DOCS_THEME', name)
    },
    setPrimaryColor (state, color: string) {
      updatePrimaryColor(color)
      state.primaryColor = color
      localStorage.setItem('VXE_DOCS_PRIMARY_COLOR', color)
    },
    setComponentsSize (state, size: VxeComponentSizeType) {
      state.componentsSize = size
      localStorage.setItem('VXE_DOCS_COMPONENTS_SIZE', size || '')
    },
    setLanguage (state, language: VxeGlobalI18nLocale) {
      if (i18nStatus[language]) {
        state.language = language || 'zh-CN'
        VxeUI.setLanguage(language)
        i18n.locale = language
        localStorage.setItem('VXE_DOCS_LANGUAGE', language)
      } else {
        if (!i18nPromise[language]) {
          state.pageLoading = true
          i18nPromise[language] = axios.get(`${this.resBaseUrl}/i18n/${language}.json?v=${process.env.VUE_APP_DATE_NOW}`).then((res) => {
            i18n.setLocaleMessage(language, res.data)
            state.language = language || 'zh-CN'
            VxeUI.setLanguage(language)
            i18n.locale = language
            localStorage.setItem('VXE_DOCS_LANGUAGE', language)
            i18nStatus[language] = true
            state.pageLoading = false
          }).catch(() => {
            i18nPromise[language] = null
            state.pageLoading = false
          })
        }
      }
    },
    readAuthMsgFlagVisible (state) {
      state.showAuthMsgFlag = false
      localStorage.setItem('SHOW_AUTH_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    readTopMenuMsgFlagVisible (state) {
      state.showTopMenuMsgFlag = false
      localStorage.setItem('SHOW_TOP_MENU_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    setSystemConfig (state, conf: any) {
      state.systemConfig = conf
    },
    setVersionConfig (state, conf: any) {
      state.versionConfig = conf
    },
    setCompApiMaps (state, conf: any) {
      state.compApiMaps = conf
    }
  },
  actions: {
    getComponentApiConf ({ state }, apiName: string) {
      if (!apiMapPromise[apiName]) {
        apiMapPromise[apiName] = fetch(`${state.resBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/api/vxe-${apiName}.json?v=?v=${state.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`)
          .then(res => res.json()).catch(() => {
            apiMapPromise[apiName] = null
            return []
          })
      }
      return apiMapPromise[apiName]
    },
    getComponentI18nJSON ({ state }) {
      if (!apiLangPromise[state.language]) {
        apiLangPromise[state.language] = axios.get(`${state.resBaseUrl}/component-api/i18n/${state.language}.json?v=${state.systemConfig[state.systemConfig.i18nVersion] || process.env.VUE_APP_DATE_NOW}`).then((res) => {
          i18n.mergeLocaleMessage(state.language, res.data)
        }).catch(() => {
          apiLangPromise[state.language] = null
        })
      }
      return apiLangPromise[state.language]
    },
    updateComponentApiJSON ({ state, commit }) {
      if (!simplifyaApiPromise) {
        simplifyaApiPromise = fetch(`${state.resBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiKeys.json?v=?v=${state.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              const compApiMaps: Record<string, any[]> = {}
              data.forEach(name => {
                compApiMaps[name] = []
              })
              commit('setCompApiMaps', compApiMaps)
            }
          })
        }).then(() => {
          simplifyaApiPromise = null
        })
      }
      return simplifyaApiPromise
    },
    getPluginAppList ({ state }) {
      if (!pluginAppPromise) {
        pluginAppPromise = fetch(`${state.resBaseUrl}/component-api/vxe-plugin-app-list.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          res.json().then(data => {
            state.pluginAppList = data.map(item => {
              item.label = i18n.t(`shopping.apps.${item.code}`)
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
    updateAllComponentApiJSON ({ state, commit }) {
      if (!fullsimplifyaApiPromise) {
        fullsimplifyaApiPromise = fetch(`${state.resBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${state.systemConfig[`v${process.env.VUE_APP_VXE_VERSION}Version`] || process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              commit('setCompApiMaps', Object.assign({}, state.compApiMaps, data))
            }
          })
        }).then(() => {
          fullsimplifyaApiPromise = null
        })
      }
      return fullsimplifyaApiPromise
    }
  },
  modules: {
  }
})
