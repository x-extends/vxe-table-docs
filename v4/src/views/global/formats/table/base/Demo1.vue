<template>
  <div>
    <vxe-table
      border
      show-footer
      height="300"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="amount2" title="Amount2" align="right" formatter="myAmount" footer-formatter="myAmount"></vxe-column>
      <vxe-column field="amount4" title="Amount4" align="right" :formatter="['myAmount', 1]" :footer-formatter="['myAmount', 3]"></vxe-column>
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
  { id: 10003, name: 'Test3', nickname: 'T3', status: 0, amount2: 63400.7945893, amount4: 67001.69834 },
  { id: 10004, name: 'Test4', nickname: 'T4', status: 1, amount2: 230000, amount4: 3240000 },
  { id: 10005, name: 'Test5', nickname: 'T5', status: 1, amount2: 54, amount4: 34 }
])

const footerData = ref([
  { seq: '合计', amount2: 9648214, amount4: 235860000.9647 }
])
</script>
