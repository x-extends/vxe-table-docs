<template>
  <div>
    <vxe-table
      border
      height="300"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="amount2" title="Amount2" formatter="myAmount"></vxe-column>
      <vxe-column field="amount4" title="Amount4" :formatter="['myAmount', 4]"></vxe-column>
      <vxe-column field="status" title="Status" formatter="mySwitch"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  nickname: string
  status: number
  amount2: number
  amount4: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', status: 0, amount2: 192, amount4: 225 },
  { id: 10002, name: 'Test2', nickname: 'T2', status: 1, amount2: 100.35678, amount4: 100.7686342 },
  { id: 10003, name: 'Test3', nickname: 'T3', status: 0, amount2: 634.7945893, amount4: 671.69834 },
  { id: 10004, name: 'Test4', nickname: 'T4', status: 1, amount2: 23, amount4: 324 },
  { id: 10005, name: 'Test5', nickname: 'T5', status: 1, amount2: 54, amount4: 34 }
])
</script>
