<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #edit_role="{ row }">
        <vxe-select v-model="row.role" :options="roleOptions" filterable></vxe-select>
      </template>
      <template #default_role="{ row }">
        <span>{{ formatRoleLabel(row.role) }}</span>
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

const roleOptions = ref<any[]>([])

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
    { field: 'role', title: '大数据量选项', width: 200, editRender: { }, slots: { edit: 'edit_role', default: 'default_role' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
    { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
    { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
  ]
})

const formatRoleLabel = (role: string) => {
  const item = roleOptions.value.find(item => item.value === role)
  return item ? item.label : role
}

// 模拟后端接口
setTimeout(() => {
  const list: any[] = []
  for (let i = 0; i < 10000; i++) {
    list.push({
      value: `role${i}`,
      label: `角色${i}`
    })
  }
  roleOptions.value = list
}, 100)
</script>
