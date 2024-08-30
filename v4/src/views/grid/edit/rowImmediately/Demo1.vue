<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #sumDefault="{ row }">
        <span>￥{{ sumRowNum(row) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  num1: number
  num2: number
  address: string
}

const sumRowNum = (row: RowVO) => {
  return row.num1 + row.num2
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 400,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 60 },
    {
      title: '统计信息',
      children: [
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'num1', title: 'Num1', editRender: { name: 'VxeNumberInput' } },
        { field: 'num2', title: 'Num2', editRender: { name: 'VxeNumberInput' } },
        { field: 'sum', title: '合计', slots: { default: 'sumDefault' } }
      ]
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', age: 10, num1: 28, num2: 5, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', age: 34, num1: 22, num2: 4, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', age: 56, num1: 32, num2: 3, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', age: 45, num1: 24, num2: 1, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', age: 56, num1: 32, num2: 4, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', age: 45, num1: 24, num2: 1, address: 'Shanghai' }
  ]
})
</script>
