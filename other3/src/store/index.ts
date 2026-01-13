import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docsVersion: '3',
    serveTY: new Date().getFullYear(),
    pluginDocsUrl: `${process.env.VUE_APP_MAIN_URL}pluginDocs/table/`,
    pluginApiUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
    pubApiBaseUrl: 'https:/apipub.vxeui.com/publicapi',
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
