<template>
  <div>
    <vxe-button @click="changeFilters()">只修改 role 条件</vxe-button>
    <vxe-button @click="handleFilters()">修改并触发 role 筛选</vxe-button>
    <vxe-button @click="clearFilters()">清除筛选</vxe-button>
    <vxe-table
      border
      height="500"
      ref="tableRef"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role" :filters="roleOptions"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: string
  num2: string
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
])

const roleOptions = ref([
  { label: 'Develop', value: 'Develop' },
  { label: 'Test', value: 'Test' },
  { label: 'PM', value: 'PM' },
  { label: 'Designer', value: 'Designer' }
])

const changeFilters = () => {
  const $table = tableRef.value
  if ($table) {
    // 修改条件
    $table.setFilter('role', [
      { label: 'Develop', value: 'Develop', checked: false },
      { label: 'Test', value: 'Test', checked: true },
      { label: 'PM', value: 'PM', checked: false },
      { label: 'Designer', value: 'Designer', checked: false }
    ])
  }
}

const handleFilters = () => {
  const $table = tableRef.value
  if ($table) {
    // 修改条件，传 true 则自动更新数据
    $table.setFilter('role', [
      { label: 'Develop', value: 'Develop', checked: false },
      { label: 'Test', value: 'Test', checked: true },
      { label: 'PM', value: 'PM', checked: false },
      { label: 'Designer', value: 'Designer', checked: false }
    ], true)
  }
}

const clearFilters = () => {
  const $table = tableRef.value
  if ($table) {
    // 清除排序状态，如果本地筛选，会自动更新数据
    $table.clearFilter()
  }
}
</script>
