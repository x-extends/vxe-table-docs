<template>
  <div>
    <vxe-table
      border
      :row-config="rowConfig"
      :column-config="columnConfig"
      :data="tableData"
      @row-dragstart="rowDragstartEvent"
      @row-dragend="rowDragendEvent">
      <vxe-column field="name" title="Name" drag-sort></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const rowConfig: VxeTablePropTypes.RowConfig<RowVO> = {
      useKey: true,
      drag: true
    }

    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
      useKey: true
    }

    return {
      tableData,
      rowConfig,
      columnConfig
    }
  },
  methods: {
    rowDragstartEvent ({ row }) {
      console.log(`拖拽开始 ${row.name}`)
    },
    rowDragendEvent ({ newRow, oldRow }) {
      console.log(`拖拽完成，旧行 ${oldRow.name} 新行 ${newRow.name}`)
    }
  }
})
</script>
