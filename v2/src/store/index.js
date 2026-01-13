import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packName: process.env.VUE_APP_PACKAGE_NAME,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    apiBaseUrl: process.env.VUE_APP_SERVEICE_API_URL,
    pubApiBaseUrl: process.env.VUE_APP_PUBLIC_API_URL,
    resBaseUrl: process.env.VUE_APP_RES_URL,
    siteBaseUrl: process.env.VUE_APP_SITE_BASE_URL,
    showSupportQQ: false
  },
  mutations: {
    setSupportQQ (state, visible) {
      state.showSupportQQ = !!visible
    }
  },
  actions: {
  },
  modules: {
  }
})
