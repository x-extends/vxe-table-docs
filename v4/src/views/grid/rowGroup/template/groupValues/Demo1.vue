<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #nameGroupContent="{ groupContent }">
        <span style="color: blue">⭐{{ groupContent }}</span>
      </template>
      <template #nameDefault="{ row,column }">
        <span style="color: red;">🔥{{ row[column.field] }}</span>
      </template>
      <template #ageGroupValues="{ aggValue }">
        <span style="color: orange;">数量（{{ aggValue }}）</span>
      </template>
    </vxe-grid>
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
  num: number
  date: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 500,
  showOverflow: true,
  aggregateConfig: {
    groupFields: ['role']
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300, rowGroupNode: true, slots: { default: 'nameDefault', groupContent: 'nameGroupContent' } },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Num', aggFunc: true, slots: { groupValues: 'ageGroupValues' } },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Woman', age: 28, num: 250, date: '2025-02-01', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, num: 425, date: '2025-01-01', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Woman', age: 32, num: 100, date: '2025-05-01', address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 32, num: 789, date: '2025-01-01', address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, num: 485, date: '2025-01-01', address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 30, num: 865, date: '2025-03-01', address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Woman', age: 29, num: 105, date: '2025-05-01', address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'PM', sex: 'Woman', age: 35, num: 648, date: '2025-11-01', address: 'test abc' },
    { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 21, num: 235, date: '2025-05-01', address: 'test abc' },
    { id: 10010, name: 'Test10', role: 'PM', sex: 'Woman', age: 28, num: 10, date: '2025-03-01', address: 'test abc' },
    { id: 10011, name: 'Test11', role: 'Test', sex: 'Woman', age: 29, num: 25, date: '2025-03-01', address: 'test abc' },
    { id: 10012, name: 'Test12', role: 'Develop', sex: 'Man', age: 37, num: 435, date: '2025-10-01', address: 'test abc' },
    { id: 10013, name: 'Test13', role: 'Test', sex: 'Woman', age: 24, num: 209, date: '2025-02-01', address: 'test abc' },
    { id: 10014, name: 'Test14', role: 'Develop', sex: 'Man', age: 34, num: 305, date: '2025-08-01', address: 'test abc' },
    { id: 10015, name: 'Test15', role: 'Designer', sex: 'Man', age: 21, num: 305, date: '2025-05-01', address: 'test abc' },
    { id: 10016, name: 'Test16', role: 'Designer', sex: 'Woman', age: 21, num: 202, date: '2025-10-01', address: 'test abc' },
    { id: 10017, name: 'Test17', role: 'Test', sex: 'Man', age: 31, num: 45, date: '2025-12-01', address: 'test abc' },
    { id: 10018, name: 'Test18', role: 'Develop', sex: 'Woman', age: 32, num: 405, date: '2025-10-01', address: 'test abc' },
    { id: 10019, name: 'Test19', role: 'Test', sex: 'Man', age: 37, num: 980, date: '2025-02-01', address: 'test abc' },
    { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 41, num: 808, date: '2025-03-01', address: 'test abc' }
  ]
})
</script>
