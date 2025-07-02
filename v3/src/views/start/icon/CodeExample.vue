<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过调用 VxeUI.setIcon({ ... }) 方法可以全局替换组件内置的图标
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code language="javascript">
            import { VxeUI } from 'vxe-table'
            // VxeUI 是 Vxe 库通用全局实例（也可以使用旧别名 VXETable）

            VxeUI.setIcon({
              // table
              TABLE_SORT_ASC: 'vxe-table-icon-caret-up',
              TABLE_SORT_DESC: 'vxe-table-icon-caret-down',
              TABLE_FILTER_NONE: 'vxe-table-icon-funnel',
              TABLE_FILTER_MATCH: 'vxe-table-icon-funnel',
              TABLE_EDIT: 'vxe-table-icon-edit',
              TABLE_TITLE_PREFIX: 'vxe-table-icon-question-circle-fill',
              TABLE_TITLE_SUFFIX: 'vxe-table-icon-question-circle-fill',
              TABLE_TREE_LOADED: 'vxe-table-icon-spinner roll',
              TABLE_TREE_OPEN: 'vxe-table-icon-caret-right rotate90',
              TABLE_TREE_CLOSE: 'vxe-table-icon-caret-right',
              TABLE_EXPAND_LOADED: 'vxe-table-icon-spinner roll',
              TABLE_EXPAND_OPEN: 'vxe-table-icon-arrow-right rotate90',
              TABLE_EXPAND_CLOSE: 'vxe-table-icon-arrow-right',
              TABLE_CHECKBOX_CHECKED: 'vxe-table-icon-checkbox-checked-fill',
              TABLE_CHECKBOX_UNCHECKED: 'vxe-table-icon-checkbox-unchecked',
              TABLE_CHECKBOX_INDETERMINATE: 'vxe-table-icon-checkbox-indeterminate-fill',
              TABLE_CHECKBOX_DISABLED_UNCHECKED: 'vxe-table-icon-checkbox-unchecked-fill',
              TABLE_RADIO_CHECKED: 'vxe-table-icon-radio-checked-fill',
              TABLE_RADIO_UNCHECKED: 'vxe-table-icon-radio-unchecked',
              TABLE_RADIO_DISABLED_UNCHECKED: 'vxe-table-icon-radio-unchecked-fill',
              TABLE_CUSTOM_SORT: 'vxe-table-icon-drag-handle',
              TABLE_MENU_OPTIONS: 'vxe-table-icon-arrow-right',
              TABLE_DRAG_ROW: 'vxe-table-icon-drag-handle',
              TABLE_DRAG_COLUMN: 'vxe-table-icon-drag-handle',
              TABLE_DRAG_STATUS_ROW: 'vxe-table-icon-sort',
              TABLE_DRAG_STATUS_SUB_ROW: 'vxe-table-icon-add-sub',
              TABLE_DRAG_STATUS_AGG_GROUP: 'vxe-table-icon-grouping',
              TABLE_DRAG_STATUS_AGG_VALUES: 'vxe-table-icon-values',
              TABLE_DRAG_STATUS_COLUMN: 'vxe-table-icon-swap',
              TABLE_DRAG_DISABLED: 'vxe-table-icon-no-drop',
              TABLE_ROW_GROUP_OPEN: 'vxe-table-icon-arrow-right rotate90',
              TABLE_ROW_GROUP_CLOSE: 'vxe-table-icon-arrow-right',
              TABLE_AGGREGATE_GROUPING: 'vxe-table-icon-grouping',
              TABLE_AGGREGATE_VALUES: 'vxe-table-icon-values',
              TABLE_AGGREGATE_SORT: 'vxe-table-icon-drag-handle',
              TABLE_AGGREGATE_DELETE: 'vxe-table-icon-close',

              // toolbar
              TOOLBAR_TOOLS_REFRESH: 'vxe-table-icon-repeat',
              TOOLBAR_TOOLS_REFRESH_LOADING: 'vxe-table-icon-repeat roll',
              TOOLBAR_TOOLS_IMPORT: 'vxe-table-icon-upload',
              TOOLBAR_TOOLS_EXPORT: 'vxe-table-icon-download',
              TOOLBAR_TOOLS_PRINT: 'vxe-table-icon-print',
              TOOLBAR_TOOLS_FULLSCREEN: 'vxe-table-icon-fullscreen',
              TOOLBAR_TOOLS_MINIMIZE: 'vxe-table-icon-minimize',
              TOOLBAR_TOOLS_CUSTOM: 'vxe-table-icon-custom-column',
              TOOLBAR_TOOLS_FIXED_LEFT: 'vxe-table-icon-fixed-left',
              TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: 'vxe-table-icon-fixed-left-fill',
              TOOLBAR_TOOLS_FIXED_RIGHT: 'vxe-table-icon-fixed-right',
              TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: 'vxe-table-icon-fixed-right-fill'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
