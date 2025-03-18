<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string | string[] | null
}

export default Vue.extend({
  data () {
    const sexCellRender: VxeColumnPropTypes.CellRender = {
      name: 'FormatSelect',
      options: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'sex', title: 'Sex', width: 300, cellRender: sexCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: null },
        { id: 10002, name: 'Test2', role: 'Test', sex: '0' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '1' },
        { id: 10003, name: 'Test4', role: 'Test', sex: ['1'] },
        { id: 10003, name: 'Test5', role: 'Develop', sex: ['1', '0'] }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
