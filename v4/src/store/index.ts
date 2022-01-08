import { createStore } from 'vuex'

export default createStore({
  state: {
    baseUrl: process.env.VUE_APP_MAIN_URL,
    pluginUrl: `${process.env.VUE_APP_MAIN_URL}plugins/`,
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
