<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column title="按钮组" width="200" :cell-render="btnGroupCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const btnGroupCellRender = reactive<VxeColumnPropTypes.CellRender<RowVO>>({
  name: 'VxeButtonGroup',
  props: {
    mode: 'text'
  },
  options: [
    { content: '查看', name: 'view' },
    { content: '删除', status: 'error', name: 'del' }
  ],
  events: {
    click (cellParams, params) {
      VxeUI.modal.message({
        content: `点击了 ${params.name}`,
        status: 'success'
      })
    }
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop' },
  { id: 10002, name: 'Test2', role: 'Test' },
  { id: 10003, name: 'Test3', role: 'PM' }
])
</script>
