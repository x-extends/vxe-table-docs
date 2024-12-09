<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
    <vxe-table
      show-footer
      ref="tableRef"
      :export-config="exportConfig"
      :footer-data="footerData"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="name" title="Name"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="分组2">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const footerData = ref([
  { seq: '合计', sex: '666', age: '999' },
  { seq: '平均', sex: '888', age: '333' }
])

const exportConfig = reactive<VxeTablePropTypes.ExportConfig>({
  columns: [
    { field: 'seq' },
    { field: 'group2' },
    { field: 'sex' },
    { field: 'age' }
  ]
})

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}
</script>
