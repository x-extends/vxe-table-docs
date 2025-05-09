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
  url: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 300,
  cellConfig: {
    height: 80
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name' },
    { field: 'sex', title: 'sex' },
    { field: 'age', title: 'Age' },
    { field: 'url', title: 'Image', cellRender: { name: 'MyTableCellImg' } }
  ],
  data: [
    { id: 10001, name: 'Test1', sex: 'Man', age: 28, url: 'https://vxeui.com/resource/img/fj577.jpg' },
    { id: 10002, name: 'Test2', sex: 'Women', age: 22, url: 'https://vxeui.com/resource/img/fj843.jpg' },
    { id: 10003, name: 'Test3', sex: 'Man', age: 32, url: 'https://vxeui.com/resource/img/fj573.jpeg' },
    { id: 10004, name: 'Test4', sex: 'Women', age: 23, url: 'https://vxeui.com/resource/img/fj567.jpeg' }
  ]
})
</script>
