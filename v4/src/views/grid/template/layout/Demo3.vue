<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #form>
        <vxe-notice-bar direction="right" style="background: dodgerblue;">自定义表单区域</vxe-notice-bar>
      </template>

      <template #toolbarButtons>
        <vxe-notice-bar direction="left" style="background: cadetblue;width: 100%;">自定义工具栏左侧</vxe-notice-bar>
      </template>

      <template #toolbarTools>
        <vxe-notice-bar direction="right" style="background: orange;">自定义工具栏右侧</vxe-notice-bar>
      </template>

      <template #top>
        <vxe-notice-bar direction="right" content="自定义顶部区域" style="background: green;color: #fff;"></vxe-notice-bar>
      </template>

      <template #left>
        <div style="background: orchid;width: 140px;height: 100%;">自定义表格左边区域</div>
      </template>

      <template #right>
        <div style="background: bisque;width: 140px;height: 100%;">自定义表格右边区域</div>
      </template>

      <template #bottom>
        <vxe-notice-bar direction="right" content="自定义底部区域" style="background: palegreen;"></vxe-notice-bar>
      </template>

      <template #asideLeft>
        <div style="background: darkcyan;width: 140px;height: 100%;">自定义左侧区域</div>
      </template>

      <template #asideRight>
        <div style="background: aqua;width: 140px;height: 100%;">自定义右侧区域</div>
      </template>

      <template #pager>
        <vxe-notice-bar direction="left" style="background: red;">自定义分页区域</vxe-notice-bar>
      </template>
    </vxe-grid>
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
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  showOverflow: true,
  customConfig: {
    mode: 'drawer'
  },
  toolbarConfig: {
    custom: true,
    zoom: true,
    slots: {
      buttons: 'toolbarButtons',
      tools: 'toolbarTools'
    }
  },
  layouts: [
    [],
    ['Form', 'Toolbar', 'Top', 'Table', 'Bottom', 'Pager']
  ],
  columns: [
    { type: 'seq', width: 70 },
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
