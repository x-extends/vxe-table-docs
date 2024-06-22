<template>
  <div>
    <p>
      <vxe-button @click="clearDataEvent">清空数据</vxe-button>
      <vxe-button @click="exportDataEvent">导出数据</vxe-button>
      <vxe-button @click="importDataEvent">导入数据</vxe-button>
    </p>

    <vxe-table
      ref="tableRef"
      height="400"
      :row-config="{isHover: true}"
      :export-config="{}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeButtonEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, address: 'test abc' }
])

const sexList = [
  { label: '女', value: '0' },
  { label: '男', value: '1' }
]

const tableRef = ref<VxeTableInstance<RowVO>>()

const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  const item = sexList.find(item => item.value === cellValue)
  return item ? item.label : ''
}

const clearDataEvent: VxeButtonEvents.Click = () => {
  tableData.value = []
}

const exportDataEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport({
      // 默认勾选源
      original: true
    })
  }
}

const importDataEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.importData()
  }
}
</script>
