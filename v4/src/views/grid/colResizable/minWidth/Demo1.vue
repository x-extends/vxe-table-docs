<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
  columnConfig: {
    resizable: true
  },
  resizableConfig: {
    minWidth: 60
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'sex', title: 'Sex', minWidth: 120 },
    { field: 'age', title: 'Age', width: 120 },
    { field: 'time', title: 'Time', width: 120 },
    { field: 'address', title: 'Address', minWidth: 160 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man Man Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2 Test2', role: 'Test Test Test Test Test Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man Man Man Man Man Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
