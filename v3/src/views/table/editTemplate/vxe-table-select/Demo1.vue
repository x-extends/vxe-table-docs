<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{autoFocus: 'input'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="currUser" title="下拉表格单选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-table-select v-model="row.currUser" :options="currUserOptions" :columns="currUserColumns"></vxe-table-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatCurrUserLabel(row.currUser) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="currUserList" title="下拉表格多选" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-table-select v-model="row.currUserList" :options="currUserListOptions" :columns="currUserListColumns" multiple></vxe-table-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatCurrUserListLabel(row.currUserList) }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableSelectPropTypes } from 'vxe-pc-ui'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  currUser: number | null
  currUserList: number[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', currUser: null, currUserList: [] },
      { id: 10002, name: 'Test2', role: 'Test', currUser: 10002, currUserList: [10001] },
      { id: 10003, name: 'Test3', role: 'PM', currUser: null, currUserList: [10001, 10004] }
    ]

    const editConfig: VxeTablePropTypes.EditConfig<RowVO> = {
      mode: 'row',
      trigger: 'click'
    }

    const currUserColumns: VxeTableSelectPropTypes.Columns = [
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]
    const currUserOptions: VxeTableSelectPropTypes.Options = [
      { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const currUserListColumns: VxeTableSelectPropTypes.Columns = [
      { field: 'label', title: 'Name' },
      { field: 'role', title: 'Role' },
      { field: 'sex', title: 'Sex' },
      { field: 'address', title: 'Address' }
    ]
    const currUserListOptions: VxeTableSelectPropTypes.Options = [
      { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    return {
      tableData,
      editConfig,
      currUserColumns,
      currUserOptions,
      currUserListColumns,
      currUserListOptions
    }
  },
  methods: {
    formatCurrUserLabel (val: string) {
      const item = this.currUserOptions.find(item => item.value === val)
      return item ? item.label : val
    },
    formatCurrUserListLabel (vals: string[]) {
      if (vals) {
        return vals.map(val => {
          const item = this.currUserListOptions.find(item => item.value === val)
          return item ? item.label : val
        }).join(',')
      }
      return ''
    }
  }
})
</script>
