<template>
  <div>
    <vxe-radio-group v-model="cellConfig.verticalAlign">
      <vxe-radio-button checked-value="top" content="顶部"></vxe-radio-button>
      <vxe-radio-button checked-value="center" content="居中"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const cellConfig = reactive<VxeTablePropTypes.CellConfig>({
  height: 60,
  verticalAlign: 'top'
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  cellConfig,
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'seq' },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'PM', sex: 'Man', age: 44, address: 'Guangzhou' },
    { id: 10005, name: 'Test5', role: 'PM', sex: 'Man', age: 56, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'PM', sex: 'Man', age: 38, address: 'Guangzhou' }
  ]
})
</script>
