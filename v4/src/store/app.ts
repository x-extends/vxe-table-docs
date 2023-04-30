import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state () {
    return {
      docsVersion: '4',
      baseApiUrl: process.env.VUE_APP_MAIN_URL,
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
