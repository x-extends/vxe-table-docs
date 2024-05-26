<template>
  <div>
    <vxe-table border ref="tableRef" :data="tableData">
      <vxe-column type="radio" width="80">
        <template #radio="{ row, checked }">
          <span class="custom-radio" @click.stop="setSelectRow(row)">
            <i v-if="checked" class="vxe-icon-success-circle-fill"></i>
            <i v-else class="vxe-icon-success-circle"></i>
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
import { VxeTableInstance } from 'vxe-table'

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

const setSelectRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    $table.setRadioRow(row)
  }
}
</script>
