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
      <vxe-table
        border
        auto-resize
        show-footer
        height="auto"
        :data="tableData"
        :footer-data="footerData">
        <vxe-column type="seq" width="70" fixed="left"></vxe-column>
        <vxe-column field="name" title="Name" width="300"></vxe-column>
        <vxe-column field="sex" title="Sex" width="300"></vxe-column>
        <vxe-column field="age" title="Age" width="300"></vxe-column>
        <vxe-column field="date13" title="Date" width="300"></vxe-column>
        <vxe-column field="address" title="Address" width="200" fixed="right" show-overflow></vxe-column>
      </vxe-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableWidth = ref('')
const tableHeight = ref('300px')
const tableData = ref<VxeTablePropTypes.Data<RowVO>>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 36, address: 'Guangzhou' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 24, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 34, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10008, name: 'Test8', role: 'Designer', sex: 'Man', age: 30, address: 'Guangzhou' },
  { id: 10009, name: 'Test9', role: 'Test', sex: 'Women', age: 28, address: 'test abc' },
  { id: 100010, name: 'Test10', role: 'Test', sex: 'Man', age: 24, address: 'Shanghai' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '平均', num: 3.5, age: 29 },
  { seq: '和值', num: 35, age: 290 }
])
</script>
