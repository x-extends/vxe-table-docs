<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #name_default="{ row }">
        <vxe-input v-if="row.isEdit" v-model="row.name"></vxe-input>
        <span v-else>{{ row.name }}</span>
      </template>

      <template #sex_default="{ row }">
        <vxe-select v-if="row.isEdit" v-model="row.sex" :options="sexList"></vxe-select>
        <span v-else>{{ row.sex }}</span>
      </template>

      <template #age_default="{ row }">
        <vxe-input v-if="row.isEdit" v-model="row.age"></vxe-input>
        <span v-else>{{ row.age }}</span>
      </template>

      <template #action="{ row }">
        <vxe-button v-if="row.isEdit" mode="text" status="success" :loading="row.isLoading" @click="handleSave(row)">保存</vxe-button>
        <vxe-button v-else mode="text" status="primary" @click="handleEdit(row)">编辑</vxe-button>
        <vxe-button v-if="row.isEdit" mode="text" @click="cancelEdit(row)">取消</vxe-button>
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
  address: string
  isEdit: boolean
  isLoading: boolean
}

const sexList = ref([
  { label: '男', value: 'Man' },
  { label: '女', value: 'Women' }
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', slots: { default: 'name_default' } },
    { field: 'sex', title: 'Sex', slots: { default: 'sex_default' } },
    { field: 'age', title: 'Age', slots: { default: 'age_default' } },
    { field: 'action', title: '操作', width: 140, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', isEdit: false, isLoading: false },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', isEdit: false, isLoading: false },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', isEdit: false, isLoading: false },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', isEdit: false, isLoading: false }
  ]
})

const handleEdit = (row: RowVO) => {
  row.isEdit = true
}

const cancelEdit = (row: RowVO) => {
  row.isEdit = false
}

const handleSave = (row: RowVO) => {
  row.isLoading = true
  // 模拟后端接口
  setTimeout(() => {
    row.isEdit = false
    row.isLoading = false
  }, 300)
}
</script>
