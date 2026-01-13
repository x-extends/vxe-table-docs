import Vue from 'vue'
import Vuex from 'vuex'
import { VXETable } from 'vxe-table'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: '',
    serveTY: new Date().getFullYear(),
    packName: process.env.VUE_APP_PACKAGE_NAME,
    pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/table/`,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    apiBaseUrl: process.env.VUE_APP_SERVEICE_API_URL,
    pubApiBaseUrl: process.env.VUE_APP_PUBLIC_API_URL,
    resBaseUrl: process.env.VUE_APP_RES_URL,
    siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
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
