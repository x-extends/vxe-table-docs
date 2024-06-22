<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">新增</vxe-button>
      <vxe-button @click="removeEvent">移除</vxe-button>
      <vxe-button @click="saveEvent">保存</vxe-button>
      <vxe-button @click="revertEvent">还原</vxe-button>
    </p>

    <vxe-table
      ref="tableRef"
      border
      show-overflow
      keep-source
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.sex" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作">
        <template #default="{ row }">
          <vxe-button v-if="!hasAddRow(row)" @click="revertRow(row)">还原</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'

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
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const tableRef = ref<VxeTableInstance<RowVO>>()

const hasAddRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    return $table.isInsertByRow(row)
  }
  return false
}

const insertEvent = async () => {
  const $table = tableRef.value
  const record = {
    sex: '1'
  }
  if ($table) {
    const { row: newRow } = await $table.insert(record)
    await $table.setEditCell(newRow, 'sex')
  }
}

const removeEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    if (selectRecords.length) {
      const type = await VxeUI.modal.confirm('您确定要删除选中的数据吗?')
      if (type === 'confirm') {
        await $table.removeCheckboxRow()
      }
    } else {
      VxeUI.modal.message({ content: '请至少选择一条数据', status: 'error' })
    }
  }
}

const revertRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    return $table.revertData(row)
  }
}

const revertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const type = await VxeUI.modal.confirm('您确定要还原数据吗?')
    if (type === 'confirm') {
      await $table.revertData()
    }
  }
}

const saveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    VxeUI.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
  }
}
</script>
