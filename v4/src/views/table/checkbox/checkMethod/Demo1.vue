<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(tableData[0])">设置第一行选中</vxe-button>
      <vxe-button @click="toggleSelectRow(tableData[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([tableData[2], tableData[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
    </p>

    <vxe-table
      border
      height="500"
      ref="tableRef"
      :data="tableData"
      :checkbox-config="checkboxConfig">
      <vxe-column type="checkbox" title="All"></vxe-column>
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

const checkboxConfig = reactive<VxeTablePropTypes.CheckboxConfig<RowVO>>({
  labelField: 'name',
  checkMethod: ({ row }) => {
    return row.age > 26
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 38, address: 'Shenzhen' },
  { id: 10007, name: 'Test7', role: 'Develop', sex: 'Women', age: 29, address: 'Shenzhen' }
])

const toggleSelectRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleCheckboxRow(row)
  }
}

const setSelectRow = (rows: RowVO[], checked: boolean) => {
  const $table = tableRef.value
  if ($table) {
    $table.setCheckboxRow(rows, checked)
  }
}

const selectAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllCheckboxRow(true)
  }
}

const clearSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearCheckboxRow()
  }
}
</script>
