<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（第三行插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
    <vxe-table
      border
      show-overflow
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, reactive } from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const insertRecords: RowVO[] = []

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const editConfig = reactive<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell'
})

const addEvent = () => {
  const newRow: RowVO = {
    id: new Date().getTime(),
    name: `Name_${new Date().getTime()}`,
    role: '',
    sex: '',
    age: 18,
    address: ''
  }
  tableData.value.unshift(newRow)
  insertRecords.push(newRow)
  nextTick(() => {
    const $table = tableRef.value
    if ($table) {
      $table.setEditRow(newRow, 'name')
    }
  })
}

const pushEvent = () => {
  const newRow: RowVO = {
    id: new Date().getTime(),
    name: `Name_${new Date().getTime()}`,
    role: '',
    sex: '',
    age: 18,
    address: ''
  }
  tableData.value.push(newRow)
  insertRecords.push(newRow)
  nextTick(() => {
    const $table = tableRef.value
    if ($table) {
      $table.setEditCell(newRow, 'name')
    }
  })
}

const insertEvent = () => {
  const newRow: RowVO = {
    id: new Date().getTime(),
    name: `Name_${new Date().getTime()}`,
    role: '',
    sex: '',
    age: 18,
    address: ''
  }
  tableData.value.splice(2, 0, newRow)
  insertRecords.push(newRow)
  nextTick(() => {
    const $table = tableRef.value
    if ($table) {
      $table.setEditCell(newRow, 'name')
    }
  })
}

const getInsertEvent = () => {
  VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
}
</script>
