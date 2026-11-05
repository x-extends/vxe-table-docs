<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :data="tableData"
    >
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="action" title="操作" :cell-render="actionCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
      { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
      { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
      { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
    ]

    const actionCellRender: VxeColumnPropTypes.CellRender = {
      name: 'MyTableCellBtn',
      events: {}
    }

    return {
      tableData,
      actionCellRender
    }
  },
  created () {
    this.actionCellRender.events = {
      pass: this.passEvent,
      reject: this.rejectEvent
    }
  },
  methods: {
    passEvent (cellParams: any) {
      const { row } = cellParams
      VxeUI.modal.message({
        content: `通过 ${row.name} 的申请`,
        status: 'success'
      })
    },
    rejectEvent (cellParams: any) {
      const { row } = cellParams
      VxeUI.modal.message({
        content: `拒绝 ${row.name} 的申请`,
        status: 'error'
      })
    }
  }
})
</script>
