<template>
  <div>
    <vxe-table
      height="400"
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column type="expand" width="60" fixed="left">
        <template #content="{ row }">
          <div>Name：{{ row.name }}</div>
          <div>Role：{{ row.role }}</div>
          <div>Age：{{ row.age }}</div>
          <div>Sex：{{ row.sex }}</div>
          <div>Address：{{ row.address }}</div>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" minWidth="400"></vxe-column>
      <vxe-column field="role" title="Role" minWidth="300"></vxe-column>
      <vxe-column field="sex" title="Sex" minWidth="200"></vxe-column>
      <vxe-column field="age" title="Age" minWidth="200"></vxe-column>
      <vxe-column field="address" title="Address" minWidth="200" fixed="right"></vxe-column>
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
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 48, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'Designer', sex: 'Women', age: 52, address: 'Guangzhou' },
  { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 57, address: 'Shanghai' },
  { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 24, address: 'Guangzhou' },
  { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 42, address: 'Shanghai' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 36, address: 'test abc' }
])
</script>
