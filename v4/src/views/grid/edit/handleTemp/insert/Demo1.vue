<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（第三行插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  height: 400,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'age', title: 'Age', editRender: { name: 'input' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const addEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insert(record)
    // 激活不自动聚焦
    $grid.setEditRow(newRow)
    // 激活并自动聚焦
    // $grid.setEditRow(newRow, 'name')
    // 激活并自动聚焦
    // $grid.setEditCell(newRow, 'name')
  }
}

const pushEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertAt(record, -1)
    // 激活并自动聚焦第一个可编辑列
    $grid.setEditRow(newRow, true)
  }
}

const insertEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertAt(record, 2)
    $grid.setEditCell(newRow, 'name')
  }
}

const getInsertEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const insertRecords = $grid.getInsertRecords()
    VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
  }
}
</script>
