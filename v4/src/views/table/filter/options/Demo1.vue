<template>
  <div>
    <p>
      <vxe-button @click="updateNameOpts">修改选项</vxe-button>
      <vxe-button @click="updateNameDefaultOpts">修改选项并设置默认值</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="500"
      :data="tableData">
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column field="name" title="Name" :filters="nameOptions"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'

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
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 24, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 32, address: 'Shenzhen' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 28, address: 'Shanghai' }
])

const nameOptions = ref<VxeColumnPropTypes.Filters>([])

const updateNameOpts = () => {
  const $table = tableRef.value
  if ($table) {
    // 修改选项列表
    $table.setFilter('name', [
      { label: 'Test2', value: 'Test2' },
      { label: 'Test3', value: 'Test3' }
    ])
  }
}

const updateNameDefaultOpts = () => {
  const $table = tableRef.value
  if ($table) {
    // 修改选项列表
    $table.setFilter('name', [
      { label: 'Test2', value: 'Test2', checked: false },
      { label: 'Test3', value: 'Test3', checked: true },
      { label: 'Test4', value: 'Test4', checked: true }
    ])
    // 更新数据
    $table.updateData()
  }
}
</script>
