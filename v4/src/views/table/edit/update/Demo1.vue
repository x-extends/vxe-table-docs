<template>
  <div>
    <vxe-button status="primary" @click="changeRow(2)">修改第三行</vxe-button>
    <vxe-button status="success" @click="saveAll()">全部保存</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="120" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column title="操作" width="320">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="changeName(row)">修改 name=xxx</vxe-button>
          <vxe-button mode="text" status="primary" @click="changeAge(row)">修改 age=18</vxe-button>
          <vxe-button mode="text" status="success" @click="saveRow(row)">局部保存</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'
import { VxeUI } from 'vxe-pc-ui'

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

const editConfig = ref<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell',
  showStatus: true
})

const changeName = (row: RowVO) => {
  row.name = `Name_${Date.now()}`
}

const changeAge = (row: RowVO) => {
  row.age = 18
}

const changeRow = (index: number) => {
  const row = tableData.value[index]
  if (row) {
    row.sex = 'Women'
    row.age = 22
  }
}

const saveRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    if ($table.isUpdateByRow(row)) {
      const newRecord = {}
      $table.reloadRow(row, newRecord)
      VxeUI.modal.message({
        content: '保存成功',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'info'
      })
    }
  }
}

const saveAll = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    if (updateRecords.length) {
      const newList = [...tableData.value]
      tableData.value = newList
      VxeUI.modal.message({
        content: '保存成功',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'info'
      })
    }
  }
}
</script>
