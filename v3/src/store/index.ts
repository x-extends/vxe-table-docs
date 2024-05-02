import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docsVersion: '3',
    serveTY: new Date().getFullYear(),
    baseApiUrl: process.env.VUE_APP_MAIN_URL,
    pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/`,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    serveApiUrl: 'https://api.vxetable.cn/demo',
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
