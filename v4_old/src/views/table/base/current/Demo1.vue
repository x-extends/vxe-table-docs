<template>
  <div>
    <p>
      <vxe-button @click="selectRowEvent">设置第二行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData"
      @current-row-change="currentRowChangeEvent">
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance, VxeTableEvents } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  content: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
  { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
  { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
  { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
])

const currentRowChangeEvent: VxeTableEvents.CurrentRowChange<RowVO> = ({ rowIndex }) => {
  console.log(`行选中事件 ${rowIndex}`)
}

const selectRowEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setCurrentRow(tableData.value[1])
  }
}

const clearSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearCurrentRow()
  }
}

const getCurrentEvent = () => {
  const $table = tableRef.value
  if ($table) {
    VXETable.modal.alert(JSON.stringify($table.getCurrentRecord()))
  }
}
</script>
