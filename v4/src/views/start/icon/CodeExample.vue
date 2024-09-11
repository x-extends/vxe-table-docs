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
              TABLE_SORT_ASC: iconPrefix + 'caret-up',
              TABLE_SORT_DESC: iconPrefix + 'caret-down',
              TABLE_FILTER_NONE: iconPrefix + 'funnel',
              TABLE_FILTER_MATCH: iconPrefix + 'funnel',
              TABLE_EDIT: iconPrefix + 'edit',
              TABLE_TITLE_PREFIX: iconPrefix + 'question-circle-fill',
              TABLE_TITLE_SUFFIX: iconPrefix + 'question-circle-fill',
              TABLE_TREE_LOADED: iconPrefix + 'spinner roll',
              TABLE_TREE_OPEN: iconPrefix + 'caret-right rotate90',
              TABLE_TREE_CLOSE: iconPrefix + 'caret-right',
              TABLE_EXPAND_LOADED: iconPrefix + 'spinner roll',
              TABLE_EXPAND_OPEN: iconPrefix + 'arrow-right rotate90',
              TABLE_EXPAND_CLOSE: iconPrefix + 'arrow-right',
              TABLE_CHECKBOX_CHECKED: iconPrefix + 'checkbox-checked-fill',
              TABLE_CHECKBOX_UNCHECKED: iconPrefix + 'checkbox-unchecked',
              TABLE_CHECKBOX_INDETERMINATE: iconPrefix + 'checkbox-indeterminate-fill',
              TABLE_RADIO_CHECKED: iconPrefix + 'radio-checked-fill',
              TABLE_RADIO_UNCHECKED: iconPrefix + 'radio-unchecked',
              TABLE_CUSTOM_SORT: iconPrefix + 'drag-handle',
              TABLE_MENU_OPTIONS: iconPrefix + 'arrow-right',

              // toolbar
              TOOLBAR_TOOLS_REFRESH: iconPrefix + 'repeat',
              TOOLBAR_TOOLS_REFRESH_LOADING: iconPrefix + 'repeat roll',
              TOOLBAR_TOOLS_IMPORT: iconPrefix + 'upload',
              TOOLBAR_TOOLS_EXPORT: iconPrefix + 'download',
              TOOLBAR_TOOLS_PRINT: iconPrefix + 'print',
              TOOLBAR_TOOLS_FULLSCREEN: iconPrefix + 'fullscreen',
              TOOLBAR_TOOLS_MINIMIZE: iconPrefix + 'minimize',
              TOOLBAR_TOOLS_CUSTOM: iconPrefix + 'custom-column',
              TOOLBAR_TOOLS_FIXED_LEFT: iconPrefix + 'fixed-left',
              TOOLBAR_TOOLS_FIXED_LEFT_ACTIVE: iconPrefix + 'fixed-left-fill',
              TOOLBAR_TOOLS_FIXED_RIGHT: iconPrefix + 'fixed-right',
              TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVE: iconPrefix + 'fixed-right-fill'
            })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
