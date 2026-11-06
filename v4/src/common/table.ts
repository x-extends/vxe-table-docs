import { NavVO, otherUrl } from './nav'

export const tableNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.tableTitle',
  icon: 'vxe-icon-table',
  children: [
    {
      i18nKey: 'app.aside.menu.tableTableTitle',
      icon: 'vxe-icon-table',
      children: [
        { title: 'Table API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } }, keywords: 'vxe-table' },
        { title: 'Colgroup API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'colgroup' } } },
        { title: 'Column API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'column' } } },
        { title: 'Toolbar API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'toolbar' } } },
        {
          i18nKey: 'app.aside.menu.tableBasicFeatures',
          children: [
            { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentTableBaseBasic' } },
            { i18nKey: 'app.aside.menu.tableSize', routerLink: { name: 'ComponentTableBaseSize' }, keywords: 'size' },
            { i18nKey: 'app.aside.menu.tableRowKey', routerLink: { name: 'ComponentTableBaseRowKey' }, keywords: 'key-field' },
            { i18nKey: 'app.aside.menu.tableDataType', routerLink: { name: 'ComponentTableBaseData' }, keywords: 'data' },
            { i18nKey: 'app.aside.menu.tableFooterData', routerLink: { name: 'ComponentTableBaseFooter' }, keywords: 'show-footer,footer-data' },
            { i18nKey: 'app.aside.menu.tableEmptyTip', routerLink: { name: 'ComponentTableBaseEmpty' }, keywords: 'empty-text' },
            { i18nKey: 'app.aside.menu.tableBorder', routerLink: { name: 'ComponentTableBaseBorder' }, keywords: 'border' },
            { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'ComponentTableBaseRound' }, keywords: 'round' },
            // { i18nKey: 'app.aside.menu.tablePadding', routerLink: { name: 'ComponentTableBasePadding' } },
            { i18nKey: 'app.aside.menu.tableAlign', routerLink: { name: 'ComponentTableBaseAlign' }, keywords: '对齐,align' },
            { i18nKey: 'app.aside.menu.tableHideColumn', routerLink: { name: 'ComponentTableBaseVisible' }, keywords: '显示,隐藏,visible' },
            { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentTableBaseWidth' }, keywords: '宽度,列宽' },
            { i18nKey: 'app.aside.menu.tableSetMinColumnWidth', routerLink: { name: 'ComponentTableBaseMinWidth' }, keywords: '最小宽度,最小列宽' },
            { i18nKey: 'app.aside.menu.tableSetMaxColumnWidth', routerLink: { name: 'ComponentTableBaseMaxWidth' }, keywords: '最大宽度,最大列宽' },
            { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentTableBaseAutoWidth' }, keywords: '宽度,自适应列宽,width,auto' },
            { i18nKey: 'app.aside.menu.tableAutoCellHeight', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            { i18nKey: 'app.aside.menu.tableOverflowHidden', routerLink: { name: 'ComponentTableBaseOverflow' }, keywords: 'show-overflow,show-header-overflow,show-footer-overflow' },
            { i18nKey: 'app.aside.menu.tableTextTip', routerLink: { name: 'ComponentTableBaseTooltip' }, keywords: 'tooltip' },
            // { i18nKey: 'app.aside.menu.tableScrollStyle', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentTableBaseStripe' }, keywords: 'stripe' },
            { i18nKey: 'app.aside.menu.tableCellStyle', routerLink: { name: 'ComponentTableBaseStyle' }, keywords: 'cell-class-name,row-class-name' },
            { i18nKey: 'app.aside.menu.tableDynamicStyle', routerLink: { name: 'ComponentTableBaseDynamicStyle' }, keywords: 'cell-style,row-style' },
            { i18nKey: 'app.aside.menu.tableHideHeader', routerLink: { name: 'ComponentTableBaseHeader' }, keywords: 'show-header' },
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentTableBaseCurrentColumn' }, keywords: 'isCurrent' },
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentTableBaseCurrentRow' }, keywords: 'isCurrent' },
            { i18nKey: 'app.aside.menu.tableDragResizeColumnWidth', routerLink: { name: 'ComponentTableBaseHeaderResizable' }, keywords: 'resizable' },
            { i18nKey: 'app.aside.menu.tableMinHeight', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' }, keywords: 'min-height' },
            { i18nKey: 'app.aside.menu.tableHeight', routerLink: { name: 'ComponentTableBaseHeight' }, keywords: 'height' },
            { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentTableBaseMaxHeight' }, keywords: 'max-height' },
            { i18nKey: 'app.aside.menu.tableResponsiveHeight', routerLink: { name: 'ComponentTableBaseAutoHeight' }, keywords: '自适应高度,sync-resize,auto-resize' },
            { i18nKey: 'app.aside.menu.tableSetColumnHeight', routerLink: { name: 'ComponentTableBaseColumnHeight' }, keywords: 'height' },
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableBaseRowHeight' }, keywords: 'height' },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableBaseFixed' }, keywords: 'fixed' },
            { i18nKey: 'app.aside.menu.tableFixedHeaderAndColumn', routerLink: { name: 'ComponentTableBaseFixedFull' }, keywords: 'fixed,height' },
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentTableBaseGroup' }, keywords: 'colgroup' },
            { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentTableBaseSort' }, keywords: 'sortable' },
            { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentTableBaseFilter' }, keywords: 'filters' },
            { i18nKey: 'app.aside.menu.tableLoading', routerLink: { name: 'ComponentTableBaseLoading' }, keywords: 'loading' },
            { i18nKey: 'app.aside.menu.tableFormatContent', routerLink: { name: 'ComponentTableBaseFormat' }, keywords: 'formatter' },
            { i18nKey: 'app.aside.menu.tableSeq', routerLink: { name: 'ComponentTableBaseSeq' }, keywords: 'seq' },
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentTableBaseRadio' }, keywords: 'radio' },
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentTableBaseSelection' }, keywords: 'checkbox' },
            { i18nKey: 'app.aside.menu.tableTitlePrefixIcon', routerLink: { name: 'ComponentTableBaseTitlePrefix' }, keywords: 'title-prefix' },
            { i18nKey: 'app.aside.menu.tableTitleSuffixIcon', routerLink: { name: 'ComponentTableBaseTitleSuffix' }, keywords: 'title-suffix' },
            { i18nKey: 'app.aside.menu.tableHtmlType', routerLink: { name: 'ComponentTableBaseHtml' }, keywords: 'html' },
            { i18nKey: 'app.aside.menu.tableFullExample', routerLink: { name: 'ComponentTableBaseFull' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellMerge',
          children: [
            { i18nKey: 'app.aside.menu.tableMergeRows', routerLink: { name: 'ComponentTableMergeRow' } },
            { i18nKey: 'app.aside.menu.tableMergeColumns', routerLink: { name: 'ComponentTableMergeColumn' } },
            { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentTableMergeAll' } },
            { i18nKey: 'app.aside.menu.tableMergeFooter', routerLink: { name: 'ComponentTableMergeFooter' } },
            { i18nKey: 'app.aside.menu.tableMergeHorizontalTree', routerLink: { name: 'ComponentTableMergeHorizontal' } },
            { i18nKey: 'app.aside.menu.tableShortcutMerge', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaMerge' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFooterData',
          children: [
            { i18nKey: 'app.aside.menu.tableEnableFooter', routerLink: { name: 'ComponentTableFooterShowFooter' } },
            { i18nKey: 'app.aside.menu.tableStandardStructure', routerLink: { name: 'ComponentTableFooterFooterData' } },
            { i18nKey: 'app.aside.menu.tableCustomDataMethod', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
            { i18nKey: 'app.aside.menu.tableFormatFooterContent', routerLink: { name: 'ComponentTableFooterFooterFormat' } },
            { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentTableFooterTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRadio',
          children: [
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentTableRadioHighlight' } },
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentTableRadioCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentTableRadioVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentTableRadioTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCheckbox',
          children: [
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentTableCheckboxHighlight' } },
            { i18nKey: 'app.aside.menu.tableBindField', routerLink: { name: 'ComponentTableCheckboxField' } },
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentTableCheckboxCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentTableCheckboxVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableMouseDragRangeSelect', routerLink: { name: 'ComponentTableCheckboxRange' } },
            { i18nKey: 'app.aside.menu.tableCellSelectCheckbox', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaCheckbox' } } },
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentTableCheckboxTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableSort',
          children: [
            { i18nKey: 'app.aside.menu.tableDataSort', routerLink: { name: 'ComponentTableSortBase' } },
            { i18nKey: 'app.aside.menu.tableMultiFieldSort', routerLink: { name: 'ComponentTableSortMultiple' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableSortTrigger' } },
            { i18nKey: 'app.aside.menu.tableCustomOrders', routerLink: { name: 'ComponentTableSortOrders' } },
            { i18nKey: 'app.aside.menu.tableButtonControl', routerLink: { name: 'ComponentTableSortAllowBtn' } },
            { i18nKey: 'app.aside.menu.tableSetDefaultSort', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            { i18nKey: 'app.aside.menu.tableSetValueType', routerLink: { name: 'ComponentTableSortSortType' } },
            { i18nKey: 'app.aside.menu.tableCustomSortMethod', routerLink: { name: 'ComponentTableSortSortMethod' } },
            { i18nKey: 'app.aside.menu.tableRemoteSort', routerLink: { name: 'ComponentTableSortRemote' } },
            { i18nKey: 'app.aside.menu.tableManualSort', routerLink: { name: 'ComponentTableSortSetSort' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableColumnWidthResize',
          children: [
            { i18nKey: 'app.aside.menu.tableDragMode', routerLink: { name: 'ComponentTableColResizableMode' } },
            { i18nKey: 'app.aside.menu.tableGroupColumnHeader', routerLink: { name: 'ComponentTableColResizableGroup' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableColResizableFixed' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableColumnDrag',
          children: [
            { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentTableColDragSort' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableColDragFixed' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableColDragIcon' } },
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableColDragShowGuidesStatus' } },
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentTableColDragGroup' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableColDragTrigger' } },
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentTableColDragEvents' } },
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentTableColDragDisabledMethod' } },
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentTableColDragVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentTableColDragDragMethod' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowHeightResize',
          children: [
            { i18nKey: 'app.aside.menu.tableRowHeightDrag', routerLink: { name: 'ComponentTableRowResizableBase' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableRowResizableFixed' } },
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableRowResizableTree' } },
            { i18nKey: 'app.aside.menu.tableDragButtonPosition', routerLink: { name: 'ComponentTableRowResizableRowResize' } },
            { i18nKey: 'app.aside.menu.tableManualRowHeight', routerLink: { name: 'ComponentTableRowResizableManual' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowDrag',
          children: [
            { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentTableRowDragSort' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableRowDragFixed' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableRowDragIcon' } },
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableRowDragShowGuidesStatus' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableRowDragTrigger' } },
            {
              i18nKey: 'app.aside.menu.tableTree',
              children: [
                { i18nKey: 'app.aside.menu.tableTreeDrag', routerLink: { name: 'ComponentTableRowDragTreeBase' } },
                { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentTableRowDragTreeCossDrag' } },
                { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentTableRowDragTreeSelfToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentTableRowDragTreeToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentTableRowDragTreeShowGuidesStatus' } },
                { i18nKey: 'app.aside.menu.tableDragSecondaryConfirm', routerLink: { name: 'ComponentTableRowDragTreeDragMethod' } },
                { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableRowDragTreeLazy' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentTableRowDragEvents' } },
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentTableRowDragDisabledMethod' } },
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentTableRowDragVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentTableRowDragDragMethod' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFilter',
          children: [
            { i18nKey: 'app.aside.menu.tableDataFilter', routerLink: { name: 'ComponentTableFilterBase' } },
            { i18nKey: 'app.aside.menu.tableRemoteFilter', routerLink: { name: 'ComponentTableFilterRemote' } },
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableFilterTree' } },
            { i18nKey: 'app.aside.menu.tableManualPopup', routerLink: { name: 'ComponentTableFilterManual' } },
            { i18nKey: 'app.aside.menu.tableManualFilter', routerLink: { name: 'ComponentTableFilterSetFilter' } },
            {
              i18nKey: 'app.aside.menu.tableFloatingFilter',
              children: [
                { title: 'VxeInput', routerLink: { name: 'ComponentTableFilterFloatingVxeInput' } },
                { title: 'VxeNumberInput', routerLink: { name: 'ComponentTableFilterFloatingVxeNumberInput' } },
                { title: 'VxeSelect', routerLink: { name: 'ComponentTableFilterFloatingVxeSelect' } },
                { title: 'VxeDatePicker', routerLink: { name: 'ComponentTableFilterFloatingVxeDatePicker' } },
                { i18nKey: 'app.aside.menu.tableFullFilter', routerLink: { name: 'ComponentTableFilterFloatingFull' } },
                { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentTableFilterFloatingTemplate' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableInputFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Ftable%2Fcomplex%2FstringFilter' } } },
            { i18nKey: 'app.aside.menu.tableCombinationFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Ftable%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowGroup',
          children: [
            { i18nKey: 'app.aside.menu.tableRowGroup', routerLink: { name: 'ComponentTableRowGroupBasic' } },
            { i18nKey: 'app.aside.menu.tableGroupByMultipleColumns', routerLink: { name: 'ComponentTableRowGroupGroupFields' } },
            { i18nKey: 'app.aside.menu.tableShowGroupStats', routerLink: { name: 'ComponentTableRowGroupTotal' } },
            { i18nKey: 'app.aside.menu.tableShowMultiColumnTotal', routerLink: { name: 'ComponentTableRowGroupCount' } },
            { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentTableRowGroupSpanMethod' } },
            { i18nKey: 'app.aside.menu.tableManualOperation', routerLink: { name: 'ComponentTableRowGroupHandleSet' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomGroupColumnContentTemplate', routerLink: { name: 'ComponentTableRowGroupTemplateGroupContent' } }
                // { i18nKey: 'app.aside.menu.tableCustomGroupColumnAggregateTemplate', routerLink: { name: 'ComponentTableRowGroupTemplateGroupValues' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableGroupSummary', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Faggregation%2FrowGroupSummary' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableExpandRow',
          children: [
            { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentTableExpandBasic' } },
            { i18nKey: 'app.aside.menu.tableExpandContainerPadding', routerLink: { name: 'ComponentTableExpandPadding' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableExpandIcon' } },
            { i18nKey: 'app.aside.menu.tableExpandContainerHeight', routerLink: { name: 'ComponentTableExpandHeight' } },
            { i18nKey: 'app.aside.menu.tableUseFixedColumn', routerLink: { name: 'ComponentTableExpandFixed' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentTableExpandTrigger' } },
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableExpandLazy' } },
            { i18nKey: 'app.aside.menu.tableExpandButtonVisible', routerLink: { name: 'ComponentTableExpandVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableExpandToggleControl', routerLink: { name: 'ComponentTableExpandToggleMethod' } },
            { i18nKey: 'app.aside.menu.tableExpandChildTable', routerLink: { name: 'ComponentTableExpandChildTable' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableContextMenu',
          children: [
            { i18nKey: 'app.aside.menu.tableHeaderMenu', routerLink: { name: 'ComponentTableMenuHeader' } },
            { i18nKey: 'app.aside.menu.tableCellMenu', routerLink: { name: 'ComponentTableMenuBody' } },
            { i18nKey: 'app.aside.menu.tableFooterMenu', routerLink: { name: 'ComponentTableMenuFooter' } },
            { i18nKey: 'app.aside.menu.tableCustomPrefix', routerLink: { name: 'ComponentTableMenuPrefixConfig' } },
            { i18nKey: 'app.aside.menu.tableCustomSuffix', routerLink: { name: 'ComponentTableMenuSuffixConfig' } },
            { i18nKey: 'app.aside.menu.tableFullContextMenu', routerLink: { name: 'ComponentTableMenuFull' } },
            { i18nKey: 'app.aside.menu.tableSyncPermissionControl', routerLink: { name: 'ComponentTableMenuPrivilege' } },
            { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full` }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableQueryForm',
          children: [
            { i18nKey: 'app.aside.menu.tableIntegratedForm', routerLink: { name: 'ComponentTableFormFormData' } },
            { i18nKey: 'app.aside.menu.tableCollapsibleQueryForm', routerLink: { name: 'ComponentTableFormCollapse' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableToolbar',
          children: [
            { i18nKey: 'app.aside.menu.tableLeftButtons', routerLink: { name: 'ComponentTableToolbarButtons' } },
            { i18nKey: 'app.aside.menu.tableRightButtons', routerLink: { name: 'ComponentTableToolbarTools' } },
            { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentTableToolbarCustom' } },
            { i18nKey: 'app.aside.menu.tableRefreshFeature', routerLink: { name: 'ComponentTableToolbarRefresh' } },
            { i18nKey: 'app.aside.menu.tablePrintFeature', routerLink: { name: 'ComponentTableToolbarPrint' } },
            { i18nKey: 'app.aside.menu.tableImportFeature', routerLink: { name: 'ComponentTableToolbarImport' } },
            { i18nKey: 'app.aside.menu.tableExportFeature', routerLink: { name: 'ComponentTableToolbarExport' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtons' } },
                { i18nKey: 'app.aside.menu.tableCustomLeftPrefixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtonPrefix' } },
                { i18nKey: 'app.aside.menu.tableCustomLeftSuffixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateButtonSuffix' } },
                { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentTableToolbarTemplateTools' } },
                { i18nKey: 'app.aside.menu.tableCustomRightPrefixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateToolPrefix' } },
                { i18nKey: 'app.aside.menu.tableCustomRightSuffixTemplate', routerLink: { name: 'ComponentTableToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tablePersonalization',
          children: [
            { i18nKey: 'app.aside.menu.tableLinkToolbar', routerLink: { name: 'ComponentTableCustomToolbar' } },
            { i18nKey: 'app.aside.menu.tableWindowMode', routerLink: { name: 'ComponentTableCustomModal' } },
            { i18nKey: 'app.aside.menu.tableDrawerMode', routerLink: { name: 'ComponentTableCustomDrawer' } },
            { i18nKey: 'app.aside.menu.tableDefaultHiddenColumns', routerLink: { name: 'ComponentTableCustomDefHide' } },
            { i18nKey: 'app.aside.menu.tableDisableOperations', routerLink: { name: 'ComponentTableCustomCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHideActionColumn', routerLink: { name: 'ComponentTableCustomVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnVisibility', routerLink: { name: 'ComponentTableCustomVisible' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnFixed', routerLink: { name: 'ComponentTableCustomFixed' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnWidth', routerLink: { name: 'ComponentTableCustomResizable' } },
            { i18nKey: 'app.aside.menu.tableAllowDragColumnOrder', routerLink: { name: 'ComponentTableCustomSort' } },
            { i18nKey: 'app.aside.menu.tableAllowDragGroup', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FallowGroup' } } },
            { i18nKey: 'app.aside.menu.tableAllowDragAggregateFunction', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FaggDragValues' } } },
            { i18nKey: 'app.aside.menu.tableFixedColumnMaxLimit', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            { i18nKey: 'app.aside.menu.tableCustomTriggerButton', routerLink: { name: 'ComponentTableCustomCustomBtn' } },
            { i18nKey: 'app.aside.menu.tableCustomPopupPosition', routerLink: { name: 'ComponentTableCustomPlacement' } },
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentTableCustomEvents' } },
            { i18nKey: 'app.aside.menu.tableRealtimeUpdate', routerLink: { name: 'ComponentTableCustomImmediate' } },
            { i18nKey: 'app.aside.menu.tableLocalSaveColumnSettings', routerLink: { name: 'ComponentTableCustomStorage' } },
            { i18nKey: 'app.aside.menu.tableLocalSaveAggregateColumnSettings', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2Fstorage' } } },
            { i18nKey: 'app.aside.menu.tableCustomRemoteSave', routerLink: { name: 'ComponentTableCustomRemote' } },
            { i18nKey: 'app.aside.menu.tableRemoteSaveAndRestore', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            { i18nKey: 'app.aside.menu.tableImplementShowHideColumn', routerLink: { name: 'ComponentTableCustomManual' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableDataPagination',
          children: [
            { i18nKey: 'app.aside.menu.tableFrontendPagination', routerLink: { name: 'ComponentTablePagerMockPage' } },
            { i18nKey: 'app.aside.menu.tableCustomLayout', routerLink: { name: 'ComponentTablePagerLayouts' } },
            { i18nKey: 'app.aside.menu.tableCustomSeq', routerLink: { name: 'ComponentTablePagerStart' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableTree',
          children: [
            { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentTableTreeBasic' } },
            { i18nKey: 'app.aside.menu.tableFlatStructure', routerLink: { name: 'ComponentTableTreeLeveling' } },
            { i18nKey: 'app.aside.menu.tableHierarchyStructure', routerLink: { name: 'ComponentTableTreeHierarchy' } },
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentTableTreeStripe' } },
            { i18nKey: 'app.aside.menu.tableSeqMode', routerLink: { name: 'ComponentTableTreeSeqMode' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentTableTreeIcon' } },
            { i18nKey: 'app.aside.menu.tableShowConnectionLine', routerLink: { name: 'ComponentTableTreeLine' } },
            { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            { i18nKey: 'app.aside.menu.tableAccordionEffect', routerLink: { name: 'ComponentTableTreeAccordion' } },
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentTableTreeCurrentRow' } },
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentTableTreeCurrentColumn' } },
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentTableTreeRadio' } },
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            { i18nKey: 'app.aside.menu.tableTreeSort', routerLink: { name: 'ComponentTableTreeSort' } },
            { i18nKey: 'app.aside.menu.tableTreeFilter', routerLink: { name: 'ComponentTableTreeFilter' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentTableTreeFixed' } },
            { i18nKey: 'app.aside.menu.tableContextMenu', routerLink: { name: 'ComponentTableTreeMenu' } },
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentTableTreeLazy' } },
            { i18nKey: 'app.aside.menu.tableLazyLoadEditable', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentTableTreeExpand' } },
            { i18nKey: 'app.aside.menu.tableUseExpandRowLazyLoad', routerLink: { name: 'ComponentTableTreeExpandLazy' } },
            // { i18nKey: 'app.aside.menu.tableImplementDataGrouping', routerLink: { name: 'ComponentTableTreeGroup' } },
            { i18nKey: 'app.aside.menu.tableCellSelection', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Ftree%2FareaTree' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellRenderConfig',
          children: [
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentTableCellRenderVxeCheckbox' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentTableCellRenderVxeImage' } },
            { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentTableCellRenderVxeImageGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeTextEllipsis', routerLink: { name: 'ComponentTableCellRenderVxeTextEllipsis' } },
            { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentTableCellRenderVxeRate' } },
            { i18nKey: 'app.aside.menu.tableVxeSlider', routerLink: { name: 'ComponentTableCellRenderVxeSlider' } },
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            { i18nKey: 'app.aside.menu.tableFormatNumberInput', routerLink: { name: 'ComponentTableCellRenderFormatNumberInput' } },
            { i18nKey: 'app.aside.menu.tableFormatSelect', routerLink: { name: 'ComponentTableCellRenderFormatOption' } },
            { i18nKey: 'app.aside.menu.tableFormatTreeSelect', routerLink: { name: 'ComponentTableCellRenderFormatTree' } },
            { i18nKey: 'app.aside.menu.tableImplementCustomRenderer', routerLink: { name: 'GlobalRendererTableDefaultReApi' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellRenderSlot',
          children: [
            { i18nKey: 'app.aside.menu.tableVxeTag', routerLink: { name: 'ComponentTableCellTemplateVxeTag' } },
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentTableCellTemplateVxeSwitch' } },
            { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentTableCellTemplateVxeRadioGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentTableCellTemplateVxeCheckbox' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentTableCellTemplateVxeCheckboxGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentTableCellTemplateVxeButton' } },
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentTableCellTemplateVxeImage' } },
            { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentTableCellTemplateVxeImageGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeTextEllipsis', routerLink: { name: 'ComponentTableCellTemplateVxeTextEllipsis' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableCellTemplateVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeTextarea', routerLink: { name: 'ComponentTableCellTemplateVxeTextarea' } },
            { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentTableCellTemplateVxeRate' } },
            { i18nKey: 'app.aside.menu.tableVxeSlider', routerLink: { name: 'ComponentTableCellTemplateVxeSlider' } },
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentTableCellTemplateVxeUpload' } },
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentTableCellTemplateVxeModal' } },
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentTableCellTemplateVxeDrawer' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableAllCellsEditable', routerLink: { name: 'ComponentTableCellTemplateAllEdit' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditable',
          children: [
            { i18nKey: 'app.aside.menu.tableManualEdit', routerLink: { name: 'ComponentTableEditManual' } },
            { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentTableEditClick' } },
            { i18nKey: 'app.aside.menu.tableDblclickEdit', routerLink: { name: 'ComponentTableEditDblclick' } },
            { i18nKey: 'app.aside.menu.tableEditAndFocus', routerLink: { name: 'ComponentTableEditAutoFocus' } },
            { i18nKey: 'app.aside.menu.tableDisableAutoClearEditStatus', routerLink: { name: 'ComponentTableEditAutoClear' } },
            { i18nKey: 'app.aside.menu.tableEditStatus', routerLink: { name: 'ComponentTableEditStatus' } },
            { i18nKey: 'app.aside.menu.tableEmptyPlaceholder', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            // { i18nKey: 'app.aside.menu.tableUpdateData', routerLink: { name: 'ComponentTableEditUpdate' } },
            // { i18nKey: 'app.aside.menu.tableInsertData', routerLink: { name: 'ComponentTableEditInsert' } },
            // { i18nKey: 'app.aside.menu.tableRemoveData', routerLink: { name: 'ComponentTableEditRemove' } },
            // { i18nKey: 'app.aside.menu.tableMarkAsDeleted', routerLink: { name: 'ComponentTableEditPending' } },
            // { i18nKey: 'app.aside.menu.tableRestoreData', routerLink: { name: 'ComponentTableEditRevert' } },
            {
              i18nKey: 'app.aside.menu.tableTempDataBuiltinCrud',
              children: [
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentTableEditHandleTempInsert' } },
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentTableEditHandleTempRemove' } },
                { i18nKey: 'app.aside.menu.tableMark', routerLink: { name: 'ComponentTableEditHandleTempPending' } },
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentTableEditHandleTempUpdate' } },
                { i18nKey: 'app.aside.menu.tableRestore', routerLink: { name: 'ComponentTableEditHandleTempRevert' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableSyncDataSourceCustomCrud',
              children: [
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentTableEditHandleOriginalInsert' } },
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentTableEditHandleOriginalRemove' } },
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentTableEditHandleOriginalUpdate' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableDisableCellEdit', routerLink: { name: 'ComponentTableEditCellDisable' } },
            { i18nKey: 'app.aside.menu.tableDisableRowEdit', routerLink: { name: 'ComponentTableEditRowDisable' } },
            { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'ComponentTableEditCellValid' } },
            { i18nKey: 'app.aside.menu.tableRowValidation', routerLink: { name: 'ComponentTableEditRowValid' } },
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentTableEditTree' } },
            { i18nKey: 'app.aside.menu.tableUseMergeRowsAndColumns', routerLink: { name: 'ComponentTableEditSpan' } },
            { i18nKey: 'app.aside.menu.tableUseContextMenu', routerLink: { name: 'ComponentTableEditMenu' } },
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableEditRowHeight' } },
            { i18nKey: 'app.aside.menu.tableNegativeAutoRed', routerLink: { name: 'ComponentTableEditShowNegativeStatus' } },
            { i18nKey: 'app.aside.menu.tableImplementAttachmentList', routerLink: { name: 'ComponentTableEditFileList' } },
            { i18nKey: 'app.aside.menu.tableImplementModalEditForm', routerLink: { name: 'ComponentTableEditModalForm' } },
            { i18nKey: 'app.aside.menu.tableImplementModalSelectData', routerLink: { name: 'ComponentTableEditModalSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementDrawerEditForm', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            { i18nKey: 'app.aside.menu.tableImplementDrawerSelectData', routerLink: { name: 'ComponentTableEditDrawerSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementRowIndependentDropdown', routerLink: { name: 'ComponentTableEditSelectRowOption' } },
            { i18nKey: 'app.aside.menu.tableImplementRowUniqueDropdown', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementMultilineTextEdit', routerLink: { name: 'ComponentTableEditMultiLineText' } },
            { i18nKey: 'app.aside.menu.tableImplementLinkageDisabled', routerLink: { name: 'ComponentTableEditLinkageDisabled' } },
            { i18nKey: 'app.aside.menu.tableImplementMultiColumnCascadingSelect', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementRowFieldTotal', routerLink: { name: 'ComponentTableEditRowImmediately' } },
            { i18nKey: 'app.aside.menu.tableImplementFooterRealtimeTotal', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            { i18nKey: 'app.aside.menu.tableImplementCellRealtimeSave', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
            { i18nKey: 'app.aside.menu.tableCustomImplementEdit', routerLink: { name: 'ComponentTableEditCustomMultiRow' } },
            { i18nKey: 'app.aside.menu.tableCopyAndPaste', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaClip' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Fclip%2Fbase' } } },
            { i18nKey: 'app.aside.menu.tableRenderChart', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaBasicsEcharts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fecharts%2FareaBasicsEcharts' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditableRenderConfig',
          children: [
            { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentTableEditRenderInput' } },
            { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentTableEditRenderVxeIconPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeColorPicker', routerLink: { name: 'ComponentTableEditRenderVxeColorPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentTableEditRenderVxeDateRangePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentTableEditRenderVxeCascader' } },
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentTableEditRenderVxeTableSelect' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentTableEditRenderEvents' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditableRenderSlot',
          children: [
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentTableEditTemplateVxeButton' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentTableEditTemplateVxeIconPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentTableEditTemplateVxeDateRangePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentTableEditTemplateVxeTreeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentTableEditTemplateVxeCascader' } },
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentTableEditTemplateVxeTableSelect' } },
            { i18nKey: 'app.aside.menu.tableVxePulldown', routerLink: { name: 'ComponentTableEditTemplateVxePulldown' } },
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentTableEditTemplateVxeModal' } },
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentTableEditTemplateVxeDrawer' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableDataValidation',
          children: [
            { i18nKey: 'app.aside.menu.tableValidationRulesConfig', routerLink: { name: 'ComponentTableValidateRules' } },
            { i18nKey: 'app.aside.menu.tableStringValidationRule', routerLink: { name: 'ComponentTableValidateString' } },
            { i18nKey: 'app.aside.menu.tableNumberValidationRule', routerLink: { name: 'ComponentTableValidateNumber' } },
            { i18nKey: 'app.aside.menu.tableRegexpValidationRule', routerLink: { name: 'ComponentTableValidateRegexp' } },
            { i18nKey: 'app.aside.menu.tableArrayValidationRule', routerLink: { name: 'ComponentTableValidateArray' } },
            { i18nKey: 'app.aside.menu.tableCustomValidationRule', routerLink: { name: 'ComponentTableValidateCustom' } },
            { i18nKey: 'app.aside.menu.tableValidationMode', routerLink: { name: 'ComponentTableValidateMode' } },
            { i18nKey: 'app.aside.menu.tableErrorTipStyle', routerLink: { name: 'ComponentTableValidateTheme' } },
            { i18nKey: 'app.aside.menu.tableCopyPasteAndValidation', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Ftable%2Fedit%2Fvalid' } } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentTableValidateTemplateEdit' } },
                { i18nKey: 'app.aside.menu.tableCustomErrorTipTemplate', routerLink: { name: 'ComponentTableValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            { i18nKey: 'app.aside.menu.tableCustomCellTemplate', routerLink: { name: 'ComponentTableTemplateDefault' } },
            { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentTableTemplateHeader' } },
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentTableTemplateFooter' } },
            { i18nKey: 'app.aside.menu.tableCustomHeaderTitleTemplate', routerLink: { name: 'ComponentTableTemplateTitle' } },
            { i18nKey: 'app.aside.menu.tableCustomCellTipTemplate', routerLink: { name: 'ComponentTableTemplateTooltip' } },
            { i18nKey: 'app.aside.menu.tableCustomSortButtonTemplate', routerLink: { name: 'ComponentTableTemplateSort' } },
            { i18nKey: 'app.aside.menu.tableCustomCheckboxTemplate', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
            { i18nKey: 'app.aside.menu.tableCustomRadioTemplate', routerLink: { name: 'ComponentTableTemplateRadio' } },
            { i18nKey: 'app.aside.menu.tableCustomExpandRowTemplate', routerLink: { name: 'ComponentTableTemplateContent' } },
            { i18nKey: 'app.aside.menu.tableCustomFilterTemplate', routerLink: { name: 'ComponentTableTemplateFilter' } },
            { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentTableTemplateEdit' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableKeyboardNavigation',
          children: [
            { i18nKey: 'app.aside.menu.tableCellSelect', routerLink: { name: 'ComponentTableKeyboardSelected' } },
            { i18nKey: 'app.aside.menu.tableKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardKeyboard' } },
            { i18nKey: 'app.aside.menu.tableEnterAutoAddRow', routerLink: { name: 'ComponentTableKeyboardEnterAppend' } },
            { i18nKey: 'app.aside.menu.tableEditableKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            { i18nKey: 'app.aside.menu.tableSetAppendEdit', routerLink: { name: 'ComponentTableKeyboardEditMethod' } },
            { i18nKey: 'app.aside.menu.tableTreeKeyboardOperation', routerLink: { name: 'ComponentTableKeyboardTree' } },
            { i18nKey: 'app.aside.menu.tableTreeEditable', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            { i18nKey: 'app.aside.menu.tableUndoRedo', routerLink: { name: 'ComponentTableKeyboardUndoRedo' } },
            { i18nKey: 'app.aside.menu.tableContextMenuFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { i18nKey: 'app.aside.menu.tableCellSelectFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaKeypad%2Fkeypad' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableExportData',
          children: [
            { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentTableExportBase' } },
            { i18nKey: 'app.aside.menu.tableExportTxt', routerLink: { name: 'ComponentTableExportTxt' } },
            { i18nKey: 'app.aside.menu.tableExportXml', routerLink: { name: 'ComponentTableExportXml' } },
            { i18nKey: 'app.aside.menu.tableExportHtml', routerLink: { name: 'ComponentTableExportHtml' } },
            { i18nKey: 'app.aside.menu.tableExportCsv', routerLink: { name: 'ComponentTableExportCsv' } },
            { i18nKey: 'app.aside.menu.tableExportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/export`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableExportPdf', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/table/export`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableSpecifyData', routerLink: { name: 'ComponentTableExportData' } },
            { i18nKey: 'app.aside.menu.tableFormatCellContent', routerLink: { name: 'ComponentTableExportExportMethod' } },
            { i18nKey: 'app.aside.menu.tableAdvancedExport', routerLink: { name: 'ComponentTableExportAdvanced' } },
            { i18nKey: 'app.aside.menu.tableSpecifyDefaultColumns', routerLink: { name: 'ComponentTableExportColumns' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableImportData',
          children: [
            { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentTableImportBase' } },
            { i18nKey: 'app.aside.menu.tableImportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/import`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableAdvancedImport', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tablePrintTable',
          children: [
            { i18nKey: 'app.aside.menu.tablePrintTable', routerLink: { name: 'ComponentTablePrintBase' } },
            { i18nKey: 'app.aside.menu.tableAdvancedPrint', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            { i18nKey: 'app.aside.menu.tablePrintMultiPage', routerLink: { name: 'ComponentTablePrintPage' } },
            { i18nKey: 'app.aside.menu.tablePrintMultipleTables', routerLink: { name: 'ComponentTablePrintMultilist' } },
            { i18nKey: 'app.aside.menu.tablePrintShippingOrder', routerLink: { name: 'ComponentTablePrintOrder' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableVirtualScrollLargeData',
          children: [
            { i18nKey: 'app.aside.menu.tableVerticalVirtualScroll', routerLink: { name: 'ComponentTableScrollVertical' } },
            { i18nKey: 'app.aside.menu.tableHorizontalVirtualScroll', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            { i18nKey: 'app.aside.menu.tableVerticalAndHorizontal', routerLink: { name: 'ComponentTableScrollHV' }, keywords: 'loadData,reloadData' },
            { i18nKey: 'app.aside.menu.tableFunctionalLoadData', routerLink: { name: 'ComponentTableScrollLoadData' }, keywords: 'loadData,reloadData' },
            { i18nKey: 'app.aside.menu.tableFixedColumnComplexRender', routerLink: { name: 'ComponentTableScrollFixed' } },
            // { i18nKey: 'app.aside.menu.tableScrollModeComplexRender', routerLink: { name: 'ComponentTableScrollMode' } },
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            { i18nKey: 'app.aside.menu.tableAutoRowHeight', routerLink: { name: 'ComponentTableScrollAutoRowHeight' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableAutoRowHeightVH', routerLink: { name: 'ComponentTableScrollAutoRowVH' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableAutoRowHeightComplexRender', routerLink: { name: 'ComponentTableScrollAutoRowFixed' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableUseGroupHeader', routerLink: { name: 'ComponentTableScrollGroup' } },
            { i18nKey: 'app.aside.menu.tableKeyboardNavigation', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            { i18nKey: 'app.aside.menu.tableCellMerge', routerLink: { name: 'ComponentTableScrollMerge' } },
            { i18nKey: 'app.aside.menu.tableTreeVertical', routerLink: { name: 'ComponentTableScrollTree' } },
            { i18nKey: 'app.aside.menu.tableEditableHorizontal', routerLink: { name: 'ComponentTableScrollEdit' } },
            { i18nKey: 'app.aside.menu.tableEditableVH', routerLink: { name: 'ComponentTableScrollHVEdit' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableTableSearch',
          children: [
            { i18nKey: 'app.aside.menu.tableImplementTableSearch', routerLink: { name: 'ComponentTableSearchList' } },
            { i18nKey: 'app.aside.menu.tableImplementTreeTableSearch', routerLink: { name: 'ComponentTableSearchTree' } },
            { i18nKey: 'app.aside.menu.tableFindAndReplace', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaFNR' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableScrollbar',
          children: [
            {
              i18nKey: 'app.aside.menu.tableNativeScrollbar',
              children: [
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentTableScrollbarNativeBarStyle' } },
                { i18nKey: 'app.aside.menu.tableScrollbarPosition', routerLink: { name: 'ComponentTableScrollbarNativeBarPos' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableVirtualScrollbar',
              children: [
                { i18nKey: 'app.aside.menu.tableUseScrollbar', routerLink: { name: 'ComponentTableScrollbarUseScrollbarScrollbar' } },
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentTableScrollbarUseScrollbarBarWidth' } },
                { i18nKey: 'app.aside.menu.tableScrollbarColor', routerLink: { name: 'ComponentTableScrollbarUseScrollbarBarColor' } },
                { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentTableScrollbarUseScrollbarPosition' } },
                { i18nKey: 'app.aside.menu.tableAutoHide', routerLink: { name: 'ComponentTableScrollbarUseScrollbarAutoHide' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEventListen',
          children: [
            { i18nKey: 'app.aside.menu.tableReady', routerLink: { name: 'ComponentTableEventsReady' } },
            { i18nKey: 'app.aside.menu.tableDataLoadEvent', routerLink: { name: 'ComponentTableEventsRendered' } },
            { i18nKey: 'app.aside.menu.tableClickDblclickEvent', routerLink: { name: 'ComponentTableEventsClick' } },
            { i18nKey: 'app.aside.menu.tableScrollEvent', routerLink: { name: 'ComponentTableEventsScroll' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFeatureExamples',
          children: [
            { i18nKey: 'app.aside.menu.tableUseInTabs', routerLink: { name: 'ComponentTableOtherTabs' } },
            { i18nKey: 'app.aside.menu.tableMultilineTextEllipsis', routerLink: { name: 'ComponentTableOtherLineEllipsis' } },
            { i18nKey: 'app.aside.menu.tableBookkeepingVoucher', routerLink: { name: 'ComponentTableOtherBookkeepingVoucher' } },
            { i18nKey: 'app.aside.menu.tableCollapsibleColumn', routerLink: { name: 'ComponentTableOtherCollapseColumn' } },
            { i18nKey: 'app.aside.menu.tableLeftTreeRightTable', routerLink: { name: 'ComponentTableOtherLeftRight' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGridTitle',
      icon: 'vxe-icon-subtable',
      children: [
        { title: 'Grid API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } }, keywords: 'vxe-grid' },
        {
          i18nKey: 'app.aside.menu.tableBasicFeatures',
          children: [
            { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentGridBaseBasic' } },
            { i18nKey: 'app.aside.menu.tableSize', routerLink: { name: 'ComponentGridBaseSize' } },
            { i18nKey: 'app.aside.menu.tableRowKey', routerLink: { name: 'ComponentGridBaseRowKey' }, keywords: 'key-field' },
            { i18nKey: 'app.aside.menu.tableDataType', routerLink: { name: 'ComponentGridBaseData' } },
            { i18nKey: 'app.aside.menu.tableLoadData', routerLink: { name: 'ComponentGridBaseLoadData' } },
            { i18nKey: 'app.aside.menu.tableFooterData', routerLink: { name: 'ComponentGridBaseFooter' } },
            { i18nKey: 'app.aside.menu.tableEmptyTip', routerLink: { name: 'ComponentGridBaseEmpty' } },
            { i18nKey: 'app.aside.menu.tableBorder', routerLink: { name: 'ComponentGridBaseBorder' } },
            { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'ComponentGridBaseRound' } },
            // { i18nKey: 'app.aside.menu.tablePadding', routerLink: { name: 'ComponentGridBasePadding' } },
            { i18nKey: 'app.aside.menu.tableAlign', routerLink: { name: 'ComponentGridBaseAlign' } },
            { i18nKey: 'app.aside.menu.tableHideColumn', routerLink: { name: 'ComponentGridBaseVisible' } },
            { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentGridBaseWidth' }, keywords: '宽度,列宽' },
            { i18nKey: 'app.aside.menu.tableSetSmallColumnWidth', routerLink: { name: 'ComponentGridBaseMinWidth' }, keywords: '最小宽度,最小列宽' },
            { i18nKey: 'app.aside.menu.tableSetMaxColumnWidth', routerLink: { name: 'ComponentGridBaseMaxWidth' }, keywords: '最大宽度,最大列宽' },
            { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentGridBaseAutoWidth' }, keywords: '宽度,根据内容,自适应列宽,width,auto' },
            { i18nKey: 'app.aside.menu.tableAutoCellHeight', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
            { i18nKey: 'app.aside.menu.tableOverflowHidden', routerLink: { name: 'ComponentGridBaseOverflow' } },
            { i18nKey: 'app.aside.menu.tableTextTip', routerLink: { name: 'ComponentGridBaseTooltip' } },
            // { i18nKey: 'app.aside.menu.tableScrollStyle', routerLink: { name: 'ComponentGridBaseScrollStyle' } },
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentGridBaseStripe' } },
            { i18nKey: 'app.aside.menu.tableCellStyle', routerLink: { name: 'ComponentGridBaseStyle' } },
            { i18nKey: 'app.aside.menu.tableDynamicStyle', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
            { i18nKey: 'app.aside.menu.tableHideHeader', routerLink: { name: 'ComponentGridBaseHeader' } },
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
            { i18nKey: 'app.aside.menu.tableDragResizeColumnWidth', routerLink: { name: 'ComponentGridBaseHeaderResizableWidth' } },
            { i18nKey: 'app.aside.menu.tableDragResizeRowHeight', routerLink: { name: 'ComponentGridBaseHeaderResizableHeight' } },
            { i18nKey: 'app.aside.menu.tableMinHeight', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
            { i18nKey: 'app.aside.menu.tableHeight', routerLink: { name: 'ComponentGridBaseHeight' } },
            { i18nKey: 'app.aside.menu.tableMaxHeight', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
            { i18nKey: 'app.aside.menu.tableResponsiveHeight', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
            { i18nKey: 'app.aside.menu.tableSetColumnHeight', routerLink: { name: 'ComponentGridBaseColumnHeight' } },
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentGridBaseRowHeight' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridBaseFixed' } },
            { i18nKey: 'app.aside.menu.tableFixedHeaderAndColumn', routerLink: { name: 'ComponentGridBaseFixedFull' } },
            { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentGridBaseGroup' } },
            { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentGridBaseSort' } },
            { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentGridBaseFilter' } },
            { i18nKey: 'app.aside.menu.tableLoading', routerLink: { name: 'ComponentGridBaseLoading' } },
            { i18nKey: 'app.aside.menu.tableFormatContent', routerLink: { name: 'ComponentGridBaseFormat' } },
            { i18nKey: 'app.aside.menu.tableSeq', routerLink: { name: 'ComponentGridBaseSeq' } },
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridBaseRadio' } },
            { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentGridBaseSelection' } },
            { i18nKey: 'app.aside.menu.tableTitlePrefixIcon', routerLink: { name: 'ComponentGridBaseTitlePrefix' }, keywords: 'title-prefix' },
            { i18nKey: 'app.aside.menu.tableTitleSuffixIcon', routerLink: { name: 'ComponentGridBaseTitleSuffix' }, keywords: 'title-suffix' },
            { i18nKey: 'app.aside.menu.tableHtmlType', routerLink: { name: 'ComponentGridBaseHtml' } },
            { i18nKey: 'app.aside.menu.tableColumnConfig', routerLink: { name: 'ComponentGridBaseColumns' } },
            { i18nKey: 'app.aside.menu.tableFullExample', routerLink: { name: 'ComponentGridBaseFull' } },
            { i18nKey: 'app.aside.menu.tableGetTableData', routerLink: { name: 'ComponentGridBaseGetData' } },
            { i18nKey: 'app.aside.menu.tableDataTableColumn', routerLink: { name: 'ComponentGridBaseGetColumn' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellConfig',
          children: [
            { i18nKey: 'app.aside.menu.tableSetColumnWidth', routerLink: { name: 'ComponentGridCellWidth' }, keywords: '设置列宽，单元格宽度' },
            { i18nKey: 'app.aside.menu.tableSetCellPadding', routerLink: { name: 'ComponentGridCellPadding' }, keywords: '设置边距，单元格边距' },
            { i18nKey: 'app.aside.menu.tableSetRowHeight', routerLink: { name: 'ComponentGridCellHeight' }, keywords: '设置单元格高度，设置行高度' },
            { i18nKey: 'app.aside.menu.tableSetVerticalAlign', routerLink: { name: 'ComponentGridCellVerticalAlign' }, keywords: '设置单元格垂直对齐' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellTip',
          children: [
            { i18nKey: 'app.aside.menu.tableDefaultTipMode', routerLink: { name: 'ComponentGridCellTipMode' }, keywords: 'tooltip' },
            { i18nKey: 'app.aside.menu.tableCustomCellTip', routerLink: { name: 'ComponentGridCellTipShowAll' }, keywords: '工具提示，溢出提示' },
            { i18nKey: 'app.aside.menu.tableCustomWidthHeight', routerLink: { name: 'ComponentGridCellTipWh' }, keywords: '自定义工具提示' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellMerge',
          children: [
            { i18nKey: 'app.aside.menu.tableMergeRows', routerLink: { name: 'ComponentGridMergeRow' } },
            { i18nKey: 'app.aside.menu.tableMergeColumns', routerLink: { name: 'ComponentGridMergeColumn' } },
            { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentGridMergeAll' } },
            { i18nKey: 'app.aside.menu.tableCustomMergeRowsAndColumns', routerLink: { name: 'ComponentGridMergeSpanMethod' } },
            { i18nKey: 'app.aside.menu.tableMergeFooter', routerLink: { name: 'ComponentGridMergeFooter' } },
            { i18nKey: 'app.aside.menu.tableMergeHeader', routerLink: { name: 'ComponentGridMergeHeader' } },
            { i18nKey: 'app.aside.menu.tableMergeHorizontalTree', routerLink: { name: 'ComponentGridMergeHorizontal' } },
            { i18nKey: 'app.aside.menu.tableUseWithSort', routerLink: { name: 'ComponentGridMergeSort' } },
            { i18nKey: 'app.aside.menu.tableUseWithFilter', routerLink: { name: 'ComponentGridMergeFilter' } },
            { i18nKey: 'app.aside.menu.tableUseMergeColumnToShowCategory', routerLink: { name: 'ComponentGridMergeVnGroup' } },
            { i18nKey: 'app.aside.menu.tableShortcutMerge', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMerge' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFooterData',
          children: [
            { i18nKey: 'app.aside.menu.tableEnableFooter', routerLink: { name: 'ComponentGridFooterShowFooter' } },
            { i18nKey: 'app.aside.menu.tableStandardStructure', routerLink: { name: 'ComponentGridFooterFooterData' } },
            { i18nKey: 'app.aside.menu.tableCustomDataMethod', routerLink: { name: 'ComponentGridFooterFooterMethod' } },
            { i18nKey: 'app.aside.menu.tableFormatFooterContent', routerLink: { name: 'ComponentGridFooterFooterFormat' } },
            { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentGridFooterTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRadio',
          children: [
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentGridRadioHighlight' } },
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentGridRadioCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentGridRadioVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRadioTrigger' } },
            { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridRadioStrict' } },
            { i18nKey: 'app.aside.menu.tableHeaderButton', routerLink: { name: 'ComponentGridRadioHeaderBtn' } },
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentGridRadioTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCheckbox',
          children: [
            { i18nKey: 'app.aside.menu.tableHighlightSelectedRow', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
            { i18nKey: 'app.aside.menu.tableBindField', routerLink: { name: 'ComponentGridCheckboxField' } },
            { i18nKey: 'app.aside.menu.tableDisabled', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHide', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridCheckboxTrigger' } },
            { i18nKey: 'app.aside.menu.tableShowSelectedCount', routerLink: { name: 'ComponentGridCheckboxShowRecords' } },
            { i18nKey: 'app.aside.menu.tablePaginationKeepSelected', routerLink: { name: 'ComponentGridCheckboxReserve' } },
            { i18nKey: 'app.aside.menu.tablePaginationShowKeepSelectedStatus', routerLink: { name: 'ComponentGridCheckboxShowReserveStatus' } },
            { i18nKey: 'app.aside.menu.tableKeyboardBatchRangeSelect', routerLink: { name: 'ComponentGridCheckboxBatch' } },
            { i18nKey: 'app.aside.menu.tableMouseDragRangeSelect', routerLink: { name: 'ComponentGridCheckboxRange' } },
            { i18nKey: 'app.aside.menu.tableCellSelectCheckbox', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaCheckbox' } } },
            { i18nKey: 'app.aside.menu.tableCustomTemplate', routerLink: { name: 'ComponentGridCheckboxTemplate' } },
            { i18nKey: 'app.aside.menu.tableCustomCheckbox', routerLink: { name: 'ComponentGridCheckboxCustomChecked' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableSort',
          children: [
            { i18nKey: 'app.aside.menu.tableDataSort', routerLink: { name: 'ComponentGridSortBase' } },
            { i18nKey: 'app.aside.menu.tableMultiFieldSort', routerLink: { name: 'ComponentGridSortMultiple' } },
            { i18nKey: 'app.aside.menu.tableTreeSort', routerLink: { name: 'ComponentGridSortTree' } },
            { i18nKey: 'app.aside.menu.tableRemoteSort', routerLink: { name: 'ComponentGridSortRemote' } },
            { i18nKey: 'app.aside.menu.tableCustomSort', routerLink: { name: 'ComponentGridSortSortMethod' } },
            { i18nKey: 'app.aside.menu.tableManualSort', routerLink: { name: 'ComponentGridSortSetSort' } },
            { i18nKey: 'app.aside.menu.tableSortIcon', routerLink: { name: 'ComponentGridSortIconVisibleMethod' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableHighlightColumn',
          children: [
            { i18nKey: 'app.aside.menu.tableCurrentColumn', routerLink: { name: 'ComponentGridCurrentColumnBase' } },
            { i18nKey: 'app.aside.menu.tableInterceptSelect', routerLink: { name: 'ComponentGridCurrentColumnBeforeSelectMethod' } },
            { i18nKey: 'app.aside.menu.tableManualTrigger', routerLink: { name: 'ComponentGridCurrentColumnTrigger' } },
            { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridCurrentColumnStrict' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableColumnWidthResize',
          children: [
            { i18nKey: 'app.aside.menu.tableDragMode', routerLink: { name: 'ComponentGridColResizableMode' } },
            { i18nKey: 'app.aside.menu.tableGroupColumnHeader', routerLink: { name: 'ComponentGridColResizableGroup' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridColResizableFixed' } },
            { i18nKey: 'app.aside.menu.tableDblclickAutoColumnWidth', routerLink: { name: 'ComponentGridColResizableDblclickAutoWidth' } },
            { i18nKey: 'app.aside.menu.tableAllCellsDraggable', routerLink: { name: 'ComponentGridColResizableAllColumnDrag' } },
            { i18nKey: 'app.aside.menu.tableLimitMinColumnWidthDrag', routerLink: { name: 'ComponentGridColResizableMinWidth' } },
            { i18nKey: 'app.aside.menu.tableLimitMaxColumnWidthDrag', routerLink: { name: 'ComponentGridColResizableMaxWidth' } },
            { i18nKey: 'app.aside.menu.tableManualColumnWidth', routerLink: { name: 'ComponentGridColResizableManual' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableColumnDrag',
          children: [
            { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentGridColDragSort' } },
            { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentGridColDragCustom' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridColDragFixed' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridColDragIcon' } },
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridColDragShowGuidesStatus' } },
            {
              i18nKey: 'app.aside.menu.tableGroupHeader',
              children: [
                { i18nKey: 'app.aside.menu.tableGroupDrag', routerLink: { name: 'ComponentGridColDragGroup' } },
                { i18nKey: 'app.aside.menu.tablePeerLevelDrag', routerLink: { name: 'ComponentGridColDragPeerDrag' } },
                { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentGridColDragCrossDrag' } },
                { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentGridColDragSelfToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentGridColDragToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableGroupPersonalization', routerLink: { name: 'ComponentGridColDragGroupCustom' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridColDragTrigger' } },
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentGridColDragEvents' } },
            { i18nKey: 'app.aside.menu.tableCustomTip', routerLink: { name: 'ComponentGridColDragTooltipMethod' } },
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentGridColDragDisabledMethod' } },
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentGridColDragVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentGridColDragDragMethod' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTipTemplate', routerLink: { name: 'ComponentGridColDragTemplateTip' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridColDragManual' } },
            { i18nKey: 'app.aside.menu.tableRowAndColumnDrag', routerLink: { name: 'ComponentGridColDragRowCol' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableHighlightRow',
          children: [
            { i18nKey: 'app.aside.menu.tableCurrentRow', routerLink: { name: 'ComponentGridCurrentRowBase' } },
            { i18nKey: 'app.aside.menu.tableInterceptSelect', routerLink: { name: 'ComponentGridCurrentRowBeforeSelectMethod' } },
            { i18nKey: 'app.aside.menu.tableManualTrigger', routerLink: { name: 'ComponentGridCurrentRowTrigger' } },
            { i18nKey: 'app.aside.menu.tableCancelable', routerLink: { name: 'ComponentGridCurrentRowStrict' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowHeightResize',
          children: [
            { i18nKey: 'app.aside.menu.tableRowHeightDrag', routerLink: { name: 'ComponentGridRowResizableBase' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowResizableFixed' } },
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentGridRowResizableTree' } },
            { i18nKey: 'app.aside.menu.tableDragButtonPosition', routerLink: { name: 'ComponentGridRowResizableRowResize' } },
            { i18nKey: 'app.aside.menu.tableDblclickAutoRowHeight', routerLink: { name: 'ComponentGridRowResizableDblclickAutoHeight' } },
            { i18nKey: 'app.aside.menu.tableAllCellsDraggable', routerLink: { name: 'ComponentGridRowResizableAllRowDrag' } },
            { i18nKey: 'app.aside.menu.tableManualRowHeight', routerLink: { name: 'ComponentGridRowResizableManual' } },
            { i18nKey: 'app.aside.menu.tableManualRefreshRowHeight', routerLink: { name: 'ComponentGridRowResizableRecalcManual' } },
            { i18nKey: 'app.aside.menu.tableAutoTextarea', routerLink: { name: 'ComponentGridRowResizableTextarea' } },
            { i18nKey: 'app.aside.menu.tableDefaultAndAutoRowHeight', routerLink: { name: 'ComponentGridRowResizableRowDragAutoHeight' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowDrag',
          children: [
            { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentGridRowDragSort' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowDragFixed' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridRowDragIcon' } },
            { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridRowDragShowGuidesStatus' } },
            {
              i18nKey: 'app.aside.menu.tableTree',
              children: [
                { i18nKey: 'app.aside.menu.tableTreeDrag', routerLink: { name: 'ComponentGridRowDragTreeBase' } },
                { i18nKey: 'app.aside.menu.tablePeerLevelDrag', routerLink: { name: 'ComponentGridRowDragTreePeerDrag' } },
                { i18nKey: 'app.aside.menu.tableCrossLevelDrag', routerLink: { name: 'ComponentGridRowDragTreeCossDrag' } },
                { i18nKey: 'app.aside.menu.tableDragSelfToChild', routerLink: { name: 'ComponentGridRowDragTreeSelfToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableDragToChild', routerLink: { name: 'ComponentGridRowDragTreeToChildDrag' } },
                { i18nKey: 'app.aside.menu.tableDragGuideStyle', routerLink: { name: 'ComponentGridRowDragTreeShowGuidesStatus' } },
                { i18nKey: 'app.aside.menu.tableDragSecondaryConfirm', routerLink: { name: 'ComponentGridRowDragTreeDragMethod' } },
                { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentGridRowDragTreeLazy' } },
                { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridRowDragTreeManual' } },
                { i18nKey: 'app.aside.menu.tableCrossTableDrag', routerLink: { name: 'ComponentGridRowDragTreeCossTable' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRowDragTrigger' } },
            { i18nKey: 'app.aside.menu.tableDragEvents', routerLink: { name: 'ComponentGridRowDragEvents' } },
            { i18nKey: 'app.aside.menu.tableCustomTip', routerLink: { name: 'ComponentGridRowDragTooltipMethod' } },
            { i18nKey: 'app.aside.menu.tableDisableButton', routerLink: { name: 'ComponentGridRowDragDisabledMethod' } },
            { i18nKey: 'app.aside.menu.tableButtonVisible', routerLink: { name: 'ComponentGridRowDragVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableDragIntercept', routerLink: { name: 'ComponentGridRowDragDragMethod' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTipTemplate', routerLink: { name: 'ComponentGridRowDragTemplateTip' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableManualMove', routerLink: { name: 'ComponentGridRowDragManual' } },
            { i18nKey: 'app.aside.menu.tableCrossTableDrag', routerLink: { name: 'ComponentGridRowDragCossTable' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableRowGroup',
          children: [
            { i18nKey: 'app.aside.menu.tableRowGroup', routerLink: { name: 'ComponentGridRowGroupBasic' } },
            { i18nKey: 'app.aside.menu.tableMergeMultipleFieldsGroup', routerLink: { name: 'ComponentGridRowGroupMultiField' } },
            { i18nKey: 'app.aside.menu.tableGroupByMultipleColumns', routerLink: { name: 'ComponentGridRowGroupGroupFields' } },
            {
              i18nKey: 'app.aside.menu.tableRadio',
              children: [
                { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridRowGroupRadioBse' } },
                { i18nKey: 'app.aside.menu.tableLimitSelect', routerLink: { name: 'ComponentGridRowGroupRadioChecked' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableCheckbox',
              children: [
                { i18nKey: 'app.aside.menu.tableCheckbox', routerLink: { name: 'ComponentGridRowGroupCheckboxBase' } },
                { i18nKey: 'app.aside.menu.tableGroupNotLinked', routerLink: { name: 'ComponentGridRowGroupCheckboxCheckStrictly' } },
                { i18nKey: 'app.aside.menu.tableGroupNotLinkedAndSelectAll', routerLink: { name: 'ComponentGridRowGroupCheckboxStrictlyHeader' } },
                { i18nKey: 'app.aside.menu.tableLimitSelect', routerLink: { name: 'ComponentGridRowGroupCheckboxChecked' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableAccordionEffect', routerLink: { name: 'ComponentGridRowGroupAccordion' } },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridRowGroupFixed' } },
            { i18nKey: 'app.aside.menu.tableGroupSort', routerLink: { name: 'ComponentGridRowGroupSort' } },
            { i18nKey: 'app.aside.menu.tableGroupFilter', routerLink: { name: 'ComponentGridRowGroupFilter' } },
            { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentGridRowGroupExpand' } },
            { i18nKey: 'app.aside.menu.tableShowGroupStats', routerLink: { name: 'ComponentGridRowGroupTotal' } },
            { i18nKey: 'app.aside.menu.tableShowMultiColumnTotal', routerLink: { name: 'ComponentGridRowGroupCount' } },
            { i18nKey: 'app.aside.menu.tableFooterTotal', routerLink: { name: 'ComponentGridRowGroupFooter' } },
            { i18nKey: 'app.aside.menu.tableCustomGroupContent', routerLink: { name: 'ComponentGridRowGroupContentMethod' } },
            { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentGridRowGroupSpanMethod' } },
            { i18nKey: 'app.aside.menu.tableDefaultExpand', routerLink: { name: 'ComponentGridRowGroupExpandGroupFields' } },
            { i18nKey: 'app.aside.menu.tableDisplayMode', routerLink: { name: 'ComponentGridRowGroupGroupMode' } },
            { i18nKey: 'app.aside.menu.tableTriggerMode', routerLink: { name: 'ComponentGridRowGroupTrigger' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomGroupColumnContentTemplate', routerLink: { name: 'ComponentGridRowGroupTemplateGroupContent' } }
                // { i18nKey: 'app.aside.menu.tableCustomGroupColumnAggregateTemplate', routerLink: { name: 'ComponentGridRowGroupTemplateGroupValues' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableGroupSummary', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Faggregation%2FrowGroupSummary' } } },
            { i18nKey: 'app.aside.menu.tableProductGroupList', routerLink: { name: 'ComponentGridRowGroupProduct1' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableExpandRow',
          children: [
            { i18nKey: 'app.aside.menu.tableBasicUsage', routerLink: { name: 'ComponentGridExpandBasic' } },
            { i18nKey: 'app.aside.menu.tableExpandContainerPadding', routerLink: { name: 'ComponentGridExpandPadding' } },
            { i18nKey: 'app.aside.menu.tableExpandContainerHeight', routerLink: { name: 'ComponentGridExpandHeight' } },
            { i18nKey: 'app.aside.menu.tableSeqColumn', routerLink: { name: 'ComponentGridExpandCustomSeq' } },
            { i18nKey: 'app.aside.menu.tableUseFixedColumn', routerLink: { name: 'ComponentGridExpandFixed' } },
            { i18nKey: 'app.aside.menu.tableExpandChildTable', routerLink: { name: 'ComponentGridExpandChildTable' } },
            { i18nKey: 'app.aside.menu.tableExpandMode', routerLink: { name: 'ComponentGridExpandMode' } },
            { i18nKey: 'app.aside.menu.tableKeepAllExpandedMode', routerLink: { name: 'ComponentGridExpandKeepAll' } },
            { i18nKey: 'app.aside.menu.tableModalSelectToChildTable', routerLink: { name: 'ComponentGridExpandSelectModalTable' } },
            { i18nKey: 'app.aside.menu.tableLinkedCheckbox', routerLink: { name: 'ComponentGridExpandVnTree' } },
            { i18nKey: 'app.aside.menu.tableProductListWithDetails', routerLink: { name: 'ComponentGridExpandProduct1' } },
            { i18nKey: 'app.aside.menu.tableProductDetailList', routerLink: { name: 'ComponentGridExpandProduct2' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFilter',
          children: [
            { i18nKey: 'app.aside.menu.tableDataFilter', routerLink: { name: 'ComponentGridFilterBase' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridFilterIcon' } },
            { i18nKey: 'app.aside.menu.tableRemoteFilter', routerLink: { name: 'ComponentGridFilterRemote' } },
            { i18nKey: 'app.aside.menu.tableRemotePaginationFilter', routerLink: { name: 'ComponentGridFilterPager' } },
            { i18nKey: 'app.aside.menu.tableTree', routerLink: { name: 'ComponentGridFilterTree' } },
            { i18nKey: 'app.aside.menu.tableManualPopup', routerLink: { name: 'ComponentGridFilterManual' } },
            { i18nKey: 'app.aside.menu.tableManualFilter', routerLink: { name: 'ComponentGridFilterSetFilter' } },
            { i18nKey: 'app.aside.menu.tableShowHideIcon', routerLink: { name: 'ComponentGridFilterIconVisibleMethod' } },
            {
              i18nKey: 'app.aside.menu.tableFloatingFilter',
              children: [
                { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterFloatingVxeInput' } },
                { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterFloatingVxeNumberInput' } },
                { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterFloatingVxeSelect' } },
                { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterFloatingVxeDatePicker' } },
                { i18nKey: 'app.aside.menu.tableShowIcon', routerLink: { name: 'ComponentGridFilterFloatingShowIcon' } },
                { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentGridFilterFloatingPosition' } },
                { i18nKey: 'app.aside.menu.tableFullFilter', routerLink: { name: 'ComponentGridFilterFloatingFull' } },
                { i18nKey: 'app.aside.menu.tableGroupHeader', routerLink: { name: 'ComponentGridFilterFloatingGroup' } },
                { i18nKey: 'app.aside.menu.tableCustomSlotTemplate', routerLink: { name: 'ComponentGridFilterFloatingTemplate' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomFilterContentTemplate', routerLink: { name: 'ComponentGridFilterTemplateFilter' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableInputFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Fgrid%2Fcomplex%2FstringFilter' } } },
            { i18nKey: 'app.aside.menu.tableCombinationFilter', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Fgrid%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFilterRenderConfig',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/filter/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFilterRenderSlot',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/filter/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableContextMenu',
          children: [
            { i18nKey: 'app.aside.menu.tableCustomPrefix', routerLink: { name: 'ComponentGridMenuPrefixConfig' } },
            { i18nKey: 'app.aside.menu.tableCustomSuffix', routerLink: { name: 'ComponentGridMenuSuffixConfig' } },
            { i18nKey: 'app.aside.menu.tableFullContextMenu', routerLink: { name: 'ComponentGridMenuFull' } },
            { i18nKey: 'app.aside.menu.tableSyncPermissionControl', routerLink: { name: 'ComponentGridMenuPrivilege' } },
            { i18nKey: 'app.aside.menu.tableAsyncPermissionControl', routerLink: { name: 'ComponentGridMenuLoading' } },
            { i18nKey: 'app.aside.menu.tableSetWidth', routerLink: { name: 'ComponentGridMenuWidth' } },
            { i18nKey: 'app.aside.menu.tableCustomStyle', routerLink: { name: 'ComponentGridMenuClassName' } },
            { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/grid/full`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableQueryForm',
          children: [
            { i18nKey: 'app.aside.menu.tableQueryForm', routerLink: { name: 'ComponentGridFormSearch' } },
            { i18nKey: 'app.aside.menu.tableFormDefaultValues', routerLink: { name: 'ComponentGridFormFormData' } },
            { i18nKey: 'app.aside.menu.tableCollapsibleQueryForm', routerLink: { name: 'ComponentGridFormCollapse' } },
            { i18nKey: 'app.aside.menu.tableCustomItemSlotTemplate', routerLink: { name: 'ComponentGridFormItemTemplate' } },
            { i18nKey: 'app.aside.menu.tableCustomFormSlotTemplate', routerLink: { name: 'ComponentGridFormTemplate' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableToolbar',
          children: [
            { i18nKey: 'app.aside.menu.tableLeftButtons', routerLink: { name: 'ComponentGridToolbarButtons' } },
            { i18nKey: 'app.aside.menu.tableRightButtons', routerLink: { name: 'ComponentGridToolbarTools' } },
            { i18nKey: 'app.aside.menu.tablePersonalization', routerLink: { name: 'ComponentGridToolbarCustom' } },
            { i18nKey: 'app.aside.menu.tablePrintFeature', routerLink: { name: 'ComponentGridToolbarPrint' } },
            { i18nKey: 'app.aside.menu.tableMaximizeDisplay', routerLink: { name: 'ComponentGridToolbarZoom' } },
            { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentGridToolbarImport' } },
            { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentGridToolbarExport' } },
            { i18nKey: 'app.aside.menu.tableRefreshList', routerLink: { name: 'ComponentGridToolbarRefresh' } },
            { i18nKey: 'app.aside.menu.tableFullFeatures', routerLink: { name: 'ComponentGridToolbarFull' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridToolbarIcon' } },
            { i18nKey: 'app.aside.menu.tableCustomThirdPartyIcon', isPlugin: true, linkUrl: `${otherUrl}#/other-iconfont/font-class/toolbar/icons`, linkTarget: '_blank' },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtons' } },
                { i18nKey: 'app.aside.menu.tableCustomLeftPrefixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtonPrefix' } },
                { i18nKey: 'app.aside.menu.tableCustomLeftSuffixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateButtonSuffix' } },
                { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentGridToolbarTemplateTools' } },
                { i18nKey: 'app.aside.menu.tableCustomRightPrefixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateToolPrefix' } },
                { i18nKey: 'app.aside.menu.tableCustomRightSuffixTemplate', routerLink: { name: 'ComponentGridToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tablePersonalization',
          children: [
            { i18nKey: 'app.aside.menu.tableUseToolbar', routerLink: { name: 'ComponentGridCustomToolbar' } },
            { i18nKey: 'app.aside.menu.tableWindowMode', routerLink: { name: 'ComponentGridCustomModal' } },
            { i18nKey: 'app.aside.menu.tableDrawerMode', routerLink: { name: 'ComponentGridCustomDrawer' } },
            { i18nKey: 'app.aside.menu.tablePopupDisplayMode', routerLink: { name: 'ComponentGridCustomMaxHeight' } },
            { i18nKey: 'app.aside.menu.tableDefaultHiddenColumns', routerLink: { name: 'ComponentGridCustomDefHide' } },
            { i18nKey: 'app.aside.menu.tableDisableOperations', routerLink: { name: 'ComponentGridCustomCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableShowHideActionColumn', routerLink: { name: 'ComponentGridCustomVisibleMethod' } },
            { i18nKey: 'app.aside.menu.tableColumnWidthLimit', routerLink: { name: 'ComponentGridCustomResizableWidth' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnVisibility', routerLink: { name: 'ComponentGridCustomVisible' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustAlign', routerLink: { name: 'ComponentGridCustomAlign' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustHeaderAlign', routerLink: { name: 'ComponentGridCustomHeaderAlign' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustFooterAlign', routerLink: { name: 'ComponentGridCustomFooterAlign' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnFixed', routerLink: { name: 'ComponentGridCustomFixed' } },
            { i18nKey: 'app.aside.menu.tableAllowAdjustColumnWidth', routerLink: { name: 'ComponentGridCustomResizable' } },
            { i18nKey: 'app.aside.menu.tableAllowDragColumnOrder', routerLink: { name: 'ComponentGridCustomSort' } },
            { i18nKey: 'app.aside.menu.tableAllowDragGroup', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_allow_group' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FallowGroup' } } },
            { i18nKey: 'app.aside.menu.tableAllowDragAggregateFunction', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } },
            { i18nKey: 'app.aside.menu.tableFixedColumnMaxLimit', routerLink: { name: 'ComponentGridCustomFixedMax' } },
            { i18nKey: 'app.aside.menu.tableSortShortcutButton', routerLink: { name: 'ComponentGridCustomMoveBtn' } },
            // { i18nKey: 'app.aside.menu.tableCustomTriggerPopupSettings', routerLink: { name: 'CmponentGridCustomTemplate' } },
            { i18nKey: 'app.aside.menu.tableCustomTriggerButton', routerLink: { name: 'ComponentGridCustomCustomBtn' } },
            { i18nKey: 'app.aside.menu.tableCustomPopupPosition', routerLink: { name: 'ComponentGridCustomPlacement' } },
            { i18nKey: 'app.aside.menu.tableFullFeatures', routerLink: { name: 'ComponentGridCustomFull' } },
            { i18nKey: 'app.aside.menu.tableSetColumnWidthByStyle', routerLink: { name: 'ComponentGridCustomCssVar' } },
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentGridCustomEvents' } },
            { i18nKey: 'app.aside.menu.tableRealtimeUpdate', routerLink: { name: 'ComponentGridCustomImmediate' } },
            { i18nKey: 'app.aside.menu.tableLocalSaveColumnSettings', routerLink: { name: 'ComponentGridCustomStorage' } },
            { i18nKey: 'app.aside.menu.tableLocalSaveAggregateColumnSettings', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_storage' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2Fstorage' } } },
            { i18nKey: 'app.aside.menu.tableCustomRemoteSave', routerLink: { name: 'ComponentGridCustomRemote' } },
            { i18nKey: 'app.aside.menu.tableRemoteSaveAndRestore', routerLink: { name: 'ComponentGridCustomRemoteFull' } },
            { i18nKey: 'app.aside.menu.tableCustomUserColumnSettings', routerLink: { name: 'ComponentGridCustomToCustomTmpl' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridCustomTemplateTop' } },
                { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridCustomTemplateBottom' } },
                { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentGridCustomTemplateHeader' } },
                { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridCustomTemplateFooter' } },
                { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridCustomTemplateDefault' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableMultiTemplate', routerLink: { name: 'ComponentGridCustomToMultiTmpl' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableDataPagination',
          children: [
            { i18nKey: 'app.aside.menu.tableBackendPagination', routerLink: { name: 'ComponentGridPagerPage' }, keywords: '分页,page' },
            { i18nKey: 'app.aside.menu.tableFrontendPagination', routerLink: { name: 'ComponentGridPagerMockPage' }, keywords: '分页,page' },
            { i18nKey: 'app.aside.menu.tableCustomLayout', routerLink: { name: 'ComponentGridPagerLayouts' } },
            { i18nKey: 'app.aside.menu.tableCustomSeq', routerLink: { name: 'ComponentGridPagerStart' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomPagerTemplate', routerLink: { name: 'ComponentGridPagerTemplatePager' } },
                { i18nKey: 'app.aside.menu.tableCustomLeftTemplate', routerLink: { name: 'ComponentGridPagerTemplateLeft' } },
                { i18nKey: 'app.aside.menu.tableCustomRightTemplate', routerLink: { name: 'ComponentGridPagerTemplateRight' } },
                { i18nKey: 'app.aside.menu.tableCustomFunctionTemplate', routerLink: { name: 'ComponentGridPagerTemplateFunc' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFeatureLayout',
          children: [
            { i18nKey: 'app.aside.menu.tableAdjustPagerPosition', routerLink: { name: 'ComponentGridLayoutPager' } },
            { i18nKey: 'app.aside.menu.tableAdjustToolbarPosition', routerLink: { name: 'ComponentGridLayoutToolbar' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableTree',
          children: [
            { i18nKey: 'app.aside.menu.tableFlatStructure', routerLink: { name: 'ComponentGridTreeLeveling' } },
            { i18nKey: 'app.aside.menu.tableHierarchyStructure', routerLink: { name: 'ComponentGridTreeHierarchy' } },
            { i18nKey: 'app.aside.menu.tableStripeStyle', routerLink: { name: 'ComponentGridTreeStripe' } },
            { i18nKey: 'app.aside.menu.tableCustomIcon', routerLink: { name: 'ComponentGridTreeIcon' } },
            { i18nKey: 'app.aside.menu.tableSeqMode', routerLink: { name: 'ComponentGridTreeSeqMode' } },
            { i18nKey: 'app.aside.menu.tableShowConnectionLine', routerLink: { name: 'ComponentGridTreeLine' } },
            { i18nKey: 'app.aside.menu.tableRadio', routerLink: { name: 'ComponentGridTreeRadio' } },
            {
              i18nKey: 'app.aside.menu.tableCheckbox',
              children: [
                { i18nKey: 'app.aside.menu.tableBasic', routerLink: { name: 'ComponentGridTreeCheckboxBase' } },
                { i18nKey: 'app.aside.menu.tableShowFieldContent', routerLink: { name: 'ComponentGridTreeCheckboxLabelField' } },
                { i18nKey: 'app.aside.menu.tableParentChildNotLinked', routerLink: { name: 'ComponentGridTreeCheckboxCheckStrictly' } },
                { i18nKey: 'app.aside.menu.tableParentChildNotLinkedAndSelectAll', routerLink: { name: 'ComponentGridTreeCheckboxStrictlyHeader' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableFixedColumn', routerLink: { name: 'ComponentGridTreeFixed' } },
            { i18nKey: 'app.aside.menu.tableSort', routerLink: { name: 'ComponentGridTreeSort' } },
            { i18nKey: 'app.aside.menu.tableFilter', routerLink: { name: 'ComponentGridTreeFilter' } },
            { i18nKey: 'app.aside.menu.tableDefaultExpand', routerLink: { name: 'ComponentGridTreeExpandRowKeys' } },
            { i18nKey: 'app.aside.menu.tableUseExpandRow', routerLink: { name: 'ComponentGridTreeExpandRow' } },
            // { i18nKey: 'app.aside.menu.tableImplementMultiFieldGrouping', routerLink: { name: 'ComponentGridTreeGroupFields' } },
            { i18nKey: 'app.aside.menu.tableCustomMerge', routerLink: { name: 'ComponentGridTreeSpanMethod' } },
            { i18nKey: 'app.aside.menu.tableLazyLoad', routerLink: { name: 'ComponentGridTreeLazy' } },
            { i18nKey: 'app.aside.menu.tableProductListWithDetails', routerLink: { name: 'ComponentGridTreeProduct1' } },
            { i18nKey: 'app.aside.menu.tableCellSelection', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Ftree%2FareaTree' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellRenderConfig',
          children: [
            { i18nKey: 'app.aside.menu.tableVxeText', routerLink: { name: 'ComponentGridCellRenderVxeText' } },
            { i18nKey: 'app.aside.menu.tableVxeLink', routerLink: { name: 'ComponentGridCellRenderVxeLink' } },
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
            { i18nKey: 'app.aside.menu.tableVxeRadioGroup', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentGridCellRenderVxeCheckbox' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
            { i18nKey: 'app.aside.menu.tableVxeImageGroup', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeTextEllipsisMultiline', routerLink: { name: 'ComponentGridCellRenderVxeTextEllipsis' } },
            { i18nKey: 'app.aside.menu.tableVxeRate', routerLink: { name: 'ComponentGridCellRenderVxeRate' } },
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
            { i18nKey: 'app.aside.menu.tableFormatNumberInput', routerLink: { name: 'ComponentGridCellRenderFormatNumberInput' } },
            { i18nKey: 'app.aside.menu.tableFormatSelect', routerLink: { name: 'ComponentGridCellRenderFormatOption' } },
            { i18nKey: 'app.aside.menu.tableFormatTreeSelect', routerLink: { name: 'ComponentGridCellRenderFormatTree' } },
            { i18nKey: 'app.aside.menu.tableImplementCustomRenderer', routerLink: { name: 'GlobalRendererTableDefaultReApi' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/cell/el-switch`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCellRenderSlot',
          children: [
            { i18nKey: 'app.aside.menu.tableVxeText', routerLink: { name: 'ComponentGridCellTemplateVxeText' } },
            { i18nKey: 'app.aside.menu.tableVxeLink', routerLink: { name: 'ComponentGridCellTemplateVxeLink' } },
            { i18nKey: 'app.aside.menu.tableVxeTag', routerLink: { name: 'ComponentGridCellTemplateVxeTag' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckbox', routerLink: { name: 'ComponentGridCellTemplateVxeCheckbox' } },
            { i18nKey: 'app.aside.menu.tableVxeCheckboxGroup', routerLink: { name: 'ComponentGridCellTemplateVxeCheckboxGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeSwitch', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
            { i18nKey: 'app.aside.menu.tableVxeButtonGroup', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
            { i18nKey: 'app.aside.menu.tableVxeImage', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridCellTemplateVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeTextarea', routerLink: { name: 'ComponentGridCellTemplateVxeTextarea' } },
            { i18nKey: 'app.aside.menu.tableVxeUpload', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentGridCellTemplateVxeModal' } },
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentGridCellTemplateVxeDrawer' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/cell/el-switch`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableAllCellsEditable', routerLink: { name: 'ComponentGridCellTemplateAllEdit' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditable',
          children: [
            { i18nKey: 'app.aside.menu.tableManualEdit', routerLink: { name: 'ComponentGridEditManual' } },
            { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentGridEditClick' } },
            { i18nKey: 'app.aside.menu.tableDblclickEdit', routerLink: { name: 'ComponentGridEditDblclick' } },
            { i18nKey: 'app.aside.menu.tableEditMode', routerLink: { name: 'ComponentGridEditMode' } },
            { i18nKey: 'app.aside.menu.tableEditStatus', routerLink: { name: 'ComponentGridEditStatus' } },
            {
              i18nKey: 'app.aside.menu.tableTempDataBuiltinCrud',
              children: [
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentGridEditHandleTempInsert' } },
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentGridEditHandleTempRemove' } },
                { i18nKey: 'app.aside.menu.tableMark', routerLink: { name: 'ComponentGridEditHandleTempPending' } },
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentGridEditHandleTempUpdate' } },
                { i18nKey: 'app.aside.menu.tableRestore', routerLink: { name: 'ComponentGridEditHandleTempRevert' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableSyncDataSourceCustomCrud',
              children: [
                { i18nKey: 'app.aside.menu.tableInsert', routerLink: { name: 'ComponentGridEditHandleOriginalInsert' } },
                { i18nKey: 'app.aside.menu.tableDelete', routerLink: { name: 'ComponentGridEditHandleOriginalRemove' } },
                { i18nKey: 'app.aside.menu.tableUpdate', routerLink: { name: 'ComponentGridEditHandleOriginalUpdate' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tableRowValidation', routerLink: { name: 'ComponentGridEditRowValid' } },
            { i18nKey: 'app.aside.menu.tableDisableRowEdit', routerLink: { name: 'ComponentGridEditRowDisable' } },
            { i18nKey: 'app.aside.menu.tableDisableCellEdit', routerLink: { name: 'ComponentGridEditCellDisable' } },
            { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'ComponentGridEditCellValid' } },
            { i18nKey: 'app.aside.menu.tableBeforeEditIntercept', routerLink: { name: 'ComponentGridEditBeforeEdit' } },
            { i18nKey: 'app.aside.menu.tableNegativeAutoRed', routerLink: { name: 'ComponentGridEditShowNegativeStatus' } },
            { i18nKey: 'app.aside.menu.tableCheckboxEnableEdit', routerLink: { name: 'ComponentGridEditCheckboxCol' } },
            { i18nKey: 'app.aside.menu.tableImplementRowFieldTotal', routerLink: { name: 'ComponentGridEditRowImmediately' } },
            { i18nKey: 'app.aside.menu.tableImplementFooterRealtimeTotal', routerLink: { name: 'ComponentGridEditFooterImmediately' } },
            { i18nKey: 'app.aside.menu.tableImplementModalEditForm', routerLink: { name: 'ComponentGridEditModalForm' } },
            { i18nKey: 'app.aside.menu.tableImplementModalSelectData', routerLink: { name: 'ComponentGridEditModalSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementDrawerEditForm', routerLink: { name: 'ComponentGridEditDrawerForm' } },
            { i18nKey: 'app.aside.menu.tableImplementDrawerSelectData', routerLink: { name: 'ComponentGridEditDrawerSelect' } },
            { i18nKey: 'app.aside.menu.tableImplementRowIndependentDropdown', routerLink: { name: 'ComponentGridEditSelectRowOption' } },
            { i18nKey: 'app.aside.menu.tableRowSaveFeature', routerLink: { name: 'ComponentGridEditRowSave' } },
            { i18nKey: 'app.aside.menu.tableImplementCellRealtimeSave', routerLink: { name: 'ComponentGridEditRealtimeSave' } },
            { i18nKey: 'app.aside.menu.tableCopyAndPaste', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaClip' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fclip%2Fbase' } } },
            { i18nKey: 'app.aside.menu.tableRenderChart', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'areaBasicsEcharts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fecharts%2FareaBasicsEcharts' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditableRenderConfig',
          children: [
            { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentGridEditRenderInput' } },
            { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentGridEditRenderSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentGridEditRenderVxeIconPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeColorPicker', routerLink: { name: 'ComponentGridEditRenderVxeColorPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentGridEditRenderVxeDateRangePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentGridEditRenderVxeCascader' } },
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentGridEditRenderVxeTableSelect' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/edit/el-input`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableEventListen', routerLink: { name: 'ComponentGridEditRenderEvents' } },
            { i18nKey: 'app.aside.menu.tablePreventActivateEdit', routerLink: { name: 'ComponentGridEditRenderBeforeEdit' } },
            { i18nKey: 'app.aside.menu.tableEnableAndDisable', routerLink: { name: 'ComponentGridEditRenderEnabled' } },
            { i18nKey: 'app.aside.menu.tableDisableEdit', routerLink: { name: 'ComponentGridEditRenderDisableEdit' } },
            { i18nKey: 'app.aside.menu.tableToggleEditReadonly', routerLink: { name: 'ComponentGridEditRenderReadonly' } },
            {
              i18nKey: 'app.aside.menu.tableCustomRenderer',
              children: [
                { i18nKey: 'app.aside.menu.tableInputRenderer', routerLink: { name: 'ComponentGridEditRenderCustomRenserMyInput' } },
                { i18nKey: 'app.aside.menu.tableRendererCombination', routerLink: { name: 'ComponentGridEditRenderCustomRenserMixLabel' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditableRenderSlot',
          children: [
            { i18nKey: 'app.aside.menu.tableNativeInput', routerLink: { name: 'ComponentGridEditTemplateInput' } },
            { i18nKey: 'app.aside.menu.tableNativeSelect', routerLink: { name: 'ComponentGridEditTemplateSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeButton', routerLink: { name: 'ComponentGridEditTemplateVxeButton' } },
            { i18nKey: 'app.aside.menu.tableVxeInput', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
            { i18nKey: 'app.aside.menu.tableVxeNumberInput', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
            { i18nKey: 'app.aside.menu.tableVxeIconPicker', routerLink: { name: 'ComponentGridEditTemplateVxeIconPicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDatePicker', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeDateRangePicker', routerLink: { name: 'ComponentGridEditTemplateVxeDateRangePicker' } },
            { i18nKey: 'app.aside.menu.tableVxeSelect', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeTreeSelect', routerLink: { name: 'ComponentGridEditTemplateVxeTreeSelect' } },
            { i18nKey: 'app.aside.menu.tableVxeCascader', routerLink: { name: 'ComponentGridEditTemplateVxeCascader' } },
            { i18nKey: 'app.aside.menu.tableVxeTableSelect', routerLink: { name: 'ComponentGridEditTemplateVxeTableSelect' } },
            { i18nKey: 'app.aside.menu.tableVxePulldown', routerLink: { name: 'ComponentGridEditTemplateVxePulldown' } },
            { i18nKey: 'app.aside.menu.tableVxeModal', routerLink: { name: 'ComponentGridEditTemplateVxeModal' } },
            { i18nKey: 'app.aside.menu.tableVxeDrawer', routerLink: { name: 'ComponentGridEditTemplateVxeDrawer' } },
            { i18nKey: 'app.aside.menu.tablePreventActivateEdit', routerLink: { name: 'ComponentGridEditTemplateBeforeEdit' } },
            { i18nKey: 'app.aside.menu.tableDisableEdit', routerLink: { name: 'ComponentGridEditTemplateDisableEdit' } },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/grid/edit/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableDataValidation',
          children: [
            { i18nKey: 'app.aside.menu.tableValidationRulesConfig', routerLink: { name: 'ComponentGridValidateRules' } },
            { i18nKey: 'app.aside.menu.tableStringValidationRule', routerLink: { name: 'ComponentGridValidateString' } },
            { i18nKey: 'app.aside.menu.tableNumberValidationRule', routerLink: { name: 'ComponentGridValidateNumber' } },
            { i18nKey: 'app.aside.menu.tableRegexpValidationRule', routerLink: { name: 'ComponentGridValidateRegexp' } },
            { i18nKey: 'app.aside.menu.tableArrayValidationRule', routerLink: { name: 'ComponentGridValidateArray' } },
            { i18nKey: 'app.aside.menu.tableMultiRelatedFieldValidationRule', routerLink: { name: 'ComponentGridValidateField' } },
            { i18nKey: 'app.aside.menu.tableCustomValidationRule', routerLink: { name: 'ComponentGridValidateCustom' } },
            { i18nKey: 'app.aside.menu.tableValidationMode', routerLink: { name: 'ComponentGridValidateMode' } },
            { i18nKey: 'app.aside.menu.tableValidateSpecifiedCell', routerLink: { name: 'ComponentGridValidateValidateField' } },
            { i18nKey: 'app.aside.menu.tableErrorTipStyle', routerLink: { name: 'ComponentGridValidateTheme' } },
            { i18nKey: 'app.aside.menu.tableCopyPasteAndValidation', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2Fedit%2Fvalid' } } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentGridValidateTemplateEdit' } },
                { i18nKey: 'app.aside.menu.tableCustomErrorTipTemplate', routerLink: { name: 'ComponentGridValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableImplementCustomEdit',
          children: [
            {
              i18nKey: 'app.aside.menu.tableBasedOnListSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableDefaultAllEdit', routerLink: { name: 'ComponentGridCustomEditRewriteDefaulEdit' } },
                { i18nKey: 'app.aside.menu.tableButtonEdit', routerLink: { name: 'ComponentGridCustomEditRewriteMultiRow' } },
                { i18nKey: 'app.aside.menu.tableClickEdit', routerLink: { name: 'ComponentGridCustomEditRewriteClickEdit' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableBasedOnEditable',
              children: [
                { i18nKey: 'app.aside.menu.tableDefaultAllEdit', routerLink: { name: 'ComponentGridCustomEditMixingDefaulEdit' } },
                { i18nKey: 'app.aside.menu.tableDataValidation', routerLink: { name: 'ComponentGridCustomEditMixingValid' } },
                { i18nKey: 'app.aside.menu.tableCrud', routerLink: { name: 'ComponentGridCustomEditMixingClick' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
          children: [
            { i18nKey: 'app.aside.menu.tableCustomLayoutTemplate', routerLink: { name: 'ComponentGridTemplateLayout' } },
            { i18nKey: 'app.aside.menu.tableCustomFormTemplate', routerLink: { name: 'ComponentGridTemplateForm' } },
            { i18nKey: 'app.aside.menu.tableCustomPagerTemplate', routerLink: { name: 'ComponentGridTemplatePager' } },
            { i18nKey: 'app.aside.menu.tableCustomCellTemplate', routerLink: { name: 'ComponentGridTemplateDefault' } },
            { i18nKey: 'app.aside.menu.tableCustomTitleTemplate', routerLink: { name: 'ComponentGridTemplateTitle' } },
            { i18nKey: 'app.aside.menu.tableCustomHeaderTemplate', routerLink: { name: 'ComponentGridTemplateHeader' } },
            { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridTemplateFooter' } },
            { i18nKey: 'app.aside.menu.tableCustomCellTipTemplate', routerLink: { name: 'ComponentGridTemplateTooltip' } },
            { i18nKey: 'app.aside.menu.tableCustomSortButtonTemplate', routerLink: { name: 'ComponentGridTemplateSort' } },
            { i18nKey: 'app.aside.menu.tableCustomCheckboxTemplate', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
            { i18nKey: 'app.aside.menu.tableCustomRadioTemplate', routerLink: { name: 'ComponentGridTemplateRadio' } },
            { i18nKey: 'app.aside.menu.tableCustomExpandRowTemplate', routerLink: { name: 'ComponentGridTemplateContent' } },
            { i18nKey: 'app.aside.menu.tableCustomFilterTemplate', routerLink: { name: 'ComponentGridTemplateFilter' } },
            { i18nKey: 'app.aside.menu.tableCustomEditTemplate', routerLink: { name: 'ComponentGridTemplateEdit' } },
            { i18nKey: 'app.aside.menu.tableCustomCellValidationTemplate', routerLink: { name: 'ComponentGridTemplateValid' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableKeyboardNavigation',
          children: [
            { i18nKey: 'app.aside.menu.tableCellSelect', routerLink: { name: 'ComponentGridKeyboardSelected' } },
            { i18nKey: 'app.aside.menu.tableKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardKeyboard' } },
            { i18nKey: 'app.aside.menu.tableHighlightRow', routerLink: { name: 'ComponentGridKeyboardCurrRow' } },
            { i18nKey: 'app.aside.menu.tableHighlightColumn', routerLink: { name: 'ComponentGridKeyboardCurrColumn' } },
            { i18nKey: 'app.aside.menu.tableHighlightRowAndColumn', routerLink: { name: 'ComponentGridKeyboardCurrRowCol' } },
            { i18nKey: 'app.aside.menu.tableToggleSelectedStatus', routerLink: { name: 'ComponentGridKeyboardSelection' } },
            { i18nKey: 'app.aside.menu.tableTabAutoAddRow', routerLink: { name: 'ComponentGridKeyTabAppend' } },
            { i18nKey: 'app.aside.menu.tableEnterAutoAddRow', routerLink: { name: 'ComponentGridKeyboardEnterAppend' } },
            { i18nKey: 'app.aside.menu.tableEditableKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardEdit' } },
            { i18nKey: 'app.aside.menu.tableSetAppendEdit', routerLink: { name: 'ComponentGridKeyboardEditMethod' } },
            { i18nKey: 'app.aside.menu.tableTreeKeyboardOperation', routerLink: { name: 'ComponentGridKeyboardTree' } },
            { i18nKey: 'app.aside.menu.tableTreeEditable', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
            { i18nKey: 'app.aside.menu.tableUndoRedo', routerLink: { name: 'ComponentGridKeyboardUndoRedo' } },
            { i18nKey: 'app.aside.menu.tableContextMenuFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { i18nKey: 'app.aside.menu.tableCellSelectFullKeyboard', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaKeypad%2Fkeypad' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableExportData',
          children: [
            { i18nKey: 'app.aside.menu.tableExportData', routerLink: { name: 'ComponentGridExportBase' } },
            { i18nKey: 'app.aside.menu.tableExportTxt', routerLink: { name: 'ComponentGridExportTxt' } },
            { i18nKey: 'app.aside.menu.tableExportXml', routerLink: { name: 'ComponentGridExportXml' } },
            { i18nKey: 'app.aside.menu.tableExportHtml', routerLink: { name: 'ComponentGridExportHtml' } },
            { i18nKey: 'app.aside.menu.tableExportCsv', routerLink: { name: 'ComponentGridExportCsv' } },
            { i18nKey: 'app.aside.menu.tableExportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/grid/export`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableExportPdf', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/grid/export`, linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.tableCustomData', routerLink: { name: 'ComponentGridExportData' } },
            { i18nKey: 'app.aside.menu.tableFormatExportContent', routerLink: { name: 'ComponentGridExportExportMethod' } },
            { i18nKey: 'app.aside.menu.tableAdvancedExport', routerLink: { name: 'ComponentGridExportAdvanced' } },
            { i18nKey: 'app.aside.menu.tableModalParameters', routerLink: { name: 'ComponentGridExportModelOptions' } },
            { i18nKey: 'app.aside.menu.tableFeatureSettings', routerLink: { name: 'ComponentGridExportSettingOptions' } },
            { i18nKey: 'app.aside.menu.tableExcludeColumns', routerLink: { name: 'ComponentGridExportExcludeFields' } },
            { i18nKey: 'app.aside.menu.tableSpecifyColumns', routerLink: { name: 'ComponentGridExportIncludeFields' } },
            { i18nKey: 'app.aside.menu.tableCustomColumns', routerLink: { name: 'ComponentGridExportColumns' } },
            { i18nKey: 'app.aside.menu.tableDisableCheckColumn', routerLink: { name: 'ComponentGridExportCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableCellType', routerLink: { name: 'ComponentGridExportCellType' } },
            { i18nKey: 'app.aside.menu.tableRemoteExport', routerLink: { name: 'ComponentGridExportRemote' } },
            { i18nKey: 'app.aside.menu.tableCustomSaveType', routerLink: { name: 'ComponentGridExportTypes' } },
            { i18nKey: 'app.aside.menu.tableCustomSelectData', routerLink: { name: 'ComponentGridExportModes' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridExportTemplateTop' } },
                { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridExportTemplateBottom' } },
                { i18nKey: 'app.aside.menu.tableCustomParameterSettingTemplate', routerLink: { name: 'ComponentGridExportTemplateParameter' } },
                { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridExportTemplateFooter' } },
                { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridExportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableImportData',
          children: [
            { i18nKey: 'app.aside.menu.tableImportData', routerLink: { name: 'ComponentGridImportBase' } },
            { i18nKey: 'app.aside.menu.tableImportTxt', routerLink: { name: 'ComponentGridImportTxt' } },
            { i18nKey: 'app.aside.menu.tableImportXml', routerLink: { name: 'ComponentGridImportXml' } },
            { i18nKey: 'app.aside.menu.tableImportHtml', routerLink: { name: 'ComponentGridImportHtml' } },
            { i18nKey: 'app.aside.menu.tableImportCsv', routerLink: { name: 'ComponentGridImportCsv' } },
            { i18nKey: 'app.aside.menu.tableImportXlsx', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/grid/import` },
            { i18nKey: 'app.aside.menu.tableAdvancedImport', routerLink: { name: 'ComponentGridImportAdvanced' } },
            { i18nKey: 'app.aside.menu.tableRemoteImport', routerLink: { name: 'ComponentGridImportRemote' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridImportTemplateTop' } },
                { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridImportTemplateBottom' } },
                { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridImportTemplateFooter' } },
                { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridImportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tablePrintTable',
          children: [
            { i18nKey: 'app.aside.menu.tablePrintTable', routerLink: { name: 'ComponentGridPrintBase' } },
            { i18nKey: 'app.aside.menu.tableColumnWidth', routerLink: { name: 'ComponentGridPrintWidth' } },
            { i18nKey: 'app.aside.menu.tableCustomTopAndBottom', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
            { i18nKey: 'app.aside.menu.tableAdvancedPrint', routerLink: { name: 'ComponentGridPrintAdvanced' } },
            { i18nKey: 'app.aside.menu.tableModalParameters', routerLink: { name: 'ComponentGridPrintModelOptions' } },
            { i18nKey: 'app.aside.menu.tableFeatureSettings', routerLink: { name: 'ComponentGridPrintSettingOptions' } },
            { i18nKey: 'app.aside.menu.tableSpecifyColumns', routerLink: { name: 'ComponentGridPrintColumns' } },
            { i18nKey: 'app.aside.menu.tableDisableCheckColumn', routerLink: { name: 'ComponentGridPrintCheckMethod' } },
            { i18nKey: 'app.aside.menu.tableCustomHeaderTitle', routerLink: { name: 'ComponentGridPrintHeader' } },
            { i18nKey: 'app.aside.menu.tableCustomFooterPageNumber', routerLink: { name: 'ComponentGridPrintFooter' } },
            { i18nKey: 'app.aside.menu.tableSetMargin', routerLink: { name: 'ComponentGridPrintMargin' } },
            {
              i18nKey: 'app.aside.menu.tableCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.tableCustomTopTemplate', routerLink: { name: 'ComponentGridPrintTemplateTop' } },
                { i18nKey: 'app.aside.menu.tableCustomBottomTemplate', routerLink: { name: 'ComponentGridPrintTemplateBottom' } },
                { i18nKey: 'app.aside.menu.tableCustomParameterSettingTemplate', routerLink: { name: 'ComponentGridPrintTemplateParameter' } },
                { i18nKey: 'app.aside.menu.tableCustomFooterTemplate', routerLink: { name: 'ComponentGridPrintTemplateFooter' } },
                { i18nKey: 'app.aside.menu.tableCustomDefaultTemplate', routerLink: { name: 'ComponentGridPrintTemplateDefault' } }
              ]
            },
            { i18nKey: 'app.aside.menu.tablePrintMultiPage', routerLink: { name: 'ComponentGridPrintPage' } },
            { i18nKey: 'app.aside.menu.tablePrintMultipleTables', routerLink: { name: 'ComponentGridPrintMultilist' } },
            { i18nKey: 'app.aside.menu.tablePrintShippingOrder', routerLink: { name: 'ComponentGridPrintOrder' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableVirtualScrollLargeData',
          children: [
            { i18nKey: 'app.aside.menu.tableVerticalVirtualScroll', routerLink: { name: 'ComponentGridScrollVertical' } },
            { i18nKey: 'app.aside.menu.tableHorizontalVirtualScroll', routerLink: { name: 'ComponentGridScrollHorizontal' } },
            { i18nKey: 'app.aside.menu.tableCompactCell', routerLink: { name: 'ComponentGridScrollCompactV' } },
            { i18nKey: 'app.aside.menu.tableCompactCellEditable', routerLink: { name: 'ComponentGridScrollCompactEdit' } },
            { i18nKey: 'app.aside.menu.tableHeaderAutoWrap', routerLink: { name: 'ComponentGridScrollColBreak' } },
            { i18nKey: 'app.aside.menu.tableVerticalAndHorizontal', routerLink: { name: 'ComponentGridScrollHV' }, keywords: 'loadData,reloadData,loadColumn,reloadColumn' },
            { i18nKey: 'app.aside.menu.tableSortAndFilter', routerLink: { name: 'ComponentGridScrollHFull' } },
            { i18nKey: 'app.aside.menu.tableFunctionalLoadData', routerLink: { name: 'ComponentGridScrollLoadData' } },
            { i18nKey: 'app.aside.menu.tableFixedColumnComplexRender', routerLink: { name: 'ComponentGridScrollFixed' } },
            { i18nKey: 'app.aside.menu.tableComplexRenderManyDropdowns', routerLink: { name: 'ComponentGridScrollSelect' } },
            // { i18nKey: 'app.aside.menu.tableScrollModeComplexRender', routerLink: { name: 'ComponentGridScrollMode' } },
            { i18nKey: 'app.aside.menu.tableAutoColumnWidth', routerLink: { name: 'ComponentGridScrollAutoColumnWidth' } },
            { i18nKey: 'app.aside.menu.tableSetEqualRowHeight', routerLink: { name: 'ComponentGridScrollRowHeight' } },
            { i18nKey: 'app.aside.menu.tableAutoRowHeight', routerLink: { name: 'ComponentGridScrollAutoRowHeight' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableAutoRowHeightVH', routerLink: { name: 'ComponentGridScrollAutoRowVH' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableAutoRowHeightComplexRender', routerLink: { name: 'ComponentGridScrollAutoRowFixed' }, keywords: '自适应行高,自适应高度,auto-height' },
            { i18nKey: 'app.aside.menu.tableSetDifferentAndAutoRowHeight', routerLink: { name: 'ComponentGridScrollSetRowHeight' } },
            { i18nKey: 'app.aside.menu.tableDragReorderRow', routerLink: { name: 'ComponentGridScrollDragRow' } },
            { i18nKey: 'app.aside.menu.tableDragReorderColumn', routerLink: { name: 'ComponentGridScrollDragCol' } },
            { i18nKey: 'app.aside.menu.tableUseGroupHeader', routerLink: { name: 'ComponentGridScrollGroup' } },
            { i18nKey: 'app.aside.menu.tableUseFooter', routerLink: { name: 'ComponentGridScrollFooter' } },
            { i18nKey: 'app.aside.menu.tableMergeRowsAndColumns', routerLink: { name: 'ComponentGridScrollMerge' } },
            { i18nKey: 'app.aside.menu.tableMergeAndComplexFeatures', routerLink: { name: 'ComponentGridScrollMergeFixed' } },
            { i18nKey: 'app.aside.menu.tableTreeVertical', routerLink: { name: 'ComponentGridScrollTree' } },
            { i18nKey: 'app.aside.menu.tableTreeVH', routerLink: { name: 'ComponentGridScrollHVTree' } },
            { i18nKey: 'app.aside.menu.tableTreeDragVertical', routerLink: { name: 'ComponentGridScrollDragTree' } },
            { i18nKey: 'app.aside.menu.tableExpandRow', routerLink: { name: 'ComponentGridScrollExpand' } },
            { i18nKey: 'app.aside.menu.tableExpandRowComplexChildRender', routerLink: { name: 'ComponentGridScrollExpandFixed' } },
            { i18nKey: 'app.aside.menu.tableEditableVertical', routerLink: { name: 'ComponentGridScrollEdit' } },
            { i18nKey: 'app.aside.menu.tableEditableVH', routerLink: { name: 'ComponentGridScrollHVEdit' } },
            { i18nKey: 'app.aside.menu.tableMillionData', routerLink: { name: 'ComponentGridScrollBigData' }, keywords: 'big' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableDataProxy',
          children: [
            { i18nKey: 'app.aside.menu.tableQueryApi', routerLink: { name: 'ComponentGridProxyQuery' } },
            { i18nKey: 'app.aside.menu.tablePaginationQueryApi', routerLink: { name: 'ComponentGridProxyPager' } },
            { i18nKey: 'app.aside.menu.tableManualCallPager', routerLink: { name: 'ComponentGridProxyManualPager' } },
            { i18nKey: 'app.aside.menu.tableToolbarQuery', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
            { i18nKey: 'app.aside.menu.tableManualCallQuery', routerLink: { name: 'ComponentGridProxyManualQuery' } },
            { i18nKey: 'app.aside.menu.tableIntegratedSortQuery', routerLink: { name: 'ComponentGridProxySort' } },
            { i18nKey: 'app.aside.menu.tableManualCallSort', routerLink: { name: 'ComponentGridProxyManualSort' } },
            { i18nKey: 'app.aside.menu.tableIntegratedFilterQuery', routerLink: { name: 'ComponentGridProxyFilter' } },
            { i18nKey: 'app.aside.menu.tableIntegratedFormQuery', routerLink: { name: 'ComponentGridProxyForm' } },
            { i18nKey: 'app.aside.menu.tableIntegratedFooterQuery', routerLink: { name: 'ComponentGridProxyFooter' } },
            { i18nKey: 'app.aside.menu.tableIntegratedPagerSeq', routerLink: { name: 'ComponentGridProxySeq' } },
            { i18nKey: 'app.aside.menu.tableToolbarFullDataExport', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
            { i18nKey: 'app.aside.menu.tableToolbarRemoteExport', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
            { i18nKey: 'app.aside.menu.tableToolbarDeleteSelected', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
            { i18nKey: 'app.aside.menu.tableManualCallDeleteSelected', routerLink: { name: 'ComponentGridProxyManualDelete' } },
            { i18nKey: 'app.aside.menu.tableToolbarBatchMarkDelete', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
            { i18nKey: 'app.aside.menu.tableManualCallMarkDeleteStatus', routerLink: { name: 'ComponentGridProxyManualMark' } },
            { i18nKey: 'app.aside.menu.tableToolbarCrud', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
            { i18nKey: 'app.aside.menu.tableManualCallCrud', routerLink: { name: 'ComponentGridProxyManualSave' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableTableSearch',
          children: [
            { i18nKey: 'app.aside.menu.tableImplementTableSearch', routerLink: { name: 'ComponentGridSearchList' } },
            { i18nKey: 'app.aside.menu.tableImplementTreeTableSearch', routerLink: { name: 'ComponentGridSearchTree' } },
            { i18nKey: 'app.aside.menu.tableFindAndReplace', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaFNR' } } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableScrollbar',
          children: [
            {
              i18nKey: 'app.aside.menu.tableNativeScrollbar',
              children: [
                { i18nKey: 'app.aside.menu.tableShowOrNot', routerLink: { name: 'ComponentGridScrollbarNativeBarVisible' } },
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentGridScrollbarNativeBarStyle' } },
                { i18nKey: 'app.aside.menu.tableScrollbarPosition', routerLink: { name: 'ComponentGridScrollbarNativeBarPos' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.tableVirtualScrollbar',
              children: [
                { i18nKey: 'app.aside.menu.tableUseScrollbar', routerLink: { name: 'ComponentGridScrollbarUseScrollbarScrollbar' } },
                { i18nKey: 'app.aside.menu.tableScrollbarWidth', routerLink: { name: 'ComponentGridScrollbarUseScrollbarBarWidth' } },
                { i18nKey: 'app.aside.menu.tableScrollbarColor', routerLink: { name: 'ComponentGridScrollbarUseScrollbarBarColor' } },
                { i18nKey: 'app.aside.menu.tableDisplayPosition', routerLink: { name: 'ComponentGridScrollbarUseScrollbarPosition' } },
                { i18nKey: 'app.aside.menu.tableAutoHide', routerLink: { name: 'ComponentGridScrollbarUseScrollbarAutoHide' } },
                { i18nKey: 'app.aside.menu.tableFloatingScrollbar', routerLink: { name: 'ComponentGridScrollbarUseScrollbarFluentOverlay' } }
              ]
            }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEventListen',
          children: [
            { i18nKey: 'app.aside.menu.tableReady', routerLink: { name: 'ComponentGridEventsReady' } },
            { i18nKey: 'app.aside.menu.tableDataLoadEvent', routerLink: { name: 'ComponentGridEventsRendered' } },
            { i18nKey: 'app.aside.menu.tableClickDblclickEvent', routerLink: { name: 'ComponentGridEventsClick' } },
            { i18nKey: 'app.aside.menu.tableScrollEvent', routerLink: { name: 'ComponentGridEventsScroll' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableInfiniteLoading',
          children: [
            { i18nKey: 'app.aside.menu.tableLoadRows', routerLink: { name: 'ComponentGridLoadMoreVertical' } },
            { i18nKey: 'app.aside.menu.tableLoadColumns', routerLink: { name: 'ComponentGridLoadMoreHorizontal' } },
            { i18nKey: 'app.aside.menu.tableLoadRowsAndColumns', routerLink: { name: 'ComponentGridLoadMoreVH' } },
            { i18nKey: 'app.aside.menu.tableLoadRowsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryY' } },
            { i18nKey: 'app.aside.menu.tableLoadColumnsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryX' } },
            { i18nKey: 'app.aside.menu.tableLoadRowsAndColumnsByThreshold', routerLink: { name: 'ComponentGridLoadMoreBoundaryXY' } }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFeatureExamples',
          children: [
            { i18nKey: 'app.aside.menu.tableCustomSeqField', routerLink: { name: 'ComponentGridOtherSeqField' } },
            { i18nKey: 'app.aside.menu.tableCompactCell', routerLink: { name: 'ComponentGridOtherCompactCell' } },
            { i18nKey: 'app.aside.menu.tableCellPerformanceOptimization', routerLink: { name: 'ComponentGridOtherOptimization' } },
            { i18nKey: 'app.aside.menu.tableActionColumnShowHide', routerLink: { name: 'ComponentGridOtherVisibleColumn' } },
            { i18nKey: 'app.aside.menu.tableCollapsibleColumn', routerLink: { name: 'ComponentGridOtherCollapseColumn' } },
            { i18nKey: 'app.aside.menu.tableUseInTabs', routerLink: { name: 'ComponentGridOtherTabs' } },
            { i18nKey: 'app.aside.menu.tableScrollToRowColumnUsage', routerLink: { name: 'ComponentGridOtherScrollTo' } },
            { i18nKey: 'app.aside.menu.tableAutoScrollData', routerLink: { name: 'ComponentGridOtherAutoScroll' } },
            { i18nKey: 'app.aside.menu.tableTimedDataUpdate', routerLink: { name: 'ComponentGridOtherAutoIncrement' } },
            { i18nKey: 'app.aside.menu.tableReverseColumnsAndRows', routerLink: { name: 'ComponentGridOtherReverse' } },
            { i18nKey: 'app.aside.menu.tableUploadFileList', routerLink: { name: 'ComponentGridOtherFileList' } },
            { i18nKey: 'app.aside.menu.tableMultilineTextEllipsis', routerLink: { name: 'ComponentGridOtherLineEllipsis' } },
            { i18nKey: 'app.aside.menu.tableMinAndAutoRowHeight', routerLink: { name: 'ComponentGridOtherMinAutoRowHeight' } },
            { i18nKey: 'app.aside.menu.tableDynamicMonthHeader', routerLink: { name: 'ComponentGridOtherYearMonth' } },
            { i18nKey: 'app.aside.menu.tablePaginationCheckboxSelection', routerLink: { name: 'ComponentGridOtherPageCheckbox' } },
            { i18nKey: 'app.aside.menu.tableBookkeepingVoucher', routerLink: { name: 'ComponentGridOtherBookkeepingVoucher' } },
            { i18nKey: 'app.aside.menu.tableCellDragResizeWidthHeight', routerLink: { name: 'ComponentGridOtherAllRowColDrag' } },
            { i18nKey: 'app.aside.menu.tablePasteUpload', routerLink: { name: 'ComponentGridOtherPasteToUpload' } },
            { i18nKey: 'app.aside.menu.tableLeftTreeRightTable', routerLink: { name: 'ComponentGridOtherLeftRight' } },
            { i18nKey: 'app.aside.menu.tableTableTransferSelection', routerLink: { name: 'ComponentGridOtherTableTransfer' } },
            { i18nKey: 'app.aside.menu.tableTreeChildCustomHeader', routerLink: { name: 'ComponentGridOtherTreeSubCols' } },
            { i18nKey: 'app.aside.menu.tableProductComparisonTable', routerLink: { name: 'ComponentGridOtherCompareTable' } },
            { i18nKey: 'app.aside.menu.tableComplexGroupColumnsAndMergeCategory', routerLink: { name: 'ComponentGridOtherRowColMerge' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableOtherPlugin',
      icon: 'vxe-icon-more',
      children: [
        { i18nKey: 'app.aside.menu.tableCellChartPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-chart/grid/bar`, linkTarget: '_blank' },
        { i18nKey: 'app.aside.menu.tableContextMenuPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full`, linkTarget: '_blank' },
        { i18nKey: 'app.aside.menu.tableValidationPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/table/base`, linkTarget: '_blank' },
        { i18nKey: 'app.aside.menu.tableExportXlsxPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-xlsx/table/export`, linkTarget: '_blank' },
        { i18nKey: 'app.aside.menu.tableExportPdfPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-export-pdf/table/export`, linkTarget: '_blank' },
        { i18nKey: 'app.aside.menu.tableMoreThirdPartyPlugins', isPlugin: true, linkUrl: `${otherUrl}`, linkTarget: '_blank' }
      ]
    },
    {
      i18nKey: 'app.aside.menu.cssVar',
      icon: 'vxe-icon-style',
      children: [
        { i18nKey: 'app.aside.menu.tableFontSize', routerLink: { name: 'CssVarTableFontSize' } },
        { i18nKey: 'app.aside.menu.tableFontColor', routerLink: { name: 'CssVarTableFontColor' } },
        { i18nKey: 'app.aside.menu.tableCellBorder', routerLink: { name: 'CssVarTableBorder' } },
        { i18nKey: 'app.aside.menu.tableBackgroundColor', routerLink: { name: 'CssVarTableBackground' } },
        { i18nKey: 'app.aside.menu.tableStripeBackgroundColor', routerLink: { name: 'CssVarTableStripe' } },
        { i18nKey: 'app.aside.menu.tableRound', routerLink: { name: 'CssVarTableRound' } },
        { i18nKey: 'app.aside.menu.tableRowColumnHoverBackgroundColor', routerLink: { name: 'CssVarTableRowColHover' } },
        { i18nKey: 'app.aside.menu.tableCurrentRowColumnBackgroundColor', routerLink: { name: 'CssVarTableRowColCurrent' } },
        { i18nKey: 'app.aside.menu.tableCellDefaultHeight', routerLink: { name: 'CssVarTableRowHeight' } },
        { i18nKey: 'app.aside.menu.tableValidationTipBox', routerLink: { name: 'CssVarTableValid' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalFormats',
      icon: 'vxe-icon-code',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
        { i18nKey: 'app.aside.menu.tableCell', routerLink: { name: 'GlobalFormatsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalMenus',
      icon: 'vxe-icon-menu',
      children: [
        { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
        { i18nKey: 'app.aside.menu.tableContextMenu', routerLink: { name: 'GlobalMenusTableBase' } },
        { i18nKey: 'app.aside.menu.tableConvenientCodePlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-menu/table/full`, linkTarget: '_blank' }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalCommands',
      icon: 'vxe-icon-tree-select',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
        { i18nKey: 'app.aside.menu.tableToolbar', routerLink: { name: 'GlobalCommandsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalValidators',
      icon: 'vxe-icon-warning-circle',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
        { i18nKey: 'app.aside.menu.tableCellValidation', routerLink: { name: 'GlobalValidatorsTableBase' } },
        { i18nKey: 'app.aside.menu.tableConvenientValidationConfigPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/table/base`, linkTarget: '_blank' }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      icon: 'vxe-icon-code',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          i18nKey: 'app.aside.menu.tableCell',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererTableDefaultApi' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableCellHyperlink', routerLink: { name: 'GlobalRendererTableDefaultMyLink' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableCellImagePreview', routerLink: { name: 'GlobalRendererTableDefaultMyImg' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableCellAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyAmount' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableHeaderHyperlink', routerLink: { name: 'GlobalRendererTableDefaultMyHeaderLink' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableFooterAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyFooterAmount' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableFullAmountFormat', routerLink: { name: 'GlobalRendererTableDefaultMyFullAmount' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableCommonActionButton', routerLink: { name: 'GlobalRendererTableDefaultMyCellBtn' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableUseFormatter', routerLink: { name: 'GlobalRendererTableDefaultMyCellStyle' }, keywords: 'cell-render' },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/cell/el-switch`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEditable',
          children: [
            { i18nKey: 'app.aside.menu.tableAmountInput', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' }, keywords: 'edit-render' },
            { i18nKey: 'app.aside.menu.tableDropdownTable', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' }, keywords: 'edit-render' },
            { i18nKey: 'app.aside.menu.tableCombineWithCellRender', routerLink: { name: 'GlobalRendererTableEditMixRender' }, keywords: 'edit-render' },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/edit/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableExpandRow',
          children: [
            { i18nKey: 'app.aside.menu.tableExpandList', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' }, keywords: 'content-render' },
            { i18nKey: 'app.aside.menu.tableExpandTable', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' }, keywords: 'content-render' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableToolbar',
          children: [
            { i18nKey: 'app.aside.menu.tableLeftActionButtons', routerLink: { name: 'GlobalRendererTableToolbarBtn' }, keywords: 'button-render' },
            { i18nKey: 'app.aside.menu.tableRightToolButtons', routerLink: { name: 'GlobalRendererTableToolbarTool' }, keywords: 'tool-render' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableFilter',
          children: [
            { i18nKey: 'app.aside.menu.tableInputFilterExample', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' }, keywords: 'filter-render' },
            { i18nKey: 'app.aside.menu.tableMultiConditionFilter', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' }, keywords: 'filter-render' },
            { i18nKey: 'app.aside.menu.tableListDisplayFilter', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' }, keywords: 'filter-render' },
            { i18nKey: 'app.aside.menu.tableIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/table/filter/el-input`, linkTarget: '_blank', keywords: 'filter-render' },
            { i18nKey: 'app.aside.menu.tableMoreFilterPlugins', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/', linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.tableEmptyTip',
          children: [
            { i18nKey: 'app.aside.menu.tableEmptyTextDisplay', routerLink: { name: 'GlobalRendererTableMyEmptyImg' }, keywords: 'empty-render' },
            { i18nKey: 'app.aside.menu.tableEmptyImageDisplay', routerLink: { name: 'GlobalRendererTableMyEmptyText' }, keywords: 'empty-render' }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalInterceptor',
      icon: 'vxe-icon-no-drop',
      children: [
        { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
        { i18nKey: 'app.aside.menu.tableEditableCompatibilityHandling', routerLink: { name: 'GlobalInterceptorTableBase' } }
      ]
    }
  ]
}
