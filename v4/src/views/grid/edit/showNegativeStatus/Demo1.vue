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
  num1: number | null
  num2: number | null
  num3: number | null
  num4: number | null
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'num1', title: '数值', editRender: { name: 'VxeNumberInput' } },
    { field: 'num2', title: '数值（负数标红）', editRender: { name: 'VxeNumberInput', showNegativeStatus: true } },
    { field: 'num3', title: '货币', align: 'right', editRender: { name: 'VxeNumberInput', props: { type: 'amount', align: 'right', showCurrency: true } } },
    { field: 'num4', title: '货币（负数标红）', align: 'right', editRender: { name: 'VxeNumberInput', showNegativeStatus: true, props: { type: 'amount', align: 'right', showCurrency: true } } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', num1: 10000000, num2: 10000000, num3: 10000000, num4: 10000000 },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', num1: -20000, num2: -20000, num3: -20000, num4: -20000 },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', num1: null, num2: null, num3: null, num4: null },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', num1: 0, num2: 0, num3: 0, num4: 0 }
  ]
})
</script>
