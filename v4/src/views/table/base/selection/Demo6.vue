<template>
  <div>
    <vxe-table
      border
      :row-config="{keyField: 'id', isHover: true}"
      :data="tableData"
      :checkbox-config="{checkRowKeys: defaultSelectRowKeys}"
      :radio-config="{labelField: 'name'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="id" title="ID"></vxe-column>
      <vxe-column type="radio" width="300" title="Name"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
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

const defaultSelectRowKeys = ref([10002, 10003])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
])
</script>
