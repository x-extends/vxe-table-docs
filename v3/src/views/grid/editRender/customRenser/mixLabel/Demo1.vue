<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const rendererConfig: VxeTablePropTypes.RendererConfig = {
  // 定义一个输入框渲染器
  myInput: {
    // 激活编辑时是否自动聚焦
    tableAutoFocus: true,
    // 可编辑激活模板
    renderTableEdit (h, renderOpts, renderParams) {
      const { props = {} } = renderOpts
      const { row, column } = renderParams
      return <vxe-input v-model={row[column.field]} clearable={props.clearable} />
    },
    // 可编辑显示模板
    renderTableCell (h, renderOpts, renderParams) {
      const { row, column } = renderParams
      return <span>{ row[column.field] }</span>
    }
  },
  // 定义一个看染器1
  myLabel1: {
    // 默认显示模板
    renderTableDefault (h, renderOpts, renderParams) {
      const { row, column } = renderParams
      const cellValue = row[column.field]
      return <span style="color: red;">{ cellValue }</span>
    }
  },
  // 定义一个看染器2
  myLabel2: {
    // 默认显示模板
    renderTableDefault (h, renderOpts, renderParams) {
      const { row, column } = renderParams
      const cellValue = row[column.field]
      return <span style="color: blue;">{ cellValue }</span>
    }
  }
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rendererConfig,
      editConfig: {
        trigger: 'click',
        mode: 'cell'
      },
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'Name', editRender: { name: 'myInput' } },
        { field: 'sex', title: 'Sex', editRender: { name: 'myInput', props: { clearable: true } } },
        { field: 'age', title: 'Age', editRender: { name: 'myInput', props: { clearable: true } }, cellRender: { name: 'myLabel1' } },
        { field: 'address', title: 'Address', editRender: { name: 'myInput' }, cellRender: { name: 'myLabel2' } }
      ],
      data: [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
