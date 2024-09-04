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
  height: 400,
  columns: [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    {
      field: 'sex',
      title: 'Sex',
      filterMultiple: false,
      filters: [
        { label: 'Man', value: '1' },
        { label: 'Woman', value: '0' }
      ]
    },
    {
      field: 'age',
      title: 'Age',
      filters: [
        { label: '28', value: 28 },
        { label: '22', value: 22 },
        { label: '38', value: 38 }
      ]
    },
    { field: 'time', title: 'Time' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
