<template>
  <div>
    <vxe-tip status="primary" title="全局校验">将表格中单元格的校验函数注册成全局可复用，对于实现低代码/零代码平台时非常有用，可以实现完全配置化。</vxe-tip>
    <vxe-tip status="success">
      <div>调用方式： VxeUI.validators.add(code, options)</div>
    </vxe-tip>

    <vxe-table
      :tree-config="{childrenField: 'list', expandAll: true}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" :title="$t('api.title.prop')" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" :title="$t('api.title.desc')" min-width="200"></vxe-column>
      <vxe-column field="type" :title="$t('api.title.type')" min-width="140"></vxe-column>
      <vxe-column field="enum" :title="$t('api.title.enum')" min-width="150"></vxe-column>
      <vxe-column field="defVal" :title="$t('api.title.defVal')" min-width="160"></vxe-column>
    </vxe-table>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    const tableData = [
      {
        name: 'add(code, option)',
        desc: '添加',
        type: '',
        enum: '',
        defVal: 'code: string, option: any',
        list: [
          {
            name: 'tableCellValidatorMethod',
            desc: '自定义单元格校验方法',
            type: '',
            enum: '',
            defVal: '(params: { cellValue, field, row, rowIndex, column, columnIndex, rule, rules, $table })  => void | Error | Promise<any>',
            list: []
          }
        ]
      },
      {
        name: 'mixin(opts)',
        desc: '添加多个，参数跟 add 一致',
        version: '',
        type: '',
        enum: '',
        defVal: 'options: Record<string, option>',
        list: []
      },
      {
        name: 'delete(code)',
        desc: '删除',
        type: '',
        enum: '',
        defVal: 'code: string',
        list: []
      }
    ]

    return {
      tableData
    }
  }
})
</script>
