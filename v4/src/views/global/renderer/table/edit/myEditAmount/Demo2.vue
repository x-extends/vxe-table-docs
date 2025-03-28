<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  amount: string
  num: number
}

const amountEditRender = reactive({
  name: 'MyTableEditAmount'
})

const numEditRender = reactive({
  name: 'MyTableEditAmount'
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 300,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'name' },
    { field: 'amount', title: 'Amount', editRender: amountEditRender },
    { field: 'num', title: 'Num', editRender: numEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', amount: '65', num: 28 },
    { id: 10002, name: 'Test2', amount: '31', num: 22 },
    { id: 10003, name: 'Test3', amount: '20', num: 32 },
    { id: 10004, name: 'Test4', amount: '12', num: 23 }
  ]
})
</script>
