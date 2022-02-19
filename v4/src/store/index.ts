import { createStore } from 'vuex'

export default createStore({
  state: {
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
