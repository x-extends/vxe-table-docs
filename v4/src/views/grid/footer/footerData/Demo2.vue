<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  height: 400,
  showFooter: true,
  showOverflow: true,
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 400 },
    { field: 'role', title: 'Role', width: 300 },
    { field: 'sex', title: 'Sex', width: 100 },
    { field: 'num', title: 'Num', width: 120 },
    { field: 'address', title: 'Address', minWidth: 300 }
  ],
  data: [],
  footerData: [
    { seq: '合计', num: '-' },
    { seq: '平均', num: '-' }
  ]
})

// 模拟后端接口
const loadList = () => {
  gridOptions.loading = true
  setTimeout(() => {
    gridOptions.data = [
      { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
      { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
      { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
      { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
      { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
      { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
      { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
      { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
    ]
    gridOptions.footerData = [
      { seq: '合计', num: '￥282' },
      { seq: '平均', num: '2.88 元' }
    ]
    gridOptions.loading = false
  }, 3000)
}

loadList()
</script>
