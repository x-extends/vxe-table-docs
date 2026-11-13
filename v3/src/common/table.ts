import { NavVO, otherUrl } from './nav'
import { gridNavConfig } from './grid'

export const tableNavConfig: NavVO = {
  // Table 表格
  i18nKey: 'app.aside.menu.tableTitle',
  icon: 'vxe-icon-table',
  children: [
    {
      // Table 基础表格
      i18nKey: 'app.aside.menu.tableTableTitle',
      icon: 'vxe-icon-table',
      children: [
        { title: 'Table API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } }, keywords: 'vxe-table' },
        { title: 'Colgroup API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'colgroup' } } },
        { title: 'Column API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'column' } } },
        { title: 'Toolbar API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'toolbar' } } },
        {
          // 基础功能
          i18nKey: 'app.aside.menu.tableBasicFeatures',
          children: [
            // 基础
            { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentTableBaseBasic' } },
            // 尺寸大小
            { i18nKey: 'app.aside.menu.tableSize', routerLink: { name: 'ComponentTableBaseSize' }, keywords: 'size' },
            // 行主键
            { i18nKey: 'app.aside.menu.tableRowKey', routerLink: { name: 'ComponentTableBaseRowKey' }, keywords: 'key-field' },
            // 数据类型
            { i18nKey: 'app.aside.menu.tableDataType', routerLink: { name: 'ComponentTableBaseData' }, keywords: 'data' },
            // 表尾数据
            { i18nKey: 'app.aside.menu.tableFooterData', routerLink: { name: 'ComponentTableBaseFooter' }, keywords: 'show-footer,footer-data' },
            // 空数据提示
            { i18nKey: 'app.aside.menu.tableEmptyTip', routerLink: { name: 'ComponentTableBaseEmpty' }, keywords: 'empty-text' },
            // 边框
            { i18nKey: 'app.aside.menu.tableBorder', routerLink: { name: 'ComponentTableBaseBorder' }, keywords: 'border' },
            // 圆角
            { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'ComponentTableBaseRound' }, keywords: 'round' },
            // { i18nKey: 'app.aside.menu.tablePadding', routerLink: { name: 'ComponentTableBasePadding' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.tableAlign', routerLink: { name: 'ComponentTableBaseAlign' }, keywords: '对齐,align' },
            // 隐藏列
            { i18nKey: 'app.aside.menu.tableHideColumn', routerLink: { name: 'ComponentTableBaseVisible' }, keywords: '显示,隐藏,visible' },
            // 设置列宽
            { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentTableBaseWidth' }, keywords: '宽度,列宽' },
            // 设置最小列宽
            { i18nKey: 'app.aside.menu.tableSetMinColumnWidth', routerLink: { name: 'ComponentTableBaseMinWidth' }, keywords: '最小宽度,最小列宽' },
            // 设置最大列宽
            { i18nKey: 'app.aside.menu.tableSetMaxColumnWidth', routerLink: { name: 'ComponentTableBaseMaxWidth' }, keywords: '最大宽度,最大列宽' },
            // 自适应列宽
            { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentTableBaseAutoWidth' }, keywords: '宽度,自适应列宽,width,auto' },
            // 自适应单元格高度
            { i18nKey: 'app.aside.menu.tableAutoCellHeight', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            // 溢出隐藏
            { i18nKey: 'app.aside.menu.tableOverflowHidden', routerLink: { name: 'ComponentTableBaseOverflow' }, keywords: 'show-overflow,show-header-overflow,show-footer-overflow' },
            // 文本提示
            { i18nKey: 'app.aside.menu.tableTextTip', routerLink: { name: 'ComponentTableBaseTooltip' }, keywords: 'tooltip' },
            // { i18nKey: 'app.aside.menu.tableScrollStyle', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            // 斑马线样式
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentTableBaseStripe' }, keywords: 'stripe' },
            // 单元格样式
            { i18nKey: 'app.aside.menu.tableCellStyle', routerLink: { name: 'ComponentTableBaseStyle' }, keywords: 'cell-class-name,row-class-name' },
            // 动态样式
            { i18nKey: 'app.aside.menu.tableDynamicStyle', routerLink: { name: 'ComponentTableBaseDynamicStyle' }, keywords: 'cell-style,row-style' },
            // 隐藏表头
            { i18nKey: 'app.aside.menu.tableHideHeader', routerLink: { name: 'ComponentTableBaseHeader' }, keywords: 'show-header' },
            // 高亮列
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentTableBaseCurrentColumn' }, keywords: 'isCurrent' },
            // 高亮行
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentTableBaseCurrentRow' }, keywords: 'isCurrent' },
            // 拖拽调整列宽
            { i18nKey: 'app.aside.menu.tableDragResizeColumnWidth', routerLink: { name: 'ComponentTableBaseHeaderResizable' }, keywords: 'resizable' },
            // 表格最小高度
            { i18nKey: 'app.aside.menu.tableMinHeight', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' }, keywords: 'min-height' },
            // 表格高度
            { i18nKey: 'app.aside.menu.tableHeight', routerLink: { name: 'ComponentTableBaseHeight' }, keywords: 'height' },
            // 表格最大高度
            { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentTableBaseMaxHeight' }, keywords: 'max-height' },
            // 表格响应式高度
            { i18nKey: 'app.aside.menu.tableResponsiveHeight', routerLink: { name: 'ComponentTableBaseAutoHeight' }, keywords: '自适应高度,sync-resize,auto-resize' },
            // 设置列高
            { i18nKey: 'app.aside.menu.tableSetColumnHeight', routerLink: { name: 'ComponentTableBaseColumnHeight' }, keywords: 'height' },
            // 设置行高
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableBaseRowHeight' }, keywords: 'height' },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableBaseFixed' }, keywords: 'fixed' },
            // 冻结表头和列
            { i18nKey: 'app.aside.menu.tableFixedHeaderAndColumn', routerLink: { name: 'ComponentTableBaseFixedFull' }, keywords: 'fixed,height' },
            // 分组表头
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentTableBaseGroup' }, keywords: 'colgroup' },
            // 排序
            { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentTableBaseSort' }, keywords: 'sortable' },
            // 筛选
            { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentTableBaseFilter' }, keywords: 'filters' },
            // 加载中
            { i18nKey: 'app.aside.menu.tableLoading', routerLink: { name: 'ComponentTableBaseLoading' }, keywords: 'loading' },
            // 格式化内容
            { i18nKey: 'app.aside.menu.tableFormatContent', routerLink: { name: 'ComponentTableBaseFormat' }, keywords: 'formatter' },
            // 序号
            { i18nKey: 'app.aside.menu.tableSeq', routerLink: { name: 'ComponentTableBaseSeq' }, keywords: 'seq' },
            // 单选框
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentTableBaseRadio' }, keywords: 'radio' },
            // 复选框
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentTableBaseSelection' }, keywords: 'checkbox' },
            // 标题前缀图标
            { i18nKey: 'app.aside.menu.tableTitlePrefixIcon', routerLink: { name: 'ComponentTableBaseTitlePrefix' }, keywords: 'title-prefix' },
            // 标题后缀图标
            { i18nKey: 'app.aside.menu.tableTitleSuffixIcon', routerLink: { name: 'ComponentTableBaseTitleSuffix' }, keywords: 'title-suffix' },
            // HTML 类型
            { i18nKey: 'app.aside.menu.tableHtmlType', routerLink: { name: 'ComponentTableBaseHtml' }, keywords: 'html' },
            // 完整案例
            { i18nKey: 'app.aside.menu.tableFullExample', routerLink: { name: 'ComponentTableBaseFull' } }
          ]
        },
        {
          // 单元格合并
          i18nKey: 'app.aside.menu.tableCellMerge',
          children: [
            // 将多行进行合并
            { i18nKey: 'app.aside.menu.tableMergeRows', routerLink: { name: 'ComponentTableMergeRow' } },
            // 将多列进行合并
            { i18nKey: 'app.aside.menu.tableMergeColumns', routerLink: { name: 'ComponentTableMergeColumn' } },
            // 合并行与列
            { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentTableMergeAll' } },
            // 表尾合并
            { i18nKey: 'app.aside.menu.tableMergeFooter', routerLink: { name: 'ComponentTableMergeFooter' } },
            // 实现横向合并树
            { i18nKey: 'app.aside.menu.tableMergeHorizontalTree', routerLink: { name: 'ComponentTableMergeHorizontal' } },
            // 快捷键合并
            { i18nKey: 'app.aside.menu.tableShortcutMerge', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaMerge' } } }
          ]
        },
        {
          // 表尾数据
          i18nKey: 'app.aside.menu.tableFooterData',
          children: [
            // 是否启用表尾
            { i18nKey: 'app.aside.menu.tableEnableFooter', routerLink: { name: 'ComponentTableFooterShowFooter' } },
            // 标准结构
            { i18nKey: 'app.aside.menu.tableStandardStructure', routerLink: { name: 'ComponentTableFooterFooterData' } },
            // 自定义数据方法
            { i18nKey: 'app.aside.menu.tableCustomDataMethod', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
            // 格式化表尾内容
            { i18nKey: 'app.aside.menu.tableFormatFooterContent', routerLink: { name: 'ComponentTableFooterFooterFormat' } },
            // 自定义插槽模板
            { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentTableFooterTemplate' } }
          ]
        },
        {
          // 单选框
          i18nKey: 'app.aside.menu.tableRadio',
          children: [
            // 高亮选择行
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentTableRadioHighlight' } },
            // 禁用
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentTableRadioCheckMethod' } },
            // 显示隐藏
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentTableRadioVisibleMethod' } },
            // 自定义模板
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentTableRadioTemplate' } }
          ]
        },
        {
          // 复选框
          i18nKey: 'app.aside.menu.tableCheckbox',
          children: [
            // 高亮选择行
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentTableCheckboxHighlight' } },
            // 绑定字段
            { i18nKey: 'app.aside.menu.tableBindField', routerLink: { name: 'ComponentTableCheckboxField' } },
            // 禁用
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentTableCheckboxCheckMethod' } },
            // 显示隐藏
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentTableCheckboxVisibleMethod' } },
            // 鼠标滑动范围选择
            { i18nKey: 'app.aside.menu.tableMouseDragRangeSelect', routerLink: { name: 'ComponentTableCheckboxRange' } },
            // 单元格选择-复选框
            { i18nKey: 'app.aside.menu.tableCellSelectCheckbox', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaCheckbox' } } },
            // 自定义模板
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentTableCheckboxTemplate' } }
          ]
        },
        {
          // 排序
          i18nKey: 'app.aside.menu.tableSort',
          children: [
            // 数据排序
            { i18nKey: 'app.aside.menu.tableDataSort', routerLink: { name: 'ComponentTableSortBase' } },
            // 多字段排序
            { i18nKey: 'app.aside.menu.tableMultiFieldSort', routerLink: { name: 'ComponentTableSortMultiple' } },
            // 触发方式
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableSortTrigger' } },
            // 自定义轮询
            { i18nKey: 'app.aside.menu.tableCustomOrders', routerLink: { name: 'ComponentTableSortOrders' } },
            // 按钮控制
            { i18nKey: 'app.aside.menu.tableButtonControl', routerLink: { name: 'ComponentTableSortAllowBtn' } },
            // 设置默认排序
            { i18nKey: 'app.aside.menu.tableSetDefaultSort', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            // 设置值的类型
            { i18nKey: 'app.aside.menu.tableSetValueType', routerLink: { name: 'ComponentTableSortSortType' } },
            // 自定义排序方法
            { i18nKey: 'app.aside.menu.tableCustomSortMethod', routerLink: { name: 'ComponentTableSortSortMethod' } },
            // 服务端排序
            { i18nKey: 'app.aside.menu.tableRemoteSort', routerLink: { name: 'ComponentTableSortRemote' } },
            // 手动操作排序
            { i18nKey: 'app.aside.menu.tableManualSort', routerLink: { name: 'ComponentTableSortSetSort' } }
          ]
        },
        {
          // 列宽调整
          i18nKey: 'app.aside.menu.tableColumnWidthResize',
          children: [
            // 拖拽模式
            { i18nKey: 'app.aside.menu.tableDragMode', routerLink: { name: 'ComponentTableColResizableMode' } },
            // 分组列头
            { i18nKey: 'app.aside.menu.tableGroupColumnHeader', routerLink: { name: 'ComponentTableColResizableGroup' } },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableColResizableFixed' } }
          ]
        },
        {
          // 列拖拽
          i18nKey: 'app.aside.menu.tableColumnDrag',
          children: [
            // 拖拽调整列顺序
            { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentTableColDragSort' } },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableColDragFixed' } },
            // 自定义图标
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableColDragIcon' } },
            // 拖拽辅助样式
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableColDragShowGuidesStatus' } },
            // 分组表头
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentTableColDragGroup' } },
            // 触发方式
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableColDragTrigger' } },
            // 拖拽事件
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentTableColDragEvents' } },
            // 禁用按钮
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentTableColDragDisabledMethod' } },
            // 按钮可视
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentTableColDragVisibleMethod' } },
            // 拖拽拦截
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentTableColDragDragMethod' } }
          ]
        },
        {
          // 行高调整
          i18nKey: 'app.aside.menu.tableRowHeightResize',
          children: [
            // 行高拖拽
            { i18nKey: 'app.aside.menu.tableRowHeightDrag', routerLink: { name: 'ComponentTableRowResizableBase' } },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableRowResizableFixed' } },
            // 树结构
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableRowResizableTree' } },
            // 拖拽按钮位置
            { i18nKey: 'app.aside.menu.tableDragButtonPosition', routerLink: { name: 'ComponentTableRowResizableRowResize' } },
            // 手动操作行高
            { i18nKey: 'app.aside.menu.tableManualRowHeight', routerLink: { name: 'ComponentTableRowResizableManual' } }
          ]
        },
        {
          // 行拖拽
          i18nKey: 'app.aside.menu.tableRowDrag',
          children: [
            // 拖拽调整行顺序
            { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentTableRowDragSort' } },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableRowDragFixed' } },
            // 自定义图标
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableRowDragIcon' } },
            // 拖拽辅助样式
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableRowDragShowGuidesStatus' } },
            // 触发方式
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableRowDragTrigger' } },
            {
              // 树结构
              i18nKey: 'app.aside.menu.tableTree',
              children: [
                // 树拖拽
                { i18nKey: 'app.aside.menu.tableTreeDrag', routerLink: { name: 'ComponentTableRowDragTreeBase' } },
                // 跨层级拖拽
                { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentTableRowDragTreeCossDrag' } },
                // 自己拖拽给自己子级
                { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentTableRowDragTreeSelfToChildDrag' } },
                // 拖拽成子级
                { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentTableRowDragTreeToChildDrag' } },
                // 拖拽辅助样式
                { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableRowDragTreeShowGuidesStatus' } },
                // 拖拽二次确认
                { i18nKey: 'app.aside.menu.tableDragSecondaryConfirm', routerLink: { name: 'ComponentTableRowDragTreeDragMethod' } },
                // 懒加载
                { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableRowDragTreeLazy' } }
              ]
            },
            // 拖拽事件
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentTableRowDragEvents' } },
            // 禁用按钮
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentTableRowDragDisabledMethod' } },
            // 按钮可视
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentTableRowDragVisibleMethod' } },
            // 拖拽拦截
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentTableRowDragDragMethod' } }
          ]
        },
        {
          // 筛选
          i18nKey: 'app.aside.menu.tableFilter',
          children: [
            // 数据筛选
            { i18nKey: 'app.aside.menu.tableDataFilter', routerLink: { name: 'ComponentTableFilterBase' } },
            // 服务端筛选
            { i18nKey: 'app.aside.menu.tableRemoteFilter', routerLink: { name: 'ComponentTableFilterRemote' } },
            // 树结构
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableFilterTree' } },
            // 手动弹出
            { i18nKey: 'app.aside.menu.tableManualPopup', routerLink: { name: 'ComponentTableFilterManual' } },
            // 手动筛选
            { i18nKey: 'app.aside.menu.tableManualFilter', routerLink: { name: 'ComponentTableFilterSetFilter' } },
            {
              // 浮动筛选
              i18nKey: 'app.aside.menu.tableFloatingFilter',
              children: [
                { title: 'VxeInput', routerLink: { name: 'ComponentTableFilterFloatingVxeInput' } },
                { title: 'VxeNumberInput', routerLink: { name: 'ComponentTableFilterFloatingVxeNumberInput' } },
                { title: 'VxeSelect', routerLink: { name: 'ComponentTableFilterFloatingVxeSelect' } },
                { title: 'VxeDatePicker', routerLink: { name: 'ComponentTableFilterFloatingVxeDatePicker' } },
                // 完整筛选
                { i18nKey: 'app.aside.menu.tableFullFilter', routerLink: { name: 'ComponentTableFilterFloatingFull' } },
                // 自定义插槽模板
                { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentTableFilterFloatingTemplate' } }
              ]
            },
            // 输入筛选
            { i18nKey: 'app.aside.menu.tableInputFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Ftable%2Fcomplex%2FstringFilter' } } },
            // 组合筛选
            { i18nKey: 'app.aside.menu.tableCombinationFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Ftable%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          // 行分组
          i18nKey: 'app.aside.menu.tableRowGroup',
          children: [
            // 行分组
            { i18nKey: 'app.aside.menu.tableRowGroup', routerLink: { name: 'ComponentTableRowGroupBasic' } },
            // 按多字个列进行分组
            { i18nKey: 'app.aside.menu.tableGroupByMultipleColumns', routerLink: { name: 'ComponentTableRowGroupGroupFields' } },
            // 显示分组统计
            { i18nKey: 'app.aside.menu.tableShowGroupStats', routerLink: { name: 'ComponentTableRowGroupTotal' } },
            // 显示多列合计
            { i18nKey: 'app.aside.menu.tableShowMultiColumnTotal', routerLink: { name: 'ComponentTableRowGroupCount' } },
            // 自定义合并
            { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentTableRowGroupSpanMethod' } },
            // 手动操作
            { i18nKey: 'app.aside.menu.tableManualOperation', routerLink: { name: 'ComponentTableRowGroupHandleSet' } },
            {
              // 自定义插槽模板
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                // 自定义分组列内容模板
                { i18nKey: 'app.aside.menu.tableCustomGroupColumnContentTemplate', routerLink: { name: 'ComponentTableRowGroupTemplateGroupContent' } }
                // { i18nKey: 'app.aside.menu.tableCustomGroupColumnAggregateTemplate', routerLink: { name: 'ComponentTableRowGroupTemplateGroupValues' } }
              ]
            },
            // 分组汇总
            { i18nKey: 'app.aside.menu.tableGroupSummary', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Faggregation%2FrowGroupSummary' } } }
          ]
        },
        {
          // 展开行
          i18nKey: 'app.aside.menu.tableExpandRow',
          children: [
            // 基础使用
            { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentTableExpandBasic' } },
            // 展开容器内间距
            { i18nKey: 'app.aside.menu.tableExpandContainerPadding', routerLink: { name: 'ComponentTableExpandPadding' } },
            // 自定义图标
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableExpandIcon' } },
            // 展开容器高度
            { i18nKey: 'app.aside.menu.tableExpandContainerHeight', routerLink: { name: 'ComponentTableExpandHeight' } },
            // 使用冻结列
            { i18nKey: 'app.aside.menu.tableUseFixedColumn', routerLink: { name: 'ComponentTableExpandFixed' } },
            // 触发方式
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableExpandTrigger' } },
            // 懒加载
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableExpandLazy' } },
            // 展开按钮的显示隐藏
            { i18nKey: 'app.aside.menu.tableExpandButtonVisible', routerLink: { name: 'ComponentTableExpandVisibleMethod' } },
            // 展开与关闭的控制
            { i18nKey: 'app.aside.menu.tableExpandToggleControl', routerLink: { name: 'ComponentTableExpandToggleMethod' } },
            // 实现展开子表格
            { i18nKey: 'app.aside.menu.tableExpandChildTable', routerLink: { name: 'ComponentTableExpandChildTable' } }
          ]
        },
        {
          // 右键菜单
          i18nKey: 'app.aside.menu.tableContextMenu',
          children: [
            // 表头菜单
            { i18nKey: 'app.aside.menu.tableHeaderMenu', routerLink: { name: 'ComponentTableMenuHeader' } },
            // 单元格菜单
            { i18nKey: 'app.aside.menu.tableCellMenu', routerLink: { name: 'ComponentTableMenuBody' } },
            // 表尾菜单
            { i18nKey: 'app.aside.menu.tableFooterMenu', routerLink: { name: 'ComponentTableMenuFooter' } },
            // 自定义前缀
            { i18nKey: 'app.aside.menu.tableCustomPrefix', routerLink: { name: 'ComponentTableMenuPrefixConfig' } },
            // 自定义后缀
            { i18nKey: 'app.aside.menu.tableCustomSuffix', routerLink: { name: 'ComponentTableMenuSuffixConfig' } },
            // 完整右键菜单
            { i18nKey: 'app.aside.menu.tableFullContextMenu', routerLink: { name: 'ComponentTableMenuFull' } },
            // 同步权限控制
            { i18nKey: 'app.aside.menu.tableSyncPermissionControl', routerLink: { name: 'ComponentTableMenuPrivilege' } },
            // 便捷配置 Code 插件
            { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full` }
          ]
        },
        {
          // 查询表单
          i18nKey: 'app.aside.menu.tableQueryForm',
          children: [
            // 集成表单
            { i18nKey: 'app.aside.menu.tableIntegratedForm', routerLink: { name: 'ComponentTableFormFormData' } },
            // 带折叠的查询表单
            { i18nKey: 'app.aside.menu.tableCollapsibleQueryForm', routerLink: { name: 'ComponentTableFormCollapse' } }
          ]
        },
        {
          // 工具栏
          i18nKey: 'app.aside.menu.tableToolbar',
          children: [
            // 左侧按钮
            { i18nKey: 'app.aside.menu.tableLeftButtons', routerLink: { name: 'ComponentTableToolbarButtons' } },
            // 右侧按钮
            { i18nKey: 'app.aside.menu.tableRightButtons', routerLink: { name: 'ComponentTableToolbarTools' } },
            // 个性化设置
            { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentTableToolbarCustom' } },
            // 刷新功能
            { i18nKey: 'app.aside.menu.tableRefreshFeature', routerLink: { name: 'ComponentTableToolbarRefresh' } },
            // 打印功能
            { i18nKey: 'app.aside.menu.tablePrintFeature', routerLink: { name: 'ComponentTableToolbarPrint' } },
            // 导入功能
            { i18nKey: 'app.aside.menu.tableImportFeature', routerLink: { name: 'ComponentTableToolbarImport' } },
            // 导出功能
            { i18nKey: 'app.aside.menu.tableExportFeature', routerLink: { name: 'ComponentTableToolbarExport' } },
            {
              // 自定义插槽模板
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                // 自定义左侧模板
                { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtons' } },
                // 自定义左侧前缀模板
                { i18nKey: 'app.aside.menu.tableCustomLeftPrefixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtonPrefix' } },
                // 自定义左侧后缀模板
                { i18nKey: 'app.aside.menu.tableCustomLeftSuffixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtonSuffix' } },
                // 自定义右侧模板
                { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentTableToolbarTemplateTools' } },
                // 自定义右侧前缀模板
                { i18nKey: 'app.aside.menu.tableCustomRightPrefixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateToolPrefix' } },
                // 自定义右侧后缀模板
                { i18nKey: 'app.aside.menu.tableCustomRightSuffixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          // 个性化设置
          i18nKey: 'app.aside.menu.tablePersonalization',
          children: [
            // 关联工具栏
            { i18nKey: 'app.aside.menu.tableLinkToolbar', routerLink: { name: 'ComponentTableCustomToolbar' } },
            // 窗口模式
            { i18nKey: 'app.aside.menu.tableWindowMode', routerLink: { name: 'ComponentTableCustomModal' } },
            // 抽屉模式
            { i18nKey: 'app.aside.menu.tableDrawerMode', routerLink: { name: 'ComponentTableCustomDrawer' } },
            // 默认隐藏列
            { i18nKey: 'app.aside.menu.tableDefaultHiddenColumns', routerLink: { name: 'ComponentTableCustomDefHide' } },
            // 禁用操作操作
            { i18nKey: 'app.aside.menu.tableDisableOperations', routerLink: { name: 'ComponentTableCustomCheckMethod' } },
            // 显示/隐藏操作列
            { i18nKey: 'app.aside.menu.tableShowHideActionColumn', routerLink: { name: 'ComponentTableCustomVisibleMethod' } },
            // 允许调整列显示隐藏
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnVisibility', routerLink: { name: 'ComponentTableCustomVisible' } },
            // 允许调整列冻结
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnFixed', routerLink: { name: 'ComponentTableCustomFixed' } },
            // 允许调整列宽
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnWidth', routerLink: { name: 'ComponentTableCustomResizable' } },
            // 允许拖拽列顺序
            { i18nKey: 'app.aside.menu.tableAllowDragColumnOrder', routerLink: { name: 'ComponentTableCustomSort' } },
            // 允许拖拽分组
            { i18nKey: 'app.aside.menu.tableAllowDragGroup', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FallowGroup' } } },
            // 允许拖拽聚合函数
            { i18nKey: 'app.aside.menu.tableAllowDragAggregateFunction', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FaggDragValues' } } },
            // 冻结列最大数量限制
            { i18nKey: 'app.aside.menu.tableFixedColumnMaxLimit', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            // 自定义触发按钮
            { i18nKey: 'app.aside.menu.tableCustomTriggerButton', routerLink: { name: 'ComponentTableCustomCustomBtn' } },
            // 自定义弹出位置
            { i18nKey: 'app.aside.menu.tableCustomPopupPosition', routerLink: { name: 'ComponentTableCustomPlacement' } },
            // 事件监听
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentTableCustomEvents' } },
            // 实时更新
            { i18nKey: 'app.aside.menu.tableRealtimeUpdate', routerLink: { name: 'ComponentTableCustomImmediate' } },
            // 本地保存列设置
            { i18nKey: 'app.aside.menu.tableLocalSaveColumnSettings', routerLink: { name: 'ComponentTableCustomStorage' } },
            // 本地保存聚合函数列设置
            { i18nKey: 'app.aside.menu.tableLocalSaveAggregateColumnSettings', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2Fstorage' } } },
            // 自定义服务端保存
            { i18nKey: 'app.aside.menu.tableCustomRemoteSave', routerLink: { name: 'ComponentTableCustomRemote' } },
            // 实现服务端保存与恢复
            { i18nKey: 'app.aside.menu.tableRemoteSaveAndRestore', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            // 实现显示/隐藏列
            { i18nKey: 'app.aside.menu.tableImplementShowHideColumn', routerLink: { name: 'ComponentTableCustomManual' } }
          ]
        },
        {
          // 数据分页
          i18nKey: 'app.aside.menu.tableDataPagination',
          children: [
            // 实现前端分页
            { i18nKey: 'app.aside.menu.tableFrontendPagination', routerLink: { name: 'ComponentTablePagerMockPage' } },
            // 自定义布局
            { i18nKey: 'app.aside.menu.tableCustomLayout', routerLink: { name: 'ComponentTablePagerLayouts' } },
            // 自定义序号
            { i18nKey: 'app.aside.menu.tableCustomSeq', routerLink: { name: 'ComponentTablePagerStart' } }
          ]
        },
        {
          // 树结构
          i18nKey: 'app.aside.menu.tableTree',
          children: [
            // 基础使用
            { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentTableTreeBasic' } },
            // 平级结构
            { i18nKey: 'app.aside.menu.tableFlatStructure', routerLink: { name: 'ComponentTableTreeLeveling' } },
            // 层级结构
            { i18nKey: 'app.aside.menu.tableHierarchyStructure', routerLink: { name: 'ComponentTableTreeHierarchy' } },
            // 斑马线样式
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentTableTreeStripe' } },
            // 序号模式
            { i18nKey: 'app.aside.menu.tableSeqMode', routerLink: { name: 'ComponentTableTreeSeqMode' } },
            // 自定义图标
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableTreeIcon' } },
            // 显示连接线
            {
              i18nKey: 'app.aside.menu.tableShowConnectionLine',
              children: [
                // 连接线
                { i18nKey: 'app.aside.menu.tableShowConnectionShowLine', routerLink: { name: 'ComponentTableTreeLineShowLine' } }
              ]
            },
            // 表格最大高度
            { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            // 手风琴效果
            { i18nKey: 'app.aside.menu.tableAccordionEffect', routerLink: { name: 'ComponentTableTreeAccordion' } },
            // 高亮行
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentTableTreeCurrentRow' } },
            // 高亮列
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentTableTreeCurrentColumn' } },
            // 单选框
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentTableTreeRadio' } },
            // 复选框
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            // 树形排序
            { i18nKey: 'app.aside.menu.tableTreeSort', routerLink: { name: 'ComponentTableTreeSort' } },
            // 树形筛选
            { i18nKey: 'app.aside.menu.tableTreeFilter', routerLink: { name: 'ComponentTableTreeFilter' } },
            // 冻结列
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableTreeFixed' } },
            // 右键菜单
            { i18nKey: 'app.aside.menu.tableContextMenu', routerLink: { name: 'ComponentTableTreeMenu' } },
            // 懒加载
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableTreeLazy' } },
            // 懒加载 - 可编辑
            { i18nKey: 'app.aside.menu.tableLazyLoadEditable', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            // 同时使用展开行
            { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentTableTreeExpand' } },
            // 同时使用展开行 - 懒加载
            { i18nKey: 'app.aside.menu.tableUseExpandRowLazyLoad', routerLink: { name: 'ComponentTableTreeExpandLazy' } },
            // { i18nKey: 'app.aside.menu.tableImplementDataGrouping', routerLink: { name: 'ComponentTableTreeGroup' } },
            // 单元格选取
            { i18nKey: 'app.aside.menu.tableCellSelection', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Ftree%2FareaTree' } } }
          ]
        },
        {
          // 单元格 - 渲染 - 配置式
          i18nKey: 'app.aside.menu.tableCellRenderConfig',
          children: [
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            // VxeRadioGroup 单选组
            { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            // VxeCheckbox 复选框
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentTableCellRenderVxeCheckbox' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            // VxeButtonGroup 按钮组
            { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            // VxeImage 图片
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentTableCellRenderVxeImage' } },
            // VxeImageGroup 图片组
            { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentTableCellRenderVxeImageGroup' } },
            // VxeTextEllipsis 文本溢出省略
            { i18nKey: 'app.aside.menu.tableVxeTextEllipsis', routerLink: { name: 'ComponentTableCellRenderVxeTextEllipsis' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentTableCellRenderVxeRate' } },
            // VxeSlider 滑块
            { i18nKey: 'app.aside.menu.tableVxeSlider', routerLink: { name: 'ComponentTableCellRenderVxeSlider' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            // FormatNumberInput 格式化数值
            { i18nKey: 'app.aside.menu.tableFormatNumberInput', routerLink: { name: 'ComponentTableCellRenderFormatNumberInput' } },
            // FormatSelect 格式化列表选项
            { i18nKey: 'app.aside.menu.tableFormatSelect', routerLink: { name: 'ComponentTableCellRenderFormatOption' } },
            // FormatTreeSelect 格式化树选项
            { i18nKey: 'app.aside.menu.tableFormatTreeSelect', routerLink: { name: 'ComponentTableCellRenderFormatTree' } },
            // 实现自定义渲染器
            { i18nKey: 'app.aside.menu.tableImplementCustomRenderer', routerLink: { name: 'GlobalRendererTableDefaultReApi' } },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' }
          ]
        },
        {
          // 单元格 - 渲染 - 插槽式
          i18nKey: 'app.aside.menu.tableCellRenderSlot',
          children: [
            // VxeTag 标签
            { i18nKey: 'app.aside.menu.tableVxeTag', routerLink: { name: 'ComponentTableCellTemplateVxeTag' } },
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentTableCellTemplateVxeSwitch' } },
            // VxeRadioGroup 单选组
            { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentTableCellTemplateVxeRadioGroup' } },
            // VxeCheckbox 复选框
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentTableCellTemplateVxeCheckbox' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentTableCellTemplateVxeCheckboxGroup' } },
            // VxeButton 按钮
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentTableCellTemplateVxeButton' } },
            // VxeImage 图片
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentTableCellTemplateVxeImage' } },
            // VxeImageGroup 图片组
            { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentTableCellTemplateVxeImageGroup' } },
            // VxeTextEllipsis 文本溢出省略
            { i18nKey: 'app.aside.menu.tableVxeTextEllipsis', routerLink: { name: 'ComponentTableCellTemplateVxeTextEllipsis' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableCellTemplateVxeInput' } },
            // VxeTextarea 文本域
            { i18nKey: 'app.aside.menu.tableVxeTextarea', routerLink: { name: 'ComponentTableCellTemplateVxeTextarea' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentTableCellTemplateVxeRate' } },
            // VxeSlider 滑块
            { i18nKey: 'app.aside.menu.tableVxeSlider', routerLink: { name: 'ComponentTableCellTemplateVxeSlider' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentTableCellTemplateVxeUpload' } },
            // VxeModal 弹窗
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentTableCellTemplateVxeModal' } },
            // VxeDrawer 抽屉
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentTableCellTemplateVxeDrawer' } },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' },
            // 实现全部单元格可编辑
            { i18nKey: 'app.aside.menu.tableAllCellsEditable', routerLink: { name: 'ComponentTableCellTemplateAllEdit' } }
          ]
        },
        {
          // 可编辑
          i18nKey: 'app.aside.menu.tableEditable',
          children: [
            // 手动编辑
            { i18nKey: 'app.aside.menu.tableManualEdit', routerLink: { name: 'ComponentTableEditManual' } },
            // 单击编辑
            { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentTableEditClick' } },
            // 双击编辑
            { i18nKey: 'app.aside.menu.tableDblclickEdit', routerLink: { name: 'ComponentTableEditDblclick' } },
            // 编辑与聚焦
            { i18nKey: 'app.aside.menu.tableEditAndFocus', routerLink: { name: 'ComponentTableEditAutoFocus' } },
            // 关闭自动清除编辑状态
            { i18nKey: 'app.aside.menu.tableDisableAutoClearEditStatus', routerLink: { name: 'ComponentTableEditAutoClear' } },
            // 编辑状态
            { i18nKey: 'app.aside.menu.tableEditStatus', routerLink: { name: 'ComponentTableEditStatus' } },
            // 空值占位符
            { i18nKey: 'app.aside.menu.tableEmptyPlaceholder', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            // { i18nKey: 'app.aside.menu.tableUpdateData', routerLink: { name: 'ComponentTableEditUpdate' } },
            // { i18nKey: 'app.aside.menu.tableInsertData', routerLink: { name: 'ComponentTableEditInsert' } },
            // { i18nKey: 'app.aside.menu.tableRemoveData', routerLink: { name: 'ComponentTableEditRemove' } },
            // { i18nKey: 'app.aside.menu.tableMarkAsDeleted', routerLink: { name: 'ComponentTableEditPending' } },
            // { i18nKey: 'app.aside.menu.tableRestoreData', routerLink: { name: 'ComponentTableEditRevert' } },
            {
              // 临时数据 - 内置增删改
              i18nKey: 'app.aside.menu.tableTempDataBuiltinCrud',
              children: [
                // 新增
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentTableEditHandleTempInsert' } },
                // 删除
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentTableEditHandleTempRemove' } },
                // 标记
                { i18nKey: 'app.aside.menu.tableMark', routerLink: { name: 'ComponentTableEditHandleTempPending' } },
                // 修改
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentTableEditHandleTempUpdate' } },
                // 恢复
                { i18nKey: 'app.aside.menu.tableRestore', routerLink: { name: 'ComponentTableEditHandleTempRevert' } }
              ]
            },
            {
              // 同步数据源 - 自定义实现增删改
              i18nKey: 'app.aside.menu.tableSyncDataSourceCustomCrud',
              children: [
                // 新增
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentTableEditHandleOriginalInsert' } },
                // 删除
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentTableEditHandleOriginalRemove' } },
                // 修改
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentTableEditHandleOriginalUpdate' } }
              ]
            },
            // 禁用单元格编辑
            { i18nKey: 'app.aside.menu.tableDisableCellEdit', routerLink: { name: 'ComponentTableEditCellDisable' } },
            // 禁用行编辑
            { i18nKey: 'app.aside.menu.tableDisableRowEdit', routerLink: { name: 'ComponentTableEditRowDisable' } },
            // 单元格校验
            { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'ComponentTableEditCellValid' } },
            // 行校验
            { i18nKey: 'app.aside.menu.tableRowValidation', routerLink: { name: 'ComponentTableEditRowValid' } },
            // 树结构
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableEditTree' } },
            // 使用合并行与列
            { i18nKey: 'app.aside.menu.tableUseMergeRowsAndColumns', routerLink: { name: 'ComponentTableEditSpan' } },
            // 使用右键菜单
            { i18nKey: 'app.aside.menu.tableUseContextMenu', routerLink: { name: 'ComponentTableEditMenu' } },
            // 设置行高
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableEditRowHeight' } },
            // 负数自动标红
            { i18nKey: 'app.aside.menu.tableNegativeAutoRed', routerLink: { name: 'ComponentTableEditShowNegativeStatus' } },
            // 实现附件列表
            { i18nKey: 'app.aside.menu.tableImplementAttachmentList', routerLink: { name: 'ComponentTableEditFileList' } },
            // 实现弹窗编辑表单
            { i18nKey: 'app.aside.menu.tableImplementModalEditForm', routerLink: { name: 'ComponentTableEditModalForm' } },
            // 实现弹窗选择数据
            { i18nKey: 'app.aside.menu.tableImplementModalSelectData', routerLink: { name: 'ComponentTableEditModalSelect' } },
            // 实现抽屉编辑表单
            { i18nKey: 'app.aside.menu.tableImplementDrawerEditForm', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            // 实现抽屉选择数据
            { i18nKey: 'app.aside.menu.tableImplementDrawerSelectData', routerLink: { name: 'ComponentTableEditDrawerSelect' } },
            // 实现每行独立下拉选项
            { i18nKey: 'app.aside.menu.tableImplementRowIndependentDropdown', routerLink: { name: 'ComponentTableEditSelectRowOption' } },
            // 实现每行唯一下拉选项
            { i18nKey: 'app.aside.menu.tableImplementRowUniqueDropdown', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            // 实现多行文本编辑
            { i18nKey: 'app.aside.menu.tableImplementMultilineTextEdit', routerLink: { name: 'ComponentTableEditMultiLineText' } },
            // 实现联动禁用
            { i18nKey: 'app.aside.menu.tableImplementLinkageDisabled', routerLink: { name: 'ComponentTableEditLinkageDisabled' } },
            // 实现多列下拉联动
            { i18nKey: 'app.aside.menu.tableImplementMultiColumnCascadingSelect', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            // 实现行字段的合计
            { i18nKey: 'app.aside.menu.tableImplementRowFieldTotal', routerLink: { name: 'ComponentTableEditRowImmediately' } },
            // 实现表尾实时合计
            { i18nKey: 'app.aside.menu.tableImplementFooterRealtimeTotal', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            // 实现单元格实时保存
            { i18nKey: 'app.aside.menu.tableImplementCellRealtimeSave', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
            // 自定义实现编辑
            { i18nKey: 'app.aside.menu.tableCustomImplementEdit', routerLink: { name: 'ComponentTableEditCustomMultiRow' } },
            // 复制与粘贴
            { i18nKey: 'app.aside.menu.tableCopyAndPaste', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaClip' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Fclip%2Fbase' } } },
            // 渲染图表
            { i18nKey: 'app.aside.menu.tableRenderChart', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaBasicsEcharts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fecharts%2FareaBasicsEcharts' } } }
          ]
        },
        {
          // 可编辑 - 渲染 - 配置式
          i18nKey: 'app.aside.menu.tableEditableRenderConfig',
          children: [
            // input 原生-输入框
            { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentTableEditRenderInput' } },
            // select 原生-下拉框
            { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            // VxeNumberInput 数值输入
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            // VxeIconPicker 图标选择
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentTableEditRenderVxeIconPicker' } },
            // VxeColorPicker 颜色选择
            { i18nKey: 'app.aside.menu.tableVxeColorPicker', routerLink: { name: 'ComponentTableEditRenderVxeColorPicker' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentTableEditRenderVxeDateRangePicker' } },
            // VxeSelect 下拉选择
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentTableEditRenderVxeCascader' } },
            // VxeTableSelect 下拉表格选择
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentTableEditRenderVxeTableSelect' } },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' },
            // 事件监听
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentTableEditRenderEvents' } }
          ]
        },
        {
          // 可编辑 - 渲染 - 插槽式
          i18nKey: 'app.aside.menu.tableEditableRenderSlot',
          children: [
            // VxeButton 按钮
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentTableEditTemplateVxeButton' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            // VxeNumberInput 数值输入
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            // VxeIconPicker 图标选择
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentTableEditTemplateVxeIconPicker' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentTableEditTemplateVxeDateRangePicker' } },
            // VxeSelect 下拉选择
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentTableEditTemplateVxeTreeSelect' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentTableEditTemplateVxeCascader' } },
            // VxeTableSelect 下拉表格选择
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentTableEditTemplateVxeTableSelect' } },
            // VxePulldown 下拉容器
            { i18nKey: 'app.aside.menu.tableVxePulldown', routerLink: { name: 'ComponentTableEditTemplateVxePulldown' } },
            // VxeModal 弹窗
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentTableEditTemplateVxeModal' } },
            // VxeDrawer 抽屉
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentTableEditTemplateVxeDrawer' } },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          // 数据校验
          i18nKey: 'app.aside.menu.tableDataValidation',
          children: [
            // 校验规则配置
            { i18nKey: 'app.aside.menu.tableValidationRulesConfig', routerLink: { name: 'ComponentTableValidateRules' } },
            // 字符串校验规则
            { i18nKey: 'app.aside.menu.tableStringValidationRule', routerLink: { name: 'ComponentTableValidateString' } },
            // 数值校验规则
            { i18nKey: 'app.aside.menu.tableNumberValidationRule', routerLink: { name: 'ComponentTableValidateNumber' } },
            // 正则校验规则
            { i18nKey: 'app.aside.menu.tableRegexpValidationRule', routerLink: { name: 'ComponentTableValidateRegexp' } },
            // 数组校验规则
            { i18nKey: 'app.aside.menu.tableArrayValidationRule', routerLink: { name: 'ComponentTableValidateArray' } },
            // 自定义校验规则
            { i18nKey: 'app.aside.menu.tableCustomValidationRule', routerLink: { name: 'ComponentTableValidateCustom' } },
            // 校验模式
            { i18nKey: 'app.aside.menu.tableValidationMode', routerLink: { name: 'ComponentTableValidateMode' } },
            // 错误提示样式
            { i18nKey: 'app.aside.menu.tableErrorTipStyle', routerLink: { name: 'ComponentTableValidateTheme' } },
            // 复制粘贴与数据校验
            { i18nKey: 'app.aside.menu.tableCopyPasteAndValidation', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Fedit%2Fvalid' } } },
            {
              // 自定义插槽模板
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                // 自定义编辑模板
                { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentTableValidateTemplateEdit' } },
                // 自定义错误提示模板
                { i18nKey: 'app.aside.menu.tableCustomErrorTipTemplate', routerLink: { name: 'ComponentTableValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义单元格模板
            { i18nKey: 'app.aside.menu.tableCustomCellTemplate', routerLink: { name: 'ComponentTableTemplateDefault' } },
            // 自定义表头模板
            { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentTableTemplateHeader' } },
            // 自定义表尾模板
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentTableTemplateFooter' } },
            // 自定义表头标题模板
            { i18nKey: 'app.aside.menu.tableCustomHeaderTitleTemplate', routerLink: { name: 'ComponentTableTemplateTitle' } },
            // 自定义单元格提示模板
            { i18nKey: 'app.aside.menu.tableCustomCellTipTemplate', routerLink: { name: 'ComponentTableTemplateTooltip' } },
            // 自定义排序按钮模板
            { i18nKey: 'app.aside.menu.tableCustomSortButtonTemplate', routerLink: { name: 'ComponentTableTemplateSort' } },
            // 自定义复选框模板
            { i18nKey: 'app.aside.menu.tableCustomCheckboxTemplate', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
            // 自定义单选框模板
            { i18nKey: 'app.aside.menu.tableCustomRadioTemplate', routerLink: { name: 'ComponentTableTemplateRadio' } },
            // 自定义展开行模板
            { i18nKey: 'app.aside.menu.tableCustomExpandRowTemplate', routerLink: { name: 'ComponentTableTemplateContent' } },
            // 自定义筛选模板
            { i18nKey: 'app.aside.menu.tableCustomFilterTemplate', routerLink: { name: 'ComponentTableTemplateFilter' } },
            // 自定义编辑模板
            { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentTableTemplateEdit' } }
          ]
        },
        {
          // 按键导航
          i18nKey: 'app.aside.menu.tableKeyboardNavigation',
          children: [
            // 单元格选中
            { i18nKey: 'app.aside.menu.tableCellSelect', routerLink: { name: 'ComponentTableKeyboardSelected' } },
            // 按键操作
            { i18nKey: 'app.aside.menu.tableKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardKeyboard' } },
            // 回车自动新增一行
            { i18nKey: 'app.aside.menu.tableEnterAutoAddRow', routerLink: { name: 'ComponentTableKeyboardEnterAppend' } },
            // 可编辑按键操作
            { i18nKey: 'app.aside.menu.tableEditableKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            // 设置为追加式编辑
            { i18nKey: 'app.aside.menu.tableSetAppendEdit', routerLink: { name: 'ComponentTableKeyboardEditMethod' } },
            // 树结构按键操作
            { i18nKey: 'app.aside.menu.tableTreeKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardTree' } },
            // 树结构可编辑
            { i18nKey: 'app.aside.menu.tableTreeEditable', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            // 撤销与重做
            { i18nKey: 'app.aside.menu.tableUndoRedo', routerLink: { name: 'ComponentTableKeyboardUndoRedo' } },
            // 右键菜单-全键盘
            { i18nKey: 'app.aside.menu.tableContextMenuFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            // 单元格选择-全键盘
            { i18nKey: 'app.aside.menu.tableCellSelectFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaKeypad%2Fkeypad' } } }
          ]
        },
        {
          // 导出数据
          i18nKey: 'app.aside.menu.tableExportData',
          children: [
            // 导出数据
            { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentTableExportBase' } },
            // 导出 TXT 格式
            { i18nKey: 'app.aside.menu.tableExportTxt', routerLink: { name: 'ComponentTableExportTxt' } },
            // 导出 XML 格式
            { i18nKey: 'app.aside.menu.tableExportXml', routerLink: { name: 'ComponentTableExportXml' } },
            // 导出 HTML 格式
            { i18nKey: 'app.aside.menu.tableExportHtml', routerLink: { name: 'ComponentTableExportHtml' } },
            // 导出 CSV 格式
            { i18nKey: 'app.aside.menu.tableExportCsv', routerLink: { name: 'ComponentTableExportCsv' } },
            // 导出 XLSX 格式
            { i18nKey: 'app.aside.menu.tableExportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/export`, linkTarget: '_blank' },
            // 导出 PDF 格式
            { i18nKey: 'app.aside.menu.tableExportPdf', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/table/export`, linkTarget: '_blank' },
            // 指定数据
            { i18nKey: 'app.aside.menu.tableSpecifyData', routerLink: { name: 'ComponentTableExportData' } },
            // 格式化单元格内容
            { i18nKey: 'app.aside.menu.tableFormatCellContent', routerLink: { name: 'ComponentTableExportExportMethod' } },
            // 高级导出
            { i18nKey: 'app.aside.menu.tableAdvancedExport', routerLink: { name: 'ComponentTableExportAdvanced' } },
            // 指定默认列
            { i18nKey: 'app.aside.menu.tableSpecifyDefaultColumns', routerLink: { name: 'ComponentTableExportColumns' } }
          ]
        },
        {
          // 导入数据
          i18nKey: 'app.aside.menu.tableImportData',
          children: [
            // 导入数据
            { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentTableImportBase' } },
            // 导入 XLSX 格式
            { i18nKey: 'app.aside.menu.tableImportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/import`, linkTarget: '_blank' },
            // 高级导入
            { i18nKey: 'app.aside.menu.tableAdvancedImport', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          // 打印表格
          i18nKey: 'app.aside.menu.tablePrintTable',
          children: [
            // 打印表格
            { i18nKey: 'app.aside.menu.tablePrintTable', routerLink: { name: 'ComponentTablePrintBase' } },
            // 高级打印
            { i18nKey: 'app.aside.menu.tableAdvancedPrint', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            // 实现将表格切割为多页打印
            { i18nKey: 'app.aside.menu.tablePrintMultiPage', routerLink: { name: 'ComponentTablePrintPage' } },
            // 实现打印多张表格
            { i18nKey: 'app.aside.menu.tablePrintMultipleTables', routerLink: { name: 'ComponentTablePrintMultilist' } },
            // 实现打印出货单
            { i18nKey: 'app.aside.menu.tablePrintShippingOrder', routerLink: { name: 'ComponentTablePrintOrder' } }
          ]
        },
        {
          // 虚拟滚动（超大数据量表格）
          i18nKey: 'app.aside.menu.tableVirtualScrollLargeData',
          children: [
            // 纵向虚拟滚动
            { i18nKey: 'app.aside.menu.tableVerticalVirtualScroll', routerLink: { name: 'ComponentTableScrollVertical' } },
            // 横向虚拟滚动
            { i18nKey: 'app.aside.menu.tableHorizontalVirtualScroll', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            // 纵向和横向
            { i18nKey: 'app.aside.menu.tableVerticalAndHorizontal', routerLink: { name: 'ComponentTableScrollHV' }, keywords: 'loadData,reloadData' },
            // 函数式加载数据
            { i18nKey: 'app.aside.menu.tableFunctionalLoadData', routerLink: { name: 'ComponentTableScrollLoadData' }, keywords: 'loadData,reloadData' },
            // 冻结列 + 复杂渲染
            { i18nKey: 'app.aside.menu.tableFixedColumnComplexRender', routerLink: { name: 'ComponentTableScrollFixed' } },
            // { i18nKey: 'app.aside.menu.tableScrollModeComplexRender', routerLink: { name: 'ComponentTableScrollMode' } },
            // 设置行高
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            // 自适应行高
            { i18nKey: 'app.aside.menu.tableAutoRowHeight', routerLink: { name: 'ComponentTableScrollAutoRowHeight' }, keywords: '自适应行高,自适应高度,auto-height' },
            // 自适应行高 + 纵向和横向
            { i18nKey: 'app.aside.menu.tableAutoRowHeightVH', routerLink: { name: 'ComponentTableScrollAutoRowVH' }, keywords: '自适应行高,自适应高度,auto-height' },
            // 自适应行高 + 复杂渲染
            { i18nKey: 'app.aside.menu.tableAutoRowHeightComplexRender', routerLink: { name: 'ComponentTableScrollAutoRowFixed' }, keywords: '自适应行高,自适应高度,auto-height' },
            // 使用分组表头
            { i18nKey: 'app.aside.menu.tableUseGroupHeader', routerLink: { name: 'ComponentTableScrollGroup' } },
            // 按键导航
            { i18nKey: 'app.aside.menu.tableKeyboardNavigation', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            // 单元格合并
            { i18nKey: 'app.aside.menu.tableCellMerge', routerLink: { name: 'ComponentTableScrollMerge' } },
            // 树形 + 纵向
            { i18nKey: 'app.aside.menu.tableTreeVertical', routerLink: { name: 'ComponentTableScrollTree' } },
            // 可编辑 + 横向
            { i18nKey: 'app.aside.menu.tableEditableHorizontal', routerLink: { name: 'ComponentTableScrollEdit' } },
            // 可编辑 + 纵向和横向
            { i18nKey: 'app.aside.menu.tableEditableVH', routerLink: { name: 'ComponentTableScrollHVEdit' } }
          ]
        },
        {
          // 表格搜索
          i18nKey: 'app.aside.menu.tableTableSearch',
          children: [
            // 实现表格搜索
            { i18nKey: 'app.aside.menu.tableImplementTableSearch', routerLink: { name: 'ComponentTableSearchList' } },
            // 实现树形表格搜索
            { i18nKey: 'app.aside.menu.tableImplementTreeTableSearch', routerLink: { name: 'ComponentTableSearchTree' } },
            // 查找与替换
            { i18nKey: 'app.aside.menu.tableFindAndReplace', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaFNR' } } }
          ]
        },
        {
          // 滚动条
          i18nKey: 'app.aside.menu.tableScrollbar',
          children: [
            {
              // 原生滚动条
              i18nKey: 'app.aside.menu.tableNativeScrollbar',
              children: [
                // 滚动条宽度
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentTableScrollbarNativeBarStyle' } },
                // 滚动条位置
                { i18nKey: 'app.aside.menu.tableScrollbarPosition', routerLink: { name: 'ComponentTableScrollbarNativeBarPos' } }
              ]
            },
            {
              // 虚拟滚动条
              i18nKey: 'app.aside.menu.tableVirtualScrollbar',
              children: [
                // 使用滚动条
                { i18nKey: 'app.aside.menu.tableUseScrollbar', routerLink: { name: 'ComponentTableScrollbarUseScrollbarScrollbar' } },
                // 滚动条宽度
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentTableScrollbarUseScrollbarBarWidth' } },
                // 滚动条颜色
                { i18nKey: 'app.aside.menu.tableScrollbarColor', routerLink: { name: 'ComponentTableScrollbarUseScrollbarBarColor' } },
                // 显示位置
                { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentTableScrollbarUseScrollbarPosition' } },
                // 自动隐藏
                { i18nKey: 'app.aside.menu.tableAutoHide', routerLink: { name: 'ComponentTableScrollbarUseScrollbarAutoHide' } }
              ]
            }
          ]
        },
        {
          // 事件监听
          i18nKey: 'app.aside.menu.tableEventListen',
          children: [
            // 准备就绪
            { i18nKey: 'app.aside.menu.tableReady', routerLink: { name: 'ComponentTableEventsReady' } },
            // 数据加载事件
            { i18nKey: 'app.aside.menu.tableDataLoadEvent', routerLink: { name: 'ComponentTableEventsRendered' } },
            // 点击/双击事件
            { i18nKey: 'app.aside.menu.tableClickDblclickEvent', routerLink: { name: 'ComponentTableEventsClick' } },
            // 滚动事件
            { i18nKey: 'app.aside.menu.tableScrollEvent', routerLink: { name: 'ComponentTableEventsScroll' } }
          ]
        },
        {
          // 功能示例
          i18nKey: 'app.aside.menu.tableFeatureExamples',
          children: [
            // 在页签中使用
            { i18nKey: 'app.aside.menu.tableUseInTabs', routerLink: { name: 'ComponentTableOtherTabs' } },
            // 实现多行文本溢出省略
            { i18nKey: 'app.aside.menu.tableMultilineTextEllipsis', routerLink: { name: 'ComponentTableOtherLineEllipsis' } },
            // 实现记账凭证
            { i18nKey: 'app.aside.menu.tableBookkeepingVoucher', routerLink: { name: 'ComponentTableOtherBookkeepingVoucher' } },
            // 实现折叠列
            { i18nKey: 'app.aside.menu.tableCollapsibleColumn', routerLink: { name: 'ComponentTableOtherCollapseColumn' } },
            // 实现左边树和右边表格
            { i18nKey: 'app.aside.menu.tableLeftTreeRightTable', routerLink: { name: 'ComponentTableOtherLeftRight' } }
          ]
        }
      ]
    },
    gridNavConfig,
    {
      // 扩展插件库
      i18nKey: 'app.aside.menu.tableOtherPlugin',
      icon: 'vxe-icon-more',
      children: [
        // 单元格图表插件
        { i18nKey: 'app.aside.menu.tableCellChartPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-chart/grid/bar`, linkTarget: '_blank' },
        // 右键菜单插件
        { i18nKey: 'app.aside.menu.tableContextMenuPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full`, linkTarget: '_blank' },
        // 数据校验插件
        { i18nKey: 'app.aside.menu.tableValidationPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/table/base`, linkTarget: '_blank' },
        // 导出 XLSX 插件
        { i18nKey: 'app.aside.menu.tableExportXlsxPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/export`, linkTarget: '_blank' },
        // 导出 PDF 插件
        { i18nKey: 'app.aside.menu.tableExportPdfPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/table/export`, linkTarget: '_blank' },
        // 更多第三方扩展插件
        { i18nKey: 'app.aside.menu.tableMoreThirdPartyPlugins', isPlugin: true, linkUrl: `${otherUrl}`, linkTarget: '_blank' }
      ]
    },
    {
      // Css 变量
      i18nKey: 'app.aside.menu.cssVar',
      icon: 'vxe-icon-style',
      children: [
        // 字体大小
        { i18nKey: 'app.aside.menu.tableFontSize', routerLink: { name: 'CssVarTableFontSize' } },
        // 字体颜色
        { i18nKey: 'app.aside.menu.tableFontColor', routerLink: { name: 'CssVarTableFontColor' } },
        // 单元格边框
        { i18nKey: 'app.aside.menu.tableCellBorder', routerLink: { name: 'CssVarTableBorder' } },
        // 表格背景色
        { i18nKey: 'app.aside.menu.tableBackgroundColor', routerLink: { name: 'CssVarTableBackground' } },
        // 斑马线条纹背景色
        { i18nKey: 'app.aside.menu.tableStripeBackgroundColor', routerLink: { name: 'CssVarTableStripe' } },
        // 圆角
        { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'CssVarTableRound' } },
        // 行与列上移背景色
        { i18nKey: 'app.aside.menu.tableRowColumnHoverBackgroundColor', routerLink: { name: 'CssVarTableRowColHover' } },
        // 当前行与列背景色
        { i18nKey: 'app.aside.menu.tableCurrentRowColumnBackgroundColor', routerLink: { name: 'CssVarTableRowColCurrent' } },
        // 单元格默认高度
        { i18nKey: 'app.aside.menu.tableCellDefaultHeight', routerLink: { name: 'CssVarTableRowHeight' } },
        // 校验提示框
        { i18nKey: 'app.aside.menu.tableValidationTipBox', routerLink: { name: 'CssVarTableValid' } }
      ]
    },
    {
      // 单元格 - 格式化（全局复用）
      i18nKey: 'app.aside.menu.tableGlobalFormats',
      icon: 'vxe-icon-code',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
        // 单元格
        { i18nKey: 'app.aside.menu.tableCell', routerLink: { name: 'GlobalFormatsTableBase' } }
      ]
    },
    {
      // 右键菜单（全局复用）
      i18nKey: 'app.aside.menu.tableGlobalMenus',
      icon: 'vxe-icon-menu',
      children: [
        { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
        // 右键菜单
        { i18nKey: 'app.aside.menu.tableContextMenu', routerLink: { name: 'GlobalMenusTableBase' } },
        // 便捷配置 Code 插件
        { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full`, linkTarget: '_blank' }
      ]
    },
    {
      // 工具栏指令（全局复用）
      i18nKey: 'app.aside.menu.tableGlobalCommands',
      icon: 'vxe-icon-tree-select',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
        // 工具栏
        { i18nKey: 'app.aside.menu.tableToolbar', routerLink: { name: 'GlobalCommandsTableBase' } }
      ]
    },
    {
      // 校验（全局复用）
      i18nKey: 'app.aside.menu.tableGlobalValidators',
      icon: 'vxe-icon-warning-circle',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
        // 单元格校验
        { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'GlobalValidatorsTableBase' } },
        // 便捷校验配置插件
        { i18nKey: 'app.aside.menu.tableConvenientValidationConfigPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/table/base`, linkTarget: '_blank' }
      ]
    },
    {
      // 渲染器（高阶复用）
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      icon: 'vxe-icon-code',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          // 单元格
          i18nKey: 'app.aside.menu.tableCell',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererTableDefaultApi' }, keywords: 'cell-render' },
            // 实现单元格超链接
            { i18nKey: 'app.aside.menu.tableCellHyperlink', routerLink: { name: 'GlobalRendererTableDefaultMyLink' }, keywords: 'cell-render' },
            // 实现单元格图片预览
            { i18nKey: 'app.aside.menu.tableCellImagePreview', routerLink: { name: 'GlobalRendererTableDefaultMyImg' }, keywords: 'cell-render' },
            // 实现单元格金额格式化
            { i18nKey: 'app.aside.menu.tableCellAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyAmount' }, keywords: 'cell-render' },
            // 实现表头超链接
            { i18nKey: 'app.aside.menu.tableHeaderHyperlink', routerLink: { name: 'GlobalRendererTableDefaultMyHeaderLink' }, keywords: 'cell-render' },
            // 实现表尾金额格式化
            { i18nKey: 'app.aside.menu.tableFooterAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyFooterAmount' }, keywords: 'cell-render' },
            // 实现完整金额格式化
            { i18nKey: 'app.aside.menu.tableFullAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyFullAmount' }, keywords: 'cell-render' },
            // 实现通用操作按钮
            { i18nKey: 'app.aside.menu.tableCommonActionButton', routerLink: { name: 'GlobalRendererTableDefaultMyCellBtn' }, keywords: 'cell-render' },
            // 同时使用 formatter
            { i18nKey: 'app.aside.menu.tableUseFormatter', routerLink: { name: 'GlobalRendererTableDefaultMyCellStyle' }, keywords: 'cell-render' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' }
          ]
        },
        {
          // 可编辑
          i18nKey: 'app.aside.menu.tableEditable',
          children: [
            // 实现一个金额输入
            { i18nKey: 'app.aside.menu.tableAmountInput', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' }, keywords: 'edit-render' },
            // 实现一个下拉表格
            { i18nKey: 'app.aside.menu.tableDropdownTable', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' }, keywords: 'edit-render' },
            // 与 cell-render 组合使用
            { i18nKey: 'app.aside.menu.tableCombineWithCellRender', routerLink: { name: 'GlobalRendererTableEditMixRender' }, keywords: 'edit-render' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          // 展开行
          i18nKey: 'app.aside.menu.tableExpandRow',
          children: [
            // 实现一个展开列表
            { i18nKey: 'app.aside.menu.tableExpandList', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' }, keywords: 'content-render' },
            // 实现一个展开表格
            { i18nKey: 'app.aside.menu.tableExpandTable', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' }, keywords: 'content-render' }
          ]
        },
        {
          // 工具栏
          i18nKey: 'app.aside.menu.tableToolbar',
          children: [
            // 实现左侧操作按钮
            { i18nKey: 'app.aside.menu.tableLeftActionButtons', routerLink: { name: 'GlobalRendererTableToolbarBtn' }, keywords: 'button-render' },
            // 实现右侧工具按钮
            { i18nKey: 'app.aside.menu.tableRightToolButtons', routerLink: { name: 'GlobalRendererTableToolbarTool' }, keywords: 'tool-render' }
          ]
        },
        {
          // 筛选
          i18nKey: 'app.aside.menu.tableFilter',
          children: [
            // 实现一个输入筛选
            { i18nKey: 'app.aside.menu.tableInputFilterExample', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' }, keywords: 'filter-render' },
            // 实现一个多条件筛选
            { i18nKey: 'app.aside.menu.tableMultiConditionFilter', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' }, keywords: 'filter-render' },
            // 实现一个显示列表的筛选
            { i18nKey: 'app.aside.menu.tableListDisplayFilter', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' }, keywords: 'filter-render' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/filter/el-input`, linkTarget: '_blank', keywords: 'filter-render' },
            // 更多筛选插件
            { i18nKey: 'app.aside.menu.tableMoreFilterPlugins', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/', linkTarget: '_blank' }
          ]
        },
        {
          // 空数据提示
          i18nKey: 'app.aside.menu.tableEmptyTip',
          children: [
            // 实现一个空数据显示文字
            { i18nKey: 'app.aside.menu.tableEmptyTextDisplay', routerLink: { name: 'GlobalRendererTableMyEmptyImg' }, keywords: 'empty-render' },
            // 实现一个空数据显示图片
            { i18nKey: 'app.aside.menu.tableEmptyImageDisplay', routerLink: { name: 'GlobalRendererTableMyEmptyText' }, keywords: 'empty-render' }
          ]
        }
      ]
    },
    {
      // 事件拦截（高级用法）
      i18nKey: 'app.aside.menu.tableGlobalInterceptor',
      icon: 'vxe-icon-no-drop',
      children: [
        { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
        // 可编辑 - 兼容性处理
        { i18nKey: 'app.aside.menu.tableEditableCompatibilityHandling', routerLink: { name: 'GlobalInterceptorTableBase' } }
      ]
    }
  ]
}
