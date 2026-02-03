<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #name_default="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #nickname_default="{ row }">
        <vxe-input v-model="row.nickname"></vxe-input>
      </template>
      <template #role_default="{ row }">
        <vxe-input v-model="row.role"></vxe-input>
      </template>
      <template #age_default="{ row }">
        <vxe-number-input v-model="row.age"></vxe-number-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: number | null
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 400,
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, slots: { default: 'name_default' } },
    { field: 'nickname', title: 'Nickname', width: 300, slots: { default: 'nickname_default' } },
    { field: 'role', title: 'Role', width: 300, slots: { default: 'role_default' } },
    { field: 'age', title: 'Age', width: 140, slots: { default: 'age_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: '', role: 'Develop', age: null },
    { id: 10002, name: 'Test2', nickname: '', role: 'Test', age: 41 },
    { id: 10003, name: 'Test3', nickname: '', role: 'PM', age: 58 },
    { id: 10004, name: 'Test4', nickname: '', role: 'Develop', age: 37 },
    { id: 10005, name: 'Test5', nickname: '', role: 'Test', age: 20 },
    { id: 10006, name: 'Test6', nickname: '', role: 'Test', age: 39 },
    { id: 10007, name: 'Test7', nickname: '', role: 'Develop', age: 22 },
    { id: 10008, name: 'Test8', nickname: '', role: 'Develop', age: 29 },
    { id: 10009, name: 'Test9', nickname: '', role: 'Test', age: 22 }
  ]
})
</script>
