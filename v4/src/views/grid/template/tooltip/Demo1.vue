<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #header-tooltip="{ column }">
        <span style="color: red;">自定义表头：{{ column.title }}</span>
      </template>
      <template #tooltip="{ row, column }">
        <div>
          <div style="color: orange;">自定义：{{ row[column.field] }}</div>
          <vxe-link status="primary" href="https://vxeui.com/" target="_blank">点击查看官网</vxe-link>
        </div>
      </template>
      <template #footer-tooltip="{ row, column }">
        <span style="color: chartreuse">自定义表尾：{{ row[column.field] }}</span>
      </template>
    </vxe-grid>
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
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  showFooter: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: '名称' },
    { field: 'role', title: '角色' },
    { field: 'date', title: '日期日期日期日期日期日期日期日期日期', width: 200 },
    { field: 'rate', title: 'Rate' },
    { field: 'address', title: '地址地址地址地址地址地址地址地址地址地址', width: 200 }
  ],
  data: [
    { name: 'Test1', role: '前端', date: '2020-02-14', rate: 5, address: 'address1' },
    { name: 'Test2', role: '后端', date: '2020-02-22', rate: 2, address: 'address1' },
    { name: 'Test3', role: '前端', date: '2020-01-01', rate: 0, address: '深圳市深圳市深圳市深圳市深圳市深圳市' },
    { name: 'Test4', role: '设计师', date: '2020-02-23', rate: 1, address: '上海市上海市上海市上海市上海市上海市' },
    { name: 'Test5', role: '前端', date: '2020-01-20', rate: 3, address: '广州市广州市广州市广州市广州市广州市广州市广州市广州市' }
  ],
  footerData: [
    { seq: '合计', date: '2020-02-23', rate: '123456789123456789123456789123456789' }
  ]
})
</script>
