<template>
  <div>
    <p>
      <vxe-button @click="tableHeight = 300">高300px</vxe-button>
      <vxe-button @click="tableHeight = 500">高500px</vxe-button>
      <vxe-button @click="tableHeight = 800">高800px</vxe-button>
    </p>

    <vxe-tabs padding :height="tableHeight">
      <vxe-tab-pane title="页签1" name="1">
        <vxe-grid v-bind="gridOptions1"></vxe-grid>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签2" name="2">
        <vxe-grid v-bind="gridOptions2"></vxe-grid>
      </vxe-tab-pane>
      <vxe-tab-pane title="页签3" name="3">
        <vxe-grid v-bind="gridOptions3"></vxe-grid>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions1: VxeGridProps<RowVO> = {
      border: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const gridOptions2: VxeGridProps<RowVO> = {
      border: true,
      columns: [
        { type: 'checkbox', width: 70 },
        { field: 'role', title: 'Role' },
        { field: 'address', title: 'address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const gridOptions3: VxeGridProps<RowVO> = {
      border: true,
      columns: [
        { type: 'radio', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      tableHeight: 200,
      gridOptions1,
      gridOptions2,
      gridOptions3
    }
  }
})
</script>
