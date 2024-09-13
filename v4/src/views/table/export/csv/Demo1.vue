<template>
  <div>
    <vxe-button @click="exportEvent">直接导出 CSV 文件</vxe-button>
    <vxe-table
      ref="tableRef"
      :export-config="{}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="no1" title="NO1"></vxe-column>
      <vxe-column field="no2" title="NO2" cell-type="string"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  no1: string
  no2: string
}

const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', no1: '028', no2: '028' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', no1: '220', no2: '220' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', no1: '003200', no2: '003200' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', no1: '02040', no2: '02040' }
])

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      type: 'csv'
    })
  }
}
</script>
