<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="date" title="日期" width="180" :edit-render="dateEditRender"></vxe-column>
      <vxe-column field="year" title="年份" width="180" :edit-render="yearEditRender"></vxe-column>
      <vxe-column field="quarter" title="季度" width="180" :edit-render="{ name: 'VxeDatePicker', props: { type: 'quarter' } }"></vxe-column>
      <vxe-column field="month" title="月份" width="180" :edit-render="{ name: 'VxeDatePicker', props: { type: 'month' } }"></vxe-column>
      <vxe-column field="week" title="周" width="180" :edit-render="{ name: 'VxeDatePicker', props: { type: 'week' } }"></vxe-column>
      <vxe-column field="time" title="时间" width="180" :edit-render="{ name: 'VxeDatePicker', props: { type: 'time' } }"></vxe-column>
      <vxe-column field="datetime" title="日期带时间" width="180" :edit-render="{ name: 'VxeDatePicker', props: { type: 'datetime' } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

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

    const nameEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput'
    }

    const dateEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeDatePicker'
    }

    const yearEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeDatePicker',
      props: {
        type: 'year'
      }
    }

    return {
      tableData,
      nameEditRender,
      dateEditRender,
      yearEditRender
    }
  }
})
</script>
