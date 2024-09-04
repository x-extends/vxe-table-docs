<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #sex_edit="{ row }">
        <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
      </template>
      <template #sex_default="{ row }">
        <span>{{ formatSex(row) }}</span>
      </template>

      <template #num_edit="{ row }">
        <vxe-input v-model="row.num"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    mode: 'cell',
    trigger: 'click'
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex', editRender: {}, slots: { edit: 'sex_edit', default: 'sex_default' } },
    { field: 'num', title: 'Number', editRender: {}, slots: { edit: 'num_edit' } },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const sexOptions = ref([
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const formatSex = (row: RowVO) => {
  return row.sex === '1' ? '男' : '女'
}
</script>
