<template>
  <div>
    <vxe-table
      border
      show-footer
      height="300"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="amount" title="Amount" :cell-render="{name: 'MyTableFooterAmount'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

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

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', sex: '2', amount: '888' }
])
</script>
