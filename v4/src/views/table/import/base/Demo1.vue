<template>
  <div>
    <vxe-button @click="exportEvent">导出源数据</vxe-button>
    <vxe-button @click="importEvent">直接导入</vxe-button>
    <vxe-table
      height="500"
      ref="tableRef"
      :export-config="{}"
      :import-config="{}"
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
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      original: true
    })
  }
}

const importEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.importData()
  }
}
</script>
