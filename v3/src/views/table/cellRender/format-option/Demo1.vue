<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300" :cell-render="sexCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string | string[] | null
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: null },
      { id: 10002, name: 'Test2', role: 'Test', sex: '0' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '1' },
      { id: 10003, name: 'Test4', role: 'Test', sex: ['1'] },
      { id: 10003, name: 'Test5', role: 'Develop', sex: ['1', '0'] }
    ]

    const sexCellRender: VxeColumnPropTypes.CellRender = {
      name: 'FormatSelect',
      options: [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }

    return {
      tableData,
      sexCellRender
    }
  }
})
</script>
