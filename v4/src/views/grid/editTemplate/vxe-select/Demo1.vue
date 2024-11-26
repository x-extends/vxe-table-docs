<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_sex="{ row }">
        <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
      </template>
      <template #default_sex="{ row }">
        <span>{{ formatSexLabel([row.sex]) }}</span>
      </template>

      <template #edit_sexList="{ row }">
        <vxe-select v-model="row.sexList" :options="sexOptions" multiple></vxe-select>
      </template>
      <template #default_sexList="{ row }">
        <span>{{ formatSexLabel(row.sexList) }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const sexOptions = ref([
  { label: '女', value: 'Women' },
  { label: '男', value: 'Man' }
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
    { field: 'sex', title: '下拉框', width: 200, editRender: { }, slots: { edit: 'edit_sex', default: 'default_sex' } },
    { field: 'sexList', title: '下拉框多选', width: 200, editRender: { }, slots: { edit: 'edit_sexList', default: 'default_sexList' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})

const formatSexLabel = (sexList: string[]) => {
  if (sexList) {
    return sexList.map(sex => {
      const item = sexOptions.value.find(item => item.value === sex)
      return item ? item.label : sex
    }).join(',')
  }
  return ''
}
</script>
