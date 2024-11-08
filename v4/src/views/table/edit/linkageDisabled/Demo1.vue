<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" :disabled="row.sex === 'Women'" clearable></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="下拉框" width="200" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" :options="sexOptions"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sex) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="startTime" title="Start time" width="220" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.startTime" :disabledMethod="(params) =>disabledStartTimeMethod(params, row)"></vxe-date-picker>
        </template>
        <template #default="{ row }">
          <span>{{ row.startTime }}</span>
        </template>
      </vxe-column>
      <vxe-column field="endTime" title="'End time" width="220" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.endTime" :disabledMethod="(params) => disabledEndTimeMethod(params, row)"></vxe-date-picker>
        </template>
        <template #default="{ row }">
          <span>{{ row.endTime }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  startTime: string
  endTime: string
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, startTime: '', endTime: '2024-12-15', address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, startTime: '2024-11-02', endTime: '2024-11-20', address: 'Guangzhou' },
  { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, startTime: '', endTime: '', address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, startTime: '2024-10-15', endTime: '', address: 'Shenzhen' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, startTime: '', endTime: '', address: 'Shanghai' }
])

const sexOptions = ref([
  { label: '女', value: 'Women' },
  { label: '男', value: 'Man' }
])

const formatSexLabel = (val: string) => {
  const item = sexOptions.value.find(item => item.value === val)
  return item ? item.label : val
}

const disabledStartTimeMethod = ({ date }: any, row: RowVO) => {
  const endTime = row.endTime
  if (endTime) {
    const eDate = XEUtils.toStringDate(endTime)
    return date >= eDate
  }
  return false
}

const disabledEndTimeMethod = ({ date }: any, row: RowVO) => {
  const startTime = row.startTime
  if (startTime) {
    const sDate = XEUtils.toStringDate(startTime)
    return date <= sDate
  }
  return false
}
</script>
