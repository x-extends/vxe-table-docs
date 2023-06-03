<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(tableData[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([tableData[2], tableData[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
    </p>

    <vxe-table
      border
      class="checkbox-table"
      ref="tableRef"
      :row-config="{isHover: true}"
      :data="tableData"
      :checkbox-config="{checkField: 'checked', trigger: 'row'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  checked: boolean
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', checked: false },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', checked: false },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', checked: false },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', checked: false },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', checked: false }
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
