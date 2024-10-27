<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #currUser_edit="{ row }">
        <vxe-table-select v-model="row.currUser" :options="currUserOptions" :columns="currUserColumns"></vxe-table-select>
      </template>
      <template #currUser_default="{ row }">
        <span>{{ formatCurrUserLabel(row.currUser) }}</span>
      </template>

      <template #currUserList_edit="{ row }">
        <vxe-table-select v-model="row.currUserList" :options="currUserListOptions" :columns="currUserListColumns" multiple></vxe-table-select>
      </template>
      <template #currUserList_default="{ row }">
        <span>{{ formatCurrUserListLabel(row.currUserList) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'
import type { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  currUser: number | null
  currUserList: number[]
}

const currUserColumns = ref<VxeTableSelectPropTypes.Columns>([
  { field: 'label', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'address', title: 'Address' }
])
const currUserOptions = ref<VxeTableSelectPropTypes.Options>([
  { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
const formatCurrUserLabel = (val: string) => {
  const item = currUserOptions.value.find(item => item.value === val)
  return item ? item.label : val
}

const currUserListColumns = ref<VxeTableSelectPropTypes.Columns>([
  { field: 'label', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'address', title: 'Address' }
])
const currUserListOptions = ref<VxeTableSelectPropTypes.Options>([
  { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])
const formatCurrUserListLabel = (vals: string[]) => {
  if (vals) {
    return vals.map(val => {
      const item = currUserListOptions.value.find(item => item.value === val)
      return item ? item.label : val
    }).join(',')
  }
  return ''
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
    { field: 'currUser', title: '下拉树单选', width: 200, editRender: {}, slots: { edit: 'currUser_edit', default: 'currUser_default' } },
    { field: 'currUserList', title: '下拉树多选', width: 200, editRender: {}, slots: { edit: 'currUserList_edit', default: 'currUserList_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', currUser: null, currUserList: [] },
    { id: 10002, name: 'Test2', role: 'Test', currUser: 10002, currUserList: [10001] },
    { id: 10003, name: 'Test3', role: 'PM', currUser: null, currUserList: [10001, 10004] }
  ]
})
</script>
