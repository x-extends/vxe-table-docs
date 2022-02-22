import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    docsVersion: '2',
    baseApiUrl: process.env.VUE_APP_MAIN_URL,
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
