<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <input v-model="row.name" style="width: 100%">
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_num="{ row }">
        <input v-model="row.num" type="number">
      </template>

      <template #edit_date="{ row }">
        <input v-model="row.date" type="date">
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
  num: string
  float: string
  integer: string
  date: string
  time: string
  year: string
  quarter: string
  month: string
  week: string
  datetime: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'num', title: '数字', width: 180, editRender: { }, slots: { edit: 'edit_num' } },
    { field: 'date', title: '日期', width: 180, editRender: { }, slots: { edit: 'edit_date' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: '', integer: '', float: '', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: '22', integer: '23', float: '22.35', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: '32', integer: '', float: '', date: '2024-06-06', time: '10:30:45', year: '2024', quarter: '2024-01-01', month: '2024-06', week: '2024-06-03', datetime: '2024-06-06 10:30:45', address: 'Shanghai' }
  ]
})
</script>
