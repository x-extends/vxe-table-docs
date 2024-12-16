<template>
  <div>
    <vxe-table
      border
      :column-config="columnConfig"
      :column-drag-config="columnDragConfig"
      :data="tableData">
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="name" title="Role"></vxe-column>
      <vxe-colgroup field="group1" title="分组1">
        <vxe-column field="size" title="Sex"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup field="group6" title="分组1">
        <vxe-colgroup field="group9" title="分组9">
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="address" title="Address"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
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
      drag: true
    }

    const columnDragConfig: VxeTablePropTypes.ColumnDragConfig<RowVO> = {
      isCrossDrag: true,
      showGuidesStatus: true,
      showIcon: false,
      trigger: 'cell'
    }

    return {
      tableData,
      columnConfig,
      columnDragConfig
    }
  }
})
</script>
