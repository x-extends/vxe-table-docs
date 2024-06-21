<template>
  <div>
    <vxe-table
      border
      :data="tableData"
      :expand-config="{labelField: 'name', expandAll: true}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column type="expand" title="Name" width="220">
        <template #content="{ row }">
          <ul class="expand-wrapper">
            <li>
              <span>ID：</span>
              <span>{{ row.id }}</span>
            </li>
            <li>
              <span>Name：</span>
              <span>{{ row.name }}</span>
            </li>
            <li>
              <span>UpdateTime：</span>
              <span>{{ row.age }}</span>
            </li>
            <li>
              <span>CreateTime：</span>
              <span>{{ row.address }}</span>
            </li>
          </ul>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" width="240"></vxe-column>
      <vxe-column field="sex" title="Sex" width="260"></vxe-column>
      <vxe-column field="sex" title="Sex" width="160"></vxe-column>
      <vxe-column field="address" title="Address" width="340"></vxe-column>
      <vxe-column field="age" title="Age" width="200" fixed="right"></vxe-column>
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
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' }
])
</script>

<style lang="scss" scoped>
.expand-wrapper {
  padding: 20px;
}
</style>
