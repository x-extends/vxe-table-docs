<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" fixed="left" width="160"></vxe-column>
      <vxe-column field="role" title="Role" width="460"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100"></vxe-column>
      <vxe-column field="age" title="Age" width="440"></vxe-column>
      <vxe-column field="attr1" title="Attr1" min-width="440"></vxe-column>
      <vxe-column field="attr2" title="Attr2" min-width="240"></vxe-column>
      <vxe-column field="attr3" title="Attr3" min-width="340"></vxe-column>
      <vxe-column field="attr4" title="Attr4" min-width="540"></vxe-column>
      <vxe-column field="address" title="Address" fixed="right" width="200"></vxe-column>
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
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
      useKey: true,
      drag: true
    }

    return {
      tableData,
      columnConfig
    }
  }
})
</script>
