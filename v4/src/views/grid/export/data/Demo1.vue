<template>
  <div>
    <vxe-button @click="exportEvent">自定义导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  no1: string
  no2: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  exportConfig: {},
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'no1', title: 'NO1' },
    { field: 'no2', title: 'NO2 String', cellType: 'string' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', no1: '028', no2: '028' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', no1: '220', no2: '220' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', no1: '003200', no2: '003200' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', no1: '02040', no2: '02040' }
  ]
})

const exportEvent = () => {
  const $grid = gridRef.value
  const list = [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'Test', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Women', age: 24, address: 'Guangzhou' },
    { id: 10007, name: 'Test7', role: 'Develop', sex: 'Man', age: 40, address: 'Shanghai' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Women', age: 43, address: 'Guangzhou' },
    { id: 10009, name: 'Test9', role: 'PM', sex: 'Man', age: 39, address: 'Shanghai' },
    { id: 10010, name: 'Test10', role: 'Test', sex: 'Women', age: 29, address: 'test abc' }
  ]
  if ($grid) {
    $grid.exportData({
      type: 'csv',
      data: list
    })
  }
}
</script>
