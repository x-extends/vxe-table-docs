import { VXETable, VxeUI } from 'vxe-table'

import './setup'
import './renderer'
import './formats'

import VXETablePluginMenus from 'vxe-table-plugin-menus'
import VXETablePluginExportXLSX from 'vxe-table-plugin-export-xlsx'
import VXETablePluginExportPDF from 'vxe-table-plugin-export-pdf'
import VXETablePluginElement from 'vxe-table-plugin-element'
import VXETablePluginAntd from 'vxe-table-plugin-antd'
import VXETablePluginRenderer from 'vxe-table-plugin-renderer'
import VXETablePluginCharts from 'vxe-table-plugin-charts'
import VXETablePluginValidator from 'vxe-table-plugin-validator'

import 'vxe-table-plugin-element/dist/style.css'
import 'vxe-table-plugin-antd/dist/style.css'
import 'vxe-table-plugin-renderer/dist/style.css'

VXETable.use(VXETablePluginMenus)
VxeUI.use(VXETablePluginExportXLSX)
VXETable.use(VXETablePluginExportPDF)
VXETable.use(VXETablePluginElement)
VXETable.use(VXETablePluginAntd)
VXETable.use(VXETablePluginRenderer)
VXETable.use(VXETablePluginCharts)
VXETable.use(VXETablePluginValidator)
