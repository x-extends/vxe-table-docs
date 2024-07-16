<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column field="checked" width="80">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checked"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  num: number
  address: string
  checked: boolean
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc', checked: false },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou', checked: false },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai', checked: false }
])
</script>
