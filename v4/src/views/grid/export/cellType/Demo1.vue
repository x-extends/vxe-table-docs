<template>
  <div>
    <vxe-button @click="openEvent">导出csv</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  num1: string
  num2: string
  date1: string
  date2: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  columns: [
    { type: 'checkbox', width: 50 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'num1', title: '自动类型（数值）' },
    { field: 'num2', title: '转字符串（数值）', cellType: 'string' }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', num1: '00123655', num2: '00123655', date1: '2025-01-01 12:30:20', date2: '2025-01-01 12:30:20' },
    { id: 10002, name: 'Test2', nickname: 'T2', num1: '3658000', num2: '3658000', date1: '2025-01-05', date2: '2025-01-05' },
    { id: 10003, name: 'Test3', nickname: 'T3', num1: '1000000', num2: '1000000', date1: '2025-01-01 10:30:20', date2: '2025-01-01 10:30:20' },
    { id: 10004, name: 'Test4', nickname: 'T4', num1: '009999.685', num2: '009999.685', date1: '2025-01-04', date2: '2025-01-04' }
  ]
})

const openEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.exportData({
      type: 'csv'
    })
  }
}
</script>
