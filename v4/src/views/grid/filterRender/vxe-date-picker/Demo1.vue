<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
}

const dateFilterRender = reactive<VxeColumnPropTypes.FilterRender>({
  name: 'VxeDatePicker'
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  columns: [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'date', title: 'Date', filters: [{ data: '' }], filterRender: dateFilterRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, date: '2024-10-01' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, date: '2024-08-12' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, date: '2024-10-07' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, date: '2024-11-05' }
  ]
})
</script>
