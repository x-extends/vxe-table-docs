<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="500"
      :column-config="columnConfig"
      :row-config="rowConfig"
      :data="tableData"
      :checkbox-config="checkboxConfig"
      @checkbox-range-select="checkboxRangeSelectEvent">
      <vxe-column type="checkbox" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'PM', sex: 'Women', age: 38, address: 'Shanghai' },
  { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 24, address: 'test abc' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 35, address: 'Shanghai' },
  { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 31, address: 'Shanghai' },
  { id: 10011, name: 'Test11', role: 'PM', sex: 'Women', age: 45, address: 'Shanghai' },
  { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 10013, name: 'Test13', role: 'Develop', sex: 'Women', age: 38, address: 'Shanghai' }
])

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig<RowVO>>({
  resizable: true
})

const rowConfig = reactive<VxeTablePropTypes.RowConfig<RowVO>>({
  isCurrent: true,
  isHover: true
})

const checkboxConfig = reactive<VxeTablePropTypes.CheckboxConfig<RowVO>>({
  labelField: 'name',
  highlight: true,
  isShiftKey: true
})

const checkboxRangeSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    console.log('按键批量选择', selectRecords.length)
  }
}
</script>
