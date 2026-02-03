<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name" clearable></vxe-input>
      </template>

      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="approveRow(row)">通过</vxe-button>
        <vxe-button mode="text" status="error" @click="rejectionRow(row)">驳回</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'action', title: '操作', width: 180, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
  ]
})

const approveRow = (row: RowVO) => {
  VxeUI.modal.message({
    content: `通过审批：${row.name}`,
    status: 'success'
  })
}

const rejectionRow = (row: RowVO) => {
  VxeUI.modal.message({
    content: `驳回审批：${row.name}`,
    status: 'error'
  })
}
</script>
