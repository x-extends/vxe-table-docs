<template>
  <div>
    <vxe-table
      border
      show-overflow
      :column-config="columnConfig"
      :cell-config="cellConfig"
      :row-config="rowConfig"
      :resizable-config="resizableConfig"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :padding="false" vertical-align="top" :edit-render="{name: 'textarea'}" row-resize></vxe-column>
      <vxe-column field="address" title="Address" :padding="false" vertical-align="top" :edit-render="{name: 'textarea'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const columnConfig: VxeTablePropTypes.ColumnConfig = {
      resizable: true
    }

    const resizableConfig: VxeTablePropTypes.ResizableConfig = {
      isDblclickAutoWidth: true,
      isDblclickAutoHeight: true
    }

    const rowConfig: VxeTablePropTypes.RowConfig = {
      resizable: true
    }

    const cellConfig: VxeTablePropTypes.CellConfig = {
      height: 100
    }

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    return {
      tableData,
      columnConfig,
      resizableConfig,
      rowConfig,
      cellConfig,
      editConfig
    }
  }
})
</script>
