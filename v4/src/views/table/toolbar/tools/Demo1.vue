<template>
  <div>
    <vxe-toolbar :tools="toolbarTools" @tool-click="toolClickEvent"></vxe-toolbar>
    <vxe-table
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeToolbarPropTypes, VxeToolbarEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const toolbarTools = ref<VxeToolbarPropTypes.Tools>([
  { name: '新增', code: 'add', status: 'primary' },
  { name: '删除', code: 'del', status: 'error' },
  { name: '保存', code: 'save', status: 'success' }
])

const toolClickEvent: VxeToolbarEvents.ToolClick = ({ code }) => {
  VxeUI.modal.message({
    content: `点击了 ${code}`,
    status: 'success'
  })
}
</script>
