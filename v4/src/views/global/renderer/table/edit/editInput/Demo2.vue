<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  num: number
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name' },
    { field: 'sex', title: 'sex' },
    { field: 'num', title: 'Num', editRender: { name: 'EditAmount' } }
  ],
  data: [
    { id: 10001, name: 'Test1', sex: 'Man', num: 28 },
    { id: 10002, name: 'Test2', sex: 'Women', num: 22 },
    { id: 10003, name: 'Test3', sex: 'Man', num: 32 },
    { id: 10004, name: 'Test4', sex: 'Women', num: 23 }
  ]
})
</script>
