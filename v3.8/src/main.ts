import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './style/index.scss'
import './plugins'
import XEUtils from 'xe-utils'

import TableAPILink from './components/TableAPILink.vue'
import TableColumnAPILink from './components/TableColumnAPILink.vue'
import PagerAPILink from './components/PagerAPILink.vue'
import ToolbarAPILink from './components/ToolbarAPILink.vue'
import GridAPILink from './components/GridAPILink.vue'
import VirtualTreeAPILink from './components/VirtualTreeAPILink.vue'
import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeRender from './components/CodeRender.vue'
import CodeList from './components/CodeList.vue'
import DemoBlock from './components/DemoBlock.vue'

Vue.component(TableAPILink.name, TableAPILink)
Vue.component(TableColumnAPILink.name, TableColumnAPILink)
Vue.component(PagerAPILink.name, PagerAPILink)
Vue.component(ToolbarAPILink.name, ToolbarAPILink)
Vue.component(GridAPILink.name, GridAPILink)
Vue.component(VirtualTreeAPILink.name, VirtualTreeAPILink)
Vue.component(PreCode.name, PreCode)
Vue.component('CodeLight', CodeLight)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeList', CodeList)
Vue.component(DemoBlock.name, DemoBlock)

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
