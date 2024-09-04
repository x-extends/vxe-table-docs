<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  num: number | null
  float: number | null
  integer: number | null
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
    { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput' } },
    { field: 'num', title: '数字', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'number' } } },
    { field: 'integer', title: '整数', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'integer' } } },
    { field: 'float', title: '小数', width: 180, editRender: { name: 'VxeNumberInput', props: { type: 'float' } } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: null, integer: null, float: null, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 22, integer: 23, float: 22.35, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 32, integer: null, float: null, address: 'Shanghai' }
  ]
})
</script>
