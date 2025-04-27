<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 70 },
    {
      field: 'name',
      title: 'Name',
      titlePrefix: {
        content: '提示内容'
      }
    },
    {
      field: 'sex',
      title: 'Sex',
      titlePrefix: {
        icon: 'vxe-icon-user-fill',
        iconStatus: 'primary',
        useHTML: true,
        content: '点击链接：<a href="https://vxeui.com" target="_blank" style="color:#95c7fb;">vxe-ui 官网</a>'
      }
    },
    {
      field: 'age',
      title: 'Age',
      titlePrefix: {
        icon: 'vxe-icon-warning-circle-fill',
        iconStatus: 'warning',
        content: '警告提示'
      }
    },
    {
      field: 'address',
      title: 'Address',
      titlePrefix: {
        icon: 'vxe-icon-warning-triangle-fill',
        iconStatus: 'error',
        content: '错误提示'
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
