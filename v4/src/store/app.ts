import { defineStore } from 'pinia'
import { VxeUI } from 'vxe-pc-ui'
import axios from 'axios'
import i18n from '@/i18n'
import XEUtils from 'xe-utils'

const currTheme = (localStorage.getItem('VXE_DOCS_THEME') || 'light') as 'dark' | 'light'
const currLanguage = (localStorage.getItem('VXE_DOCS_LANGUAGE') || 'zh-CN') as 'zh-CN' | 'zh-TC' | 'en-US'

VxeUI.setLanguage(currLanguage)
setTimeout(() => {
  VxeUI.setTheme(currTheme)
})

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

let apiPromise: Promise<any> | null = null
const i18nPromise: Record<string, Promise<any> | null> = {}
const i18nStatus: Record<string, boolean> = {
  [currLanguage]: true
}

export const useAppStore = defineStore('app', {
  state () {
    return {
      pageLoading: false,
      pageTitle: process.env.VUE_APP_PAGE_TITLE,
      packName: process.env.VUE_APP_PACKAGE_NAME,
      isPluginDocs: process.env.VUE_APP_IS_PLUGIN_DOCS === 'true',
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      language: currLanguage,
      siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
      pluginBuyUrl: process.env.VUE_APP_PLUGIN_BUY_URL,
      pluginDocsUrl: process.env.VUE_APP_PLUGIN_DOCS_URL,
      compApiMaps: null as any,
      showAuthMsgFlag: localStorage.getItem('SHOW_AUTH_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd'),
      showTopMenuMsgFlag: localStorage.getItem('SHOW_TOP_MENU_MSG_FLAG') !== XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    }
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
    setLanguage (language: 'zh-CN' | 'zh-TC' | 'en-US') {
      if (i18nStatus[language]) {
        this.language = language || 'zh-CN'
        VxeUI.setLanguage(language)
        i18n.global.locale = language
        localStorage.setItem('VXE_DOCS_LANGUAGE', language)
      } else {
        if (!i18nPromise[language]) {
          this.pageLoading = true
          i18nPromise[language] = axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${language}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
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
    updateComponentApiJSON () {
      if (!apiPromise) {
        apiPromise = fetch(`${this.siteBaseUrl}/component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
          return res.json().then(data => {
            if (data) {
              this.compApiMaps = data
            }
          })
        }).then(() => {
          apiPromise = null
        })
      }
      return apiPromise
    },
    readAuthMsgFlagVisible () {
      this.showAuthMsgFlag = false
      localStorage.setItem('SHOW_AUTH_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    },
    readTopMenuMsgFlagVisible () {
      this.showTopMenuMsgFlag = false
      localStorage.setItem('SHOW_TOP_MENU_MSG_FLAG', XEUtils.toDateString(new Date(), 'yyyy-MM-dd'))
    }
  }
})
