<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  showOverflow: true,
  showFooter: true,
  rowConfig: {
    useKey: true
  },
  columnConfig: {
    useKey: true
  },
  tooltipConfig: {
    enterable: true,
    maxWidth: 200,
    maxHeight: 100
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', width: 160 }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'GuangzhouGuangzhou Guangzhou GuangzhouGuangzhouGuangzhouGuangzhou Guangzhou GuangzhouGuangzhouGuangzhouGuangzhou Guangzhou GuangzhouGuangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai ShanghaiShanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 57, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Women', age: 24, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai ' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Women', age: 39, address: 'shengzhen shengzhen shengzhen shengzhen shengzhen' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 36, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai ShGuangzhouGuangzhouhai Shanghai Shanghai' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai Shanghai ShanghaiShanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Sghai Shanghai Shanghai Shanghai Shanghai' }
  ],
  footerData: [
    { seq: '合计', role: 'Develop', age: 3 }
  ]
})
</script>
