<template>
  <div>
    <vxe-table border ref="tableRef" :data="tableData">
      <vxe-column type="checkbox" width="80">
        <template #header="{ checked, indeterminate }">
          <span class="custom-checkbox" @click.stop="toggleAllCheckboxEvent">
            <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
            <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
            <i v-else class="vxe-icon-checkbox-unchecked"></i>
          </span>
        </template>
        <template #checkbox="{ row, checked, indeterminate }">
          <span class="custom-checkbox" @click.stop="toggleCheckboxEvent(row)">
            <i v-if="indeterminate" class="vxe-icon-square-minus-fill"></i>
            <i v-else-if="checked" class="vxe-icon-square-checked-fill"></i>
            <i v-else class="vxe-icon-checkbox-unchecked"></i>
          </span>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  num: number
  address: string
}

const tableRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
])

const toggleAllCheckboxEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleAllCheckboxRow()
  }
}

const toggleCheckboxEvent = (row) => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleCheckboxRow(row)
  }
}
</script>
