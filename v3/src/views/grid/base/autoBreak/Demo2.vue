<template>
  <div>
    <vxe-switch v-model="gridOptions.showOverflow"></vxe-switch>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showOverflow: false,
      height: 400,
      cellConfig: {
        maxHeight: 100
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'role', title: '列头自动换行列头自动换行行列头自动换行', width: 120 },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: '内容自动换行内容自动换行内容自动换行内容自动换行内容自动换行内容自动换行内容自动换行', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PM PMPM PM PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Test', sex: 'Women', age: 24, address: 'Shanghai' },
        { id: 10005, name: '内容自动换行内容自动换行内容自动换行内容自动换行内容自动换行 内容自动换行内容自动换行内容自动换行内容自动换行自动换行内容自动换行自动换行内容自动换行', role: 'Designer', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10006, name: 'Test3', role: 'DevelopDevelopDevel opDevelop DevelopDevelop DevelopDevelopDevelopDevelop DevelopDevelop DevelopDevelop DevelopDevelop DevelopDevelop', sex: 'Man', age: 32, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
