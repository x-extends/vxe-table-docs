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
  startDate: string
  endDate: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput' } },
        { field: 'startAndEnd', title: '日期范围', width: 320, editRender: { name: 'VxeDateRangePicker', startField: 'startDate', endField: 'endDate', props: { type: 'date', clearable: true } } }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', startDate: '', endDate: '', address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', startDate: '2025-09-01', endDate: '2025-10-10', address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', startDate: '2024-06-06', endDate: '2024-08-06', address: 'Shanghai' }
      ]
    }
    return {
      gridOptions
    }
  }
})
</script>
