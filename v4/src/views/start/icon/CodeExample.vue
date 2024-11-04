<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过调用 setIcon({ ... }) 方法可以全局替换组件内置的图标
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="javascript">
            import { VxeUI } from 'vxe-table'

            VxeUI.setIcon({
              // table
              TABLE_SORT_ASC: 'vxe-icon-caret-up',
              TABLE_SORT_DESC: 'vxe-icon-caret-down',
              TABLE_FILTER_NONE: 'vxe-icon-funnel',
              TABLE_FILTER_MATCH: 'vxe-icon-funnel',
              TABLE_EDIT: 'vxe-icon-edit',
              TABLE_TITLE_PREFIX: 'vxe-icon-question-circle-fill',
              TABLE_TITLE_SUFFIX: 'vxe-icon-question-circle-fill',
              TABLE_TREE_LOADED: 'vxe-icon-spinner roll',
              TABLE_TREE_OPEN: 'vxe-icon-caret-right rotate90',
              TABLE_TREE_CLOSE: 'vxe-icon-caret-right',
              TABLE_EXPAND_LOADED: 'vxe-icon-spinner roll',
              TABLE_EXPAND_OPEN: 'vxe-icon-arrow-right rotate90',
              TABLE_EXPAND_CLOSE: 'vxe-icon-arrow-right',
              TABLE_CHECKBOX_CHECKED: 'vxe-icon-checkbox-checked-fill',
              TABLE_CHECKBOX_UNCHECKED: 'vxe-icon-checkbox-unchecked',
              TABLE_CHECKBOX_INDETERMINATE: 'vxe-icon-checkbox-indeterminate-fill',
              TABLE_RADIO_CHECKED: 'vxe-icon-radio-checked-fill',
              TABLE_RADIO_UNCHECKED: 'vxe-icon-radio-unchecked',
              TABLE_CUSTOM_SORT: 'vxe-icon-drag-handle',
              TABLE_MENU_OPTIONS: 'vxe-icon-arrow-right',

              // toolbar
              TOOLBAR_TOOLS_REFRESH: 'vxe-icon-repeat',
              TOOLBAR_TOOLS_REFRESH_LOADING: 'vxe-icon-repeat roll',
              TOOLBAR_TOOLS_IMPORT: 'vxe-icon-upload',
              TOOLBAR_TOOLS_EXPORT: 'vxe-icon-download',
              TOOLBAR_TOOLS_PRINT: 'vxe-icon-print',
              TOOLBAR_TOOLS_FULLSCREEN: 'vxe-icon-fullscreen',
              TOOLBAR_TOOLS_MINIMIZE: 'vxe-icon-minimize',
              TOOLBAR_TOOLS_CUSTOM: 'vxe-icon-custom-column',
              TOOLBAR_TOOLS_FIXED_LEFT: 'vxe-icon-fixed-left',
              TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: 'vxe-icon-fixed-left-fill',
              TOOLBAR_TOOLS_FIXED_RIGHT: 'vxe-icon-fixed-right',
              TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: 'vxe-icon-fixed-right-fill'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
