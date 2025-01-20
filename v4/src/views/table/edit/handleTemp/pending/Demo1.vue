<template>
  <div>
    <vxe-button status="error" @click="pendingSelectEvent(true)">批量标记除</vxe-button>
    <vxe-button status="info" @click="pendingSelectEvent(false)">批量取消标记</vxe-button>
    <vxe-button status="success" @click="getPendingEvent">获取已标记数据</vxe-button>
    <vxe-table
      border
      show-overflow
      keep-source
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="checkbox" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="200">
        <template #default="{ row }">
          <vxe-button mode="text" status="error" @click="pendingRow(row, true)">标记</vxe-button>
          <vxe-button mode="text" @click="pendingRow(row, false)">取消</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
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

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const editConfig = reactive<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell',
  showStatus: true
})

const pendingRow = async (row: RowVO, status: boolean) => {
  const $table = tableRef.value
  if ($table) {
    $table.setPendingRow(row, status)
  }
}

const pendingSelectEvent = async (status: boolean) => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    if (selectRecords.length > 0) {
      await $table.setPendingRow(selectRecords, status)
      await $table.clearCheckboxRow()
    } else {
      VxeUI.modal.message({
        content: '未选择数据',
        status: 'info'
      })
    }
  }
}

const getPendingEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const pendingRecords = $table.getPendingRecords()
    VxeUI.modal.alert(`标记：${pendingRecords.length} 行`)
  }
}
</script>
