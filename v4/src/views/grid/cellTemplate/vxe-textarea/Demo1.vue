<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #remark_default="{ row }">
        <vxe-textarea v-model="row.remark" style="height: 80px;"></vxe-textarea>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  remark: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  cellConfig: {
    height: 100
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'remark', title: '备注', width: 300, slots: { default: 'remark_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', remark: '备注11 备注 备注 备注 注' },
    { id: 10002, name: 'Test2', remark: '备注22 备注 备注 备注备注备注 注' },
    { id: 10003, name: 'Test3', remark: '备注 备注333 备注 备注备注333备注备注备注 备注备注333备注备注备注 备注备注333备注备注备注' }
  ]
})
</script>
