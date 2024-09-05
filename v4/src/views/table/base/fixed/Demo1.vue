<template>
  <div>
    <vxe-table
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" min-width="800"></vxe-column>
      <vxe-column field="role" title="Role" width="400"></vxe-column>
      <vxe-column field="sex" title="Sex" width="500"></vxe-column>
      <vxe-column field="date" title="Date" width="300"></vxe-column>
      <vxe-column field="address" title="Address" fixed="right" width="300"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
</script>
