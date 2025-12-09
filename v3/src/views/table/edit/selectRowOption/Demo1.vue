<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.role" :options="row.roleOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.role, row.roleOptions) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  roleOptions: any[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      {
        id: 10001,
        name: 'Test1',
        role: '11',
        sex: 'Man',
        age: 28,
        address: 'test abc',
        roleOptions: [
          { label: '前端人员', value: '11' },
          { label: '后端人员', value: '12' }
        ]
      },
      {
        id: 10002,
        name: 'Test2',
        role: '21',
        sex: 'Women',
        age: 22,
        address: 'Guangzhou',
        roleOptions: [
          { label: '产品经理', value: '21' },
          { label: '部门经理', value: '22' }
        ]
      },
      {
        id: 10003,
        name: 'Test3',
        role: '33',
        sex: 'Man',
        age: 32,
        address: 'Shanghai',
        roleOptions: [
          { label: '设计师', value: '31' },
          { label: '美工', value: '33' }
        ]
      },
      {
        id: 10004,
        name: 'Test4',
        role: '41',
        sex: 'Women',
        age: 24,
        address: 'Shanghai',
        roleOptions: [
          { label: '测试人员', value: '41' },
          { label: '测试组长', value: '42' }
        ]
      }
    ]

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell'
    }

    return {
      tableData,
      editConfig
    }
  },
  methods: {
    formatSexLabel (role: string, roleOptions: any) {
      const item = roleOptions.find(item => item.value === role)
      return item ? item.label : role
    }
  }
})
</script>
