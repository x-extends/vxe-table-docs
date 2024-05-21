import Vue from 'vue'
import Vuex from 'vuex'
import { VXETable } from 'vxe-table'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: '',
    docsVersion: '3',
    serveTY: new Date().getFullYear(),
    baseApiUrl: process.env.VUE_APP_MAIN_URL,
    pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/`,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    serveApiUrl: 'https://api.vxetable.cn/demo',
    showSupportQQ: false
  },
  mutations: {
    setTheme (state, name) {
      state.theme = name
      VXETable.setConfig({
        theme: name
      })
      document.documentElement.setAttribute('vxe-docs-theme', name)
      localStorage.setItem('VXE_THEME', name)
    },
    setSupportQQ (state, visible) {
      state.showSupportQQ = !!visible
    }
  },
  actions: {
  },
  modules: {
  }
})
