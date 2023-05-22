<template>
  <div>
    <vxe-toolbar ref="xToolbar" custom print></vxe-toolbar>

    <vxe-table
      border
      height="300"
      ref="xTable"
      :print-config="{}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="分组信息">
        <vxe-colgroup title="基本信息">
          <vxe-column field="name" title="app.body.label.name"></vxe-column>
          <vxe-column field="role" title="Role"></vxe-column>
        </vxe-colgroup>
        <vxe-column field="sex" title="app.body.label.sex"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="age" title="app.body.label.age"></vxe-column>
      <vxe-colgroup title="其他信息">
        <vxe-column field="rate" title="Rate"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance, VxeToolbarInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const xTable = ref<VxeTableInstance<RowVO>>()
const xToolbar = ref<VxeToolbarInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = xTable.value
  const $toolbar = xToolbar.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
