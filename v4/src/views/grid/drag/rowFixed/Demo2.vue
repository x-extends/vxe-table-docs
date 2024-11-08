<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  rowConfig: {
    useKey: true,
    drag: true
  },
  columnConfig: {
    useKey: true
  },
  columns: [
    { field: 'name', title: 'Name', fixed: 'left', width: 160, dragSort: true },
    { field: 'role', title: 'Role', width: 460 },
    {
      title: '分组1',
      children: [
        { field: 'sex', title: 'Sex', width: 100 },
        { field: 'age', title: 'Age', width: 440 }
      ]
    },
    {
      title: '分组1',
      children: [
        { field: 'attr1', title: 'Attr1', minWidth: 440 },
        { field: 'attr2', title: 'Attr2', minWidth: 240 },
        { field: 'attr3', title: 'Attr3', minWidth: 340 }
      ]
    },
    { field: 'attr4', title: 'Attr4', minWidth: 540 },
    { field: 'address', title: 'Address', fixed: 'right', minWidth: 200 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
