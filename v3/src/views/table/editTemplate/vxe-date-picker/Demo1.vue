<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="日期" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.date"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="year" title="年份" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.year" type="year"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="quarter" title="季度" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.quarter" type="quarter"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="month" title="月份" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.month" type="month"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="week" title="周" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.week" type="week"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="time" title="时间" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.time" type="time"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="datetime" title="日期带时间" width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.datetime" type="datetime"></vxe-date-picker>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', date: '2024-06-06', time: '10:30:45', year: '2024', quarter: '2024-01-01', month: '2024-06', week: '2024-06-03', datetime: '2024-06-06 10:30:45', address: 'Shanghai' }
    ]

    return {
      tableData
    }
  }
})
</script>
