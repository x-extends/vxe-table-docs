<template>
  <div>
    <vxe-table
      border
      showOverflow
      :edit-config="editConfig"
      :data="tableData"
      @edit-disabled="editDisabledEvent">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{name: 'VxeInput'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const editConfig = reactive<VxeTablePropTypes.EditConfig<RowVO>>({
  trigger: 'click',
  mode: 'row',
  beforeEditMethod ({ rowIndex }) {
    if (rowIndex === 1) {
      return false
    }
    return true
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
])

const editDisabledEvent: VxeTableEvents.EditDisabled<RowVO> = ({ row, column }) => {
  console.log('禁止编辑', column.field, row)
}
</script>
