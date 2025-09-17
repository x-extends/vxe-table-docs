<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  checked1: boolean
  checked2: boolean
}

const hc1CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeCheckbox',
  events: {
    change (cellParams, eventParams) {
      const { row, column } = cellParams
      console.log('change1', row, column.field, eventParams.value)
    }
  }
})

const hc2CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeCheckbox',
  events: {
    change (cellParams, eventParams) {
      const { row, column } = cellParams
      console.log('change2', row, column.field, eventParams.value)
    }
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'checked1', title: '复选框1', width: 100, cellRender: hc1CellRender },
    { field: 'checked2', title: '复选框2', width: 100, cellRender: hc2CellRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', checked1: false, checked2: false },
    { id: 10002, name: 'Test2', role: 'Test', checked1: true, checked2: false },
    { id: 10003, name: 'Test3', role: 'PM', checked1: false, checked2: true }
  ]
})
</script>
