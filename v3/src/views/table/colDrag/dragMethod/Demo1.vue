<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :column-drag-config="columnDragConfig"
      :data="tableData">
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes } from 'vxe-table'

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

    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
      drag: true
    }

    const columnDragConfig: VxeTablePropTypes.ColumnDragConfig<RowVO> = {
      dragStartMethod ({ column }) {
        if (column.field === 'role') {
          VxeUI.modal.message({
            content: '该列不允许拖拽调整顺序',
            status: 'warning'
          })
          return false
        }
        return true
      }
    }

    return {
      tableData,
      columnConfig,
      columnDragConfig
    }
  }
})
</script>
