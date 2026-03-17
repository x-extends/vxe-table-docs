<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  content: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  rowConfig: {
    isCurrent: true,
    isHover: true
  },
  currentRowConfig: {
    strict: false
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
    { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
    { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
    { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  currentRowChange ({ row, oldValue, newValue }) {
    console.log(`行选中事件 ${row.name} 旧：`, oldValue, '新：', newValue)
  }
}
</script>
