<template>
  <div>
    <vxe-table
      border
      ref="xTable"
      height="400"
      :data="tableData">
      <vxe-column type="radio" width="60">
        <template #radio="{ row, checked }">
          <span class="custom-radio" @click.stop="setSelectRow(row)">
            <i v-if="checked" class="vxe-icon-success-circle-fill"></i>
            <i v-else class="vxe-icon-success-circle"></i>
          </span>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
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
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const xTable = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 26, address: 'test abc' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 32, address: 'Shanghai' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Beijing' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shenzhen' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 42, address: 'test abc' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const setSelectRow = (row: RowVO) => {
  const $table = xTable.value
  if ($table) {
    $table.setRadioRow(row)
  }
}
</script>

<style lang="scss" scoped>
.custom-radio {
  font-size: 18px;
  cursor: pointer;
  user-select: none;
}
</style>
