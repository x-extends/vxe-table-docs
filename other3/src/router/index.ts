import Vue from 'vue'
import Router from 'vue-router'

const TableOtherPrint = () => import('../views/table/other/Print.vue')
const TableOtherElement = () => import('../views/table/other/Element.vue')
const TableOtherIview = () => import('../views/table/other/Iview.vue')
const TableOtherAntd = () => import('../views/table/other/Antd.vue')
const TableSortableColumn = () => import('../views/table/other/SortableColumn.vue')
const TableSortableRow = () => import('../views/table/other/SortableRow.vue')
const TableXlsx = () => import('../views/table/other/Xlsx.vue')

const TablePluginElementConfig = () => import('../views/table/plugin/ElementConfig.vue')
const TablePluginElementFilter = () => import('../views/table/plugin/ElementFilter.vue')
const TablePluginElementPage = () => import('../views/table/plugin/ElementPage.vue')
const TablePluginIviewConfig = () => import('../views/table/plugin/IviewConfig.vue')
const TablePluginIviewFilter = () => import('../views/table/plugin/IviewFilter.vue')
const TablePluginIviewPage = () => import('../views/table/plugin/IviewPage.vue')
const TablePluginAntdConfig = () => import('../views/table/plugin/AntdConfig.vue')
const TablePluginAntdFilter = () => import('../views/table/plugin/AntdFilter.vue')
const TablePluginAntdPage = () => import('../views/table/plugin/AntdPage.vue')
const TablePluginShortcutKey = () => import('../views/table/plugin/ShortcutKey.vue')
const TablePluginExportXLSX = () => import('../views/table/plugin/ExportXLSX.vue')
const TablePluginExportPDF = () => import('../views/table/plugin/ExportPDF.vue')
const TablePluginRenderer = () => import('../views/table/plugin/Renderer.vue')
const TablePluginMenus = () => import('../views/table/plugin/Menus.vue')
// const TablePluginTreeRows = () => import('../views/table/plugin/TreeRows'
// const TablePluginTreeCols = () => import('../views/table/plugin/TreeCols'

const ModuleButton = () => import('../views/button/Button.vue')

const Donation = () => import('../views/api/Donation.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: {
        name: 'TablePluginExportXLSX'
      }
    },
    {
      path: '/',
      redirect: {
        name: 'TablePluginExportXLSX'
      }
    },
    {
      path: '/table/other/print',
      name: 'TableOtherPrint',
      component: TableOtherPrint
    },
    {
      path: '/table/other/element',
      name: 'TableOtherElement',
      component: TableOtherElement
    },
    {
      path: '/table/other/iview',
      name: 'TableOtherIview',
      component: TableOtherIview
    },
    {
      path: '/table/other/antd',
      name: 'TableOtherAntd',
      component: TableOtherAntd
    },
    {
      path: '/table/other/sortableColumn',
      name: 'TableSortableColumn',
      component: TableSortableColumn
    },
    {
      path: '/table/other/sortableRow',
      name: 'TableSortableRow',
      component: TableSortableRow
    },
    {
      path: '/table/other/xlsx',
      name: 'TableXlsx',
      component: TableXlsx
    },
    {
      path: '/table/plugin/elementConfig',
      name: 'TablePluginElementConfig',
      component: TablePluginElementConfig
    },
    {
      path: '/table/plugin/elementFilter',
      name: 'TablePluginElementFilter',
      component: TablePluginElementFilter
    },
    {
      path: '/table/plugin/elementPage',
      name: 'TablePluginElementPage',
      component: TablePluginElementPage
    },
    {
      path: '/table/plugin/iviewConfig',
      name: 'TablePluginIviewConfig',
      component: TablePluginIviewConfig
    },
    {
      path: '/table/plugin/iviewFilter',
      name: 'TablePluginIviewFilter',
      component: TablePluginIviewFilter
    },
    {
      path: '/table/plugin/iviewPage',
      name: 'TablePluginIviewPage',
      component: TablePluginIviewPage
    },
    {
      path: '/table/plugin/antdConfig',
      name: 'TablePluginAntdConfig',
      component: TablePluginAntdConfig
    },
    {
      path: '/table/plugin/antdFilter',
      name: 'TablePluginAntdFilter',
      component: TablePluginAntdFilter
    },
    {
      path: '/table/plugin/antdPage',
      name: 'TablePluginAntdPage',
      component: TablePluginAntdPage
    },
    {
      path: '/table/plugin/shortcutKey',
      name: 'TablePluginShortcutKey',
      component: TablePluginShortcutKey
    },
    {
      path: '/table/plugin/exportXLSX',
      name: 'TablePluginExportXLSX',
      component: TablePluginExportXLSX
    },
    {
      path: '/table/plugin/exportPDF',
      name: 'TablePluginExportPDF',
      component: TablePluginExportPDF
    },
    {
      path: '/table/plugin/renderer',
      name: 'TablePluginRenderer',
      component: TablePluginRenderer
    },
    {
      path: '/table/plugin/menus',
      name: 'TablePluginMenus',
      component: TablePluginMenus
    },
    // {
    //   path: '/table/plugin/treeRows',
    //   name: 'TablePluginTreeRows',
    //   component: TablePluginTreeRows
    // },
    // {
    //   path: '/table/plugin/treeCols',
    //   name: 'TablePluginTreeCols',
    //   component: TablePluginTreeCols
    // },
    {
      path: '/donation/api',
      name: 'Donation',
      component: Donation
    },
    {
      path: '/table/module/button',
      name: 'ModuleButton',
      component: ModuleButton
    }
  ]
})
