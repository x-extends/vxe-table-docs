<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #form>
        <div style="background: blue;">自定义表单区域</div>
      </template>

      <template #toolbar_buttons>
        <div style="background: orchid;width: 100%;">自定义工具栏左侧</div>
      </template>

      <template #toolbar_tools>
        <div style="background: orange;">自定义工具栏右侧</div>
      </template>

      <template #top>
        <div style="background: green;">自定义顶部区域</div>
      </template>

      <template #left>
        <div style="background: cadetblue;width: 140px;height: 100%;">自定义左侧区域</div>
      </template>

      <template #right>
        <div style="background: bisque;width: 140px;height: 100%;">自定义右侧区域</div>
      </template>

      <template #bottom>
        <div style="background: palegreen;">自定义底部区域</div>
      </template>

      <template #pager>
        <div style="background: red;">自定义分页区域</div>
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
  sex: string
  age: number
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  showOverflow: true,
  customConfig: {
    mode: 'popup'
  },
  toolbarConfig: {
    custom: true,
    slots: {
      buttons: 'toolbar_buttons',
      tools: 'toolbar_tools'
    }
  },
  columns: [
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'PM', sex: '0', age: 39, num: 43, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', sex: '0', age: 46, num: 12, address: 'Guangzhou' }
  ]
})
</script>
