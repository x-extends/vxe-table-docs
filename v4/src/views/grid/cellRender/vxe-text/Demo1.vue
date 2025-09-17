<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import type { VxeTextProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const roleCellRender = reactive<VxeColumnPropTypes.CellRender<RowVO, VxeTextProps>>({
  name: 'VxeText',
  props: {
    clickToCopy: true
  }
})

const addressCellRender = reactive<VxeColumnPropTypes.CellRender<RowVO, VxeTextProps>>({
  name: 'VxeText',
  props: {
    clickToCopy: true,
    status: 'error'
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'role', title: 'Role', width: 120, cellRender: roleCellRender },
    { field: 'address', title: 'Address', width: 300, cellRender: addressCellRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
