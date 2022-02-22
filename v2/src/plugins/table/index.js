import Vue from 'vue'
import i18n from '@/i18n'

import VXETable from 'vxe-table'

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
