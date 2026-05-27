<template>
  <div>
    <vxe-radio-group v-model="customConfig.mode">
      <vxe-radio-button checked-value="" content="默认"></vxe-radio-button>
      <vxe-radio-button checked-value="modal" content="弹窗"></vxe-radio-button>
      <vxe-radio-button checked-value="drawer" content="抽屉"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>
    <vxe-table
      ref="tableRef"
      :column-config="columnConfig"
      :row-config="rowConfig"
      :custom-config="customConfig"
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

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  drag: true
})

const rowConfig = reactive<VxeTablePropTypes.RowConfig>({
})

const customConfig = reactive<VxeTablePropTypes.CustomConfig<RowVO>>({
  mode: '',
  allowVisible: false,
  allowFixed: false,
  allowResizable: false,
  allowSort: true
})

const columnDragConfig = reactive<VxeTablePropTypes.ColumnDragConfig<RowVO>>({
  isPeerDrag: true
})

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
