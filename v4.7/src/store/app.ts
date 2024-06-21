import { defineStore } from 'pinia'
import { VxeUI } from 'vxe-pc-ui'
import i18n from '@/i18n'

const currTheme = (localStorage.getItem('VXE_DOCS_THEME') || 'light') as 'dark' | 'light'
const currLanguage = (localStorage.getItem('VXE_DOCS_LANGUAGE') || 'zh-CN') as 'zh-CN' | 'zh-TC' | 'en-US'

VxeUI.setTheme(currTheme)
VxeUI.setLanguage(currLanguage)

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

let apiPromise: Promise<any> | null = null

export const useAppStore = defineStore('app', {
  state () {
    return {
      pageTitle: process.env.VUE_APP_PAGE_TITLE,
      packName: process.env.VUE_APP_PACKAGE_NAME,
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      language: currLanguage,
      siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
      pluginApiUrl: `${process.env.VUE_APP_SITE_BASE_URL}plugins/`,
      compApiMaps: null as any
    }
  },
  actions: {
    setTheme (name: 'dark' | 'light') {
      this.theme = name || 'light'
      VxeUI.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_DOCS_THEME', name)
    },
    setLanguage (language: 'zh-CN' | 'zh-TC' | 'en-US') {
      this.language = language || 'zh-CN'
      VxeUI.setLanguage(language)
      i18n.global.locale = language
      localStorage.setItem('VXE_DOCS_LANGUAGE', language)
    },
    updateComponentApiJSON () {
      if (!apiPromise) {
        apiPromise = fetch(`${this.siteBaseUrl}component-api/${process.env.VUE_APP_PACKAGE_NAME}-v${process.env.VUE_APP_VXE_VERSION}/apiMaps.json?v=?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
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
    }
  }
})
