<template>
  <div>
    <vxe-table
      border
      :data="tableData">
      <vxe-column type="seq" width="10%"></vxe-column>
      <vxe-column field="name" title="Name" width="30%"></vxe-column>
      <vxe-column field="role" title="Role" width="20%"></vxe-column>
      <vxe-column field="sex" title="Sex" width="20%"></vxe-column>
      <vxe-column field="age" title="Age" width="20%"></vxe-column>
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
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
])
</script>
