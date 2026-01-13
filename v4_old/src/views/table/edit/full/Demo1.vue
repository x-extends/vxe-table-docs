<template>
  <div>
    <vxe-toolbar ref="xToolbar" :loading="loading">
      <template #buttons>
        <vxe-button status="primary" content="临时新增" @click="insertEvent"></vxe-button>
        <vxe-button status="warning" content="临时删除" @click="removeSelectEvent"></vxe-button>
        <vxe-button status="danger" content="直接删除" @click="deleteSelectEvent"></vxe-button>
        <vxe-button content="提交（将临时操作持久化）" @click="saveEvent"></vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      height="500"
      :column-config="{resizable: true}"
      :loading="loading"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showUpdateStatus: true, showInsertStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="nickname" title="Nickname" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.nickname" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" type="text" :options="sexList" transfer></vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="amount" title="Amount" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.amount" type="float" :digits="2"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="updateDate" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.updateDate" type="date"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="240">
        <template #default="{ row }">
          <vxe-button status="warning" content="临时删除" @click="removeRowEvent(row)"></vxe-button>
          <vxe-button status="danger" content="直接删除" @click="deleteRowEvent(row)"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from 'vue'
import { VXETable, VxeTablePropTypes, VxeTableInstance, VxeToolbarInstance } from 'vxe-table'

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

const xToolbar = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const validRules = reactive<VxeTablePropTypes.EditRules<RowVO>>({
  name: [
    { required: true, message: '名称必须填写' }
  ]
})

const sexList = ref([
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

const loadList = async () => {
  loading.value = true
  try {
    const res = await fetch('https:/apipub.vxeui.com/publicapi/api/pub/all').then(response => response.json())
    tableData.value = res
  } catch (e) {
    tableData.value = []
  }
  loading.value = false
}

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const newRecord = {}
    const { row: newRow } = await $table.insert(newRecord)
    await $table.setEditRow(newRow)
  }
}

const removeSelectEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    await $table.removeCheckboxRow()
  }
}

const deleteSelectEvent = async () => {
  const type = await VXETable.modal.confirm('您确定要删除选中的数据?')
  if (type !== 'confirm') {
    return
  }
  const $table = tableRef.value
  if ($table) {
    const checkboxRecords = $table.getCheckboxRecords()
    loading.value = true
    const body = { removeRecords: checkboxRecords }
    await fetch('https:/apipub.vxeui.com/publicapi/api/pub/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    await loadList()
    loading.value = false
  }
}

const removeRowEvent = async (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    await $table.remove(row)
  }
}

const deleteRowEvent = async (row: RowVO) => {
  const type = await VXETable.modal.confirm('您确定要删除该数据?')
  if (type !== 'confirm') {
    return
  }
  loading.value = true
  const body = { removeRecords: [row] }
  await fetch('https:/apipub.vxeui.com/publicapi/api/pub/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
  await loadList()
  loading.value = false
}

const saveEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    if (insertRecords.length <= 0 && removeRecords.length <= 0 && updateRecords.length <= 0) {
      VXETable.modal.message({ content: '数据未改动！', status: 'warning' })
      return
    }
    const errMap = await $table.validate()
    if (errMap) {
      return
    }
    loading.value = true
    try {
      const body = { insertRecords, removeRecords, updateRecords }
      await fetch('https:/apipub.vxeui.com/publicapi/api/pub/save', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      await loadList()
      VXETable.modal.message({ content: `操作成功，新增 ${insertRecords.length} 条，更新 ${updateRecords.length} 条，删除 ${removeRecords.length} 条`, status: 'success' })
    } catch (e) {
      VXETable.modal.message({ content: '操作失败', status: 'error' })
    }
    loading.value = false
  }
}

nextTick(() => {
  // 将表格和工具栏进行关联
  const $table = tableRef.value
  const $toolbar = xToolbar.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})

loadList()
</script>
