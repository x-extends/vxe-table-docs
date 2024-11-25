<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      border
      ref="tableRef"
      :custom-config="customConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes, VxeToolbarInstance, VxeTableInstance } from 'vxe-table'

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

    const customConfig: VxeTablePropTypes.CustomConfig = {
      mode: 'drawer'
    }

    return {
      tableData,
      customConfig
    }
  },
  mounted () {
    const $table = this.$refs.tableRef as VxeTableInstance
    const $toolbar = this.$refs.toolbarRef as VxeToolbarInstance
    if ($table && $toolbar) {
      $table.connect($toolbar)
    }
  }
})
</script>
