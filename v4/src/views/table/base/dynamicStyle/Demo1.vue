<template>
  <div>
    <vxe-table
      border
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      :cell-style="cellStyle"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="attr1" title="Attr1"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const headerCellStyle: VxeTablePropTypes.HeaderCellStyle<RowVO> = ({ column }) => {
  if (column.field === 'name') {
    return {
      backgroundColor: '#f60',
      color: '#ffffff'
    }
  }
}

const rowStyle: VxeTablePropTypes.RowStyle<RowVO> = ({ rowIndex }) => {
  if ([2, 3, 5].includes(rowIndex)) {
    return {
      backgroundColor: 'red',
      color: '#ffffff'
    }
  }
}

const cellStyle: VxeTablePropTypes.CellStyle<RowVO> = ({ row, column }) => {
  if (column.field === 'sex') {
    if (row.sex >= '1') {
      return {
        backgroundColor: '#187'
      }
    } else if (row.age === 26) {
      return {
        backgroundColor: '#2db7f5'
      }
    }
  }
}
</script>
