<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    {
      title: '操作',
      fixed: 'left',
      children: [
        { type: 'seq', width: 70 },
        { type: 'checkbox', width: 70 }
      ]
    },
    { field: 'name', title: 'Name', minWidth: 800 },
    { field: 'role', title: 'Role', minWidth: 300 },
    { field: 'sex', title: 'Sex', width: 500 },
    {
      title: '其他信息',
      fixed: 'right',
      children: [
        { field: 'age', title: 'Age', width: 100 },
        { field: 'address', title: 'Address', fixed: 'right', width: 200 }
      ]
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
