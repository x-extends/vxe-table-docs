<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData"
      :column-config="{resizable: true}"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: '.vxe-input--inner', placeholder: '请点击输入...'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="nickname" title="Role" :edit-render="{placeholder: '请输入昵称'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.nickname" type="text" placeholder="请输入昵称"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{placeholder: '请选择'}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" transfer>
            <vxe-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="sex2" title="多选下拉" :edit-render="{placeholder: '请选择'}">
        <template #default="{ row }">
          <span>{{ formatMultiSex(row.sex2) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex2" placeholder="请选择" multiple transfer>
            <vxe-option v-for="item in sexOptions" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="num1" title="Amount" :edit-render="{placeholder: '请输入数值'}">
        <template #edit="{ row }">
          <vxe-number-input v-model="row.num1" type="float" :digits="2" placeholder="请输入数值"></vxe-number-input>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{placeholder: '请选择日期'}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Week" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="week" placeholder="请选择日期" transfer></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  age: number
  num1: number
  address: string
  date12: string
  date13: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: '', nickname: 'T1', role: 'Develop', sex: '', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
  { id: 10003, name: '', nickname: 'T3', role: '', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: '', sex: '', sex2: [], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
  { id: 10005, name: 'Test5', nickname: '', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },
  { id: 10007, name: '', nickname: '', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '', sex2: [], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }
])

const sexOptions = ref([
  { label: '', value: '' },
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const formatSex = (value: any) => {
  if (value === '1') {
    return '男'
  }
  if (value === '0') {
    return '女'
  }
  return ''
}

const formatMultiSex = (values: any[]) => {
  if (values) {
    return values.map(val => formatSex(val)).join(',')
  }
  return ''
}
</script>
