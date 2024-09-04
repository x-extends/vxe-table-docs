<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #edit_date="{ row }">
        <vxe-date-picker v-model="row.date"></vxe-date-picker>
      </template>

      <template #edit_year="{ row }">
        <vxe-date-picker v-model="row.year" type="year"></vxe-date-picker>
      </template>

      <template #edit_quarter="{ row }">
        <vxe-date-picker v-model="row.quarter" type="quarter"></vxe-date-picker>
      </template>
      <template #default_quarter="{ row }">
        <span>{{ formatQuarterLabel(row.quarter) }}</span>
      </template>

      <template #edit_month="{ row }">
        <vxe-date-picker v-model="row.month" type="month"></vxe-date-picker>
      </template>

      <template #edit_week="{ row }">
        <vxe-date-picker v-model="row.week" type="week"></vxe-date-picker>
      </template>
      <template #default_week="{ row }">
        <span>{{ formatWeekLabel(row.week) }}</span>
      </template>

      <template #edit_time="{ row }">
        <vxe-date-picker v-model="row.time" type="time"></vxe-date-picker>
      </template>

      <template #edit_datetime="{ row }">
        <vxe-date-picker v-model="row.datetime" type="datetime"></vxe-date-picker>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
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
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'date', title: '日期', width: 180, editRender: { }, slots: { edit: 'edit_date' } },
    { field: 'year', title: '年份', width: 180, editRender: { }, slots: { edit: 'edit_year' } },
    { field: 'quarter', title: '季度', width: 180, editRender: { }, slots: { edit: 'edit_quarter', default: 'default_quarter' } },
    { field: 'month', title: '月份', width: 180, editRender: { }, slots: { edit: 'edit_month' } },
    { field: 'week', title: '周', width: 180, editRender: { }, slots: { edit: 'edit_week', default: 'default_week' } },
    { field: 'time', title: '时间', width: 180, editRender: { }, slots: { edit: 'edit_time' } },
    { field: 'datetime', title: '日期带时间', width: 180, editRender: { }, slots: { edit: 'edit_datetime' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', date: '2024-06-06', time: '10:30:45', year: '2024', quarter: '2024-01-01', month: '2024-06', week: '2024-06-03', datetime: '2024-06-06 10:30:45', address: 'Shanghai' }
  ]
})

const formatQuarterLabel = (date: string) => {
  if (date) {
    return XEUtils.toDateString(date, 'yyyy 年第 q 季度')
  }
  return ''
}

const formatWeekLabel = (date: string) => {
  if (date) {
    return XEUtils.toDateString(date, 'yyyy 年第 WW 周')
  }
  return ''
}
</script>
