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
  sex: string
  age: number
  amount: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'amount', title: 'Amount', cellRender: { name: 'MyTableCellAmount' } }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28, amount: 1000 },
        { id: 10002, name: 'Test2', sex: 'Women', age: 22, amount: 254400000 },
        { id: 10003, name: 'Test3', sex: 'Man', age: 32, amount: 999954 },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23, amount: 10000000 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
