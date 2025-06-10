<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name" :disabled="(row.name || '').indexOf('x') === 0"></vxe-input>
      </template>

      <template #edit_sex="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #edit_age="{ row }">
        <vxe-input v-model="row.name" :disabled="row.age < 27"></vxe-input>
      </template>

      <template #edit_address="{ row }">
        <vxe-input v-model="row.name" :disabled="row.sex === 'Women'"></vxe-input>
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
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'Name', editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'sex', title: 'Sex', editRender: { }, slots: { edit: 'edit_sex' } },
    { field: 'age', title: 'Age', editRender: { }, slots: { edit: 'edit_age' } },
    { field: 'address', title: 'Address', editRender: { }, slots: { edit: 'edit_address' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ]
})
</script>
