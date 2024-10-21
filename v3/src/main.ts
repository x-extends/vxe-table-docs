import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './styles/index.scss'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeList from './components/CodeList.vue'
import CodeRender from './components/CodeRender.vue'
import CodeUseVersion from './components/CodeUseVersion.vue'
import ApiLink from './components/ApiLink.vue'

import axios from 'axios'
import XEUtils from 'xe-utils'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/es/style.css'

import VxeTable from 'vxe-table'
import 'vxe-table/es/style.css'

import enUS from 'vxe-pc-ui/lib/language/en-US'

import '@/views/table/base/format/demo2.format'
import '@/views/table/footer/footerFormat/demo2.footerFormat'
import '@/views/grid/footer/footerFormat/demo2.footerFormat'

import '@/views/global/formats/table/base/demo1.table.formats'

import '@/views/global/commands/table/base/demo1.table.commands'

import '@/views/global/menus/table/base/demo1.table.menus'

import '@/views/global/validators/form/base/demo1.form.validators'
import '@/views/global/validators/table/base/demo1.table.validators'

import '@/views/global/renderer/table/default/myCellLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellImg/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellAmount/demo1.table.renderer'

import '@/views/global/renderer/table/edit/myEditAmount/demo1.table.renderer'
import '@/views/global/renderer/table/edit/myEditPulldown/demo1.table.renderer'

import '@/views/global/renderer/table/expand/myExpandList/demo1.table.renderer'
import '@/views/global/renderer/table/expand/myExpandTable/demo1.table.renderer'

import '@/views/global/renderer/table/toolbar/button/demo1.table.renderer'
import '@/views/global/renderer/table/toolbar/tool/demo1.table.renderer'

import '@/views/global/renderer/table/filter/myFilterInput/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterComplex/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterContent/demo1.table.renderer'

import '@/views/global/renderer/table/empty/myEmptyImg/demo1.table.renderer'
import '@/views/global/renderer/table/empty/myEmptyText/demo1.table.renderer'

import '@/views/global/renderer/form/item/myItemAmount/demo1.form.renderer'
import '@/views/global/renderer/form/item/myItemUpload/demo1.form.renderer'

import '@/views/global/renderer/form-design/widget/myInputWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myTextareaWidget/demo1.form-design.renderer'

import DemoUserSelectPulldown from '@/views/table/editTemplate/vxe-pulldown/DemoUserSelectPulldown.vue'
import DemoRoleSelectPulldown from '@/views/table/editTemplate/vxe-pulldown/DemoRoleSelectPulldown.vue'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = 'https://api.vxetable.cn/demo'

VxeUI.setI18n('en-US', enUS)

Vue.component('PreCode', PreCode)
Vue.component('CodeLight', CodeLight)
Vue.component('CodeList', CodeList)
Vue.component('CodeRender', CodeRender)
Vue.component('CodeUseVersion', CodeUseVersion)
Vue.component('ApiLink', ApiLink)

Vue.component('DemoUserSelectPulldown', DemoUserSelectPulldown)
Vue.component('DemoRoleSelectPulldown', DemoRoleSelectPulldown)

Vue.use(VxeUI)
Vue.use(VxeTable)

Vue.config.productionTip = false

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.setLocaleMessage(i18n.locale, res.data)
}).catch(e => e).then(() => {
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App)
  }).$mount('#app')
})
