<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      border
      id="myCustomStorage1"
      ref="tableRef"
      :custom-config="customConfig"
      :column-config="columnConfig"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="90"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'
import type { VxeTablePropTypes, VxeToolbarInstance, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const customConfig = reactive<VxeTablePropTypes.CustomConfig>({
  storage: true
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  drag: true,
  resizable: true
})

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
