import Vue from 'vue'
import i18n from '@/i18n'

import XEUtils from 'xe-utils'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginIView from 'vxe-table-plugin-iview'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginExportPDF from 'vxe-table-plugin-export-pdf'
import VXETablePluginRenderer from 'vxe-table-plugin-renderer'
// import VXETablePluginShortcutKey from 'vxe-table-plugin-shortcut-key'
import VXETablePluginValidator from 'vxe-table-plugin-validator'
import 'vxe-table-plugin-element/dist/style.css'
import 'vxe-table-plugin-iview/dist/style.css'
import 'vxe-table-plugin-antd/dist/style.css'
import 'vxe-table-plugin-renderer/dist/style.css'

import './renderer'
import './formatter'

// 设置默认参数
VxeUITable.setup({
  table: {
    exportConfig: {
      types: ['csv', 'html', 'xml', 'txt']
    }
  },
  translate: (key, args) => key && key.indexOf('app.') > -1 ? i18n.t(key, args) as string : key, // 自动翻译以 app. 开头的键值
  i18n: (key, args) => i18n.t(key, args) as string
})

Vue.use(VxeUI)
Vue.use(VxeUITable)

VxeUITable.use(VXETablePluginElement)
VxeUITable.use(VXETablePluginIView)
VxeUITable.use(VXETablePluginAntd)
VxeUITable.use(VXETablePluginMenus)
VxeUITable.use(VXETablePluginExportPDF)
VxeUITable.use(VXETablePluginRenderer)
// VXETable.use(VXETablePluginShortcutKey)
VxeUITable.use(VXETablePluginValidator)

if (!XEUtils.browse().msie) {
  const exceljs = document.createElement('script')
  exceljs.src = `${process.env.VUE_APP_CDN_URL}exceljs@4.4.0/dist/exceljs.min.js`
  exceljs.onload = () => {
    import(/* webpackChunkName: 'export-xlsx' */ 'vxe-table-plugin-export-xlsx').then((VXETablePluginExportXLSX) => {
      VxeUITable.use(VXETablePluginExportXLSX.default)
    })
  }
  document.body.appendChild(exceljs)
}
