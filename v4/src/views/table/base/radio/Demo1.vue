<template>
  <div>
    <p>
      <vxe-button @click="setSelectRow(1)">设置第二行选中</vxe-button>
      <vxe-button @click="clearRadioRowEvent">取消选中</vxe-button>
      <vxe-button @click="getRadioEvent">获取选中</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :data="tableData"
      :radio-config="{highlight: true}"
      @cell-click="cellClickEvent"
      @radio-change="radioChangeEvent">
      <vxe-column type="radio" width="60">
        <template #header>
          <vxe-button mode="text" @click="clearRadioRowEvent" :disabled="!selectRow">取消</vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const selectRow = ref<RowVO | null>(null)

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

const tableRef = ref<VxeTableInstance<RowVO>>()

const cellClickEvent: VxeTableEvents.CellClick<RowVO> = () => {
  console.log('单元格点击事件')
}

const radioChangeEvent: VxeTableEvents.RadioChange<RowVO> = ({ row }) => {
  selectRow.value = row
  console.log('单选事件')
}

const setSelectRow = (index: number) => {
  const $table = tableRef.value
  if ($table) {
    $table.setRadioRow(tableData.value[index])
  }
}

const clearRadioRowEvent = () => {
  const $table = tableRef.value
  if ($table) {
    selectRow.value = null
    $table.clearRadioRow()
  }
}

const getRadioEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const currRow = $table.getRadioRecord()
    VxeUI.modal.alert(JSON.stringify(currRow))
  }
}
</script>
