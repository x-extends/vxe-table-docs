<template>
  <div>
    <vxe-switch v-model="columnConfig.resizable"></vxe-switch>

    <vxe-table
      :column-config="columnConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="最小列宽" min-width="20%"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="time" title="Time"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' }
    ]

    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
      resizable: true
    }

    return {
      tableData,
      columnConfig
    }
  }
})
</script>
