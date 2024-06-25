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
  date: string
  time: string
  month: string
  week: string
  color: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 200, editRender: { name: 'input' } },
    { field: 'age', title: '数字', width: 200, editRender: { name: 'input', attrs: { type: 'number' } } },
    { field: 'date', title: '日期', width: 200, editRender: { name: 'input', attrs: { type: 'date' } } },
    { field: 'month', title: '月份', width: 200, editRender: { name: 'input', attrs: { type: 'month' } } },
    { field: 'week', title: '周', width: 200, editRender: { name: 'input', attrs: { type: 'week' } } },
    { field: 'time', title: '时间', width: 200, editRender: { name: 'input', attrs: { type: 'time' } } },
    { field: 'color', title: '颜色', width: 200, editRender: { name: 'input', attrs: { type: 'color' } } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, date: '', time: '', month: '', week: '', color: '', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, date: '', time: '', month: '', week: '', color: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, date: '2024-06-06', time: '10:30', month: '2024-06', week: '', color: '#571414', address: 'Shanghai' }
  ]
})
</script>
