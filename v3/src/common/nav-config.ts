import { NavVO, otherUrl } from './nav'
import { tableNavConfig } from './table'

export const navConfigList: NavVO[] = [
  { title: '切换 v3.x 旧版文档', linkUrl: '/v3_old', linkTarget: '_self' },
  {
    i18nKey: 'app.aside.menu.demoTitle',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.demoList', routerLink: { name: 'DemoListPreview' } },
      { i18nKey: 'app.aside.menu.demoProduct', routerLink: { name: 'DemoProductPreview' } },
      { i18nKey: 'app.aside.menu.demoRealTime', routerLink: { name: 'DemoRealTimeReview' } },
      { i18nKey: 'app.aside.menu.demoTree', routerLink: { name: 'DemoTreePreview' } },
      { i18nKey: 'app.aside.menu.demoCrud', routerLink: { name: 'DemoCrudPreview' } },
      { i18nKey: 'plugins.base.nav.demoGroupSummary', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } },
      { i18nKey: 'plugins.base.nav.demoClip', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_cell_area_demo_clip' }, query: { previewPath: '%2Fdemo%2Fclip' } } },
      { i18nKey: 'plugins.base.nav.demoChart', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_cell_area_demo_chart' }, query: { previewPath: '%2Fdemo%2Fchart' } } },
      { i18nKey: 'plugins.base.nav.demoExcel', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_cell_area_demo_excel' }, query: { previewPath: '%2Fdemo%2Fexcel' } } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.guide',
    children: [
      {
        i18nKey: 'app.aside.menu.fullInsrall',
        isExpand: true,
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartUIInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUIUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUIUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartUICDN' } },
          { title: '后台管理系统模板', isTemplate: true, linkUrl: 'https://vxeui.com/admin-template/' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useTableInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartTableInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartTableUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartTableUseImport' } },
          { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartTableCDN' } },
          { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
        ]
      },
      // {
      //   i18nKey: 'app.aside.menu.useDesignInsrall',
      //   children: [
      //     { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartDesignInstall' } },
      //     { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartDesignUseGlobal' } },
      //     { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartDesignUseImport' } },
      //     { i18nKey: 'app.aside.menu.useGlobalCDN', routerLink: { name: 'StartDesignCDN' } },
      //     { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` },
      //     { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' }
      //   ]
      // },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://vxeui.com/xe-utils/' }
    ]
  },
  ...tableNavConfig.children,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
