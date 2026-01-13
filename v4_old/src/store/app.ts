import { defineStore } from 'pinia'
import { VXETable } from 'vxe-table'

const currTheme: any = localStorage.getItem('VXE_THEME') || 'default'

VXETable.setTheme(currTheme)

document.documentElement.setAttribute('vxe-docs-theme', currTheme)

export const useAppStore = defineStore('app', {
  state () {
    return {
      theme: currTheme,
      serveTY: new Date().getFullYear(),
      packName: import.meta.env.VITE_APP_PACKAGE_NAME,
      resBaseUrl: import.meta.env.VITE_APP_RES_URL,
      siteBaseUrl: import.meta.env.VITE_APP_SITE_BASE_URL,
      pluginDocsUrl: `${import.meta.env.VITE_APP_SITE_BASE_URL}/pluginDocs/table/`,
      pluginApiUrl: `${import.meta.env.VITE_APP_SITE_BASE_URL}/plugins/`,
      pubApiBaseUrl: import.meta.env.VITE_APP_PUBLIC_API_URL,
      apiBaseUrl: import.meta.env.VITE_APP_SERVEICE_API_URL,
      showSupportQQ: false
    }
  },
  actions: {
    setTheme (name: any) {
      this.theme = name || 'default'
      VXETable.setTheme(name)
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    },
    setSupportQQ (visible: boolean) {
      this.showSupportQQ = !!visible
    }
  }
})
