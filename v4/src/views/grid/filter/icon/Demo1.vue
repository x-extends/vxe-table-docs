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
  height: 400,
  filterConfig: {
    iconNone: 'vxe-icon-ellipsis-v',
    iconMatch: 'vxe-icon-ellipsis-v'
  },
  columns: [
    { field: 'id', title: 'ID' },
    {
      field: 'name',
      title: 'Name',
      filters: [
        { label: 'Test1', value: 'Test1' },
        { label: 'Test2', value: 'Test2' },
        { label: 'Test3', value: 'Test3' },
        { label: 'Test4', value: 'Test4' },
        { label: 'Test5', value: 'Test5' }
      ]
    },
    {
      field: 'sex',
      title: 'Sex',
      filterMultiple: false,
      filters: [
        { label: 'Man', value: 'Man' },
        { label: 'Woman', value: 'Woman' }
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
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Woman', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Woman', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 54, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Woman', age: 24, address: 'Shanghai' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 52, address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'PM', sex: 'Woman', age: 34, address: 'Guangzhou' },
    { id: 10009, name: 'Test9', role: 'PM', sex: 'Man', age: 24, address: 'test abc' },
    { id: 100010, name: 'Test10', role: 'Develop', sex: 'Woman', age: 24, address: 'Shanghai' }
  ]
})
</script>
