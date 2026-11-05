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

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', sex: 'Man', age: 28 },
  { id: 10002, name: 'Test2', sex: 'Women', age: 22 },
  { id: 10003, name: 'Test3', sex: 'Man', age: 32 },
  { id: 10004, name: 'Test4', sex: 'Women', age: 23 }
])

const passEvent = (cellParams: any) => {
  const { row } = cellParams
  VxeUI.modal.message({
    content: `通过 ${row.name} 的申请`,
    status: 'success'
  })
}

const rejectEvent = (cellParams: any) => {
  const { row } = cellParams
  VxeUI.modal.message({
    content: `拒绝 ${row.name} 的申请`,
    status: 'error'
  })
}

const actionCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'MyTableCellBtn',
  events: {
    pass: passEvent,
    reject: rejectEvent
  }
})
</script>
