<template>
  <div>
    <vxe-table
      border
      class="mytable-style"
      :cell-class-name="cellClassName"
      :data="tableData"
      @cell-click="cellClickEvent">
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
import { VxeTablePropTypes, VxeTableEvents, VxeTableDefines } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const selectRow = ref<RowVO>()
const selectColumn = ref<VxeTableDefines.ColumnInfo<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const cellClassName: VxeTablePropTypes.CellClassName<RowVO> = ({ row, column }) => {
  if (row === selectRow.value && column === selectColumn.value) {
    return 'col-orange'
  }
  return null
}

const cellClickEvent: VxeTableEvents.CellClick<RowVO> = ({ row, column }) => {
  selectRow.value = row
  selectColumn.value = column
}
</script>

<style lang="scss" scoped>
::v-deep(.mytable-style.vxe-table .vxe-body--column.col-orange) {
  background-color: #f60;
  color: #fff;
}
</style>
