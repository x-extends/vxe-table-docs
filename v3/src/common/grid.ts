import { NavVO, otherUrl } from './nav'

export const gridNavConfig: NavVO = {
  // Grid 配置式表格
  i18nKey: 'app.aside.menu.tableGridTitle',
  icon: 'vxe-icon-subtable',
  children: [
    { title: 'Grid API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } }, keywords: 'vxe-grid' },
    {
      // 基础功能
      i18nKey: 'app.aside.menu.tableBasicFeatures',
      children: [
        // 基础
        { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentGridBaseBasic' } },
        // 尺寸大小
        { i18nKey: 'app.aside.menu.tableSize', routerLink: { name: 'ComponentGridBaseSize' } },
        // 行主键
        { i18nKey: 'app.aside.menu.tableRowKey', routerLink: { name: 'ComponentGridBaseRowKey' }, keywords: 'key-field' },
        // 数据类型
        { i18nKey: 'app.aside.menu.tableDataType', routerLink: { name: 'ComponentGridBaseData' } },
        // 加载数据
        { i18nKey: 'app.aside.menu.tableLoadData', routerLink: { name: 'ComponentGridBaseLoadData' } },
        // 表尾数据
        { i18nKey: 'app.aside.menu.tableFooterData', routerLink: { name: 'ComponentGridBaseFooter' } },
        // 空数据提示
        { i18nKey: 'app.aside.menu.tableEmptyTip', routerLink: { name: 'ComponentGridBaseEmpty' } },
        // 边框
        { i18nKey: 'app.aside.menu.tableBorder', routerLink: { name: 'ComponentGridBaseBorder' } },
        // 圆角
        { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'ComponentGridBaseRound' } },
        // { i18nKey: 'app.aside.menu.tablePadding', routerLink: { name: 'ComponentGridBasePadding' } },
        // 对齐方式
        { i18nKey: 'app.aside.menu.tableAlign', routerLink: { name: 'ComponentGridBaseAlign' } },
        // 隐藏列
        { i18nKey: 'app.aside.menu.tableHideColumn', routerLink: { name: 'ComponentGridBaseVisible' } },
        // 设置列宽
        { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentGridBaseWidth' }, keywords: '宽度,列宽' },
        // 设置最小列宽
        { i18nKey: 'app.aside.menu.tableSetSmallColumnWidth', routerLink: { name: 'ComponentGridBaseMinWidth' }, keywords: '最小宽度,最小列宽' },
        // 设置最大列宽
        { i18nKey: 'app.aside.menu.tableSetMaxColumnWidth', routerLink: { name: 'ComponentGridBaseMaxWidth' }, keywords: '最大宽度,最大列宽' },
        // 自适应列宽
        { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentGridBaseAutoWidth' }, keywords: '宽度,根据内容,自适应列宽,width,auto' },
        // 自适应单元格高度
        { i18nKey: 'app.aside.menu.tableAutoCellHeight', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
        // 溢出隐藏
        { i18nKey: 'app.aside.menu.tableOverflowHidden', routerLink: { name: 'ComponentGridBaseOverflow' } },
        // 文本提示
        { i18nKey: 'app.aside.menu.tableTextTip', routerLink: { name: 'ComponentGridBaseTooltip' } },
        // { i18nKey: 'app.aside.menu.tableScrollStyle', routerLink: { name: 'ComponentGridBaseScrollStyle' } },
        // 斑马线样式
        { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentGridBaseStripe' } },
        // 单元格样式
        { i18nKey: 'app.aside.menu.tableCellStyle', routerLink: { name: 'ComponentGridBaseStyle' } },
        // 动态样式
        { i18nKey: 'app.aside.menu.tableDynamicStyle', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
        // 隐藏表头
        { i18nKey: 'app.aside.menu.tableHideHeader', routerLink: { name: 'ComponentGridBaseHeader' } },
        // 高亮列
        { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
        // 高亮行
        { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
        // 拖拽调整列宽
        { i18nKey: 'app.aside.menu.tableDragResizeColumnWidth', routerLink: { name: 'ComponentGridBaseHeaderResizableWidth' } },
        // 拖拽调整行高
        { i18nKey: 'app.aside.menu.tableDragResizeRowHeight', routerLink: { name: 'ComponentGridBaseHeaderResizableHeight' } },
        // 表格最小高度
        { i18nKey: 'app.aside.menu.tableMinHeight', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
        // 表格高度
        { i18nKey: 'app.aside.menu.tableHeight', routerLink: { name: 'ComponentGridBaseHeight' } },
        // 表格最大高度
        { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
        // 表格响应式高度
        { i18nKey: 'app.aside.menu.tableResponsiveHeight', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
        // 设置列高
        { i18nKey: 'app.aside.menu.tableSetColumnHeight', routerLink: { name: 'ComponentGridBaseColumnHeight' } },
        // 设置行高
        { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentGridBaseRowHeight' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridBaseFixed' } },
        // 冻结表头和列
        { i18nKey: 'app.aside.menu.tableFixedHeaderAndColumn', routerLink: { name: 'ComponentGridBaseFixedFull' } },
        // 分组表头
        { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentGridBaseGroup' } },
        // 排序
        { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentGridBaseSort' } },
        // 筛选
        { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentGridBaseFilter' } },
        // 加载中
        { i18nKey: 'app.aside.menu.tableLoading', routerLink: { name: 'ComponentGridBaseLoading' } },
        // 格式化内容
        { i18nKey: 'app.aside.menu.tableFormatContent', routerLink: { name: 'ComponentGridBaseFormat' } },
        // 序号
        { i18nKey: 'app.aside.menu.tableSeq', routerLink: { name: 'ComponentGridBaseSeq' } },
        // 单选框
        { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridBaseRadio' } },
        // 复选框
        { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentGridBaseSelection' } },
        // 标题前缀图标
        { i18nKey: 'app.aside.menu.tableTitlePrefixIcon', routerLink: { name: 'ComponentGridBaseTitlePrefix' }, keywords: 'title-prefix' },
        // 标题后缀图标
        { i18nKey: 'app.aside.menu.tableTitleSuffixIcon', routerLink: { name: 'ComponentGridBaseTitleSuffix' }, keywords: 'title-suffix' },
        // HTML 类型
        { i18nKey: 'app.aside.menu.tableHtmlType', routerLink: { name: 'ComponentGridBaseHtml' } },
        // 列配置
        { i18nKey: 'app.aside.menu.tableColumnConfig', routerLink: { name: 'ComponentGridBaseColumns' } },
        // 完整案例
        { i18nKey: 'app.aside.menu.tableFullExample', routerLink: { name: 'ComponentGridBaseFull' } },
        // 获取表格数据
        { i18nKey: 'app.aside.menu.tableGetTableData', routerLink: { name: 'ComponentGridBaseGetData' } },
        // 数据表格列
        { i18nKey: 'app.aside.menu.tableDataTableColumn', routerLink: { name: 'ComponentGridBaseGetColumn' } }
      ]
    },
    {
      // 单元格配置
      i18nKey: 'app.aside.menu.tableCellConfig',
      children: [
        // 设置列宽
        { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentGridCellWidth' }, keywords: '设置列宽，单元格宽度' },
        // 设置单元格边距
        { i18nKey: 'app.aside.menu.tableSetCellPadding', routerLink: { name: 'ComponentGridCellPadding' }, keywords: '设置边距，单元格边距' },
        // 设置行高
        { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentGridCellHeight' }, keywords: '设置单元格高度，设置行高度' },
        // 设置垂直对齐
        { i18nKey: 'app.aside.menu.tableSetVerticalAlign', routerLink: { name: 'ComponentGridCellVerticalAlign' }, keywords: '设置单元格垂直对齐' }
      ]
    },
    {
      // 单元格提示
      i18nKey: 'app.aside.menu.tableCellTip',
      children: [
        // 默认提示方式
        { i18nKey: 'app.aside.menu.tableDefaultTipMode', routerLink: { name: 'ComponentGridCellTipMode' }, keywords: 'tooltip' },
        // 自定义单元格提示
        { i18nKey: 'app.aside.menu.tableCustomCellTip', routerLink: { name: 'ComponentGridCellTipShowAll' }, keywords: '工具提示，溢出提示' },
        // 自定义宽高
        { i18nKey: 'app.aside.menu.tableCustomWidthHeight', routerLink: { name: 'ComponentGridCellTipWh' }, keywords: '自定义工具提示' }
      ]
    },
    {
      // 单元格合并
      i18nKey: 'app.aside.menu.tableCellMerge',
      children: [
        // 将多行进行合并
        { i18nKey: 'app.aside.menu.tableMergeRows', routerLink: { name: 'ComponentGridMergeRow' } },
        // 将多列进行合并
        { i18nKey: 'app.aside.menu.tableMergeColumns', routerLink: { name: 'ComponentGridMergeColumn' } },
        // 合并行与列
        { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentGridMergeAll' } },
        // 自定义合并行与列
        { i18nKey: 'app.aside.menu.tableCustomMergeRowsAndColumns', routerLink: { name: 'ComponentGridMergeSpanMethod' } },
        // 表尾合并
        { i18nKey: 'app.aside.menu.tableMergeFooter', routerLink: { name: 'ComponentGridMergeFooter' } },
        // 表头合并
        { i18nKey: 'app.aside.menu.tableMergeHeader', routerLink: { name: 'ComponentGridMergeHeader' } },
        // 实现横向合并树
        { i18nKey: 'app.aside.menu.tableMergeHorizontalTree', routerLink: { name: 'ComponentGridMergeHorizontal' } },
        // 与排序同时使用
        { i18nKey: 'app.aside.menu.tableUseWithSort', routerLink: { name: 'ComponentGridMergeSort' } },
        // 与筛选同时使用
        { i18nKey: 'app.aside.menu.tableUseWithFilter', routerLink: { name: 'ComponentGridMergeFilter' } },
        // 使用合并列来展示分类
        { i18nKey: 'app.aside.menu.tableUseMergeColumnToShowCategory', routerLink: { name: 'ComponentGridMergeVnGroup' } },
        // 快捷键合并
        { i18nKey: 'app.aside.menu.tableShortcutMerge', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMerge' } } }
      ]
    },
    {
      // 表尾数据
      i18nKey: 'app.aside.menu.tableFooterData',
      children: [
        // 是否启用表尾
        { i18nKey: 'app.aside.menu.tableEnableFooter', routerLink: { name: 'ComponentGridFooterShowFooter' } },
        // 标准结构
        { i18nKey: 'app.aside.menu.tableStandardStructure', routerLink: { name: 'ComponentGridFooterFooterData' } },
        // 自定义数据方法
        { i18nKey: 'app.aside.menu.tableCustomDataMethod', routerLink: { name: 'ComponentGridFooterFooterMethod' } },
        // 格式化表尾内容
        { i18nKey: 'app.aside.menu.tableFormatFooterContent', routerLink: { name: 'ComponentGridFooterFooterFormat' } },
        // 自定义插槽模板
        { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentGridFooterTemplate' } }
      ]
    },
    {
      // 单选框
      i18nKey: 'app.aside.menu.tableRadio',
      children: [
        // 高亮选择行
        { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentGridRadioHighlight' } },
        // 禁用
        { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentGridRadioCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentGridRadioVisibleMethod' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRadioTrigger' } },
        // 可取消
        { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridRadioStrict' } },
        // 列头按钮
        { i18nKey: 'app.aside.menu.tableHeaderButton', routerLink: { name: 'ComponentGridRadioHeaderBtn' } },
        // 自定义模板
        { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentGridRadioTemplate' } }
      ]
    },
    {
      // 复选框
      i18nKey: 'app.aside.menu.tableCheckbox',
      children: [
        // 高亮选择行
        { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
        // 绑定字段
        { i18nKey: 'app.aside.menu.tableBindField', routerLink: { name: 'ComponentGridCheckboxField' } },
        // 禁用
        { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridCheckboxTrigger' } },
        // 显示已选数量
        { i18nKey: 'app.aside.menu.tableShowSelectedCount', routerLink: { name: 'ComponentGridCheckboxShowRecords' } },
        // 分页保留选中状态
        { i18nKey: 'app.aside.menu.tablePaginationKeepSelected', routerLink: { name: 'ComponentGridCheckboxReserve' } },
        // 分页显示保留选中状态
        { i18nKey: 'app.aside.menu.tablePaginationShowKeepSelectedStatus', routerLink: { name: 'ComponentGridCheckboxShowReserveStatus' } },
        // 按键批量范围选择
        { i18nKey: 'app.aside.menu.tableKeyboardBatchRangeSelect', routerLink: { name: 'ComponentGridCheckboxBatch' } },
        // 鼠标滑动范围选择
        { i18nKey: 'app.aside.menu.tableMouseDragRangeSelect', routerLink: { name: 'ComponentGridCheckboxRange' } },
        // 单元格选择-复选框
        { i18nKey: 'app.aside.menu.tableCellSelectCheckbox', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaCheckbox' } } },
        // 自定义模板
        { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentGridCheckboxTemplate' } },
        // 自定义实现复选框
        { i18nKey: 'app.aside.menu.tableCustomCheckbox', routerLink: { name: 'ComponentGridCheckboxCustomChecked' } }
      ]
    },
    {
      // 排序
      i18nKey: 'app.aside.menu.tableSort',
      children: [
        // 数据排序
        { i18nKey: 'app.aside.menu.tableDataSort', routerLink: { name: 'ComponentGridSortBase' } },
        // 多字段排序
        { i18nKey: 'app.aside.menu.tableMultiFieldSort', routerLink: { name: 'ComponentGridSortMultiple' } },
        // 树形排序
        { i18nKey: 'app.aside.menu.tableTreeSort', routerLink: { name: 'ComponentGridSortTree' } },
        // 服务端排序
        { i18nKey: 'app.aside.menu.tableRemoteSort', routerLink: { name: 'ComponentGridSortRemote' } },
        // 自定义排序
        { i18nKey: 'app.aside.menu.tableCustomSort', routerLink: { name: 'ComponentGridSortSortMethod' } },
        // 手动操作排序
        { i18nKey: 'app.aside.menu.tableManualSort', routerLink: { name: 'ComponentGridSortSetSort' } },
        // 排序图标
        { i18nKey: 'app.aside.menu.tableSortIcon', routerLink: { name: 'ComponentGridSortIconVisibleMethod' } }
      ]
    },
    {
      // 高亮列
      i18nKey: 'app.aside.menu.tableHighlightColumn',
      children: [
        // 当前列
        { i18nKey: 'app.aside.menu.tableCurrentColumn', routerLink: { name: 'ComponentGridCurrentColumnBase' } },
        // 拦截选中
        { i18nKey: 'app.aside.menu.tableInterceptSelect', routerLink: { name: 'ComponentGridCurrentColumnBeforeSelectMethod' } },
        // 手动触发
        { i18nKey: 'app.aside.menu.tableManualTrigger', routerLink: { name: 'ComponentGridCurrentColumnTrigger' } },
        // 可取消
        { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridCurrentColumnStrict' } }
      ]
    },
    {
      // 列宽调整
      i18nKey: 'app.aside.menu.tableColumnWidthResize',
      children: [
        // 拖拽模式
        { i18nKey: 'app.aside.menu.tableDragMode', routerLink: { name: 'ComponentGridColResizableMode' } },
        // 分组列头
        { i18nKey: 'app.aside.menu.tableGroupColumnHeader', routerLink: { name: 'ComponentGridColResizableGroup' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridColResizableFixed' } },
        // 双击自适应列宽
        { i18nKey: 'app.aside.menu.tableDblclickAutoColumnWidth', routerLink: { name: 'ComponentGridColResizableDblclickAutoWidth' } },
        // 所有单元格可拖拽
        { i18nKey: 'app.aside.menu.tableAllCellsDraggable', routerLink: { name: 'ComponentGridColResizableAllColumnDrag' } },
        // 限制拖拽最小列宽
        { i18nKey: 'app.aside.menu.tableLimitMinColumnWidthDrag', routerLink: { name: 'ComponentGridColResizableMinWidth' } },
        // 限制拖拽最大列宽
        { i18nKey: 'app.aside.menu.tableLimitMaxColumnWidthDrag', routerLink: { name: 'ComponentGridColResizableMaxWidth' } },
        // 手动操作列宽
        { i18nKey: 'app.aside.menu.tableManualColumnWidth', routerLink: { name: 'ComponentGridColResizableManual' } }
      ]
    },
    {
      // 列拖拽
      i18nKey: 'app.aside.menu.tableColumnDrag',
      children: [
        // 拖拽调整列顺序
        { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentGridColDragSort' } },
        // 个性化设置
        { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentGridColDragCustom' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridColDragFixed' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridColDragIcon' } },
        // 拖拽辅助样式
        { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridColDragShowGuidesStatus' } },
        {
          // 分组表头
          i18nKey: 'app.aside.menu.tableGroupHeader',
          children: [
            // 分组拖拽
            { i18nKey: 'app.aside.menu.tableGroupDrag', routerLink: { name: 'ComponentGridColDragGroup' } },
            // 同层级拖拽
            { i18nKey: 'app.aside.menu.tablePeerLevelDrag', routerLink: { name: 'ComponentGridColDragPeerDrag' } },
            // 跨层级拖拽
            { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentGridColDragCrossDrag' } },
            // 自己拖拽给自己子级
            { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentGridColDragSelfToChildDrag' } },
            // 拖拽成子级
            { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentGridColDragToChildDrag' } },
            // 分组个性化设置
            { i18nKey: 'app.aside.menu.tableGroupPersonalization', routerLink: { name: 'ComponentGridColDragGroupCustom' } }
          ]
        },
        // 触发方式
        { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridColDragTrigger' } },
        // 拖拽事件
        { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentGridColDragEvents' } },
        // 自定义提示
        { i18nKey: 'app.aside.menu.tableCustomTip', routerLink: { name: 'ComponentGridColDragTooltipMethod' } },
        // 禁用按钮
        { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentGridColDragDisabledMethod' } },
        // 按钮可视
        { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentGridColDragVisibleMethod' } },
        // 拖拽拦截
        { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentGridColDragDragMethod' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义提示模板
            { i18nKey: 'app.aside.menu.tableCustomTipTemplate', routerLink: { name: 'ComponentGridColDragTemplateTip' } }
          ]
        },
        // 手动移动
        { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridColDragManual' } },
        // 同时行与列拖拽
        { i18nKey: 'app.aside.menu.tableRowAndColumnDrag', routerLink: { name: 'ComponentGridColDragRowCol' } }
      ]
    },
    {
      // 高亮行
      i18nKey: 'app.aside.menu.tableHighlightRow',
      children: [
        // 当前行
        { i18nKey: 'app.aside.menu.tableCurrentRow', routerLink: { name: 'ComponentGridCurrentRowBase' } },
        // 拦截选中
        { i18nKey: 'app.aside.menu.tableInterceptSelect', routerLink: { name: 'ComponentGridCurrentRowBeforeSelectMethod' } },
        // 手动触发
        { i18nKey: 'app.aside.menu.tableManualTrigger', routerLink: { name: 'ComponentGridCurrentRowTrigger' } },
        // 可取消
        { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridCurrentRowStrict' } }
      ]
    },
    {
      // 行高调整
      i18nKey: 'app.aside.menu.tableRowHeightResize',
      children: [
        // 行高拖拽
        { i18nKey: 'app.aside.menu.tableRowHeightDrag', routerLink: { name: 'ComponentGridRowResizableBase' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowResizableFixed' } },
        // 树结构
        { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentGridRowResizableTree' } },
        // 拖拽按钮位置
        { i18nKey: 'app.aside.menu.tableDragButtonPosition', routerLink: { name: 'ComponentGridRowResizableRowResize' } },
        // 双击自适应行高
        { i18nKey: 'app.aside.menu.tableDblclickAutoRowHeight', routerLink: { name: 'ComponentGridRowResizableDblclickAutoHeight' } },
        // 所有单元格可拖拽
        { i18nKey: 'app.aside.menu.tableAllCellsDraggable', routerLink: { name: 'ComponentGridRowResizableAllRowDrag' } },
        // 手动操作行高
        { i18nKey: 'app.aside.menu.tableManualRowHeight', routerLink: { name: 'ComponentGridRowResizableManual' } },
        // 手动刷新行高
        { i18nKey: 'app.aside.menu.tableManualRefreshRowHeight', routerLink: { name: 'ComponentGridRowResizableRecalcManual' } },
        // 实现自适应文本域
        { i18nKey: 'app.aside.menu.tableAutoTextarea', routerLink: { name: 'ComponentGridRowResizableTextarea' } },
        // 实现默认行高与自适应行高
        { i18nKey: 'app.aside.menu.tableDefaultAndAutoRowHeight', routerLink: { name: 'ComponentGridRowResizableRowDragAutoHeight' } }
      ]
    },
    {
      // 行拖拽
      i18nKey: 'app.aside.menu.tableRowDrag',
      children: [
        // 拖拽调整行顺序
        { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentGridRowDragSort' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowDragFixed' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridRowDragIcon' } },
        // 拖拽辅助样式
        { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridRowDragShowGuidesStatus' } },
        {
          // 树结构
          i18nKey: 'app.aside.menu.tableTree',
          children: [
            // 树拖拽
            { i18nKey: 'app.aside.menu.tableTreeDrag', routerLink: { name: 'ComponentGridRowDragTreeBase' } },
            // 同层级拖拽
            { i18nKey: 'app.aside.menu.tablePeerLevelDrag', routerLink: { name: 'ComponentGridRowDragTreePeerDrag' } },
            // 跨层级拖拽
            { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentGridRowDragTreeCossDrag' } },
            // 自己拖拽给自己子级
            { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentGridRowDragTreeSelfToChildDrag' } },
            // 拖拽成子级
            { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentGridRowDragTreeToChildDrag' } },
            // 拖拽辅助样式
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridRowDragTreeShowGuidesStatus' } },
            // 拖拽二次确认
            { i18nKey: 'app.aside.menu.tableDragSecondaryConfirm', routerLink: { name: 'ComponentGridRowDragTreeDragMethod' } },
            // 懒加载
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentGridRowDragTreeLazy' } },
            // 手动移动
            { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridRowDragTreeManual' } },
            // 跨表拖拽
            { i18nKey: 'app.aside.menu.tableCrossTableDrag', routerLink: { name: 'ComponentGridRowDragTreeCossTable' } }
          ]
        },
        // 触发方式
        { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRowDragTrigger' } },
        // 拖拽事件
        { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentGridRowDragEvents' } },
        // 自定义提示
        { i18nKey: 'app.aside.menu.tableCustomTip', routerLink: { name: 'ComponentGridRowDragTooltipMethod' } },
        // 禁用按钮
        { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentGridRowDragDisabledMethod' } },
        // 按钮可视
        { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentGridRowDragVisibleMethod' } },
        // 拖拽拦截
        { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentGridRowDragDragMethod' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义提示模板
            { i18nKey: 'app.aside.menu.tableCustomTipTemplate', routerLink: { name: 'ComponentGridRowDragTemplateTip' } }
          ]
        },
        // 手动移动
        { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridRowDragManual' } },
        // 跨表拖拽
        { i18nKey: 'app.aside.menu.tableCrossTableDrag', routerLink: { name: 'ComponentGridRowDragCossTable' } }
      ]
    },
    {
      // 行分组
      i18nKey: 'app.aside.menu.tableRowGroup',
      children: [
        // 行分组
        { i18nKey: 'app.aside.menu.tableRowGroup', routerLink: { name: 'ComponentGridRowGroupBasic' } },
        // 合并多个字段进行分组
        { i18nKey: 'app.aside.menu.tableMergeMultipleFieldsGroup', routerLink: { name: 'ComponentGridRowGroupMultiField' } },
        // 按多字个列进行分组
        { i18nKey: 'app.aside.menu.tableGroupByMultipleColumns', routerLink: { name: 'ComponentGridRowGroupGroupFields' } },
        {
          // 单选框
          i18nKey: 'app.aside.menu.tableRadio',
          children: [
            // 单选框
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridRowGroupRadioBse' } },
            // 限制选中
            { i18nKey: 'app.aside.menu.tableLimitSelect', routerLink: { name: 'ComponentGridRowGroupRadioChecked' } }
          ]
        },
        {
          // 复选框
          i18nKey: 'app.aside.menu.tableCheckbox',
          children: [
            // 复选框
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentGridRowGroupCheckboxBase' } },
            // 分组不关联
            { i18nKey: 'app.aside.menu.tableGroupNotLinked', routerLink: { name: 'ComponentGridRowGroupCheckboxCheckStrictly' } },
            // 分组不关联与全选
            { i18nKey: 'app.aside.menu.tableGroupNotLinkedAndSelectAll', routerLink: { name: 'ComponentGridRowGroupCheckboxStrictlyHeader' } },
            // 限制选中
            { i18nKey: 'app.aside.menu.tableLimitSelect', routerLink: { name: 'ComponentGridRowGroupCheckboxChecked' } }
          ]
        },
        // 手风琴效果
        { i18nKey: 'app.aside.menu.tableAccordionEffect', routerLink: { name: 'ComponentGridRowGroupAccordion' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowGroupFixed' } },
        // 分组排序
        { i18nKey: 'app.aside.menu.tableGroupSort', routerLink: { name: 'ComponentGridRowGroupSort' } },
        // 分组筛选
        { i18nKey: 'app.aside.menu.tableGroupFilter', routerLink: { name: 'ComponentGridRowGroupFilter' } },
        // 同时使用展开行
        { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentGridRowGroupExpand' } },
        // 显示分组统计
        { i18nKey: 'app.aside.menu.tableShowGroupStats', routerLink: { name: 'ComponentGridRowGroupTotal' } },
        // 显示多列合计
        { i18nKey: 'app.aside.menu.tableShowMultiColumnTotal', routerLink: { name: 'ComponentGridRowGroupCount' } },
        // 表尾合计
        { i18nKey: 'app.aside.menu.tableFooterTotal', routerLink: { name: 'ComponentGridRowGroupFooter' } },
        // 自定义分组内容
        { i18nKey: 'app.aside.menu.tableCustomGroupContent', routerLink: { name: 'ComponentGridRowGroupContentMethod' } },
        // 自定义合并
        { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentGridRowGroupSpanMethod' } },
        // 默认展开
        { i18nKey: 'app.aside.menu.tableDefaultExpand', routerLink: { name: 'ComponentGridRowGroupExpandGroupFields' } },
        // 展示方式
        { i18nKey: 'app.aside.menu.tableDisplayMode', routerLink: { name: 'ComponentGridRowGroupGroupMode' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRowGroupTrigger' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义分组列内容模板
            { i18nKey: 'app.aside.menu.tableCustomGroupColumnContentTemplate', routerLink: { name: 'ComponentGridRowGroupTemplateGroupContent' } }
            // { i18nKey: 'app.aside.menu.tableCustomGroupColumnAggregateTemplate', routerLink: { name: 'ComponentGridRowGroupTemplateGroupValues' } }
          ]
        },
        // 分组汇总
        { i18nKey: 'app.aside.menu.tableGroupSummary', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Faggregation%2FrowGroupSummary' } } },
        // 实现产品分组列表
        { i18nKey: 'app.aside.menu.tableProductGroupList', routerLink: { name: 'ComponentGridRowGroupProduct1' } }
      ]
    },
    {
      // 展开行
      i18nKey: 'app.aside.menu.tableExpandRow',
      children: [
        // 基础使用
        { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentGridExpandBasic' } },
        // 展开容器内间距
        { i18nKey: 'app.aside.menu.tableExpandContainerPadding', routerLink: { name: 'ComponentGridExpandPadding' } },
        // 展开容器高度
        { i18nKey: 'app.aside.menu.tableExpandContainerHeight', routerLink: { name: 'ComponentGridExpandHeight' } },
        // 序号列
        { i18nKey: 'app.aside.menu.tableSeqColumn', routerLink: { name: 'ComponentGridExpandCustomSeq' } },
        // 使用冻结列
        { i18nKey: 'app.aside.menu.tableUseFixedColumn', routerLink: { name: 'ComponentGridExpandFixed' } },
        // 实现展开子表格
        { i18nKey: 'app.aside.menu.tableExpandChildTable', routerLink: { name: 'ComponentGridExpandChildTable' } },
        // 展开模式
        { i18nKey: 'app.aside.menu.tableExpandMode', routerLink: { name: 'ComponentGridExpandMode' } },
        // 展保持全部展开状态开模式
        { i18nKey: 'app.aside.menu.tableKeepAllExpandedMode', routerLink: { name: 'ComponentGridExpandKeepAll' } },
        // 实现弹窗选择到子表格
        { i18nKey: 'app.aside.menu.tableModalSelectToChildTable', routerLink: { name: 'ComponentGridExpandSelectModalTable' } },
        // 实现联动复选框
        { i18nKey: 'app.aside.menu.tableLinkedCheckbox', routerLink: { name: 'ComponentGridExpandVnTree' } },
        // 实现产品列表带明细
        { i18nKey: 'app.aside.menu.tableProductListWithDetails', routerLink: { name: 'ComponentGridExpandProduct1' } },
        // 实现产品明细列表
        { i18nKey: 'app.aside.menu.tableProductDetailList', routerLink: { name: 'ComponentGridExpandProduct2' } }
      ]
    },
    {
      // 筛选
      i18nKey: 'app.aside.menu.tableFilter',
      children: [
        // 数据筛选
        { i18nKey: 'app.aside.menu.tableDataFilter', routerLink: { name: 'ComponentGridFilterBase' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridFilterIcon' } },
        // 服务端筛选
        { i18nKey: 'app.aside.menu.tableRemoteFilter', routerLink: { name: 'ComponentGridFilterRemote' } },
        // 服务端分页筛选
        { i18nKey: 'app.aside.menu.tableRemotePaginationFilter', routerLink: { name: 'ComponentGridFilterPager' } },
        // 树结构
        { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentGridFilterTree' } },
        // 手动弹出
        { i18nKey: 'app.aside.menu.tableManualPopup', routerLink: { name: 'ComponentGridFilterManual' } },
        // 手动筛选
        { i18nKey: 'app.aside.menu.tableManualFilter', routerLink: { name: 'ComponentGridFilterSetFilter' } },
        // 显示隐藏图标
        { i18nKey: 'app.aside.menu.tableShowHideIcon', routerLink: { name: 'ComponentGridFilterIconVisibleMethod' } },
        {
          // 浮动筛选
          i18nKey: 'app.aside.menu.tableFloatingFilter',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterFloatingVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterFloatingVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterFloatingVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterFloatingVxeDatePicker' } },
            // 显示图标
            { i18nKey: 'app.aside.menu.tableShowIcon', routerLink: { name: 'ComponentGridFilterFloatingShowIcon' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentGridFilterFloatingPosition' } },
            // 完整筛选
            { i18nKey: 'app.aside.menu.tableFullFilter', routerLink: { name: 'ComponentGridFilterFloatingFull' } },
            // 分组表头
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentGridFilterFloatingGroup' } },
            // 自定义插槽模板
            { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentGridFilterFloatingTemplate' } }
          ]
        },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义筛选内容模板
            { i18nKey: 'app.aside.menu.tableCustomFilterContentTemplate', routerLink: { name: 'ComponentGridFilterTemplateFilter' } }
          ]
        },
        // 输入筛选
        { i18nKey: 'app.aside.menu.tableInputFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Fgrid%2Fcomplex%2FstringFilter' } } },
        // 组合筛选
        { i18nKey: 'app.aside.menu.tableCombinationFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Fgrid%2Fcombination%2FstringFilter' } } }
      ]
    },
    {
      // 筛选 - 渲染 - 配置式
      i18nKey: 'app.aside.menu.tableFilterRenderConfig',
      children: [
        { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
        { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
        { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
        { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/filter/el-input`, linkTarget: '_blank' }
      ]
    },
    {
      // 筛选 - 渲染 - 插槽式
      i18nKey: 'app.aside.menu.tableFilterRenderSlot',
      children: [
        { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
        { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/filter/el-input`, linkTarget: '_blank' }
      ]
    },
    {
      // 右键菜单
      i18nKey: 'app.aside.menu.tableContextMenu',
      children: [
        // 自定义前缀
        { i18nKey: 'app.aside.menu.tableCustomPrefix', routerLink: { name: 'ComponentGridMenuPrefixConfig' } },
        // 自定义后缀
        { i18nKey: 'app.aside.menu.tableCustomSuffix', routerLink: { name: 'ComponentGridMenuSuffixConfig' } },
        // 完整右键菜单
        { i18nKey: 'app.aside.menu.tableFullContextMenu', routerLink: { name: 'ComponentGridMenuFull' } },
        // 同步权限控制
        { i18nKey: 'app.aside.menu.tableSyncPermissionControl', routerLink: { name: 'ComponentGridMenuPrivilege' } },
        // 异步权限控制
        { i18nKey: 'app.aside.menu.tableAsyncPermissionControl', routerLink: { name: 'ComponentGridMenuLoading' } },
        // 设置宽度
        { i18nKey: 'app.aside.menu.tableSetWidth', routerLink: { name: 'ComponentGridMenuWidth' } },
        // 自定义样式
        { i18nKey: 'app.aside.menu.tableCustomStyle', routerLink: { name: 'ComponentGridMenuClassName' } },
        // 便捷配置 Code 插件
        { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/grid/full`, linkTarget: '_blank' }
      ]
    },
    {
      // 查询表单
      i18nKey: 'app.aside.menu.tableQueryForm',
      children: [
        // 查询表单
        { i18nKey: 'app.aside.menu.tableQueryForm', routerLink: { name: 'ComponentGridFormSearch' } },
        // 表单的默认值
        { i18nKey: 'app.aside.menu.tableFormDefaultValues', routerLink: { name: 'ComponentGridFormFormData' } },
        // 带折叠的查询表单
        { i18nKey: 'app.aside.menu.tableCollapsibleQueryForm', routerLink: { name: 'ComponentGridFormCollapse' } },
        // 自定义项插槽模板
        { i18nKey: 'app.aside.menu.tableCustomItemSlotTemplate', routerLink: { name: 'ComponentGridFormItemTemplate' } },
        // 自定义表单插槽模板
        { i18nKey: 'app.aside.menu.tableCustomFormSlotTemplate', routerLink: { name: 'ComponentGridFormTemplate' } }
      ]
    },
    {
      // 工具栏
      i18nKey: 'app.aside.menu.tableToolbar',
      children: [
        // 左侧按钮
        { i18nKey: 'app.aside.menu.tableLeftButtons', routerLink: { name: 'ComponentGridToolbarButtons' } },
        // 右侧按钮
        { i18nKey: 'app.aside.menu.tableRightButtons', routerLink: { name: 'ComponentGridToolbarTools' } },
        // 个性化设置
        { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentGridToolbarCustom' } },
        // 打印功能
        { i18nKey: 'app.aside.menu.tablePrintFeature', routerLink: { name: 'ComponentGridToolbarPrint' } },
        // 最大化显示
        { i18nKey: 'app.aside.menu.tableMaximizeDisplay', routerLink: { name: 'ComponentGridToolbarZoom' } },
        // 导入数据
        { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentGridToolbarImport' } },
        // 导出数据
        { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentGridToolbarExport' } },
        // 刷新列表
        { i18nKey: 'app.aside.menu.tableRefreshList', routerLink: { name: 'ComponentGridToolbarRefresh' } },
        // 完整功能
        { i18nKey: 'app.aside.menu.tableFullFeatures', routerLink: { name: 'ComponentGridToolbarFull' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridToolbarIcon' } },
        // 自定义第三方图标
        { i18nKey: 'app.aside.menu.tableCustomThirdPartyIcon', isPlugin: true, linkUrl: `${otherUrl}#/other-iconfont/font-class/toolbar/icons`, linkTarget: '_blank' },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtons' } },
            // 自定义左侧前缀模板
            { i18nKey: 'app.aside.menu.tableCustomLeftPrefixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtonPrefix' } },
            // 自定义左侧后缀模板
            { i18nKey: 'app.aside.menu.tableCustomLeftSuffixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtonSuffix' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentGridToolbarTemplateTools' } },
            // 自定义右侧前缀模板
            { i18nKey: 'app.aside.menu.tableCustomRightPrefixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateToolPrefix' } },
            // 自定义右侧后缀模板
            { i18nKey: 'app.aside.menu.tableCustomRightSuffixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateToolSuffix' } }
          ]
        }
      ]
    },
    {
      // 个性化设置
      i18nKey: 'app.aside.menu.tablePersonalization',
      children: [
        // 使用工具栏
        { i18nKey: 'app.aside.menu.tableUseToolbar', routerLink: { name: 'ComponentGridCustomToolbar' } },
        // 窗口模式
        { i18nKey: 'app.aside.menu.tableWindowMode', routerLink: { name: 'ComponentGridCustomModal' } },
        // 抽屉模式
        { i18nKey: 'app.aside.menu.tableDrawerMode', routerLink: { name: 'ComponentGridCustomDrawer' } },
        // 弹出层展示模式
        { i18nKey: 'app.aside.menu.tablePopupDisplayMode', routerLink: { name: 'ComponentGridCustomMaxHeight' } },
        // 默认隐藏列
        { i18nKey: 'app.aside.menu.tableDefaultHiddenColumns', routerLink: { name: 'ComponentGridCustomDefHide' } },
        // 禁用操作操作
        { i18nKey: 'app.aside.menu.tableDisableOperations', routerLink: { name: 'ComponentGridCustomCheckMethod' } },
        // 显示/隐藏操作列
        { i18nKey: 'app.aside.menu.tableShowHideActionColumn', routerLink: { name: 'ComponentGridCustomVisibleMethod' } },
        // 列宽限制
        { i18nKey: 'app.aside.menu.tableColumnWidthLimit', routerLink: { name: 'ComponentGridCustomResizableWidth' } },
        // 允许调整列显示隐藏
        { i18nKey: 'app.aside.menu.tableAllowAdjustColumnVisibility', routerLink: { name: 'ComponentGridCustomVisible' } },
        // 允许调整对齐方式
        { i18nKey: 'app.aside.menu.tableAllowAdjustAlign', routerLink: { name: 'ComponentGridCustomAlign' } },
        // 允许调整表头对齐方式
        { i18nKey: 'app.aside.menu.tableAllowAdjustHeaderAlign', routerLink: { name: 'ComponentGridCustomHeaderAlign' } },
        // 允许调整表尾对齐方式
        { i18nKey: 'app.aside.menu.tableAllowAdjustFooterAlign', routerLink: { name: 'ComponentGridCustomFooterAlign' } },
        // 允许调整列冻结
        { i18nKey: 'app.aside.menu.tableAllowAdjustColumnFixed', routerLink: { name: 'ComponentGridCustomFixed' } },
        // 允许调整列宽
        { i18nKey: 'app.aside.menu.tableAllowAdjustColumnWidth', routerLink: { name: 'ComponentGridCustomResizable' } },
        // 允许拖拽列顺序
        { i18nKey: 'app.aside.menu.tableAllowDragColumnOrder', routerLink: { name: 'ComponentGridCustomSort' } },
        // 允许拖拽分组
        { i18nKey: 'app.aside.menu.tableAllowDragGroup', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FallowGroup' } } },
        // 允许拖拽聚合函数
        { i18nKey: 'app.aside.menu.tableAllowDragAggregateFunction', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } },
        // 冻结列最大数量限制
        { i18nKey: 'app.aside.menu.tableFixedColumnMaxLimit', routerLink: { name: 'ComponentGridCustomFixedMax' } },
        // 排序快捷操作按钮
        { i18nKey: 'app.aside.menu.tableSortShortcutButton', routerLink: { name: 'ComponentGridCustomMoveBtn' } },
        // { i18nKey: 'app.aside.menu.tableCustomTriggerPopupSettings', routerLink: { name: 'CmponentGridCustomTemplate' } },
        // 自定义触发按钮
        { i18nKey: 'app.aside.menu.tableCustomTriggerButton', routerLink: { name: 'ComponentGridCustomCustomBtn' } },
        // 自定义弹出位置
        { i18nKey: 'app.aside.menu.tableCustomPopupPosition', routerLink: { name: 'ComponentGridCustomPlacement' } },
        // 完整功能
        { i18nKey: 'app.aside.menu.tableFullFeatures', routerLink: { name: 'ComponentGridCustomFull' } },
        // 通过样式设置列宽
        { i18nKey: 'app.aside.menu.tableSetColumnWidthByStyle', routerLink: { name: 'ComponentGridCustomCssVar' } },
        // 事件监听
        { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentGridCustomEvents' } },
        // 实时更新
        { i18nKey: 'app.aside.menu.tableRealtimeUpdate', routerLink: { name: 'ComponentGridCustomImmediate' } },
        // 本地保存列设置
        { i18nKey: 'app.aside.menu.tableLocalSaveColumnSettings', routerLink: { name: 'ComponentGridCustomStorage' } },
        // 本地保存聚合函数列设置
        { i18nKey: 'app.aside.menu.tableLocalSaveAggregateColumnSettings', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2Fstorage' } } },
        // 自定义服务端保存
        { i18nKey: 'app.aside.menu.tableCustomRemoteSave', routerLink: { name: 'ComponentGridCustomRemote' } },
        // 实现服务端保存与恢复
        { i18nKey: 'app.aside.menu.tableRemoteSaveAndRestore', routerLink: { name: 'ComponentGridCustomRemoteFull' } },
        // 自定义实现用户列设置
        { i18nKey: 'app.aside.menu.tableCustomUserColumnSettings', routerLink: { name: 'ComponentGridCustomToCustomTmpl' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridCustomTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridCustomTemplateBottom' } },
            // 自定义表头模板
            { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentGridCustomTemplateHeader' } },
            // 自定义表尾模板
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridCustomTemplateFooter' } },
            // 自定义默认模板
            { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridCustomTemplateDefault' } }
          ]
        },
        // 实现多模板
        { i18nKey: 'app.aside.menu.tableMultiTemplate', routerLink: { name: 'ComponentGridCustomToMultiTmpl' } }
      ]
    },
    {
      // 数据分页
      i18nKey: 'app.aside.menu.tableDataPagination',
      children: [
        // 实现后端分页
        { i18nKey: 'app.aside.menu.tableBackendPagination', routerLink: { name: 'ComponentGridPagerPage' }, keywords: '分页,page' },
        // 实现前端分页
        { i18nKey: 'app.aside.menu.tableFrontendPagination', routerLink: { name: 'ComponentGridPagerMockPage' }, keywords: '分页,page' },
        // 自定义布局
        { i18nKey: 'app.aside.menu.tableCustomLayout', routerLink: { name: 'ComponentGridPagerLayouts' } },
        // 自定义序号
        { i18nKey: 'app.aside.menu.tableCustomSeq', routerLink: { name: 'ComponentGridPagerStart' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义分页模板
            { i18nKey: 'app.aside.menu.tableCustomPagerTemplate', routerLink: { name: 'ComponentGridPagerTemplatePager' } },
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentGridPagerTemplateLeft' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentGridPagerTemplateRight' } },
            // 自定义功能模板
            { i18nKey: 'app.aside.menu.tableCustomFunctionTemplate', routerLink: { name: 'ComponentGridPagerTemplateFunc' } }
          ]
        }
      ]
    },
    {
      // 功能布局
      i18nKey: 'app.aside.menu.tableFeatureLayout',
      children: [
        // 调整分页位置
        { i18nKey: 'app.aside.menu.tableAdjustPagerPosition', routerLink: { name: 'ComponentGridLayoutPager' } },
        // 调整工具栏位置
        { i18nKey: 'app.aside.menu.tableAdjustToolbarPosition', routerLink: { name: 'ComponentGridLayoutToolbar' } }
      ]
    },
    {
      // 树结构
      i18nKey: 'app.aside.menu.tableTree',
      children: [
        // 平级结构
        { i18nKey: 'app.aside.menu.tableFlatStructure', routerLink: { name: 'ComponentGridTreeLeveling' } },
        // 层级结构
        { i18nKey: 'app.aside.menu.tableHierarchyStructure', routerLink: { name: 'ComponentGridTreeHierarchy' } },
        // 斑马线样式
        { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentGridTreeStripe' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridTreeIcon' } },
        // 序号模式
        { i18nKey: 'app.aside.menu.tableSeqMode', routerLink: { name: 'ComponentGridTreeSeqMode' } },
        // 显示连接线
        {
          i18nKey: 'app.aside.menu.tableShowConnectionLine',
          children: [
            // 连接线
            { i18nKey: 'app.aside.menu.tableShowConnectionShowLine', routerLink: { name: 'ComponentGridTreeLineShowLine' } },
            // 节点缩进
            { i18nKey: 'app.aside.menu.tableShowConnectionIndent', routerLink: { name: 'ComponentGridTreeLineIndent' } },
            // 线类型
            { i18nKey: 'app.aside.menu.tableShowConnectionLineType', routerLink: { name: 'ComponentGridTreeLineType' } },
            // 线颜色
            { i18nKey: 'app.aside.menu.tableShowConnectionLineColor', routerLink: { name: 'ComponentGridTreeLineColor' } }
          ]
        },
        // 单选框
        { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridTreeRadio' } },
        {
          // 复选框
          i18nKey: 'app.aside.menu.tableCheckbox',
          children: [
            // 基础
            { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentGridTreeCheckboxBase' } },
            // 显示字段内容
            { i18nKey: 'app.aside.menu.tableShowFieldContent', routerLink: { name: 'ComponentGridTreeCheckboxLabelField' } },
            // 父子不关联
            { i18nKey: 'app.aside.menu.tableParentChildNotLinked', routerLink: { name: 'ComponentGridTreeCheckboxCheckStrictly' } },
            // 父子不关联与全选
            { i18nKey: 'app.aside.menu.tableParentChildNotLinkedAndSelectAll', routerLink: { name: 'ComponentGridTreeCheckboxStrictlyHeader' } }
          ]
        },
        // 冻结列
        { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridTreeFixed' } },
        // 排序
        { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentGridTreeSort' } },
        // 筛选
        { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentGridTreeFilter' } },
        // 默认展开
        { i18nKey: 'app.aside.menu.tableDefaultExpand', routerLink: { name: 'ComponentGridTreeExpandRowKeys' } },
        // 同时使用展开行
        { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentGridTreeExpandRow' } },
        // { i18nKey: 'app.aside.menu.tableImplementMultiFieldGrouping', routerLink: { name: 'ComponentGridTreeGroupFields' } },
        // 自定义合并
        { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentGridTreeSpanMethod' } },
        // 懒加载
        { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentGridTreeLazy' } },
        // 实现产品列表带明细
        { i18nKey: 'app.aside.menu.tableProductListWithDetails', routerLink: { name: 'ComponentGridTreeProduct1' } },
        // 单元格选取
        { i18nKey: 'app.aside.menu.tableCellSelection', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Ftree%2FareaTree' } } }
      ]
    },
    {
      // 单元格 - 渲染 - 配置式
      i18nKey: 'app.aside.menu.tableCellRenderConfig',
      children: [
        // VxeText 文本
        { i18nKey: 'app.aside.menu.tableVxeText', routerLink: { name: 'ComponentGridCellRenderVxeText' } },
        // VxeLink 链接
        { i18nKey: 'app.aside.menu.tableVxeLink', routerLink: { name: 'ComponentGridCellRenderVxeLink' } },
        // VxeSwitch 开关
        { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
        // VxeRadioGroup 单选组
        { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
        // VxeCheckbox 复选框
        { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentGridCellRenderVxeCheckbox' } },
        // VxeCheckboxGroup 复选组
        { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
        // VxeButtonGroup 按钮组
        { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
        // VxeImage 图片
        { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
        // VxeImageGroup 图片组
        { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
        // VxeTextEllipsis 多行文本溢出省略
        { i18nKey: 'app.aside.menu.tableVxeTextEllipsisMultiline', routerLink: { name: 'ComponentGridCellRenderVxeTextEllipsis' } },
        // VxeRate 评分
        { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentGridCellRenderVxeRate' } },
        // VxeUpload 上传
        { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
        // FormatNumberInput 格式化数值
        { i18nKey: 'app.aside.menu.tableFormatNumberInput', routerLink: { name: 'ComponentGridCellRenderFormatNumberInput' } },
        // FormatSelect 格式化列表选项
        { i18nKey: 'app.aside.menu.tableFormatSelect', routerLink: { name: 'ComponentGridCellRenderFormatOption' } },
        // FormatTreeSelect 格式化树选项
        { i18nKey: 'app.aside.menu.tableFormatTreeSelect', routerLink: { name: 'ComponentGridCellRenderFormatTree' } },
        // 实现自定义渲染器
        { i18nKey: 'app.aside.menu.tableImplementCustomRenderer', routerLink: { name: 'GlobalRendererTableDefaultReApi' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/cell/el-switch`, linkTarget: '_blank' }
      ]
    },
    {
      // 单元格 - 渲染 - 插槽式
      i18nKey: 'app.aside.menu.tableCellRenderSlot',
      children: [
        // VxeText 文本
        { i18nKey: 'app.aside.menu.tableVxeText', routerLink: { name: 'ComponentGridCellTemplateVxeText' } },
        // VxeLink 链接
        { i18nKey: 'app.aside.menu.tableVxeLink', routerLink: { name: 'ComponentGridCellTemplateVxeLink' } },
        // VxeTag 标签
        { i18nKey: 'app.aside.menu.tableVxeTag', routerLink: { name: 'ComponentGridCellTemplateVxeTag' } },
        // VxeCheckbox 复选框
        { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentGridCellTemplateVxeCheckbox' } },
        // VxeCheckboxGroup 复选组
        { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentGridCellTemplateVxeCheckboxGroup' } },
        // VxeSwitch 开关
        { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
        // VxeButtonGroup 按钮组
        { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
        // VxeButton 按钮
        { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
        // VxeImage 图片
        { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
        // VxeInput 单行输入框
        { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridCellTemplateVxeInput' } },
        // VxeTextarea 文本域
        { i18nKey: 'app.aside.menu.tableVxeTextarea', routerLink: { name: 'ComponentGridCellTemplateVxeTextarea' } },
        // VxeUpload 上传
        { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
        // VxeModal 弹窗
        { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentGridCellTemplateVxeModal' } },
        // VxeDrawer 抽屉
        { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentGridCellTemplateVxeDrawer' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/cell/el-switch`, linkTarget: '_blank' },
        // 实现全部单元格可编辑
        { i18nKey: 'app.aside.menu.tableAllCellsEditable', routerLink: { name: 'ComponentGridCellTemplateAllEdit' } }
      ]
    },
    {
      // 可编辑
      i18nKey: 'app.aside.menu.tableEditable',
      children: [
        // 手动编辑
        { i18nKey: 'app.aside.menu.tableManualEdit', routerLink: { name: 'ComponentGridEditManual' } },
        // 单击编辑
        { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentGridEditClick' } },
        // 双击编辑
        { i18nKey: 'app.aside.menu.tableDblclickEdit', routerLink: { name: 'ComponentGridEditDblclick' } },
        // 编辑模式
        { i18nKey: 'app.aside.menu.tableEditMode', routerLink: { name: 'ComponentGridEditMode' } },
        // 编辑状态
        { i18nKey: 'app.aside.menu.tableEditStatus', routerLink: { name: 'ComponentGridEditStatus' } },
        {
          // 临时数据 - 内置增删改
          i18nKey: 'app.aside.menu.tableTempDataBuiltinCrud',
          children: [
            // 新增
            { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentGridEditHandleTempInsert' } },
            // 删除
            { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentGridEditHandleTempRemove' } },
            // 标记
            { i18nKey: 'app.aside.menu.tableMark', routerLink: { name: 'ComponentGridEditHandleTempPending' } },
            // 修改
            { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentGridEditHandleTempUpdate' } },
            // 恢复
            { i18nKey: 'app.aside.menu.tableRestore', routerLink: { name: 'ComponentGridEditHandleTempRevert' } }
          ]
        },
        {
          // 同步数据源 - 自定义实现增删改
          i18nKey: 'app.aside.menu.tableSyncDataSourceCustomCrud',
          children: [
            // 新增
            { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentGridEditHandleOriginalInsert' } },
            // 删除
            { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentGridEditHandleOriginalRemove' } },
            // 修改
            { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentGridEditHandleOriginalUpdate' } }
          ]
        },
        // 行校验
        { i18nKey: 'app.aside.menu.tableRowValidation', routerLink: { name: 'ComponentGridEditRowValid' } },
        // 禁用行编辑
        { i18nKey: 'app.aside.menu.tableDisableRowEdit', routerLink: { name: 'ComponentGridEditRowDisable' } },
        // 禁用单元格编辑
        { i18nKey: 'app.aside.menu.tableDisableCellEdit', routerLink: { name: 'ComponentGridEditCellDisable' } },
        // 单元格校验
        { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'ComponentGridEditCellValid' } },
        // 编辑之前拦截
        { i18nKey: 'app.aside.menu.tableBeforeEditIntercept', routerLink: { name: 'ComponentGridEditBeforeEdit' } },
        // 负数自动标红
        { i18nKey: 'app.aside.menu.tableNegativeAutoRed', routerLink: { name: 'ComponentGridEditShowNegativeStatus' } },
        // 实现复选框启用编辑
        { i18nKey: 'app.aside.menu.tableCheckboxEnableEdit', routerLink: { name: 'ComponentGridEditCheckboxCol' } },
        // 实现行字段的合计
        { i18nKey: 'app.aside.menu.tableImplementRowFieldTotal', routerLink: { name: 'ComponentGridEditRowImmediately' } },
        // 实现表尾实时合计
        { i18nKey: 'app.aside.menu.tableImplementFooterRealtimeTotal', routerLink: { name: 'ComponentGridEditFooterImmediately' } },
        // 实现弹窗编辑表单
        { i18nKey: 'app.aside.menu.tableImplementModalEditForm', routerLink: { name: 'ComponentGridEditModalForm' } },
        // 实现弹窗选择数据
        { i18nKey: 'app.aside.menu.tableImplementModalSelectData', routerLink: { name: 'ComponentGridEditModalSelect' } },
        // 实现抽屉编辑表单
        { i18nKey: 'app.aside.menu.tableImplementDrawerEditForm', routerLink: { name: 'ComponentGridEditDrawerForm' } },
        // 实现抽屉选择数据
        { i18nKey: 'app.aside.menu.tableImplementDrawerSelectData', routerLink: { name: 'ComponentGridEditDrawerSelect' } },
        // 实现每行独立下拉选项
        { i18nKey: 'app.aside.menu.tableImplementRowIndependentDropdown', routerLink: { name: 'ComponentGridEditSelectRowOption' } },
        // 实现行保存功能
        { i18nKey: 'app.aside.menu.tableRowSaveFeature', routerLink: { name: 'ComponentGridEditRowSave' } },
        // 实现单元格实时保存
        { i18nKey: 'app.aside.menu.tableImplementCellRealtimeSave', routerLink: { name: 'ComponentGridEditRealtimeSave' } },
        // 复制与粘贴
        { i18nKey: 'app.aside.menu.tableCopyAndPaste', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaClip' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fclip%2Fbase' } } },
        // 渲染图表
        { i18nKey: 'app.aside.menu.tableRenderChart', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaBasicsEcharts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fecharts%2FareaBasicsEcharts' } } }
      ]
    },
    {
      // 可编辑 - 渲染 - 配置式
      i18nKey: 'app.aside.menu.tableEditableRenderConfig',
      children: [
        // input 原生-输入框
        { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentGridEditRenderInput' } },
        // select 原生-下拉框
        { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentGridEditRenderSelect' } },
        // VxeInput 单行输入框
        { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
        // VxeNumberInput 数值输入
        { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
        // VxeIconPicker 图标选择
        { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentGridEditRenderVxeIconPicker' } },
        // VxeColorPicker 颜色选择
        { i18nKey: 'app.aside.menu.tableVxeColorPicker', routerLink: { name: 'ComponentGridEditRenderVxeColorPicker' } },
        // VxeDatePicker 日期选择
        { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
        // VxeDateRangePicker 日期范围选择
        { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentGridEditRenderVxeDateRangePicker' } },
        // VxeSelect 下拉选择
        { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
        // VxeTreeSelect 下拉树选择
        { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
        // VxeCascader 级联选择
        { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentGridEditRenderVxeCascader' } },
        // VxeTableSelect 下拉表格选择
        { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentGridEditRenderVxeTableSelect' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/edit/el-input`, linkTarget: '_blank' },
        // 事件监听
        { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentGridEditRenderEvents' } },
        // 阻止激活编辑
        { i18nKey: 'app.aside.menu.tablePreventActivateEdit', routerLink: { name: 'ComponentGridEditRenderBeforeEdit' } },
        // 启用与关闭
        { i18nKey: 'app.aside.menu.tableEnableAndDisable', routerLink: { name: 'ComponentGridEditRenderEnabled' } },
        // 禁用编辑
        { i18nKey: 'app.aside.menu.tableDisableEdit', routerLink: { name: 'ComponentGridEditRenderDisableEdit' } },
        // 切换编辑与只读
        { i18nKey: 'app.aside.menu.tableToggleEditReadonly', routerLink: { name: 'ComponentGridEditRenderReadonly' } },
        {
          // 自定义渲染器
          i18nKey: 'app.aside.menu.tableCustomRenderer',
          children: [
            // 实现输入框渲染器
            { i18nKey: 'app.aside.menu.tableInputRenderer', routerLink: { name: 'ComponentGridEditRenderCustomRenserMyInput' } },
            // 渲染器组合使用
            { i18nKey: 'app.aside.menu.tableRendererCombination', routerLink: { name: 'ComponentGridEditRenderCustomRenserMixLabel' } }
          ]
        }
      ]
    },
    {
      // 可编辑 - 渲染 - 插槽式
      i18nKey: 'app.aside.menu.tableEditableRenderSlot',
      children: [
        // input 原生-输入框
        { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentGridEditTemplateInput' } },
        // select 原生-下拉框
        { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentGridEditTemplateSelect' } },
        // VxeButton 按钮
        { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentGridEditTemplateVxeButton' } },
        // VxeInput 单行输入框
        { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
        // VxeNumberInput 数值输入
        { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
        // VxeIconPicker 图标选择
        { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentGridEditTemplateVxeIconPicker' } },
        // VxeDatePicker 日期选择
        { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
        // VxeDateRangePicker 日期范围选择
        { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentGridEditTemplateVxeDateRangePicker' } },
        // VxeSelect 下拉选择
        { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
        // VxeTreeSelect 下拉树选择
        { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentGridEditTemplateVxeTreeSelect' } },
        // VxeCascader 级联选择
        { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentGridEditTemplateVxeCascader' } },
        // VxeTableSelect 下拉表格选择
        { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentGridEditTemplateVxeTableSelect' } },
        // VxePulldown 下拉容器
        { i18nKey: 'app.aside.menu.tableVxePulldown', routerLink: { name: 'ComponentGridEditTemplateVxePulldown' } },
        // VxeModal 弹窗
        { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentGridEditTemplateVxeModal' } },
        // VxeDrawer 抽屉
        { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentGridEditTemplateVxeDrawer' } },
        // 阻止激活编辑
        { i18nKey: 'app.aside.menu.tablePreventActivateEdit', routerLink: { name: 'ComponentGridEditTemplateBeforeEdit' } },
        // 禁用编辑
        { i18nKey: 'app.aside.menu.tableDisableEdit', routerLink: { name: 'ComponentGridEditTemplateDisableEdit' } },
        // 集成第三方扩展插件
        { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/edit/el-input`, linkTarget: '_blank' }
      ]
    },
    {
      // 数据校验
      i18nKey: 'app.aside.menu.tableDataValidation',
      children: [
        // 校验规则配置
        { i18nKey: 'app.aside.menu.tableValidationRulesConfig', routerLink: { name: 'ComponentGridValidateRules' } },
        // 字符串校验规则
        { i18nKey: 'app.aside.menu.tableStringValidationRule', routerLink: { name: 'ComponentGridValidateString' } },
        // 数值校验规则
        { i18nKey: 'app.aside.menu.tableNumberValidationRule', routerLink: { name: 'ComponentGridValidateNumber' } },
        // 正则校验规则
        { i18nKey: 'app.aside.menu.tableRegexpValidationRule', routerLink: { name: 'ComponentGridValidateRegexp' } },
        // 数组校验规则
        { i18nKey: 'app.aside.menu.tableArrayValidationRule', routerLink: { name: 'ComponentGridValidateArray' } },
        // 多关联字段校验规则
        { i18nKey: 'app.aside.menu.tableMultiRelatedFieldValidationRule', routerLink: { name: 'ComponentGridValidateField' } },
        // 自定义校验规则
        { i18nKey: 'app.aside.menu.tableCustomValidationRule', routerLink: { name: 'ComponentGridValidateCustom' } },
        // 校验模式
        { i18nKey: 'app.aside.menu.tableValidationMode', routerLink: { name: 'ComponentGridValidateMode' } },
        // 校验指定单元格
        { i18nKey: 'app.aside.menu.tableValidateSpecifiedCell', routerLink: { name: 'ComponentGridValidateValidateField' } },
        // 错误提示样式
        { i18nKey: 'app.aside.menu.tableErrorTipStyle', routerLink: { name: 'ComponentGridValidateTheme' } },
        // 复制粘贴与数据校验
        { i18nKey: 'app.aside.menu.tableCopyPasteAndValidation', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fedit%2Fvalid' } } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义编辑模板
            { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentGridValidateTemplateEdit' } },
            // 自定义错误提示模板
            { i18nKey: 'app.aside.menu.tableCustomErrorTipTemplate', routerLink: { name: 'ComponentGridValidateTemplateValid' } }
          ]
        }
      ]
    },
    {
      // 实现自定义编辑
      i18nKey: 'app.aside.menu.tableImplementCustomEdit',
      children: [
        {
          // 基于列表插槽模板实现
          i18nKey: 'app.aside.menu.tableBasedOnListSlotTemplate',
          children: [
            // 默认全部编辑
            { i18nKey: 'app.aside.menu.tableDefaultAllEdit', routerLink: { name: 'ComponentGridCustomEditRewriteDefaulEdit' } },
            // 按钮编辑
            { i18nKey: 'app.aside.menu.tableButtonEdit', routerLink: { name: 'ComponentGridCustomEditRewriteMultiRow' } },
            // 单击编辑
            { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentGridCustomEditRewriteClickEdit' } }
          ]
        },
        {
          // 基于可编辑实现
          i18nKey: 'app.aside.menu.tableBasedOnEditable',
          children: [
            // 默认全部编辑
            { i18nKey: 'app.aside.menu.tableDefaultAllEdit', routerLink: { name: 'ComponentGridCustomEditMixingDefaulEdit' } },
            // 数据校验
            { i18nKey: 'app.aside.menu.tableDataValidation', routerLink: { name: 'ComponentGridCustomEditMixingValid' } },
            // 增删改查
            { i18nKey: 'app.aside.menu.tableCrud', routerLink: { name: 'ComponentGridCustomEditMixingClick' } }
          ]
        }
      ]
    },
    {
      // 自定义插槽模板
      i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
      children: [
        // 自定义布局模板
        { i18nKey: 'app.aside.menu.tableCustomLayoutTemplate', routerLink: { name: 'ComponentGridTemplateLayout' } },
        // 自定义表单模板
        { i18nKey: 'app.aside.menu.tableCustomFormTemplate', routerLink: { name: 'ComponentGridTemplateForm' } },
        // 自定义分页模板
        { i18nKey: 'app.aside.menu.tableCustomPagerTemplate', routerLink: { name: 'ComponentGridTemplatePager' } },
        // 自定义单元格模板
        { i18nKey: 'app.aside.menu.tableCustomCellTemplate', routerLink: { name: 'ComponentGridTemplateDefault' } },
        // 自定义标题模板
        { i18nKey: 'app.aside.menu.tableCustomTitleTemplate', routerLink: { name: 'ComponentGridTemplateTitle' } },
        // 自定义表头模板
        { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentGridTemplateHeader' } },
        // 自定义表尾模板
        { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridTemplateFooter' } },
        // 自定义单元格提示模板
        { i18nKey: 'app.aside.menu.tableCustomCellTipTemplate', routerLink: { name: 'ComponentGridTemplateTooltip' } },
        // 自定义排序按钮模板
        { i18nKey: 'app.aside.menu.tableCustomSortButtonTemplate', routerLink: { name: 'ComponentGridTemplateSort' } },
        // 自定义复选框模板
        { i18nKey: 'app.aside.menu.tableCustomCheckboxTemplate', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
        // 自定义单选框模板
        { i18nKey: 'app.aside.menu.tableCustomRadioTemplate', routerLink: { name: 'ComponentGridTemplateRadio' } },
        // 自定义展开行模板
        { i18nKey: 'app.aside.menu.tableCustomExpandRowTemplate', routerLink: { name: 'ComponentGridTemplateContent' } },
        // 自定义筛选模板
        { i18nKey: 'app.aside.menu.tableCustomFilterTemplate', routerLink: { name: 'ComponentGridTemplateFilter' } },
        // 自定义编辑模板
        { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentGridTemplateEdit' } },
        // 自定义单元格校验模板
        { i18nKey: 'app.aside.menu.tableCustomCellValidationTemplate', routerLink: { name: 'ComponentGridTemplateValid' } }
      ]
    },
    {
      // 按键导航
      i18nKey: 'app.aside.menu.tableKeyboardNavigation',
      children: [
        // 单元格选中
        { i18nKey: 'app.aside.menu.tableCellSelect', routerLink: { name: 'ComponentGridKeyboardSelected' } },
        // 按键操作
        { i18nKey: 'app.aside.menu.tableKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardKeyboard' } },
        // 高亮行
        { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentGridKeyboardCurrRow' } },
        // 高亮列
        { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentGridKeyboardCurrColumn' } },
        // 高亮行与列
        { i18nKey: 'app.aside.menu.tableHighlightRowAndColumn', routerLink: { name: 'ComponentGridKeyboardCurrRowCol' } },
        // 切换选中状态
        { i18nKey: 'app.aside.menu.tableToggleSelectedStatus', routerLink: { name: 'ComponentGridKeyboardSelection' } },
        // Tab键最后自动新增行
        { i18nKey: 'app.aside.menu.tableTabAutoAddRow', routerLink: { name: 'ComponentGridKeyTabAppend' } },
        // 回车自动新增一行
        { i18nKey: 'app.aside.menu.tableEnterAutoAddRow', routerLink: { name: 'ComponentGridKeyboardEnterAppend' } },
        // 可编辑按键操作
        { i18nKey: 'app.aside.menu.tableEditableKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardEdit' } },
        // 设置为追加式编辑
        { i18nKey: 'app.aside.menu.tableSetAppendEdit', routerLink: { name: 'ComponentGridKeyboardEditMethod' } },
        // 树结构按键操作
        { i18nKey: 'app.aside.menu.tableTreeKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardTree' } },
        // 树结构可编辑
        { i18nKey: 'app.aside.menu.tableTreeEditable', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
        // 撤销与重做
        { i18nKey: 'app.aside.menu.tableUndoRedo', routerLink: { name: 'ComponentGridKeyboardUndoRedo' } },
        // 右键菜单-全键盘
        { i18nKey: 'app.aside.menu.tableContextMenuFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
        // 单元格选择-全键盘
        { i18nKey: 'app.aside.menu.tableCellSelectFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaKeypad%2Fkeypad' } } }
      ]
    },
    {
      // 导出数据
      i18nKey: 'app.aside.menu.tableExportData',
      children: [
        // 导出数据
        { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentGridExportBase' } },
        // 导出 TXT 格式
        { i18nKey: 'app.aside.menu.tableExportTxt', routerLink: { name: 'ComponentGridExportTxt' } },
        // 导出 XML 格式
        { i18nKey: 'app.aside.menu.tableExportXml', routerLink: { name: 'ComponentGridExportXml' } },
        // 导出 HTML 格式
        { i18nKey: 'app.aside.menu.tableExportHtml', routerLink: { name: 'ComponentGridExportHtml' } },
        // 导出 CSV 格式
        { i18nKey: 'app.aside.menu.tableExportCsv', routerLink: { name: 'ComponentGridExportCsv' } },
        // 导出 XLSX 格式
        { i18nKey: 'app.aside.menu.tableExportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/grid/export`, linkTarget: '_blank' },
        // 导出 PDF 格式
        { i18nKey: 'app.aside.menu.tableExportPdf', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/grid/export`, linkTarget: '_blank' },
        // 自定义数据
        { i18nKey: 'app.aside.menu.tableCustomData', routerLink: { name: 'ComponentGridExportData' } },
        // 格式化导出内容
        { i18nKey: 'app.aside.menu.tableFormatExportContent', routerLink: { name: 'ComponentGridExportExportMethod' } },
        // 高级导出
        { i18nKey: 'app.aside.menu.tableAdvancedExport', routerLink: { name: 'ComponentGridExportAdvanced' } },
        // 弹窗参数
        { i18nKey: 'app.aside.menu.tableModalParameters', routerLink: { name: 'ComponentGridExportModelOptions' } },
        // 功能设置
        { i18nKey: 'app.aside.menu.tableFeatureSettings', routerLink: { name: 'ComponentGridExportSettingOptions' } },
        // 排除列
        { i18nKey: 'app.aside.menu.tableExcludeColumns', routerLink: { name: 'ComponentGridExportExcludeFields' } },
        // 指定列
        { i18nKey: 'app.aside.menu.tableSpecifyColumns', routerLink: { name: 'ComponentGridExportIncludeFields' } },
        // 自定义列
        { i18nKey: 'app.aside.menu.tableCustomColumns', routerLink: { name: 'ComponentGridExportColumns' } },
        // 禁止勾选列
        { i18nKey: 'app.aside.menu.tableDisableCheckColumn', routerLink: { name: 'ComponentGridExportCheckMethod' } },
        // 单元格类型
        { i18nKey: 'app.aside.menu.tableCellType', routerLink: { name: 'ComponentGridExportCellType' } },
        // 服务端导出
        { i18nKey: 'app.aside.menu.tableRemoteExport', routerLink: { name: 'ComponentGridExportRemote' } },
        // 自定义保存类型
        { i18nKey: 'app.aside.menu.tableCustomSaveType', routerLink: { name: 'ComponentGridExportTypes' } },
        // 自定义选择数据
        { i18nKey: 'app.aside.menu.tableCustomSelectData', routerLink: { name: 'ComponentGridExportModes' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridExportTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridExportTemplateBottom' } },
            // 自定义参数设置模板
            { i18nKey: 'app.aside.menu.tableCustomParameterSettingTemplate', routerLink: { name: 'ComponentGridExportTemplateParameter' } },
            // 自定义表尾模板
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridExportTemplateFooter' } },
            // 自定义默认模板
            { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridExportTemplateDefault' } }
          ]
        }
      ]
    },
    {
      // 导入数据
      i18nKey: 'app.aside.menu.tableImportData',
      children: [
        // 导入数据
        { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentGridImportBase' } },
        // 导入 TXT 格式
        { i18nKey: 'app.aside.menu.tableImportTxt', routerLink: { name: 'ComponentGridImportTxt' } },
        // 导入 XML 格式
        { i18nKey: 'app.aside.menu.tableImportXml', routerLink: { name: 'ComponentGridImportXml' } },
        // 导入 HTML 格式
        { i18nKey: 'app.aside.menu.tableImportHtml', routerLink: { name: 'ComponentGridImportHtml' } },
        // 导入 CSV 格式
        { i18nKey: 'app.aside.menu.tableImportCsv', routerLink: { name: 'ComponentGridImportCsv' } },
        // 导入 XLSX 格式
        { i18nKey: 'app.aside.menu.tableImportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/grid/import` },
        // 高级导入
        { i18nKey: 'app.aside.menu.tableAdvancedImport', routerLink: { name: 'ComponentGridImportAdvanced' } },
        // 服务端导入
        { i18nKey: 'app.aside.menu.tableRemoteImport', routerLink: { name: 'ComponentGridImportRemote' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridImportTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridImportTemplateBottom' } },
            // 自定义表尾模板
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridImportTemplateFooter' } },
            // 自定义默认模板
            { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridImportTemplateDefault' } }
          ]
        }
      ]
    },
    {
      // 打印表格
      i18nKey: 'app.aside.menu.tablePrintTable',
      children: [
        // 打印表格
        { i18nKey: 'app.aside.menu.tablePrintTable', routerLink: { name: 'ComponentGridPrintBase' } },
        // 列宽
        { i18nKey: 'app.aside.menu.tableColumnWidth', routerLink: { name: 'ComponentGridPrintWidth' } },
        // 自定义顶部和底部
        { i18nKey: 'app.aside.menu.tableCustomTopAndBottom', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
        // 高级打印
        { i18nKey: 'app.aside.menu.tableAdvancedPrint', routerLink: { name: 'ComponentGridPrintAdvanced' } },
        // 弹窗参数
        { i18nKey: 'app.aside.menu.tableModalParameters', routerLink: { name: 'ComponentGridPrintModelOptions' } },
        // 功能设置
        { i18nKey: 'app.aside.menu.tableFeatureSettings', routerLink: { name: 'ComponentGridPrintSettingOptions' } },
        // 指定列
        { i18nKey: 'app.aside.menu.tableSpecifyColumns', routerLink: { name: 'ComponentGridPrintColumns' } },
        // 禁止勾选列
        { i18nKey: 'app.aside.menu.tableDisableCheckColumn', routerLink: { name: 'ComponentGridPrintCheckMethod' } },
        // 自定义页眉/标题
        { i18nKey: 'app.aside.menu.tableCustomHeaderTitle', routerLink: { name: 'ComponentGridPrintHeader' } },
        // 自定义页尾/页码
        { i18nKey: 'app.aside.menu.tableCustomFooterPageNumber', routerLink: { name: 'ComponentGridPrintFooter' } },
        // 设置边距
        { i18nKey: 'app.aside.menu.tableSetMargin', routerLink: { name: 'ComponentGridPrintMargin' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridPrintTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridPrintTemplateBottom' } },
            // 自定义参数设置模板
            { i18nKey: 'app.aside.menu.tableCustomParameterSettingTemplate', routerLink: { name: 'ComponentGridPrintTemplateParameter' } },
            // 自定义表尾模板
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridPrintTemplateFooter' } },
            // 自定义默认模板
            { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridPrintTemplateDefault' } }
          ]
        },
        // 实现将表格切割为多页打印
        { i18nKey: 'app.aside.menu.tablePrintMultiPage', routerLink: { name: 'ComponentGridPrintPage' } },
        // 实现打印多张表格
        { i18nKey: 'app.aside.menu.tablePrintMultipleTables', routerLink: { name: 'ComponentGridPrintMultilist' } },
        // 实现打印出货单
        { i18nKey: 'app.aside.menu.tablePrintShippingOrder', routerLink: { name: 'ComponentGridPrintOrder' } }
      ]
    },
    {
      // 虚拟滚动（超大数据量表格）
      i18nKey: 'app.aside.menu.tableVirtualScrollLargeData',
      children: [
        // 纵向虚拟滚动
        { i18nKey: 'app.aside.menu.tableVerticalVirtualScroll', routerLink: { name: 'ComponentGridScrollVertical' } },
        // 横向虚拟滚动
        { i18nKey: 'app.aside.menu.tableHorizontalVirtualScroll', routerLink: { name: 'ComponentGridScrollHorizontal' } },
        // 紧凑型单元格
        { i18nKey: 'app.aside.menu.tableCompactCell', routerLink: { name: 'ComponentGridScrollCompactV' } },
        // 可编辑的紧凑型单元格
        { i18nKey: 'app.aside.menu.tableCompactCellEditable', routerLink: { name: 'ComponentGridScrollCompactEdit' } },
        // 列头自适应换行
        { i18nKey: 'app.aside.menu.tableHeaderAutoWrap', routerLink: { name: 'ComponentGridScrollColBreak' } },
        // 纵向和横向
        { i18nKey: 'app.aside.menu.tableVerticalAndHorizontal', routerLink: { name: 'ComponentGridScrollHV' }, keywords: 'loadData,reloadData,loadColumn,reloadColumn' },
        // 排序与筛选
        { i18nKey: 'app.aside.menu.tableSortAndFilter', routerLink: { name: 'ComponentGridScrollHFull' } },
        // 函数式加载数据
        { i18nKey: 'app.aside.menu.tableFunctionalLoadData', routerLink: { name: 'ComponentGridScrollLoadData' } },
        // 冻结列 + 复杂渲染
        { i18nKey: 'app.aside.menu.tableFixedColumnComplexRender', routerLink: { name: 'ComponentGridScrollFixed' } },
        // 复杂渲染 + 大量下拉框
        { i18nKey: 'app.aside.menu.tableComplexRenderManyDropdowns', routerLink: { name: 'ComponentGridScrollSelect' } },
        // { i18nKey: 'app.aside.menu.tableScrollModeComplexRender', routerLink: { name: 'ComponentGridScrollMode' } },
        // 自适应列宽
        { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentGridScrollAutoColumnWidth' } },
        // 设置同等行高
        { i18nKey: 'app.aside.menu.tableSetEqualRowHeight', routerLink: { name: 'ComponentGridScrollRowHeight' } },
        // 自适应行高
        { i18nKey: 'app.aside.menu.tableAutoRowHeight', routerLink: { name: 'ComponentGridScrollAutoRowHeight' }, keywords: '自适应行高,自适应高度,auto-height' },
        // 自适应行高 + 纵向和横向
        { i18nKey: 'app.aside.menu.tableAutoRowHeightVH', routerLink: { name: 'ComponentGridScrollAutoRowVH' }, keywords: '自适应行高,自适应高度,auto-height' },
        // 自适应行高 + 复杂渲染
        { i18nKey: 'app.aside.menu.tableAutoRowHeightComplexRender', routerLink: { name: 'ComponentGridScrollAutoRowFixed' }, keywords: '自适应行高,自适应高度,auto-height' },
        // 设置不同行高 + 自适应行高
        { i18nKey: 'app.aside.menu.tableSetDifferentAndAutoRowHeight', routerLink: { name: 'ComponentGridScrollSetRowHeight' } },
        // 拖拽调整行顺序
        { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentGridScrollDragRow' } },
        // 拖拽调整列顺序
        { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentGridScrollDragCol' } },
        // 使用分组表头
        { i18nKey: 'app.aside.menu.tableUseGroupHeader', routerLink: { name: 'ComponentGridScrollGroup' } },
        // 使用表尾
        { i18nKey: 'app.aside.menu.tableUseFooter', routerLink: { name: 'ComponentGridScrollFooter' } },
        // 合并行与列
        { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentGridScrollMerge' } },
        // 合并与复杂功能
        { i18nKey: 'app.aside.menu.tableMergeAndComplexFeatures', routerLink: { name: 'ComponentGridScrollMergeFixed' } },
        // 大量单元格合并
        { i18nKey: 'app.aside.menu.tableMergeBig', routerLink: { name: 'ComponentGridScrollMergeBig' } },
        // 树形 + 纵向
        { i18nKey: 'app.aside.menu.tableTreeVertical', routerLink: { name: 'ComponentGridScrollTree' } },
        // 树形 + 纵向和横向
        { i18nKey: 'app.aside.menu.tableTreeVH', routerLink: { name: 'ComponentGridScrollHVTree' } },
        // 树拖拽 + 纵向
        { i18nKey: 'app.aside.menu.tableTreeDragVertical', routerLink: { name: 'ComponentGridScrollDragTree' } },
        // 展开行
        { i18nKey: 'app.aside.menu.tableExpandRow', routerLink: { name: 'ComponentGridScrollExpand' } },
        // 展开行 + 复杂子表渲染
        { i18nKey: 'app.aside.menu.tableExpandRowComplexChildRender', routerLink: { name: 'ComponentGridScrollExpandFixed' } },
        // 可编辑 + 纵向
        { i18nKey: 'app.aside.menu.tableEditableVertical', routerLink: { name: 'ComponentGridScrollEdit' } },
        // 可编辑 + 纵向和横向
        { i18nKey: 'app.aside.menu.tableEditableVH', routerLink: { name: 'ComponentGridScrollHVEdit' } },
        // 百万级数据量
        { i18nKey: 'app.aside.menu.tableMillionData', routerLink: { name: 'ComponentGridScrollBigData' }, keywords: 'big' }
      ]
    },
    {
      // 数据代理
      i18nKey: 'app.aside.menu.tableDataProxy',
      children: [
        // 查询接口
        { i18nKey: 'app.aside.menu.tableQueryApi', routerLink: { name: 'ComponentGridProxyQuery' } },
        // 分页查询接口
        { i18nKey: 'app.aside.menu.tablePaginationQueryApi', routerLink: { name: 'ComponentGridProxyPager' } },
        // 手动调用 - 操作分页
        { i18nKey: 'app.aside.menu.tableManualCallPager', routerLink: { name: 'ComponentGridProxyManualPager' } },
        // 工具栏 - 查询
        { i18nKey: 'app.aside.menu.tableToolbarQuery', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
        // 手动调用 - 查询
        { i18nKey: 'app.aside.menu.tableManualCallQuery', routerLink: { name: 'ComponentGridProxyManualQuery' } },
        // 集成排序查询
        { i18nKey: 'app.aside.menu.tableIntegratedSortQuery', routerLink: { name: 'ComponentGridProxySort' } },
        // 手动调用 - 操作排序
        { i18nKey: 'app.aside.menu.tableManualCallSort', routerLink: { name: 'ComponentGridProxyManualSort' } },
        // 集成筛选查询
        { i18nKey: 'app.aside.menu.tableIntegratedFilterQuery', routerLink: { name: 'ComponentGridProxyFilter' } },
        // 集成表单查询
        { i18nKey: 'app.aside.menu.tableIntegratedFormQuery', routerLink: { name: 'ComponentGridProxyForm' } },
        // 集成表尾查询
        { i18nKey: 'app.aside.menu.tableIntegratedFooterQuery', routerLink: { name: 'ComponentGridProxyFooter' } },
        // 集成分页序号
        { i18nKey: 'app.aside.menu.tableIntegratedPagerSeq', routerLink: { name: 'ComponentGridProxySeq' } },
        // 工具栏 - 全量数据导出
        { i18nKey: 'app.aside.menu.tableToolbarFullDataExport', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
        // 工具栏 - 服务端导出
        { i18nKey: 'app.aside.menu.tableToolbarRemoteExport', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
        // 工具栏 - 删除已选
        { i18nKey: 'app.aside.menu.tableToolbarDeleteSelected', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
        // 手动调用 - 删除已选
        { i18nKey: 'app.aside.menu.tableManualCallDeleteSelected', routerLink: { name: 'ComponentGridProxyManualDelete' } },
        // 工具栏 - 批量标记删除
        { i18nKey: 'app.aside.menu.tableToolbarBatchMarkDelete', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
        // 手动调用 - 标记删除状态
        { i18nKey: 'app.aside.menu.tableManualCallMarkDeleteStatus', routerLink: { name: 'ComponentGridProxyManualMark' } },
        // 工具栏 - 增删改查
        { i18nKey: 'app.aside.menu.tableToolbarCrud', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
        // 手动调用 - 增删改查
        { i18nKey: 'app.aside.menu.tableManualCallCrud', routerLink: { name: 'ComponentGridProxyManualSave' } }
      ]
    },
    {
      // 表格搜索
      i18nKey: 'app.aside.menu.tableTableSearch',
      children: [
        // 实现表格搜索
        { i18nKey: 'app.aside.menu.tableImplementTableSearch', routerLink: { name: 'ComponentGridSearchList' } },
        // 实现树形表格搜索
        { i18nKey: 'app.aside.menu.tableImplementTreeTableSearch', routerLink: { name: 'ComponentGridSearchTree' } },
        // 查找与替换
        { i18nKey: 'app.aside.menu.tableFindAndReplace', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaFNR' } } }
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
            // 是否显示
            { i18nKey: 'app.aside.menu.tableShowOrNot', routerLink: { name: 'ComponentGridScrollbarNativeBarVisible' } },
            // 滚动条宽度
            { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentGridScrollbarNativeBarStyle' } },
            // 滚动条位置
            { i18nKey: 'app.aside.menu.tableScrollbarPosition', routerLink: { name: 'ComponentGridScrollbarNativeBarPos' } }
          ]
        },
        {
          // 虚拟滚动条
          i18nKey: 'app.aside.menu.tableVirtualScrollbar',
          children: [
            // 使用滚动条
            { i18nKey: 'app.aside.menu.tableUseScrollbar', routerLink: { name: 'ComponentGridScrollbarUseScrollbarScrollbar' } },
            // 滚动条宽度
            { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentGridScrollbarUseScrollbarBarWidth' } },
            // 滚动条颜色
            { i18nKey: 'app.aside.menu.tableScrollbarColor', routerLink: { name: 'ComponentGridScrollbarUseScrollbarBarColor' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentGridScrollbarUseScrollbarPosition' } },
            // 自动隐藏
            { i18nKey: 'app.aside.menu.tableAutoHide', routerLink: { name: 'ComponentGridScrollbarUseScrollbarAutoHide' } },
            // 悬浮滚动条
            { i18nKey: 'app.aside.menu.tableFloatingScrollbar', routerLink: { name: 'ComponentGridScrollbarUseScrollbarFluentOverlay' } }
          ]
        }
      ]
    },
    {
      // 事件监听
      i18nKey: 'app.aside.menu.tableEventListen',
      children: [
        // 准备就绪
        { i18nKey: 'app.aside.menu.tableReady', routerLink: { name: 'ComponentGridEventsReady' } },
        // 数据加载事件
        { i18nKey: 'app.aside.menu.tableDataLoadEvent', routerLink: { name: 'ComponentGridEventsRendered' } },
        // 点击/双击事件
        { i18nKey: 'app.aside.menu.tableClickDblclickEvent', routerLink: { name: 'ComponentGridEventsClick' } },
        // 滚动事件
        { i18nKey: 'app.aside.menu.tableScrollEvent', routerLink: { name: 'ComponentGridEventsScroll' } }
      ]
    },
    {
      // 无限加载
      i18nKey: 'app.aside.menu.tableInfiniteLoading',
      children: [
        // 实现加载行
        { i18nKey: 'app.aside.menu.tableLoadRows', routerLink: { name: 'ComponentGridLoadMoreVertical' } },
        // 实现加载列
        { i18nKey: 'app.aside.menu.tableLoadColumns', routerLink: { name: 'ComponentGridLoadMoreHorizontal' } },
        // 实现同时加载行与列
        { i18nKey: 'app.aside.menu.tableLoadRowsAndColumns', routerLink: { name: 'ComponentGridLoadMoreVH' } },
        // 指定阈值加载行
        { i18nKey: 'app.aside.menu.tableLoadRowsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryY' } },
        // 指定阈值加载列
        { i18nKey: 'app.aside.menu.tableLoadColumnsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryX' } },
        // 指定阈值同时加载行与列
        { i18nKey: 'app.aside.menu.tableLoadRowsAndColumnsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryXY' } }
      ]
    },
    {
      // 功能示例
      i18nKey: 'app.aside.menu.tableFeatureExamples',
      children: [
        // 自定义序号字段
        { i18nKey: 'app.aside.menu.tableCustomSeqField', routerLink: { name: 'ComponentGridOtherSeqField' } },
        // 紧凑型单元格
        { i18nKey: 'app.aside.menu.tableCompactCell', routerLink: { name: 'ComponentGridOtherCompactCell' } },
        // 单元格性能优化
        { i18nKey: 'app.aside.menu.tableCellPerformanceOptimization', routerLink: { name: 'ComponentGridOtherOptimization' } },
        // 操作列的显示隐藏
        { i18nKey: 'app.aside.menu.tableActionColumnShowHide', routerLink: { name: 'ComponentGridOtherVisibleColumn' } },
        // 实现折叠列
        { i18nKey: 'app.aside.menu.tableCollapsibleColumn', routerLink: { name: 'ComponentGridOtherCollapseColumn' } },
        // 在页签中使用
        { i18nKey: 'app.aside.menu.tableUseInTabs', routerLink: { name: 'ComponentGridOtherTabs' } },
        // 定位行、定位列的使用
        { i18nKey: 'app.aside.menu.tableScrollToRowColumnUsage', routerLink: { name: 'ComponentGridOtherScrollTo' } },
        // 实现数据自动滚动
        { i18nKey: 'app.aside.menu.tableAutoScrollData', routerLink: { name: 'ComponentGridOtherAutoScroll' } },
        // 实现数据定时更新
        { i18nKey: 'app.aside.menu.tableTimedDataUpdate', routerLink: { name: 'ComponentGridOtherAutoIncrement' } },
        // 实现反转列与行
        { i18nKey: 'app.aside.menu.tableReverseColumnsAndRows', routerLink: { name: 'ComponentGridOtherReverse' } },
        // 实现上传文件列表
        { i18nKey: 'app.aside.menu.tableUploadFileList', routerLink: { name: 'ComponentGridOtherFileList' } },
        // 实现多行文本溢出省略
        { i18nKey: 'app.aside.menu.tableMultilineTextEllipsis', routerLink: { name: 'ComponentGridOtherLineEllipsis' } },
        // 实现最小行高同时自适应行高
        { i18nKey: 'app.aside.menu.tableMinAndAutoRowHeight', routerLink: { name: 'ComponentGridOtherMinAutoRowHeight' } },
        // 实现动态生成月份表头
        { i18nKey: 'app.aside.menu.tableDynamicMonthHeader', routerLink: { name: 'ComponentGridOtherYearMonth' } },
        // 实现分页复选框选择
        { i18nKey: 'app.aside.menu.tablePaginationCheckboxSelection', routerLink: { name: 'ComponentGridOtherPageCheckbox' } },
        // 实现记账凭证
        { i18nKey: 'app.aside.menu.tableBookkeepingVoucher', routerLink: { name: 'ComponentGridOtherBookkeepingVoucher' } },
        // 单元格可拖拽调整宽高
        { i18nKey: 'app.aside.menu.tableCellDragResizeWidthHeight', routerLink: { name: 'ComponentGridOtherAllRowColDrag' } },
        // 实现粘贴上传
        { i18nKey: 'app.aside.menu.tablePasteUpload', routerLink: { name: 'ComponentGridOtherPasteToUpload' } },
        // 实现左边树和右边表格
        { i18nKey: 'app.aside.menu.tableLeftTreeRightTable', routerLink: { name: 'ComponentGridOtherLeftRight' } },
        // 实现表格穿梭框选择
        { i18nKey: 'app.aside.menu.tableTableTransferSelection', routerLink: { name: 'ComponentGridOtherTableTransfer' } },
        // 树形实现子节点自定义表头
        { i18nKey: 'app.aside.menu.tableTreeChildCustomHeader', routerLink: { name: 'ComponentGridOtherTreeSubCols' } },
        // 实现产品对比表
        { i18nKey: 'app.aside.menu.tableProductComparisonTable', routerLink: { name: 'ComponentGridOtherCompareTable' } },
        // 实现复杂的分组列和数据合并大类
        { i18nKey: 'app.aside.menu.tableComplexGroupColumnsAndMergeCategory', routerLink: { name: 'ComponentGridOtherRowColMerge' } }
      ]
    }
  ]
}
