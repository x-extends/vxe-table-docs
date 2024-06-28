<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    {
      title: '按钮组',
      width: 200,
      cellRender: {
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
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop' },
    { id: 10002, name: 'Test2', role: 'Test' },
    { id: 10003, name: 'Test3', role: 'PM' }
  ]
})
</script>
