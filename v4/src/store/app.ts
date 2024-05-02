import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state () {
    return {
      docsVersion: '4',
      serveTY: new Date().getFullYear(),
      baseApiUrl: process.env.VUE_APP_MAIN_URL,
      pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/`,
      pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
      serveApiUrl: 'https://api.vxetable.cn/demo',
      showSupportQQ: false
    }
  },
  actions: {
    setSupportQQ (visible) {
      this.showSupportQQ = !!visible
    }
  }
})
