<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  date: string
  rate: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  showOverflow: true,
  tooltipConfig: {
    theme: 'light',
    maxWidth: 600,
    contentMethod (params) {
      const { column } = params
      if (column.field === 'name') {
        // 当返回任意值时使用自定义模板来渲染
        return true
      }
      // 其他列返回null不做处理
      return null
    }
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: '名称（显示表格提示）', minWidth: 140, showOverflow: true },
    { field: 'role', title: '角色' },
    { field: 'date', title: '日期', width: 200 },
    { field: 'rate', title: 'Rate' },
    { field: 'address', title: '地址（默认显示提示）', width: 200, showOverflow: true }
  ],
  data: [
    { name: 'Test1', role: '前端', date: '2020-02-14', rate: 5, address: '地址 地址 地址地址地址 地址 地址地址' },
    { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: '地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址地址 地址 地址 地址 地址 地址' },
    { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: '地址 地址 地址' },
    { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: '地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址地址 地址 地址' },
    { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: '地址 地址 地址 地址 地址地址' }
  ]
})
</script>
