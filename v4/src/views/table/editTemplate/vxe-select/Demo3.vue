<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" clearable></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="大数据量选项" min-width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.role" :options="roleOptions" filterable></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatRoleLabel(row.role) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  sexList: string[]
  type: string
  typeList: string[]
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'role2', sex: '', sexList: [], type: '', typeList: [] },
  { id: 10002, name: 'Test2', role: 'role10', sex: 'Women', sexList: ['Man', 'Women'], type: '2-1', typeList: ['1-2', '2-1'] },
  { id: 10003, name: 'Test3', role: 'role200', sex: 'Man', sexList: [], type: '', typeList: [] }
])

const roleOptions = ref<any[]>([])

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
