<template>
  <div>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #checkbox1="{ row }">
        <vxe-checkbox v-model="row.checked1"></vxe-checkbox>
      </template>

      <template #checkbox2="{ row }">
        <vxe-checkbox v-model="row.checked2"></vxe-checkbox>
        <vxe-checkbox v-model="row.checked3"></vxe-checkbox>
      </template>
    </vxe-grid>
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
  num: number
  address: string
  checked1: boolean
  checked2: boolean
  checked3: boolean
}

const gridOptions = reactive<VxeGridProps<RowVO> & {
  data: RowVO[]
}>({
  border: true,
  columns: [
    { field: 'checkbox1', width: 60, slots: { default: 'checkbox1' } },
    { field: 'checkbox2', width: 100, slots: { default: 'checkbox2' } },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc', checked1: false, checked2: false, checked3: false },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou', checked1: false, checked2: false, checked3: false },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai', checked1: false, checked2: false, checked3: false }
  ]
})
</script>
