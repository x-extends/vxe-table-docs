<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #edit_start_and_end="{ row }">
        <vxe-date-range-picker v-model:start-value="row.startDate" v-model:end-value="row.endDate"></vxe-date-range-picker>
      </template>
      <template #default_start_and_end="{ row }">
        <span>{{ row.startDate }} ~ {{ row.endDate }}</span>
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
  startDate: string
  endDate: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'startAndEnd', title: '日期范围', width: 320, editRender: { }, slots: { default: 'default_start_and_end', edit: 'edit_start_and_end' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', startDate: '', endDate: '', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', startDate: '2025-09-01', endDate: '2025-10-10', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', startDate: '2024-06-06', endDate: '2024-08-06', address: 'Shanghai' }
  ]
})
</script>
