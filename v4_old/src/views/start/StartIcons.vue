<template>
  <div>
    <h2>{{ $t('app.aside.nav.icons') }}</h2>
    <p class="tip">如果项目已有适合的图标，可通过配置替换并自行调整相关的样式即可</p>
    <pre>
      <pre-code class="typescript">
        import { VxeUI } from 'vxe-table'

        VxeUI.setIcon({
          // table
          TABLE_SORT_ASC: 'vxe-icon-caret-up',
          TABLE_SORT_DESC: 'vxe-icon-caret-down',
          TABLE_FILTER_NONE: 'vxe-icon-funnel',
          TABLE_FILTER_MATCH: 'vxe-icon-funnel',
          TABLE_EDIT: 'vxe-icon-edit',
          TABLE_HELP: 'vxe-icon-question-circle-fill',
          TABLE_TREE_LOADED: 'vxe-icon-spinner roll',
          TABLE_TREE_OPEN: 'vxe-icon-caret-right rotate90',
          TABLE_TREE_CLOSE: 'vxe-icon-caret-right',
          TABLE_EXPAND_LOADED: 'vxe-icon-spinner roll',
          TABLE_EXPAND_OPEN: 'vxe-icon-arrow-right rotate90',
          TABLE_EXPAND_CLOSE: 'vxe-icon-arrow-right',
          TABLE_CHECKBOX_CHECKED: 'vxe-icon-checkbox-checked',
          TABLE_CHECKBOX_UNCHECKED: 'vxe-icon-checkbox-unchecked',
          TABLE_CHECKBOX_INDETERMINATE: 'vxe-icon-checkbox-indeterminate',
          TABLE_RADIO_CHECKED: 'vxe-icon-radio-checked',
          TABLE_RADIO_UNCHECKED: 'vxe-icon-radio-unchecked',

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
          TOOLBAR_TOOLS_FIXED_LEFT_ACTIVED: 'vxe-icon-fixed-left-fill',
          TOOLBAR_TOOLS_FIXED_RIGHT: 'vxe-icon-fixed-right',
          TOOLBAR_TOOLS_FIXED_RIGHT_ACTIVED: 'vxe-icon-fixed-right-fill',
        })
      </pre-code>
    </pre>
  </div>
</template>
