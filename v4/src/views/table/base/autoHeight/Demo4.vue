<template>
  <div>
    <p>
      <vxe-button @click="tableHeight = 300">高300px</vxe-button>
      <vxe-button @click="tableHeight = 500">高500px</vxe-button>
      <vxe-button @click="tableHeight = 800">高800px</vxe-button>
    </p>

    <vxe-tabs padding :height="tableHeight">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-table
          border
          height="100%"
          :data="tableData1">
          <vxe-column type="seq" width="70"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签2" name="2">
        <vxe-table
         border
          height="100%"
          :data="tableData2">
          <vxe-column type="checkbox" width="70"></vxe-column>
          <vxe-column field="role" title="Role"></vxe-column>
          <vxe-column field="address" title="Address"></vxe-column>
        </vxe-table>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签3" name="3">
        <vxe-table
          border
          height="100%"
          :data="tableData3">
          <vxe-column type="radio" width="70"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address"></vxe-column>
        </vxe-table>
      </vxe-tab-pane>
    </vxe-tabs>
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

const tableHeight = ref(300)

const tableData1 = ref<RowVO[]>([
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

const tableData2 = ref<RowVO[]>([
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

const tableData3 = ref<RowVO[]>([
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
</script>
