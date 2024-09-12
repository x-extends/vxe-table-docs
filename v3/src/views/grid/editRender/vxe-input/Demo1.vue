<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput', props: { clearable: true } } },
        { field: 'num', title: '数字', width: 180, editRender: { name: 'VxeInput', props: { type: 'number' } } },
        { field: 'integer', title: '整数', width: 180, editRender: { name: 'VxeInput', props: { type: 'integer' } } },
        { field: 'float', title: '小数', width: 180, editRender: { name: 'VxeInput', props: { type: 'float' } } },
        { field: 'date', title: '日期', width: 180, editRender: { name: 'VxeInput', props: { type: 'date' } } },
        { field: 'year', title: '年份', width: 180, editRender: { name: 'VxeInput', props: { type: 'year' } } },
        { field: 'quarter', title: '季度', width: 180, editRender: { name: 'VxeInput', props: { type: 'quarter' } } },
        { field: 'month', title: '月份', width: 180, editRender: { name: 'VxeInput', props: { type: 'month' } } },
        { field: 'week', title: '周', width: 180, editRender: { name: 'VxeInput', props: { type: 'week' } } },
        { field: 'time', title: '时间', width: 180, editRender: { name: 'VxeInput', props: { type: 'time' } } },
        { field: 'datetime', title: '日期带时间', width: 180, editRender: { name: 'VxeInput', props: { type: 'datetime' } } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: '', integer: '', float: '', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: '22', integer: '23', float: '22.35', date: '', time: '', year: '', quarter: '', month: '', week: '', datetime: '', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: '32', integer: '', float: '', date: '2024-06-06', time: '10:30:45', year: '2024', quarter: '2024-01-01', month: '2024-06', week: '2024-06-03', datetime: '2024-06-06 10:30:45', address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
