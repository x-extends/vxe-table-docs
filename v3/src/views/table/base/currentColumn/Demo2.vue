<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :current-column-config="currentColumnConfig"
      :data="tableData"
      @current-column-disabled="currentColumnDisabledEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
      isCurrent: true,
      isHover: true
    }

    const currentColumnConfig: VxeTablePropTypes.CurrentColumnConfig<RowVO> = {
      beforeSelectMethod ({ column }) {
        if (column.field === 'age') {
          return false
        }
        return true
      }
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
    ]

    return {
      columnConfig,
      currentColumnConfig,
      tableData
    }
  },
  methods: {
    currentColumnDisabledEvent () {
      VxeUI.modal.message({
        content: '禁止选中',
        status: 'error'
      })
    }
  }
})
</script>
