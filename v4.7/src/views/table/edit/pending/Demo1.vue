<template>
  <div>
    <p>
      <vxe-button @click="pendingSelectEvent(true)">将已选行标记删除</vxe-button>
      <vxe-button @click="pendingSelectEvent(false)">将已选行取消标记</vxe-button>
      <vxe-button @click="getPendingEvent">获取标记行</vxe-button>
      <vxe-button @click="clearPendingEvent">清除所有标记行</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      ref="tableRef"
      :data="tableData"
      :column-config="{resizable: true}"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: '.vxe-input--inner'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.role" type="text" placeholder="请输入昵称"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="num6" title="Number" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.num6" type="number" placeholder="请输入数值"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Week" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="week" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.address" type="text"></vxe-input>
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

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' }
])

const pendingSelectEvent = (status: boolean) => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    $table.setPendingRow(selectRecords, status)
    $table.clearCheckboxRow()
  }
}

const getPendingEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const pendingRecords = $table.getPendingRecords()
    VxeUI.modal.alert(pendingRecords.length)
  }
}

const clearPendingEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearPendingRow()
  }
}
</script>
