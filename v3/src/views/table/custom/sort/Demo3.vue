<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      ref="tableRef"
      :column-config="columnConfig"
      :row-config="rowConfig"
      :custom-config="customConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="role" title="Role" width="180"></vxe-column>
      <vxe-column field="sex" title="Sex" width="120"></vxe-column>
      <vxe-column field="age" title="Age" width="120"></vxe-column>
      <vxe-column field="attr1" title="Attr1" width="100"></vxe-column>
      <vxe-column field="attr2" title="Attr2" width="140"></vxe-column>
      <vxe-column field="attr3" title="Attr3" width="120"></vxe-column>
      <vxe-column field="attr4" title="Attr4" width="160"></vxe-column>
      <vxe-column field="attr5" title="Attr5" width="140"></vxe-column>
      <vxe-column field="attr6" title="Attr6" width="150"></vxe-column>
      <vxe-column field="attr7" title="Attr7" width="180"></vxe-column>
      <vxe-column field="attr8" title="Attr8" width="220"></vxe-column>
      <vxe-column field="attr9" title="Attr9" width="160"></vxe-column>
      <vxe-column field="address" title="Address" min-width="200"></vxe-column>
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

    const columnConfig: VxeTablePropTypes.ColumnConfig = {
      resizable: true,
      drag: true
    }

    const rowConfig: VxeTablePropTypes.RowConfig = {
    }

    const customConfig: VxeTablePropTypes.CustomConfig = {
      mode: 'modal',
      allowVisible: false,
      allowFixed: false,
      allowResizable: false,
      allowSort: true
    }

    return {
      tableData,
      columnConfig,
      rowConfig,
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
