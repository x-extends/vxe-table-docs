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
      baseApiUrl: process.env.VUE_APP_MAIN_URL,
      pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/table/`,
      pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
      serveApiUrl: 'https://api.vxetable.cn/demo',
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
