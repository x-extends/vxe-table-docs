import Vue from 'vue'
import i18n from '@/i18n'

import VXETable from 'vxe-table'

import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginIView from 'vxe-table-plugin-iview'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import VXETablePluginVirtualTree from 'vxe-table-plugin-virtual-tree'
import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginRenderer from 'vxe-table-plugin-renderer'
import 'vxe-table-plugin-element/dist/style.css'
import 'vxe-table-plugin-iview/dist/style.css'
import 'vxe-table-plugin-antd/dist/style.css'
import 'vxe-table-plugin-virtual-tree/dist/style.css'
import 'vxe-table-plugin-renderer/dist/style.css'

import './renderer'
import './formatter'

// 设置默认参数
VXETable.setup({
  table: {
    exportConfig: {
      types: ['csv', 'html', 'xml', 'txt']
    }
  },
  translate: (key, args) => key && key.indexOf('app.') > -1 ? i18n.t(key, args) : key, // 自动翻译以 app. 开头的键值
  i18n: (key, args) => i18n.t(key, args)
})

// 先安装依赖模块
Vue.use(VXETable)

// 给 vue 实例挂载全局窗口对象
Vue.prototype.$XModal = VXETable.modal

// 给 vue 实例挂载文件对象
Vue.prototype.$XSaveFile = VXETable.saveFile

// 给 vue 实例挂载全局打印对象
Vue.prototype.$XPrint = VXETable.print

VXETable.use(VXETablePluginElement)
VXETable.use(VXETablePluginIView)
VXETable.use(VXETablePluginAntd)
VXETable.use(VXETablePluginVirtualTree)
VXETable.use(VXETablePluginMenus)
VXETable.use(VXETablePluginRenderer)
