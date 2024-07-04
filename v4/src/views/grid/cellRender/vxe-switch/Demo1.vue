<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  flag: boolean
}

const flagCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch',
  props: {
    disabled: true
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'flag', title: '开关', width: 200, cellRender: flagCellRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', flag: false },
    { id: 10002, name: 'Test2', role: 'Test', flag: true },
    { id: 10003, name: 'Test3', role: 'PM', flag: false }
  ]
})
</script>
