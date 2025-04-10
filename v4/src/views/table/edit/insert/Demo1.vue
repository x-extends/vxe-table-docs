<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent()">新增单行，激活name编辑</vxe-button>
        <vxe-button @click="insertsEvent()">新增多行，激活指定行name编辑</vxe-button>
        <vxe-button @click="insertEvent(-1)">在最后行插入</vxe-button>
        <vxe-button @click="removeSelectRowEvent">删除选中</vxe-button>
        <vxe-button @click="getSelectionEvent">获取选中</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="setActiveEditRow">激活第三行</vxe-button>
        <vxe-button @click="saveEvent">保存</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      max-height="400"
      :data="tableData"
      :edit-config="editConfig">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" sortable :edit-render="{autofocus: '.vxe-input--inner', defaultValue: '默认的名字'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex">
            <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" sortable :edit-render="{defaultValue: 18}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" sortable :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const editConfig = ref<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell',
  showStatus: true
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
])

const sexList = ref([
  { label: '', value: '' },
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const formatSex = (value: string) => {
  if (value === '1') {
    return '男'
  }
  if (value === '0') {
    return '女'
  }
  return ''
}

const insertEvent = async (row?: RowVO | number) => {
  const $table = tableRef.value
  if ($table) {
    const record = {
      sex: '1',
      date12: '2021-01-01'
    }
    const { row: newRow } = await $table.insertAt(record, row)
    await $table.setEditCell(newRow, 'name')
  }
}

const insertsEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const records = [
      {
        sex: '1',
        date12: '2021-01-01'
      },
      {
        sex: '0',
        date12: '2021-01-05'
      }
    ]
    const { row: newRow } = await $table.insertAt(records, -1)
    await $table.setEditCell(newRow, 'name')
  }
}

const setActiveEditRow = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setEditCell(tableData.value[2], 'name')
  }
}

const removeSelectRowEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VxeUI.modal.alert(`新增：${insertRecords.length}`)
  }
}

const getSelectionEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    VxeUI.modal.alert(`选中：${selectRecords.length}`)
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
