<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      border
      id="myCustomStorage"
      ref="tableRef"
      :custom-config="customConfig"
      :column-config="columnConfig"
      :column-drag-config="columnDragConfig"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="90"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-colgroup field="group1" title="分组1">
        <vxe-column field="nickname" title="Nickname"></vxe-column>
        <vxe-column field="role" title="role"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup field="group3" title="分组3">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="attr1" title="Attr1"></vxe-column>
        <vxe-colgroup field="group4" title="分组4">
          <vxe-column field="age" title="Age"></vxe-column>
          <vxe-column field="attr4" title="Attr4"></vxe-column>
          <vxe-column field="attr8" title="Attr8"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
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
  storage: true,
  immediate: true
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  drag: true,
  resizable: true
})

const columnDragConfig = reactive<VxeTablePropTypes.ColumnDragConfig>({
  isPeerDrag: true,
  isCrossDrag: true,
  isToChildDrag: true
})

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
