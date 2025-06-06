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
  cellConfig: {
    height: 60
  },
  mergeCells: [
    { row: 1, col: 2, rowspan: 3, colspan: 2 }
  ],
  columns: [
    { type: 'seq' },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role', verticalAlign: 'top' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address', verticalAlign: 'top' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'PM', sex: 'Man', age: 44, address: 'Guangzhou' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Man', age: 56, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'PM', sex: 'Man', age: 38, address: 'Guangzhou' }
  ]
})
</script>
