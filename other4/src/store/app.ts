import { defineStore } from 'pinia'
import { VXETable } from 'vxe-table'

const currTheme: any = localStorage.getItem('VXE_THEME') || 'default'

VXETable.config({
  theme: currTheme
})

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

export const useAppStore = defineStore('app', {
  state () {
    return {
      theme: currTheme,
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      siteBaseUrl: import.meta.env.VITE_APP_SITE_BASE_URL,
      pluginDocsUrl: `${import.meta.env.VITE_APP_SITE_BASE_URL}/pluginDocs/table/`,
      pluginApiUrl: `${import.meta.env.VITE_APP_SITE_BASE_URL}/plugins/`,
      pubApiBaseUrl: 'https:/apipub.vxeui.com/publicapi',
      showSupportQQ: false
    }
  },
  actions: {
    setTheme (name) {
      this.theme = name
      VXETable.config({
        theme: name
      })
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    },
    setSupportQQ (visible) {
      this.showSupportQQ = !!visible
    }
  }
})
