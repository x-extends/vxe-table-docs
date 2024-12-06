<template>
  <div>
    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="amount" title="Amount" :cell-render="{name: 'MyTableCellAmount'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
  amount: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', sex: 'Man', age: 28, amount: 1000 },
  { id: 10002, name: 'Test2', sex: 'Women', age: 22, amount: 254400000 },
  { id: 10003, name: 'Test3', sex: 'Man', age: 32, amount: 999954 },
  { id: 10004, name: 'Test4', sex: 'Women', age: 23, amount: 10000000 }
])
</script>
