import { createApp } from 'vue'
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
import 'vxe-pc-ui/lib/style.css'

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

import '@/views/table/base/format/demo2.format'

import '@/views/global/formats/table/base/demo1.table.formats'

import '@/views/global/commands/table/base/demo1.table.commands'

import '@/views/global/menus/table/base/demo1.table.menus'

import '@/views/global/renderer/table/default/myLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myImg/demo1.table.renderer'

import '@/views/global/renderer/table/edit/editInput/demo1.table.renderer'
import '@/views/global/renderer/table/edit/editDownTable/demo1.table.renderer'

import '@/views/global/renderer/table/expand/myExpandList/demo1.table.renderer'
import '@/views/global/renderer/table/expand/myExpandTable/demo1.table.renderer'

import '@/views/global/renderer/table/toolbar/button/demo1.table.renderer'
import '@/views/global/renderer/table/toolbar/tool/demo1.table.renderer'

import '@/views/global/renderer/table/filter/filterInput/demo1.table.renderer'
import '@/views/global/renderer/table/filter/filterComplex/demo1.table.renderer'

import '@/views/global/renderer/table/empty/myEmpty/demo1.table.renderer'
import '@/views/global/renderer/table/empty/myNotData/demo1.table.renderer'

import '@/views/global/renderer/form/item/editInput/demo1.form.renderer'
import '@/views/global/renderer/form/item/editUpload/demo1.form.renderer'

import enUS from 'vxe-pc-ui/packages/language/en-US'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = 'https://api.vxetable.cn/demo'

VxeUI.setI18n('en-US', enUS)

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component('CodeUseVersion', CodeUseVersion)
app.component('ApiLink', ApiLink)

app.use(VxeUI)
app.use(VxeTable)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}i18n/${i18n.global.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.global.setLocaleMessage(i18n.global.locale, res.data)
}).catch(e => e).then(() => {
  app.mount('#app')
})
