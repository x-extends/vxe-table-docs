<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="currUser" title="下拉表格单选" width="200" :edit-render="currUserEditRender"></vxe-column>
      <vxe-column field="currUserList" title="下拉表格多选" width="200" :edit-render="currUserListEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableSelectProps } from 'vxe-pc-ui'
import type { VxeColumnPropTypes } from 'vxe-table'

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

    const currUserEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeTableSelectProps> = {
      name: 'VxeTableSelect',
      props: {
        columns: [
          { field: 'label', title: 'Name' },
          { field: 'role', title: 'Role' },
          { field: 'sex', title: 'Sex' },
          { field: 'address', title: 'Address' }
        ]
      },
      options: [
        { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    const currUserListEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeTableSelectProps> = {
      name: 'VxeTableSelect',
      props: {
        multiple: true,
        columns: [
          { field: 'label', title: 'Name' },
          { field: 'role', title: 'Role' },
          { field: 'sex', title: 'Sex' },
          { field: 'address', title: 'Address' }
        ]
      },
      options: [
        { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      tableData,
      currUserEditRender,
      currUserListEditRender
    }
  }
})
</script>
