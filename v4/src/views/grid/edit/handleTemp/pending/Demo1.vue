<template>
  <div>
    <vxe-button status="error" @click="pendingSelectEvent(true)">批量标记除</vxe-button>
    <vxe-button status="info" @click="pendingSelectEvent(false)">批量取消标记</vxe-button>
    <vxe-button status="success" @click="getPendingEvent">获取已标记数据</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" @click="pendingRow(row, true)">标记</vxe-button>
        <vxe-button mode="text" @click="pendingRow(row, false)">取消</vxe-button>
      </template>
    </vxe-grid>
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
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'checkbox', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'age', title: 'Age', editRender: { name: 'input' } },
    { field: 'action', title: '操作', width: 200, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const pendingRow = async (row: RowVO, status: boolean) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setPendingRow(row, status)
  }
}

const pendingSelectEvent = async (status: boolean) => {
  const $grid = gridRef.value
  if ($grid) {
    const selectRecords = $grid.getCheckboxRecords()
    if (selectRecords.length > 0) {
      await $grid.setPendingRow(selectRecords, status)
      await $grid.clearCheckboxRow()
    } else {
      VxeUI.modal.message({
        content: '未选择数据',
        status: 'info'
      })
    }
  }
}

const getPendingEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const pendingRecords = $grid.getPendingRecords()
    VxeUI.modal.alert(`标记：${pendingRecords.length} 行`)
  }
}
</script>
