<template>
  <div>
    <div style="overflow: hidden; height: 500px">
      <vxe-grid v-bind="gridOptions1"></vxe-grid>
      <vxe-grid v-bind="gridOptions2"></vxe-grid>
    </div>
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
    const gridOptions1: VxeGridProps<RowVO> = {
      border: true,
      height: '40%',
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const gridOptions2: VxeGridProps<RowVO> = {
      border: true,
      height: '60%',
      columns: [
        { type: 'seq', width: 70, fixed: 'left' },
        { field: 'name', title: 'Name', width: 300 },
        { field: 'sex', title: 'Sex', width: 300 },
        { field: 'age', title: 'Age', width: 300 },
        { field: 'date13', title: 'Date', width: 300 },
        { field: 'address', title: 'Address', width: 200, fixed: 'right', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions1,
      gridOptions2
    }
  }
})
</script>
