<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name', cellRender: { name: 'MyTableHeaderLink' } },
    { field: 'sex', title: 'sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
    { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
    { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
    { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
  ]
})
</script>
