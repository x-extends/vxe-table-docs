<template>
  <div>
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
      border: true,
      round: true,
      height: 300,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 400 },
        { field: 'role', title: 'Role', width: 360 },
        { field: 'sex', title: 'Sex', width: 200 },
        { field: 'age', title: 'Age', width: 280 },
        { field: 'attr1', title: 'Attr1', width: 420 },
        { field: 'attr2', title: 'Attr2', width: 380 },
        { field: 'address', title: 'Address', width: 300 }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 22, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 49, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 52, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 39, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
        { id: 10009, name: 'Test9', role: 'Develop', sex: 'Man', age: 45, address: 'Shanghai' },
        { id: 10010, name: 'Test10', role: 'Test', sex: 'Women', age: 24, address: 'Guangzhou' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
