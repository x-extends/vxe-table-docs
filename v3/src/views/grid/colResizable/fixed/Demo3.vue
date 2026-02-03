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
      rowConfig: {
        keyField: 'id'
      },
      columnConfig: {
        resizable: true
      },
      columns: [
        { type: 'seq', width: 70, fixed: 'left' },
        { field: 'name', title: 'Name', width: 100, fixed: 'left' },
        { field: 'sex', title: 'Sex', width: 100, fixed: 'left' },
        { field: 'age', title: 'Age', width: 100, fixed: 'left' },
        { field: 'attr1', title: 'attr1', width: 200 },
        { field: 'attr2', title: 'attr2 其他2', width: 200 },
        { field: 'attr3', title: 'attr3', width: 200 },
        { field: 'attr4', title: 'attr4 其他4', width: 200 },
        { field: 'date', title: 'Date', width: 100, fixed: 'right' },
        { field: 'attr6', title: 'Atrr6', width: 100, fixed: 'right' },
        { field: 'address', title: 'Address', width: 100, fixed: 'right' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
