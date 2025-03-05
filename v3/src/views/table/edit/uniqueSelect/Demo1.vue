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
          <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: '1', age: 28, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: '2', age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' }
    ]

    const roleList = [
      { label: '前端', value: '1', disabled: false },
      { label: '后端', value: '2', disabled: false },
      { label: '项目经理', value: '3', disabled: false },
      { label: '设计师', value: '4', disabled: false },
      { label: '运维', value: '5', disabled: false }
    ]

    return {
      tableData,
      roleList
    }
  },
  created () {
    this.$nextTick(() => {
      this.updateRoleList()
    })
  },
  methods: {
    formatRole  (row: RowVO) {
      const item = this.roleList.find(item => item.value === row.role)
      return item ? item.label : row.role
    },
    insertEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {}
        $table.insert(record)
      }
    },
    updateRoleList  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 获取表格中的全量数据
        const fullData = $table.getFullData()
        this.roleList.forEach(item => {
          if (item.value) {
            // 如果当前选项已经被选过，则禁用
            item.disabled = fullData.some(row => row.role === item.value)
          }
        })
      }
    },
    roleChangeEvent  () {
      this.updateRoleList()
    },
    editActivatedEvent () {
      // 激活编辑时检查剩余选项是否可选择
      this.updateRoleList()
    }
  }
})
</script>
