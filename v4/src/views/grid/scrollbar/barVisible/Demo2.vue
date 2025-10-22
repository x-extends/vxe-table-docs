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
  showFooter: true,
  scrollbarConfig: {
    x: {
      visible: 'auto'
    },
    y: {
      visible: 'auto'
    }
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70, fixed: 'left' },
    { field: 'name', title: 'Name', width: 300 },
    { field: 'sex', title: 'Sex', width: 300 },
    { field: 'age', title: 'Age', width: 250 },
    { field: 'attr1', title: 'Attr1', width: 360 },
    { field: 'attr2', title: 'Attr2', width: 240 },
    { field: 'attr3', title: 'Attr3', width: 300 },
    { field: 'address', title: 'Address', minWidth: 400 },
    { field: 'role', title: 'Role', width: 200, fixed: 'right' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '合计', name: '222', age: '555', attr2: '555', role: '111' }
  ]
})
</script>
