<template>
  <div>
    <p>
      <vxe-button @click="tableWidth = '600px'">宽600px</vxe-button>
      <vxe-button @click="tableWidth = '700px'">宽700px</vxe-button>
      <vxe-button @click="tableWidth = '800px'">宽800px</vxe-button>
      <vxe-button @click="tableHeight = '300px'">高300px</vxe-button>
      <vxe-button @click="tableHeight = '500px'">高500px</vxe-button>
      <vxe-button @click="tableHeight = '800px'">高800px</vxe-button>
    </p>

    <div :style="{overflow: 'hidden', width: tableWidth, height: tableHeight}">
      <vxe-grid v-bind="gridOptions"></vxe-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const tableWidth = ref('')
const tableHeight = ref('300px')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  autoResize: true,
  showFooter: true,
  height: 'auto',
  columns: [
    { type: 'seq', field: 'seq', width: 60, fixed: 'left' },
    { field: 'name', title: 'Name', width: 300 },
    { field: 'sex', title: 'Sex', width: 300 },
    { field: 'age', title: 'Age', width: 300 },
    { field: 'num', title: 'Num', width: 300 },
    { field: 'address', title: 'Address', width: 200, fixed: 'right', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: 2, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: 1, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: 7, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, num: 3, address: 'Guangzhou' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, num: 1, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, num: 8, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, num: 1, address: 'Shanghai' },
    { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, num: 4, address: 'Guangzhou' },
    { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, num: 3, address: 'test abc' },
    { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, num: 5, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '平均', num: 3.5, age: 29 },
    { seq: '和值', num: 35, age: 290 }
  ]
})
</script>
