import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'font-awesome/css/font-awesome.css'
import './assets/style/index.scss'
import './plugins'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeRender from './components/CodeRender.vue'
import CodeList from './components/CodeList.vue'
import DemoBlock from './components/DemoBlock.vue'

import Antd from 'ant-design-vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VXETable from 'vxe-table'

const app = createApp(App)

app.component(PreCode.name, PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeRender', CodeRender)
app.component('CodeList', CodeList)
app.component(DemoBlock.name, DemoBlock)

app.use(VXETable)
app.use(Antd)
app.use(ElementPlus)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t
app.config.globalProperties.$i18n = i18n.global

app.mount('#app')
