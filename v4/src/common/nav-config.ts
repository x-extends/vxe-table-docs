export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  keywords?: string[]
  children?: NavVO[]
}

export const navConfigList: NavVO[] = [
  { title: '切回旧版文档', linkUrl: '/v4.7_old', linkTarget: '_self' },
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.GlobalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      // { title: '函数库' },
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.table.name',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
      {
        title: '基础功能',
        children: [
          { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' } },
          { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' } },
          { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' } },
          { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' } },
          { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' } },
          { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' } },
          { title: '列宽设置', routerLink: { name: 'ComponentTableBaseWidth' } },
          { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' } },
          { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' } },
          { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' } },
          { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' } },
          { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' } },
          { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' } },
          { title: '高亮列', routerLink: { name: 'ComponentTableBaseHeaderHighlight' } },
          { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' } },
          { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' } },
          { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' } },
          { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' } },
          { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' } },
          { title: '设置行度', routerLink: { name: 'ComponentTableBaseRowHeight' } },
          { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' } },
          { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' } },
          { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' } },
          { title: '高亮行与列', routerLink: { name: 'ComponentTableBaseCurrent' } },
          { title: '排序', routerLink: { name: 'ComponentTableBaseSort' } },
          { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' } },
          { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' } },
          { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' } },
          { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' } },
          { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' } },
          { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' } },
          { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' } },
          { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
        ]
      },
      {
        title: '单元格合并',
        children: [
          { title: '合并行', routerLink: { name: 'ComponentTableMergeRow' } },
          { title: '合并列', routerLink: { name: 'ComponentTableMergeColumn' } },
          { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } },
          { title: '表尾合并', routerLink: { name: 'ComponentTableMergeFooter' } },
          { title: '实现横向树', routerLink: { name: 'ComponentTableMergeHorizontal' } }
        ]
      },
      {
        title: '表尾数据',
        children: [
          { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
          { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFooterTemplate' } }
        ]
      },
      {
        title: '排序',
        children: [
          { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
          { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } }
        ]
      },
      {
        title: '筛选',
        children: [
          { title: '修改筛选选项', routerLink: { name: 'ComponentTableFilterOptions' } },
          { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } },
          { title: '实现列头筛选', routerLink: { name: 'ComponentTableFilterHeader' } },
          { title: '手动操作筛选', routerLink: { name: 'ComponentTableFilterManual' } }
        ]
      },
      {
        title: '展开行',
        children: [
          { title: '基础使用', routerLink: { name: 'ComponentTableExpandBasic' } },
          { title: '展开容器内间距', routerLink: { name: 'ComponentTableExpandPadding' } },
          { title: '展开容器高度', routerLink: { name: 'ComponentTableExpandHeight' } },
          { title: '使用冻结列', routerLink: { name: 'ComponentTableExpandFixed' } }
        ]
      },
      {
        title: '右键菜单',
        children: [
          { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
          { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
          { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
          { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
          { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } }
        ]
      },
      {
        title: '工具栏',
        children: [
          { title: '工具栏布局', routerLink: { name: 'ComponentTableToolbarBasic' } },
          { title: '自定义列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
          { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } },
          { title: '导入功能', routerLink: { name: 'ComponentTableToolbarImport' } },
          { title: '导出功能', routerLink: { name: 'ComponentTableToolbarExport' } }
        ]
      },
      {
        title: '自定义列',
        children: [
          { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
          { title: '弹窗模式', routerLink: { name: 'ComponentTableCustomPopup' } },
          { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
          { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
          { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
          { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
          { title: '自定义触发弹出设置', routerLink: { name: 'ComponentTableCustomTemplate' } },
          { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
          { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
          { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
          { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
          { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
          { title: '实现显示/隐藏列', routerLink: { name: 'ComponentTableCustomManual' } },
          { title: '实现折叠列', routerLink: { name: 'ComponentTableCustomCollapseColumn' } }
        ]
      },
      // {
      //   title: '数据分页',
      //   children: []
      // },
      {
        title: '树形',
        children: [
          { title: '基础使用', routerLink: { name: 'ComponentTableTreeBasic' } },
          { title: '平级结构', routerLink: { name: 'ComponentTableTreeLeveling' } },
          { title: '层级结构', routerLink: { name: 'ComponentTableTreeHierarchy' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
          { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
          { title: '最大高度', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
          { title: '手风琴效果', routerLink: { name: 'ComponentTableTreeAccordion' } },
          { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
          { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
          { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
          { title: '树形筛选', routerLink: { name: 'ComponentTableTreeFilter' } },
          { title: '冻结列', routerLink: { name: 'ComponentTableTreeFixed' } },
          { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
          { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
          { title: '懒加载 - 可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
          { title: '同时使用展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
          { title: '同时使用展开行 - 懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } }
        ]
      },
      {
        title: '可编辑',
        children: [
          { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
          { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
          { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
          { title: '关闭自动清除编辑状态', routerLink: { name: 'ComponentTableEditAutoClear' } },
          { title: '编辑状态', routerLink: { name: 'ComponentTableEditStatus' } },
          { title: '空值占位符', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
          { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
          { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
          { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
          { title: '还原数据', routerLink: { name: 'ComponentTableEditRevert' } },
          { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
          { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } },
          { title: '使用合并行与列', routerLink: { name: 'ComponentTableEditSpan' } },
          { title: '使用右键菜单', routerLink: { name: 'ComponentTableEditMenu' } },
          { title: '实现附件列表', routerLink: { name: 'ComponentTableEditFileList' } },
          { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentTableEditModalForm' } },
          { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentTableEditDrawerForm' } },
          { title: '实现唯一下拉选项', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
          { title: '实现多列下拉联动', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
          { title: '实现表尾实时合计', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
          { title: '实现单元格实时保存', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
          { title: '使用第三方组件', linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/edit' }
        ]
      },
      {
        title: '自定义插槽模板',
        children: [
          { title: '自定义单元格', routerLink: { name: 'ComponentTableTemplateDefault' } },
          { title: '自定义表头', routerLink: { name: 'ComponentTableTemplateHeader' } },
          { title: '自定义表尾', routerLink: { name: 'ComponentTableTemplateFooter' } },
          { title: '自定义复选框', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
          { title: '自定义单选框', routerLink: { name: 'ComponentTableTemplateRadio' } },
          { title: '自定义展开行', routerLink: { name: 'ComponentTableTemplateContent' } },
          { title: '自定义筛选', routerLink: { name: 'ComponentTableTemplateFilter' } },
          { title: '自定义编辑', routerLink: { name: 'ComponentTableTemplateEdit' } }
        ]
      },
      {
        title: '导出数据',
        children: [
          { title: '导出数据', routerLink: { name: 'ComponentTableExportBase' } },
          { title: '导出 TXT', routerLink: { name: 'ComponentTableExportTxt' } },
          { title: '导出 XML', routerLink: { name: 'ComponentTableExportXml' } },
          { title: '导出 HTML', routerLink: { name: 'ComponentTableExportHtml' } },
          { title: '导出 CSV', routerLink: { name: 'ComponentTableExportCsv' } },
          { title: '导出 XLSX', linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/table/export' },
          { title: '导出 PDF', linkUrl: 'https://vxeui.com/other4/#/plugin-export-pdf/table/export' },
          { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } }
        ]
      },
      {
        title: '导入数据',
        children: [
          { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
          { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
        ]
      },
      {
        title: '打印表格',
        children: [
          { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
          { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } }
        ]
      },
      {
        title: '虚拟滚动',
        children: [
          { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
          { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
          { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHV' } },
          { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
          { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
          { title: '按键导航', routerLink: { name: 'ComponentTableScrollKeyboard' } },
          { title: '单元格合并', routerLink: { name: 'ComponentTableScrollMerge' } },
          { title: '树形虚拟滚动', routerLink: { name: 'ComponentTableScrollTree' } }
        ]
      },
      {
        title: '表格搜索',
        children: [
          { title: '实现表格搜索', routerLink: { name: 'ComponentTableSearchList' } },
          { title: '实现树形表格搜索', routerLink: { name: 'ComponentTableSearchTree' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.grid.name',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } } },
      {
        title: '基础功能',
        children: [
          { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
          // { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
          { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
          { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
          { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
          { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
          { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
          { title: '列宽设置', routerLink: { name: 'ComponentGridBaseWidth' } },
          { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
          // { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
          // { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
          // { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
          // { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
          { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
          // { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
          // { title: '高亮列', routerLink: { name: 'ComponentGridBaseHeaderHighlight' } },
          // { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizable' } },
          // { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
          // { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
          // { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
          { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
          // { title: '设置行度', routerLink: { name: 'ComponentGridBaseRowHeight' } },
          // { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
          // { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
          // { title: '表尾', routerLink: { name: 'ComponentGridBaseFooter' } },
          // { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
          { title: '高亮行与列', routerLink: { name: 'ComponentGridBaseCurrent' } },
          // { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
          // { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
          // { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
          // { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
          // { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
          // { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
          // { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
          // { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
          { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
        ]
      },
      {
        title: '单元格合并',
        children: [
          { title: '合并行', routerLink: { name: 'ComponentGridMergeRow' } },
          { title: '合并列', routerLink: { name: 'ComponentGridMergeColumn' } },
          { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } }
        ]
      },
      {
        title: '表尾数据',
        children: [
          { title: '标准结构', routerLink: { name: 'ComponentGridFooterFooterData' } },
          { title: '自定义数据方法', routerLink: { name: 'ComponentGridFooterFooterMethod' } }
        ]
      },
      {
        title: '展开行',
        children: [
          { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
          { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
          { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
          { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } }
        ]
      },
      {
        title: '右键菜单',
        children: [
          { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
          { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } }
        ]
      },
      {
        title: '查询表单',
        children: [
          { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
          { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } }
        ]
      },
      {
        title: '工具栏',
        children: [
          { title: '自定义列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
          { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
          { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
          { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
          { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
          { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
          { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } }
        ]
      },
      {
        title: '自定义列',
        children: [
          { title: '弹窗模式', routerLink: { name: 'ComponentGridCustomPopup' } },
          // { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
          // { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
          // { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
          // { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
          // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
          { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
          // { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
          { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
          { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
          { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } }
        ]
      },
      {
        title: '分页查询',
        children: [
          { title: '基础', routerLink: { name: 'ComponentGridPagerBase' } },
          { title: '自定义每页大小', routerLink: { name: 'ComponentGridPagerPageSize' } }
        ]
      },
      {
        title: '功能布局',
        children: [
          { title: '调整分页位置', routerLink: { name: 'ComponentGridLayoutPager' } },
          { title: '调整工具栏位置', routerLink: { name: 'ComponentGridLayoutToolbar' } }
        ]
      },
      {
        title: '树形',
        children: [
          { title: '平级结构', routerLink: { name: 'ComponentGridTreeLeveling' } },
          { title: '层级结构', routerLink: { name: 'ComponentGridTreeHierarchy' } }
        ]
      },
      {
        title: '可编辑',
        children: [
          { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
          { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
          { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
          { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } },
          { title: '使用第三方组件', linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/edit' }
        ]
      },
      {
        title: '自定义插槽模板',
        children: [
          { title: '自定义布局模板', routerLink: { name: 'ComponentGridTemplateLayout' } },
          { title: '自定义单元格', routerLink: { name: 'ComponentGridTemplateDefault' } },
          { title: '自定义表头', routerLink: { name: 'ComponentGridTemplateHeader' } },
          { title: '自定义表尾', routerLink: { name: 'ComponentGridTemplateFooter' } },
          { title: '自定义复选框', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
          { title: '自定义单选框', routerLink: { name: 'ComponentGridTemplateRadio' } },
          { title: '自定义展开行', routerLink: { name: 'ComponentGridTemplateContent' } },
          { title: '自定义筛选', routerLink: { name: 'ComponentGridTemplateFilter' } },
          { title: '自定义编辑', routerLink: { name: 'ComponentGridTemplateEdit' } },
          { title: '自定义单元格校验', routerLink: { name: 'ComponentGridTemplateValid' } }
        ]
      },
      {
        title: '导出数据',
        children: [
          { title: '导出数据', routerLink: { name: 'ComponentGridExportBase' } },
          { title: '导出 TXT', routerLink: { name: 'ComponentGridExportTxt' } },
          { title: '导出 XML', routerLink: { name: 'ComponentGridExportXml' } },
          { title: '导出 HTML', routerLink: { name: 'ComponentGridExportHtml' } },
          { title: '导出 CSV', routerLink: { name: 'ComponentGridExportCsv' } },
          { title: '导出 XLSX', linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/grid/export' },
          { title: '导出 PDF', linkUrl: 'https://vxeui.com/other4/#/plugin-export-pdf/grid/export' },
          { title: '自定义数据', routerLink: { name: 'ComponentGridExportData' } },
          { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } }
        ]
      },
      {
        title: '导入数据',
        children: [
          { title: '导入数据', routerLink: { name: 'ComponentGridImportBase' } },
          { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } }
        ]
      },
      {
        title: '打印表格',
        children: [
          { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
          { title: '自定义头部和底部', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
          { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } }
        ]
      },
      {
        title: '虚拟滚动',
        children: [
          { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
          { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
          { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHV' } },
          { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } },
          { title: '使用表尾', routerLink: { name: 'ComponentGridScrollFooter' } }
        ]
      },
      {
        title: '数据代理',
        children: [
          { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
          { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
          { title: '工具栏 - 查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
          { title: '手动调用 - 查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
          { title: '工具栏 - 全量数据导出', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
          { title: '工具栏 - 服务端导出', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
          { title: '工具栏 - 删除已选', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
          { title: '手动调用 - 删除已选', routerLink: { name: 'ComponentGridProxyManualDelete' } },
          { title: '工具栏 - 批量标记删除', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
          { title: '手动调用 - 标记删除状态', routerLink: { name: 'ComponentGridProxyManualMark' } },
          { title: '工具栏 - 增删改查', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
          { title: '手动调用 - 增删改查', routerLink: { name: 'ComponentGridProxyManualSave' } }
        ]
      }
    ]
  },
  {
    title: '格式化（全局复用）',
    children: [
      { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
      { title: '单元格', routerLink: { name: 'GlobalFormatsTableBase' } }
    ]
  },
  {
    title: '右键菜单（全局复用）',
    children: [
      { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
      { title: '右键菜单', routerLink: { name: 'GlobalMenusTableBase' } }
    ]
  },
  // {
  //   title: '指令注册（全局复用）',
  //   children: [
  //     { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
  //     { title: '工具栏', routerLink: { name: 'GlobalCommandsTableBase' } }
  //   ]
  // },
  {
    title: '校验（全局复用）',
    children: [
      { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
      { title: '单元格校验', routerLink: { name: 'GlobalValidatorsTableBase' } }
    ]
  },
  {
    title: '渲染器（高阶复用）',
    children: [
      { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
      {
        title: '单元格',
        children: [
          { title: '实现一个超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' } },
          { title: '实现一个图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' } }
        ]
      },
      {
        title: '可编辑',
        children: [
          { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditEditInput' } },
          { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditEditDownTable' } }
        ]
      },
      {
        title: '展开行',
        children: [
          { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' } },
          { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' } }
        ]
      },
      {
        title: '工具栏',
        children: [
          { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' } },
          { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' } }
        ]
      },
      {
        title: '筛选',
        children: [
          { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterFilterInput' } },
          { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterFilterComplex' } }
        ]
      },
      {
        title: '空数据提示',
        children: [
          { title: '实现空数据提示1', routerLink: { name: 'GlobalRendererTableMyEmpty' } },
          { title: '实现空数据提示2', routerLink: { name: 'GlobalRendererTableMyNotData' } }
        ]
      }
    ]
  },
  {
    title: '事件拦截（高级用法）',
    children: [
      { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
      { title: '可编辑 - 兼容性处理', routerLink: { name: 'GlobalInterceptorTableBase' } }
    ]
  },
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
