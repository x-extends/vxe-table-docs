<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="nameEditRender"></vxe-column>
      <vxe-column field="_startAndEnd" title="日期范围" width="320" :edit-render="startAndEndEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  startDate: string
  endDate: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', startDate: '', endDate: '', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', startDate: '2025-09-01', endDate: '2025-10-10', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', startDate: '2024-06-06', endDate: '2024-08-06', address: 'Shanghai' }
    ]

    const nameEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeInput'
    }

    const startAndEndEditRender: VxeColumnPropTypes.EditRender<RowVO, VxeInputProps> = {
      name: 'VxeDateRangePicker',
      startField: 'startDate',
      endField: 'endDate'
    }

    return {
      tableData,
      nameEditRender,
      startAndEndEditRender
    }
  }
})
</script>
