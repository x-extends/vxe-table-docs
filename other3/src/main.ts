import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'font-awesome/css/font-awesome.css'
import './style/index.scss'
import './plugins'
import XEUtils from 'xe-utils'

import CodeLight from './components/CodeLight.vue'
import CodeRender from './components/CodeRender.vue'
import CodeList from './components/CodeList.vue'

Vue.component('CodeLight', CodeLight)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeList', CodeList)

// **************** （注意：该全局变量仅用于开发环境调试） ****************
if (process.env.NODE_ENV === 'development') {
  (window as any).XEUtils = XEUtils
}
// **************** （注意：该全局变量仅用于开发环境调试） ****************

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
