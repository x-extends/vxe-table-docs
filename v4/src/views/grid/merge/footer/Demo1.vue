<template>
  <div>
    <vxe-button @click="setMerge1">设置合并1</vxe-button>
    <vxe-button @click="setMerge2">设置合并2</vxe-button>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showFooter: true,
  height: 400,
  mergeFooterItems: [
    { row: 0, col: 1, rowspan: 1, colspan: 3 },
    { row: 1, col: 3, rowspan: 1, colspan: 2 }
  ],
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'rate', title: 'Rate', footerAlign: 'center' },
    { field: 'age', title: 'Age', footerAlign: 'center' }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
  ],
  footerData: [
    { seq: '平均', name: '合并了', role: '33', rate: '56' },
    { seq: '和值', name: 'aa', role: 'bb', rate: '合并了' }
  ]
})

const setMerge1 = () => {
  gridOptions.mergeFooterItems = [
    { row: 0, col: 2, rowspan: 1, colspan: 2 }
  ]
}

const setMerge2 = () => {
  gridOptions.mergeFooterItems = [
    { row: 0, col: 1, rowspan: 1, colspan: 3 },
    { row: 1, col: 3, rowspan: 1, colspan: 2 }
  ]
}
</script>
