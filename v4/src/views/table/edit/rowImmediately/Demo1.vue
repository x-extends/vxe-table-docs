<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="400"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="统计信息">
        <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}">
          <template #edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="num1" title="Num1" :edit-render="{name: 'VxeNumberInput'}">
          <template #edit="{ row }">
            <vxe-number-input v-model="row.num1"></vxe-number-input>
          </template>
        </vxe-column>
        <vxe-column field="num2" title="Num2" :edit-render="{name: 'VxeNumberInput'}">
          <template #edit="{ row }">
            <vxe-number-input v-model="row.num2"></vxe-number-input>
          </template>
        </vxe-column>
        <vxe-column field="sum" title="合计">
          <template #default="{ row }">
            <span>￥{{ sumRowNum(row) }}</span>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  num1: number
  num2: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', age: 10, num1: 28, num2: 5, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', age: 34, num1: 22, num2: 4, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', age: 56, num1: 32, num2: 3, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', age: 45, num1: 24, num2: 1, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'PM', age: 56, num1: 32, num2: 4, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', age: 45, num1: 24, num2: 1, address: 'Shanghai' }
])

const sumRowNum = (row: RowVO) => {
  return row.num1 + row.num2
}
</script>
