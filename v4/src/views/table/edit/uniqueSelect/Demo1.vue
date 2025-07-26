<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent()">新增</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      ref="tableRef"
      max-height="400"
      :column-config="{resizable: true}"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-activated="editActivatedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatRole(row) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.role" clearable transfer @change="roleChangeEvent">
            <vxe-option v-for="item in roleList" :key="item.value" :value="item.value" :label="item.label" :disabled="item.disabled"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.date13" type="date" transfer></vxe-date-picker>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  age: number
  address: string
  date12: string
  date13: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
])

const roleList = ref([
  { label: '前端', value: '1', disabled: false },
  { label: '后端', value: '2', disabled: false },
  { label: '项目经理', value: '3', disabled: false },
  { label: '设计师', value: '4', disabled: false },
  { label: '运维', value: '5', disabled: false }
])

const formatRole = (row: RowVO) => {
  const item = roleList.value.find(item => item.value === row.role)
  return item ? item.label : row.role
}

const insertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const record = {}
    $table.insert(record)
  }
}

const updateRoleList = () => {
  const $table = tableRef.value
  if ($table) {
    // 获取表格中的全量数据
    const fullData = $table.getFullData()
    roleList.value.forEach(item => {
      if (item.value) {
        // 如果当前选项已经被选过，则禁用
        item.disabled = fullData.some(row => row.role === item.value)
      }
    })
  }
}

const roleChangeEvent = () => {
  updateRoleList()
}

const editActivatedEvent: VxeTableEvents.EditActivated<RowVO> = () => {
  // 激活编辑时检查剩余选项是否可选择
  updateRoleList()
}

nextTick(() => {
  updateRoleList()
})
</script>
