<template>
  <div>
    <h1>{{ $t('app.aside.nav.validators') }}</h1>
    <p class="tip">将表格和表单校验注册成全局可复用的</p>

    <vxe-table
      :tree-config="{children: 'list'}"
      :row-config="{isCurrent: true, isHover: true}"
      :column-config="{resizable: true, isCurrent: true}"
      :data="tableData">
      <vxe-column field="name" title="app.api.title.prop" min-width="280" tree-node></vxe-column>
      <vxe-column field="desc" title="app.api.title.desc" min-width="200"></vxe-column>
      <vxe-column field="type" title="app.api.title.type" min-width="140"></vxe-column>
      <vxe-column field="enum" title="app.api.title.enum" min-width="150"></vxe-column>
      <vxe-column field="defVal" title="app.api.title.defVal" min-width="160"></vxe-column>
    </vxe-table>

    <CodeLight path="global/validators/Demo1" :extraImports="['global/validators/demo1.validators']">
      <template #tip>
        <div>表单示例</div>
      </template>
    </CodeLight>

    <CodeLight path="global/validators/Demo2" :extraImports="['global/validators/demo2.validators']">
      <template #tip>
        <div>表格示例</div>
      </template>
    </CodeLight>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: 'add(code, options)',
          desc: '添加一个',
          type: '',
          enum: '',
          defVal: 'code: string, options: { itemValidatorMethod, cellValidatorMethod }',
          list: [
            {
              name: 'itemValidatorMethod',
              desc: '表单项校验',
              type: '',
              enum: '',
              defVal: '({ itemValue, rule, rules, data, property }) => Error | Promise<any>',
              list: []
            },
            {
              name: 'cellValidatorMethod',
              desc: '表格单元格校验',
              type: '',
              enum: '',
              defVal: '({ cellValue, rule, rules, row, rowIndex，column, columnIndex }) => Error | Promise<any>',
              list: []
            }
          ]
        },
        {
          name: 'mixin(opts)',
          desc: '添加多个',
          type: '',
          enum: '',
          defVal: 'opts: { [code: string]: options }',
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
    }
  }
}
</script>
