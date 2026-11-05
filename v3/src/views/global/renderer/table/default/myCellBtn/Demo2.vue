<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const actionCellRender: VxeColumnPropTypes.CellRender = {
      name: 'MyTableCellBtn',
      events: {}
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      height: 300,
      columns: [
        { type: 'seq', width: 50 },
        { field: 'name', title: 'name' },
        { field: 'sex', title: 'sex' },
        { field: 'age', title: 'Age' },
        {
          field: 'action',
          title: '操作',
          cellRender: actionCellRender
        }
      ],
      data: [
        { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
        { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
        { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
        { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
      ]
    }

    return {
      gridOptions,
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
