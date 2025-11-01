import { NavVO, otherUrl } from './nav'

export const tableNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.tableTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.tableTableTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
        { title: 'Column API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'column' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' }, keywords: 'size' },
            { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' }, keywords: 'data' },
            { title: '表尾数据', routerLink: { name: 'ComponentTableBaseFooter' }, keywords: 'show-footer,footer-data' },
            { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' }, keywords: 'empty-text' },
            { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' }, keywords: 'border' },
            { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' }, keywords: 'round' },
            // { title: '边距', routerLink: { name: 'ComponentTableBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' }, keywords: '对齐,align' },
            { title: '隐藏列', routerLink: { name: 'ComponentTableBaseVisible' }, keywords: '显示,隐藏,visible' },
            { title: '设置列宽', routerLink: { name: 'ComponentTableBaseWidth' }, keywords: '宽度,列宽' },
            { title: '自适应列宽', routerLink: { name: 'ComponentTableBaseAutoWidth' }, keywords: '宽度,自适应列宽,width,auto' },
            { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' }, keywords: 'show-overflow,show-header-overflow,show-footer-overflow' },
            { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' }, keywords: 'tooltip' },
            // { title: '滚动条样式', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' }, keywords: 'stripe' },
            { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' }, keywords: 'cell-class-name,row-class-name' },
            { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' }, keywords: 'cell-style,row-style' },
            { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' }, keywords: 'show-header' },
            { title: '高亮列', routerLink: { name: 'ComponentTableBaseCurrentColumn' }, keywords: 'isCurrent' },
            { title: '高亮行', routerLink: { name: 'ComponentTableBaseCurrentRow' }, keywords: 'isCurrent' },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' }, keywords: 'resizable' },
            { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' }, keywords: 'min-height' },
            { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' }, keywords: 'height' },
            { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' }, keywords: 'max-height' },
            { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' }, keywords: '自适应高度,sync-resize,auto-resize' },
            { title: '设置列高', routerLink: { name: 'ComponentTableBaseColumnHeight' }, keywords: 'height' },
            { title: '设置行高', routerLink: { name: 'ComponentTableBaseRowHeight' }, keywords: 'height' },
            { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' }, keywords: 'fixed' },
            { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' }, keywords: 'fixed,height' },
            { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' }, keywords: 'colgroup' },
            { title: '排序', routerLink: { name: 'ComponentTableBaseSort' }, keywords: 'sortable' },
            { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' }, keywords: 'filters' },
            { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' }, keywords: 'loading' },
            { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' }, keywords: 'formatter' },
            { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' }, keywords: 'seq' },
            { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' }, keywords: 'radio' },
            { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' }, keywords: 'checkbox' },
            { title: '标题前缀图标', routerLink: { name: 'ComponentTableBaseTitlePrefix' }, keywords: 'title-prefix' },
            { title: '标题后缀图标', routerLink: { name: 'ComponentTableBaseTitleSuffix' }, keywords: 'title-suffix' },
            { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' }, keywords: 'html' },
            { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentTableMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentTableMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } },
            { title: '表尾合并', routerLink: { name: 'ComponentTableMergeFooter' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentTableMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '是否启用表尾', routerLink: { name: 'ComponentTableFooterShowFooter' } },
            { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentTableFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentTableRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableRadioVisibleMethod' } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentTableCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentTableCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableCheckboxVisibleMethod' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentTableCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '数据排序', routerLink: { name: 'ComponentTableSortBase' } },
            { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableSortTrigger' } },
            { title: '自定义轮询', routerLink: { name: 'ComponentTableSortOrders' } },
            { title: '按钮控制', routerLink: { name: 'ComponentTableSortAllowBtn' } },
            { title: '设置默认排序', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            { title: '设置值的类型', routerLink: { name: 'ComponentTableSortSortType' } },
            { title: '自定义排序方法', routerLink: { name: 'ComponentTableSortSortMethod' } },
            { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } },
            { title: '手动操作排序', routerLink: { name: 'ComponentTableSortSetSort' } }
          ]
        },
        {
          title: '列宽调整',
          children: [
            { title: '拖拽模式', routerLink: { name: 'ComponentTableColResizableMode' } },
            { title: '分组列头', routerLink: { name: 'ComponentTableColResizableGroup' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableColResizableFixed' } }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentTableColDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableColDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableColDragShowGuidesStatus' } },
            { title: '分组表头', routerLink: { name: 'ComponentTableColDragGroup' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableColDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableColDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableColDragDragMethod' } }
          ]
        },
        {
          title: '行高调整',
          children: [
            { title: '行高拖拽', routerLink: { name: 'ComponentTableRowResizableBase' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableRowResizableFixed' } },
            { title: '树结构', routerLink: { name: 'ComponentTableRowResizableTree' } },
            { title: '拖拽按钮位置', routerLink: { name: 'ComponentTableRowResizableRowResize' } },
            { title: '手动操作行高', routerLink: { name: 'ComponentTableRowResizableManual' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentTableRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableRowDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableRowDragShowGuidesStatus' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableRowDragTrigger' } },
            {
              title: '树结构',
              children: [
                { title: '树拖拽', routerLink: { name: 'ComponentTableRowDragTreeBase' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentTableRowDragTreeCossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentTableRowDragTreeSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentTableRowDragTreeToChildDrag' } },
                { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableRowDragTreeShowGuidesStatus' } },
                { title: '拖拽二次确认', routerLink: { name: 'ComponentTableRowDragTreeDragMethod' } },
                { title: '懒加载', routerLink: { name: 'ComponentTableRowDragTreeLazy' } }
              ]
            },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableRowDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableRowDragDragMethod' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '数据筛选', routerLink: { name: 'ComponentTableFilterBase' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } },
            { title: '树结构', routerLink: { name: 'ComponentTableFilterTree' } },
            { title: '手动弹出', routerLink: { name: 'ComponentTableFilterManual' } },
            { title: '手动筛选', routerLink: { name: 'ComponentTableFilterSetFilter' } },
            {
              title: '浮动筛选',
              children: [
                { title: 'VxeInput', routerLink: { name: 'ComponentTableFilterFloatingVxeInput' } },
                { title: 'VxeNumberInput', routerLink: { name: 'ComponentTableFilterFloatingVxeNumberInput' } },
                { title: 'VxeSelect', routerLink: { name: 'ComponentTableFilterFloatingVxeSelect' } },
                { title: 'VxeDatePicker', routerLink: { name: 'ComponentTableFilterFloatingVxeDatePicker' } },
                { title: '完整筛选', routerLink: { name: 'ComponentTableFilterFloatingFull' } },
                { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFilterFloatingTemplate' } }

              ]
            },
            { title: '输入筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Ftable%2Fcomplex%2FstringFilter' } } },
            { title: '组合筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Ftable%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          title: '行分组',
          children: [
            { title: '行分组', routerLink: { name: 'ComponentTableRowGroupBasic' } },
            { title: '按多字段分组', routerLink: { name: 'ComponentTableRowGroupGroupFields' } },
            { title: '显示分组统计', routerLink: { name: 'ComponentTableRowGroupTotal' } },
            { title: '自定义合并', routerLink: { name: 'ComponentTableRowGroupSpanMethod' } },
            { title: '手动操作', routerLink: { name: 'ComponentTableRowGroupHandleSet' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义分组内容模板', routerLink: { name: 'ComponentTableRowGroupTemplateDefault' } }
              ]
            },
            { title: '分组汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Faggregation%2FrowGroupSummary' } } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentTableExpandPadding' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableExpandIcon' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentTableExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentTableExpandFixed' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableExpandTrigger' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableExpandLazy' } },
            { title: '展开按钮的显示隐藏', routerLink: { name: 'ComponentTableExpandVisibleMethod' } },
            { title: '展开与关闭的控制', routerLink: { name: 'ComponentTableExpandToggleMethod' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentTableExpandChildTable' } }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
            { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
            { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
            { title: '自定义前缀', routerLink: { name: 'ComponentTableMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentTableMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '集成表单', routerLink: { name: 'ComponentTableFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentTableFormCollapse' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentTableToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentTableToolbarTools' } },
            { title: '个性化列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
            { title: '刷新功能', routerLink: { name: 'ComponentTableToolbarRefresh' } },
            { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } },
            { title: '导入功能', routerLink: { name: 'ComponentTableToolbarImport' } },
            { title: '导出功能', routerLink: { name: 'ComponentTableToolbarExport' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentTableToolbarTemplateButtons' } },
                { title: '自定义左侧前缀模板', routerLink: { name: 'ComponentTableToolbarTemplateButtonPrefix' } },
                { title: '自定义左侧后缀模板', routerLink: { name: 'ComponentTableToolbarTemplateButtonSuffix' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentTableToolbarTemplateTools' } },
                { title: '自定义右侧前缀模板', routerLink: { name: 'ComponentTableToolbarTemplateToolPrefix' } },
                { title: '自定义右侧后缀模板', routerLink: { name: 'ComponentTableToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          title: '个性化列',
          children: [
            { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentTableCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentTableCustomDrawer' } },
            { title: '默认隐藏列', routerLink: { name: 'ComponentTableCustomDefHide' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentTableCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentTableCustomVisibleMethod' } },
            { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
            { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
            { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
            { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
            { title: '允许拖拽分组', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FallowGroup' } } },
            { title: '允许拖拽聚合函数', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FaggDragValues' } } },
            { title: '冻结列最大数量限制', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            { title: '自定义触发按钮', routerLink: { name: 'ComponentTableCustomCustomBtn' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentTableCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
            { title: '本地保存聚合函数列设置', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2Fstorage' } } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            { title: '实现显示/隐藏列', routerLink: { name: 'ComponentTableCustomManual' } },
            { title: '实现折叠列', routerLink: { name: 'ComponentTableCustomCollapseColumn' } }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentTablePagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentTablePagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentTablePagerStart' } }
          ]
        },
        {
          title: '树形',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableTreeBasic' } },
            { title: '平级结构', routerLink: { name: 'ComponentTableTreeLeveling' } },
            { title: '层级结构', routerLink: { name: 'ComponentTableTreeHierarchy' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentTableTreeStripe' } },
            { title: '序号模式', routerLink: { name: 'ComponentTableTreeSeqMode' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
            { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
            { title: '最大高度', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            { title: '手风琴效果', routerLink: { name: 'ComponentTableTreeAccordion' } },
            { title: '高亮行', routerLink: { name: 'ComponentTableTreeCurrentRow' } },
            { title: '高亮列', routerLink: { name: 'ComponentTableTreeCurrentColumn' } },
            { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
            { title: '树形筛选', routerLink: { name: 'ComponentTableTreeFilter' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableTreeFixed' } },
            { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
            { title: '懒加载 - 可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
            { title: '同时使用展开行 - 懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } },
            // { title: '实现数据分组', routerLink: { name: 'ComponentTableTreeGroup' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentTableCellRenderVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellRenderVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellRenderVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            { title: 'FormatNumberInput 格式化数值', routerLink: { name: 'ComponentTableCellRenderFormatNumberInput' } },
            { title: 'FormatSelect 格式化列表选项', routerLink: { name: 'ComponentTableCellRenderFormatOption' } },
            { title: 'FormatTreeSelect 格式化树选项', routerLink: { name: 'ComponentTableCellRenderFormatTree' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentTableCellTemplateVxeTag' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellTemplateVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellTemplateVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentTableCellTemplateVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellTemplateVxeCheckboxGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentTableCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellTemplateVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellTemplateVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellTemplateVxeTextEllipsis' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableCellTemplateVxeInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentTableCellTemplateVxeTextarea' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellTemplateVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellTemplateVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableCellTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentTableCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
            { title: '编辑与聚焦', routerLink: { name: 'ComponentTableEditAutoFocus' } },
            { title: '关闭自动清除编辑状态', routerLink: { name: 'ComponentTableEditAutoClear' } },
            { title: '编辑状态', routerLink: { name: 'ComponentTableEditStatus' } },
            { title: '空值占位符', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            // { title: '修改数据', routerLink: { name: 'ComponentTableEditUpdate' } },
            // { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
            // { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
            // { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
            // { title: '还原数据', routerLink: { name: 'ComponentTableEditRevert' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentTableEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentTableEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleOriginalUpdate' } }
              ]
            },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentTableEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentTableEditRowDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
            { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } },
            { title: '树结构', routerLink: { name: 'ComponentTableEditTree' } },
            { title: '使用合并行与列', routerLink: { name: 'ComponentTableEditSpan' } },
            { title: '使用右键菜单', routerLink: { name: 'ComponentTableEditMenu' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableEditRowHeight' } },
            { title: '负数自动标红', routerLink: { name: 'ComponentTableEditShowNegativeStatus' } },
            { title: '实现附件列表', routerLink: { name: 'ComponentTableEditFileList' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentTableEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentTableEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentTableEditDrawerSelect' } },
            { title: '实现唯一下拉选项', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            { title: '实现多行文本编辑', routerLink: { name: 'ComponentTableEditMultiLineText' } },
            { title: '实现联动禁用', routerLink: { name: 'ComponentTableEditLinkageDisabled' } },
            { title: '实现多列下拉联动', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentTableEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            { title: '实现单元格实时保存', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaClip' } } },
            { title: '渲染图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fecharts%2FareaBasicsEcharts' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentTableEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditRenderVxeIconPicker' } },
            { title: 'VxeColorPicker 颜色选择', routerLink: { name: 'ComponentTableEditRenderVxeColorPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentTableEditRenderVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditRenderVxeTableSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` },
            { title: '事件监听', routerLink: { name: 'ComponentTableEditRenderEvents' } }

          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentTableEditTemplateVxeButton' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentTableEditTemplateVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentTableEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableEditTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentTableValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentTableValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentTableValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentTableValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentTableValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentTableValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentTableValidateMode' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentTableValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义编辑模板', routerLink: { name: 'ComponentTableValidateTemplateEdit' } },
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentTableValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义单元格模板', routerLink: { name: 'ComponentTableTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentTableTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentTableTemplateFooter' } },
            { title: '自定义表头标题模板', routerLink: { name: 'ComponentTableTemplateSort' } },
            { title: '自定义单元格提示模板', routerLink: { name: 'ComponentTableTemplateTooltip' } },
            { title: '自定义排序按钮模板', routerLink: { name: 'ComponentTableTemplateSort' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentTableTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentTableTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentTableTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentTableTemplateEdit' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentTableKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentTableKeyboardKeyboard' } },
            { title: '回车自动新增一行', routerLink: { name: 'ComponentTableKeyboardEnterAppend' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            { title: '设置为追加式编辑', routerLink: { name: 'ComponentTableKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentTableKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentTableExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentTableExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentTableExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentTableExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentTableExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/table/export` },
            { title: '格式化单元格内容', routerLink: { name: 'ComponentTableExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } },
            { title: '指定默认列', routerLink: { name: 'ComponentTableExportColumns' } }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/import` },
            { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
            { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentTablePrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentTablePrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentTablePrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentTableScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentTableScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentTableScrollFixed' } },
            // { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentTableScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentTableScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentTableScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentTableScrollAutoRowFixed' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
            { title: '按键导航', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            { title: '单元格合并', routerLink: { name: 'ComponentTableScrollMerge' } },
            { title: '树形 + 纵向', routerLink: { name: 'ComponentTableScrollTree' } },
            { title: '可编辑 + 横向', routerLink: { name: 'ComponentTableScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentTableScrollHVEdit' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentTableSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentTableSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaFNR' } } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentTableEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentTableEventsScroll' } }
          ]
        },
        {
          title: '功能示例',
          children: [
            { title: '在页签中使用', routerLink: { name: 'ComponentTableOtherTabs' } },
            { title: '实现多行文本溢出省略', routerLink: { name: 'ComponentTableOtherLineEllipsis' } },
            { title: '实现记账凭证', routerLink: { name: 'ComponentTableOtherBookkeepingVoucher' } },
            { title: '实现左边树和右边表格', routerLink: { name: 'ComponentTableOtherLeftRight' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGridTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
            { title: '表尾数据', routerLink: { name: 'ComponentGridBaseFooter' } },
            { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
            // { title: '边距', routerLink: { name: 'ComponentGridBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
            { title: '隐藏列', routerLink: { name: 'ComponentGridBaseVisible' } },
            { title: '设置列宽', routerLink: { name: 'ComponentGridBaseWidth' }, keywords: '宽度,列宽' },
            { title: '自适应列宽', routerLink: { name: 'ComponentGridBaseAutoWidth' }, keywords: '宽度,根据内容,自适应列宽,width,auto' },
            { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
            { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
            // { title: '滚动条样式', routerLink: { name: 'ComponentGridBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
            { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
            { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
            { title: '高亮列', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizableWidth' } },
            { title: '拖拽调整行高', routerLink: { name: 'ComponentGridBaseHeaderResizableHeight' } },
            { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
            { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
            { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
            { title: '设置列高', routerLink: { name: 'ComponentGridBaseColumnHeight' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridBaseRowHeight' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
            { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
            { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
            { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
            { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
            { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
            { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
            { title: '标题前缀图标', routerLink: { name: 'ComponentGridBaseTitlePrefix' }, keywords: 'title-prefix' },
            { title: '标题后缀图标', routerLink: { name: 'ComponentGridBaseTitleSuffix' }, keywords: 'title-suffix' },
            { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
            { title: '列配置', routerLink: { name: 'ComponentGridBaseColumns' } },
            { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
          ]
        },
        {
          title: '单元格配置',
          children: [
            { title: '设置列宽', routerLink: { name: 'ComponentGridCellWidth' }, keywords: '设置列宽，单元格宽度' },
            { title: '设置单元格边距', routerLink: { name: 'ComponentGridCellPadding' }, keywords: '设置边距，单元格边距' },
            { title: '设置行高', routerLink: { name: 'ComponentGridCellHeight' }, keywords: '设置单元格高度，设置行高度' },
            { title: '设置垂直对齐', routerLink: { name: 'ComponentGridCellVerticalAlign' }, keywords: '设置单元格垂直对齐' }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentGridMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentGridMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } },
            { title: '自定义合并行与列', routerLink: { name: 'ComponentGridMergeSpanMethod' } },
            { title: '表尾合并', routerLink: { name: 'ComponentGridMergeFooter' } },
            { title: '表头合并', routerLink: { name: 'ComponentGridMergeHeader' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentGridMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '是否启用表尾', routerLink: { name: 'ComponentGridFooterShowFooter' } },
            { title: '标准结构', routerLink: { name: 'ComponentGridFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentGridFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentGridFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentGridFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentGridRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridRadioVisibleMethod' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridRadioTrigger' } },
            { title: '个性化列头按钮', routerLink: { name: 'ComponentGridRadioHeaderBtn' } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentGridCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridCheckboxTrigger' } },
            { title: '显示已选数量', routerLink: { name: 'ComponentGridCheckboxShowRecords' } },
            { title: '分页保留选中状态', routerLink: { name: 'ComponentGridCheckboxReserve' } },
            { title: '分页显示保留选中状态', routerLink: { name: 'ComponentGridCheckboxShowReserveStatus' } },
            { title: '按键批量范围选择', routerLink: { name: 'ComponentGridCheckboxBatch' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentGridCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '数据排序', routerLink: { name: 'ComponentGridSortBase' } },
            { title: '多字段排序', routerLink: { name: 'ComponentGridSortMultiple' } },
            { title: '树结构排序', routerLink: { name: 'ComponentGridSortTree' } },
            { title: '服务端排序', routerLink: { name: 'ComponentGridSortRemote' } },
            { title: '手动排序', routerLink: { name: 'ComponentGridSortSetSort' } },
            { title: '排序图标', routerLink: { name: 'ComponentGridSortIconVisibleMethod' } }
          ]
        },
        {
          title: '高亮列',
          children: [
            { title: '当前列', routerLink: { name: 'ComponentGridCurrentColumnBase' } },
            { title: '拦截选中', routerLink: { name: 'ComponentGridCurrentColumnBeforeSelectMethod' } },
            { title: '手动触发', routerLink: { name: 'ComponentGridCurrentColumnTrigger' } }
          ]
        },
        {
          title: '列宽调整',
          children: [
            { title: '拖拽模式', routerLink: { name: 'ComponentGridColResizableMode' } },
            { title: '分组列头', routerLink: { name: 'ComponentGridColResizableGroup' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridColResizableFixed' } },
            { title: '双击自适应列宽', routerLink: { name: 'ComponentGridColResizableDblclickAutoWidth' } },
            { title: '所有单元格可拖拽', routerLink: { name: 'ComponentGridColResizableAllColumnDrag' } },
            { title: '限制拖拽最小列宽', routerLink: { name: 'ComponentGridColResizableMinWidth' } },
            { title: '手动操作列宽', routerLink: { name: 'ComponentGridColResizableManual' } }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridColDragSort' } },
            { title: '个性化列', routerLink: { name: 'ComponentGridColDragCustom' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridColDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridColDragShowGuidesStatus' } },
            {
              title: '分组表头',
              children: [
                { title: '分组拖拽', routerLink: { name: 'ComponentGridColDragGroup' } },
                { title: '同层级拖拽', routerLink: { name: 'ComponentGridColDragPeerDrag' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentGridColDragCrossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGridColDragSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentGridColDragToChildDrag' } },
                { title: '分组个性化列', routerLink: { name: 'ComponentGridColDragGroupCustom' } }
              ]
            },
            { title: '触发方式', routerLink: { name: 'ComponentGridColDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridColDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridColDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridColDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridColDragTemplateTip' } }
              ]
            },
            { title: '手动移动', routerLink: { name: 'ComponentGridColDragManual' } },
            { title: '同时行与列拖拽', routerLink: { name: 'ComponentGridColDragRowCol' } }
          ]
        },
        {
          title: '高亮行',
          children: [
            { title: '当前行', routerLink: { name: 'ComponentGridCurrentRowBase' } },
            { title: '拦截选中', routerLink: { name: 'ComponentGridCurrentRowBeforeSelectMethod' } },
            { title: '手动触发', routerLink: { name: 'ComponentGridCurrentRowTrigger' } }
          ]
        },
        {
          title: '行高调整',
          children: [
            { title: '行高拖拽', routerLink: { name: 'ComponentGridRowResizableBase' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowResizableFixed' } },
            { title: '树结构', routerLink: { name: 'ComponentGridRowResizableTree' } },
            { title: '拖拽按钮位置', routerLink: { name: 'ComponentGridRowResizableRowResize' } },
            { title: '双击自适应行高', routerLink: { name: 'ComponentGridRowResizableDblclickAutoHeight' } },
            { title: '所有单元格可拖拽', routerLink: { name: 'ComponentGridRowResizableAllRowDrag' } },
            { title: '手动操作行高', routerLink: { name: 'ComponentGridRowResizableManual' } },
            { title: '手动刷新行高', routerLink: { name: 'ComponentGridRowResizableRecalcManual' } },
            { title: '实现自适应文本域', routerLink: { name: 'ComponentGridRowResizableTextarea' } },
            { title: '实现默认行高与自适应行高', routerLink: { name: 'ComponentGridRowResizableRowDragAutoHeight' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridRowDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridRowDragShowGuidesStatus' } },
            {
              title: '树结构',
              children: [
                { title: '树拖拽', routerLink: { name: 'ComponentGridRowDragTreeBase' } },
                { title: '同层级拖拽', routerLink: { name: 'ComponentGridRowDragTreePeerDrag' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentGridRowDragTreeCossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGridRowDragTreeSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentGridRowDragTreeToChildDrag' } },
                { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridRowDragTreeShowGuidesStatus' } },
                { title: '拖拽二次确认', routerLink: { name: 'ComponentGridRowDragTreeDragMethod' } },
                { title: '懒加载', routerLink: { name: 'ComponentGridRowDragTreeLazy' } },
                { title: '手动移动', routerLink: { name: 'ComponentGridRowDragTreeManual' } },
                { title: '跨表拖拽', routerLink: { name: 'ComponentGridRowDragTreeCossTable' } }
              ]
            },
            { title: '触发方式', routerLink: { name: 'ComponentGridRowDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridRowDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridRowDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridRowDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridRowDragTemplateTip' } }
              ]
            },
            { title: '手动移动', routerLink: { name: 'ComponentGridRowDragManual' } },
            { title: '跨表拖拽', routerLink: { name: 'ComponentGridRowDragCossTable' } }
          ]
        },
        {
          title: '行分组',
          children: [
            { title: '行分组', routerLink: { name: 'ComponentGridRowGroupBasic' } },
            { title: '按多字段分组', routerLink: { name: 'ComponentGridRowGroupGroupFields' } },
            {
              title: '单选框',
              children: [
                { title: '单选框', routerLink: { name: 'ComponentGridRowGroupRadioBse' } },
                { title: '限制选中', routerLink: { name: 'ComponentGridRowGroupRadioChecked' } }
              ]
            },
            {
              title: '复选框',
              children: [
                { title: '复选框', routerLink: { name: 'ComponentGridRowGroupCheckboxBase' } },
                { title: '分组不关联', routerLink: { name: 'ComponentGridRowGroupCheckboxCheckStrictly' } },
                { title: '分组不关联与全选', routerLink: { name: 'ComponentGridRowGroupCheckboxStrictlyHeader' } },
                { title: '限制选中', routerLink: { name: 'ComponentGridRowGroupCheckboxChecked' } }
              ]
            },
            { title: '手风琴效果', routerLink: { name: 'ComponentGridRowGroupAccordion' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowGroupFixed' } },
            { title: '分组排序', routerLink: { name: 'ComponentGridRowGroupSort' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentGridRowGroupExpand' } },
            { title: '显示分组统计', routerLink: { name: 'ComponentGridRowGroupTotal' } },
            { title: '显示多列合计', routerLink: { name: 'ComponentGridRowGroupCount' } },
            { title: '自定义分组内容', routerLink: { name: 'ComponentGridRowGroupContentMethod' } },
            { title: '自定义合并', routerLink: { name: 'ComponentGridRowGroupSpanMethod' } },
            { title: '默认展开', routerLink: { name: 'ComponentGridRowGroupExpandGroupFields' } },
            { title: '展示方式', routerLink: { name: 'ComponentGridRowGroupGroupMode' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridRowGroupTrigger' } },
            { title: '手动操作', routerLink: { name: 'ComponentGridRowGroupHandleSet' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义分组内容模板', routerLink: { name: 'ComponentGridRowGroupTemplateDefault' } }
              ]
            },
            { title: '分组汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Faggregation%2FrowGroupSummary' } } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentGridExpandChildTable' } },
            { title: '展开模式', routerLink: { name: 'ComponentGridExpandMode' } },
            { title: '实现弹窗选择到子表格', routerLink: { name: 'ComponentGridExpandSelectModalTable' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '数据筛选', routerLink: { name: 'ComponentGridFilterBase' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridFilterIcon' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentGridFilterRemote' } },
            { title: '服务端分页筛选', routerLink: { name: 'ComponentGridFilterPager' } },
            { title: '树结构', routerLink: { name: 'ComponentGridFilterTree' } },
            { title: '手动弹出', routerLink: { name: 'ComponentGridFilterManual' } },
            { title: '手动筛选', routerLink: { name: 'ComponentGridFilterSetFilter' } },
            { title: '筛选图表', routerLink: { name: 'ComponentGridFilterIconVisibleMethod' } },
            {
              title: '浮动筛选',
              children: [
                { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterFloatingVxeInput' } },
                { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterFloatingVxeNumberInput' } },
                { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterFloatingVxeSelect' } },
                { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterFloatingVxeDatePicker' } },
                { title: '完整筛选', routerLink: { name: 'ComponentGridFilterFloatingFull' } },
                { title: '自定义插槽模板', routerLink: { name: 'ComponentGridFilterFloatingTemplate' } }
              ]
            },
            { title: '输入筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Fgrid%2Fcomplex%2FstringFilter' } } },
            { title: '组合筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Fgrid%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          title: '筛选 - 渲染 - 配置式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '筛选 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '自定义前缀', routerLink: { name: 'ComponentGridMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentGridMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/grid/full` }

          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
            { title: '表单的默认值', routerLink: { name: 'ComponentGridFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } },
            { title: '自定义项插槽模板', routerLink: { name: 'ComponentGridFormItemTemplate' } },
            { title: '自定义表单插槽模板', routerLink: { name: 'ComponentGridFormTemplate' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentGridToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentGridToolbarTools' } },
            { title: '个性化列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
            { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
            { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
            { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
            { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
            { title: '完整功能', routerLink: { name: 'ComponentGridToolbarFull' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } },
            { title: '自定义第三方图标', isPlugin: true, linkUrl: `${otherUrl}/#/other-iconfont/font-class/toolbar/icons` },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentGridToolbarTemplateButtons' } },
                { title: '自定义左侧前缀模板', routerLink: { name: 'ComponentGridToolbarTemplateButtonPrefix' } },
                { title: '自定义左侧后缀模板', routerLink: { name: 'ComponentGridToolbarTemplateButtonSuffix' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentGridToolbarTemplateTools' } },
                { title: '自定义右侧前缀模板', routerLink: { name: 'ComponentGridToolbarTemplateToolPrefix' } },
                { title: '自定义右侧后缀模板', routerLink: { name: 'ComponentGridToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          title: '个性化列',
          children: [
            { title: '使用工具栏', routerLink: { name: 'ComponentGridCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentGridCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentGridCustomDrawer' } },
            { title: '默认隐藏列', routerLink: { name: 'ComponentGridCustomDefHide' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentGridCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentGridCustomVisibleMethod' } },
            { title: '列宽限制', routerLink: { name: 'ComponentGridCustomResizableWidth' } },
            { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
            { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
            { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
            { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
            { title: '允许拖拽分组', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FallowGroup' } } },
            { title: '允许拖拽聚合函数', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } },
            // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
            { title: '自定义触发按钮', routerLink: { name: 'ComponentGridCustomCustomBtn' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentGridCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
            { title: '本地保存聚合函数列设置', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2Fstorage' } } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridCustomTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridCustomTemplateBottom' } },
                { title: '自定义头部模板', routerLink: { name: 'ComponentGridCustomTemplateHeader' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridCustomTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridCustomTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentGridPagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentGridPagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentGridPagerStart' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义分页模板', routerLink: { name: 'ComponentGridPagerTemplatePager' } },
                { title: '自定义左侧模板', routerLink: { name: 'ComponentGridPagerTemplateLeft' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentGridPagerTemplateRight' } },
                { title: '自定义功能模板', routerLink: { name: 'ComponentGridPagerTemplateFunc' } }
              ]
            }
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
            { title: '层级结构', routerLink: { name: 'ComponentGridTreeHierarchy' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentGridTreeStripe' } },
            { title: '序号模式', routerLink: { name: 'ComponentGridTreeSeqMode' } },
            { title: '显示连接线', routerLink: { name: 'ComponentGridTreeLine' } },
            { title: '单选框', routerLink: { name: 'ComponentGridTreeRadio' } },
            {
              title: '复选框',
              children: [
                { title: '基础', routerLink: { name: 'ComponentGridTreeCheckboxBase' } },
                { title: '显示字段内容', routerLink: { name: 'ComponentGridTreeCheckboxLabelField' } },
                { title: '父子不关联', routerLink: { name: 'ComponentGridTreeCheckboxCheckStrictly' } },
                { title: '父子不关联与全选', routerLink: { name: 'ComponentGridTreeCheckboxStrictlyHeader' } }
              ]
            },
            { title: '冻结列', routerLink: { name: 'ComponentGridTreeFixed' } },
            { title: '排序', routerLink: { name: 'ComponentGridTreeSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridTreeFilter' } },
            { title: '默认展开', routerLink: { name: 'ComponentGridTreeExpandRowKeys' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentGridTreeExpandRow' } },
            // { title: '实现多字段分组', routerLink: { name: 'ComponentGridTreeGroupFields' } },
            { title: '自定义合并', routerLink: { name: 'ComponentGridTreeSpanMethod' } },
            { title: '懒加载', routerLink: { name: 'ComponentGridTreeLazy' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeText 文本', routerLink: { name: 'ComponentGridCellRenderVxeText' } },
            { title: 'VxeLink 链接', routerLink: { name: 'ComponentGridCellRenderVxeLink' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentGridCellRenderVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis 多行文本溢出省略', routerLink: { name: 'ComponentGridCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentGridCellRenderVxeRate' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
            { title: 'FormatNumberInput 格式化数值', routerLink: { name: 'ComponentGridCellRenderFormatNumberInput' } },
            { title: 'FormatSelect 格式化列表选项', routerLink: { name: 'ComponentGridCellRenderFormatOption' } },
            { title: 'FormatTreeSelect 格式化树选项', routerLink: { name: 'ComponentGridCellRenderFormatTree' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeText 文本', routerLink: { name: 'ComponentGridCellTemplateVxeText' } },
            { title: 'VxeLink 链接', routerLink: { name: 'ComponentGridCellTemplateVxeLink' } },
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentGridCellTemplateVxeTag' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentGridCellTemplateVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentGridCellTemplateVxeCheckboxGroup' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridCellTemplateVxeInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentGridCellTemplateVxeTextarea' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridCellTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentGridCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentGridEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
            { title: '编辑模式', routerLink: { name: 'ComponentGridEditMode' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentGridEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentGridEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleOriginalUpdate' } }
              ]
            },
            { title: '行校验', routerLink: { name: 'ComponentGridEditRowValid' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentGridEditCellValid' } },
            { title: '负数自动标红', routerLink: { name: 'ComponentGridEditShowNegativeStatus' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentGridEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentGridEditFooterImmediately' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentGridEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentGridEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentGridEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentGridEditDrawerSelect' } },
            { title: '实现行保存功能', routerLink: { name: 'ComponentGridEditRowSave' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaClip' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentGridEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentGridEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditRenderVxeIconPicker' } },
            { title: 'VxeColorPicker 颜色选择', routerLink: { name: 'ComponentGridEditRenderVxeColorPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentGridEditRenderVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditRenderVxeTableSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` },
            { title: '事件监听', routerLink: { name: 'ComponentGridEditRenderEvents' } },
            { title: '阻止激活编辑', routerLink: { name: 'ComponentGridEditRenderBeforeEdit' } },
            { title: '禁用编辑', routerLink: { name: 'ComponentGridEditRenderDisableEdit' } },
            { title: '切换编辑与只读', routerLink: { name: 'ComponentGridEditRenderReadonly' } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentGridEditTemplateInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentGridEditTemplateSelect' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentGridEditTemplateVxeButton' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentGridEditTemplateVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉选择', routerLink: { name: 'ComponentGridEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentGridEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridEditTemplateVxeDrawer' } },
            { title: '阻止激活编辑', routerLink: { name: 'ComponentGridEditTemplateBeforeEdit' } },
            { title: '禁用编辑', routerLink: { name: 'ComponentGridEditTemplateDisableEdit' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentGridValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentGridValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentGridValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentGridValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentGridValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentGridValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentGridValidateMode' } },
            { title: '校验指定单元格', routerLink: { name: 'ComponentGridValidateValidateField' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentGridValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义编辑模板', routerLink: { name: 'ComponentGridValidateTemplateEdit' } },
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentGridValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义布局模板', routerLink: { name: 'ComponentGridTemplateLayout' } },
            { title: '自定义表单模板', routerLink: { name: 'ComponentGridTemplateForm' } },
            { title: '自定义分页模板', routerLink: { name: 'ComponentGridTemplatePager' } },
            { title: '自定义单元格模板', routerLink: { name: 'ComponentGridTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentGridTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentGridTemplateFooter' } },
            { title: '自定义标题模板', routerLink: { name: 'ComponentTableTemplateTitle' } },
            { title: '自定义单元格提示模板', routerLink: { name: 'ComponentGridTemplateTooltip' } },
            { title: '自定义排序按钮模板', routerLink: { name: 'ComponentGridTemplateSort' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentGridTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentGridTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentGridTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentGridTemplateEdit' } },
            { title: '自定义单元格校验模板', routerLink: { name: 'ComponentGridTemplateValid' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentGridKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentGridKeyboardKeyboard' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridKeyboardCurrRow' } },
            { title: '高亮列', routerLink: { name: 'ComponentGridKeyboardCurrColumn' } },
            { title: '高亮行与列', routerLink: { name: 'ComponentGridKeyboardCurrRowCol' } },
            { title: '切换选中状态', routerLink: { name: 'ComponentGridKeyboardSelection' } },
            { title: '回车自动新增一行', routerLink: { name: 'ComponentGridKeyboardEnterAppend' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentGridKeyboardEdit' } },
            { title: '设置为追加式编辑', routerLink: { name: 'ComponentGridKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentGridKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentGridExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentGridExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentGridExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentGridExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentGridExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/grid/export` },
            { title: '自定义数据', routerLink: { name: 'ComponentGridExportData' } },
            { title: '格式化导出内容', routerLink: { name: 'ComponentGridExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } },
            { title: '排除列', routerLink: { name: 'ComponentGridExportExcludeFields' } },
            { title: '指定列', routerLink: { name: 'ComponentGridExportIncludeFields' } },
            { title: '自定义列', routerLink: { name: 'ComponentGridExportColumns' } },
            { title: '自定义导出类型', routerLink: { name: 'ComponentGridExportTypes' } },
            { title: '服务端导出', routerLink: { name: 'ComponentGridExportRemote' } },
            { title: '自定义导出模式', routerLink: { name: 'ComponentGridExportModes' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridExportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridExportTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridExportTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridExportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridExportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentGridImportBase' } },
            { title: '导入 TXT 格式', routerLink: { name: 'ComponentGridImportTxt' } },
            { title: '导入 XML 格式', routerLink: { name: 'ComponentGridImportXml' } },
            { title: '导入 HTML 格式', routerLink: { name: 'ComponentGridImportHtml' } },
            { title: '导入 CSV 格式', routerLink: { name: 'ComponentGridImportCsv' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/import` },
            { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } },
            { title: '服务端导入', routerLink: { name: 'ComponentGridImportRemote' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridImportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridImportTemplateBottom' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridImportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridImportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
            { title: '自定义顶部和底部', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
            { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } },
            { title: '指定列', routerLink: { name: 'ComponentGridPrintColumns' } },
            { title: '自定义页眉/标题', routerLink: { name: 'ComponentGridPrintHeader' } },
            { title: '自定义页尾/页码', routerLink: { name: 'ComponentGridPrintFooter' } },
            { title: '设置边距', routerLink: { name: 'ComponentGridPrintMargin' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridPrintTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridPrintTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridPrintTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridPrintTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridPrintTemplateDefault' } }
              ]
            },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentGridPrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentGridPrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentGridPrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
            { title: '列头自适应换行', routerLink: { name: 'ComponentGridScrollColBreak' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentGridScrollHV' } },
            { title: '排序与筛选', routerLink: { name: 'ComponentGridScrollHFull' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentGridScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentGridScrollFixed' } },
            // { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentGridScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentGridScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentGridScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentGridScrollAutoRowFixed' } },
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridScrollDragRow' } },
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridScrollDragCol' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } },
            { title: '使用表尾', routerLink: { name: 'ComponentGridScrollFooter' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridScrollMerge' } },
            { title: '合并与复杂功能', routerLink: { name: 'ComponentGridScrollMergeFixed' } },
            { title: '树形 + 纵向', routerLink: { name: 'ComponentGridScrollTree' } },
            { title: '树形 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVTree' } },
            { title: '树拖拽 + 纵向', routerLink: { name: 'ComponentGridScrollDragTree' } },
            { title: '展开行', routerLink: { name: 'ComponentGridScrollExpand' } },
            { title: '展开行 + 复杂子表渲染', routerLink: { name: 'ComponentGridScrollExpandFixed' } },
            { title: '可编辑 + 纵向', routerLink: { name: 'ComponentGridScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVEdit' } },
            { title: '百万级数据量', routerLink: { name: 'ComponentGridScrollBigData' } }
          ]
        },
        {
          title: '数据代理',
          children: [
            { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
            { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
            { title: '手动调用 - 操作分页', routerLink: { name: 'ComponentGridProxyManualPager' } },
            { title: '工具栏 - 查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
            { title: '手动调用 - 查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
            { title: '集成排序查询', routerLink: { name: 'ComponentGridProxySort' } },
            { title: '手动调用 - 操作排序', routerLink: { name: 'ComponentGridProxyManualSort' } },
            { title: '集成筛选查询', routerLink: { name: 'ComponentGridProxyFilter' } },
            { title: '集成表单查询', routerLink: { name: 'ComponentGridProxyForm' } },
            { title: '集成分页序号', routerLink: { name: 'ComponentGridProxySeq' } },
            { title: '工具栏 - 全量数据导出', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
            { title: '工具栏 - 服务端导出', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
            { title: '工具栏 - 删除已选', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
            { title: '手动调用 - 删除已选', routerLink: { name: 'ComponentGridProxyManualDelete' } },
            { title: '工具栏 - 批量标记删除', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
            { title: '手动调用 - 标记删除状态', routerLink: { name: 'ComponentGridProxyManualMark' } },
            { title: '工具栏 - 增删改查', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
            { title: '手动调用 - 增删改查', routerLink: { name: 'ComponentGridProxyManualSave' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentGridSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentGridSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaFNR' } } }
          ]
        },
        {
          title: '滚动条',
          children: [
            { title: '滚动条样式', routerLink: { name: 'ComponentGridScrollbarBarStyle' } },
            { title: '滚动条位置', routerLink: { name: 'ComponentGridScrollbarBarPos' } },
            { title: '滚动条显示方式', routerLink: { name: 'ComponentGridScrollbarBarVisible' } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentGridEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentGridEventsScroll' } }
          ]
        },
        {
          title: '无限加载',
          children: [
            { title: '实现加载行', routerLink: { name: 'ComponentGridLoadMoreVertical' } },
            { title: '实现加载列', routerLink: { name: 'ComponentGridLoadMoreHorizontal' } },
            { title: '实现同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreVH' } },
            { title: '指定阈值加载行', routerLink: { name: 'ComponentGridLoadMoreBoundaryY' } },
            { title: '指定阈值加载列', routerLink: { name: 'ComponentGridLoadMoreBoundaryX' } },
            { title: '指定阈值同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreBoundaryXY' } }
          ]
        },
        {
          title: '功能示例',
          children: [
            { title: '操作列的显示隐藏', routerLink: { name: 'ComponentGridOtherVisibleColumn' } },
            { title: '在页签中使用', routerLink: { name: 'ComponentGridOtherTabs' } },
            { title: '定位行、定位列的使用', routerLink: { name: 'ComponentGridOtherScrollTo' } },
            { title: '实现数据自动滚动', routerLink: { name: 'ComponentGridOtherAutoScroll' } },
            { title: '实现数据定时更新', routerLink: { name: 'ComponentGridOtherAutoIncrement' } },
            { title: '实现反转列与行', routerLink: { name: 'ComponentGridOtherReverse' } },
            { title: '实现上传文件列表', routerLink: { name: 'ComponentGridOtherFileList' } },
            { title: '实现多行文本溢出省略', routerLink: { name: 'ComponentGridOtherLineEllipsis' } },
            { title: '实现最小行高同时自适应行高', routerLink: { name: 'ComponentGridOtherMinAutoRowHeight' } },
            { title: '实现动态生成月份表头', routerLink: { name: 'ComponentGridOtherYearMonth' } },
            { title: '实现分页复选框选择', routerLink: { name: 'ComponentGridOtherPageCheckbox' } },
            { title: '实现记账凭证', routerLink: { name: 'ComponentGridOtherBookkeepingVoucher' } },
            { title: '单元格可拖拽调整宽高', routerLink: { name: 'ComponentGridOtherAllRowColDrag' } },
            { title: '实现粘贴上传', routerLink: { name: 'ComponentGridOtherPasteToUpload' } },
            { title: '实现左边树和右边表格', routerLink: { name: 'ComponentGridOtherLeftRight' } },
            { title: '实现表格穿梭选择', routerLink: { name: 'ComponentGridOtherTableTransfer' } },
            { title: '树形实现子节点自定义表头', routerLink: { name: 'ComponentGridOtherTreeSubCols' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableOtherPlugin',
      children: [
        { title: '单元格图表插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-chart/grid/bar` },
        { title: '右键菜单插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` },
        { title: '数据校验插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/table/base` },
        { title: '导出 XLSX 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/export` },
        { title: '导出 PDF 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/table/export` },
        { title: '更多第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableCssVar',
      children: [
        { title: '字体大小', routerLink: { name: 'CssVarTableFontSize' } },
        { title: '字体颜色', routerLink: { name: 'CssVarTableFontColor' } },
        { title: '单元格边框', routerLink: { name: 'CssVarTableBorder' } },
        { title: '表格背景色', routerLink: { name: 'CssVarTableBackground' } },
        { title: '行与列上移背景色', routerLink: { name: 'CssVarTableRowColHover' } },
        { title: '当前行与列背景色', routerLink: { name: 'CssVarTableRowColCurrent' } },
        { title: '单元格默认高度', routerLink: { name: 'CssVarTableRowHeight' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalFormats',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
        { title: '单元格', routerLink: { name: 'GlobalFormatsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalMenus',
      children: [
        { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
        { title: '右键菜单', routerLink: { name: 'GlobalMenusTableBase' } },
        { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalCommands',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
        { title: '工具栏', routerLink: { name: 'GlobalCommandsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalValidators',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
        { title: '单元格校验', routerLink: { name: 'GlobalValidatorsTableBase' } },
        { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/table/base` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          title: '单元格',
          children: [
            { title: '实现单元格超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' }, keywords: 'cell-render' },
            { title: '实现单元格图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' }, keywords: 'cell-render' },
            { title: '实现单元格金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyAmount' }, keywords: 'cell-render' },
            { title: '实现表头超链接', routerLink: { name: 'GlobalRendererTableDefaultMyHeaderLink' }, keywords: 'cell-render' },
            { title: '实现表尾金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFooterAmount' }, keywords: 'cell-render' },
            { title: '实现完整金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFullAmount' }, keywords: 'cell-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' }, keywords: 'edit-render' },
            { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' }, keywords: 'edit-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' }, keywords: 'content-render' },
            { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' }, keywords: 'content-render' }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' }, keywords: 'button-render' },
            { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' }, keywords: 'tool-render' }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' }, keywords: 'filter-render' },
            { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' }, keywords: 'filter-render' },
            { title: '实现一个显示列表的筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' }, keywords: 'filter-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/filter/el-input`, keywords: 'filter-render' },
            { title: '更多筛选插件', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/' }
          ]
        },
        {
          title: '空数据提示',
          children: [
            { title: '实现一个空数据显示文字', routerLink: { name: 'GlobalRendererTableMyEmptyImg' }, keywords: 'empty-render' },
            { title: '实现一个空数据显示图片', routerLink: { name: 'GlobalRendererTableMyEmptyText' }, keywords: 'empty-render' }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalInterceptor',
      children: [
        { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
        { title: '可编辑 - 兼容性处理', routerLink: { name: 'GlobalInterceptorTableBase' } }
      ]
    }
  ]
}
