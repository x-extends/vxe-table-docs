<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #name_header="{ column }">
        <vxe-input type="text" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="confirmFilterEvent(option)" placeholder="请输入" clearable></vxe-input>
      </template>

      <template #date_header="{ column }">
        <vxe-input type="date" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @change="confirmFilterEvent(option)" placeholder="请选择" clearable transfer></vxe-input>
      </template>

      <template #sex_header="{ column }">
        <vxe-select v-for="(option, index) in column.filters" :key="index" v-model="option.data" :options="sexList" @change="confirmFilterEvent(option)" placeholder="请选择" clearable transfer></vxe-select>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps, VxeGridInstance } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
  amount: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexList = ref([
  { label: '男', value: '1' },
  { label: '女', value: '0' }
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 300,
  filterConfig: {
    showIcon: false
  },
  columnConfig: {
    resizable: true
  },
  columns: [
    { type: 'seq', width: 60 },
    {
      title: '名字',
      children: [
        {
          field: 'name',
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return XEUtils.toValueString(row[column.field]).toLowerCase().indexOf(option.data) > -1
            }
            return true
          },
          slots: {
            header: 'name_header'
          }
        }
      ]
    },
    {
      title: '时间',
      children: [
        {
          field: 'date',
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return XEUtils.isDateSame(row[column.field], option.data, 'yyyy-MM-dd')
            }
            return true
          },
          slots: {
            header: 'date_header'
          }
        }
      ]
    },
    {
      title: '性别',
      children: [
        {
          field: 'sex',
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return row[column.field] === option.data
            }
            return true
          },
          formatter ({ cellValue }) {
            const item = sexList.value.find(item => item.value === cellValue)
            return item ? item.label : ''
          },
          slots: {
            header: 'sex_header'
          }
        }
      ]
    },
    { field: 'address', title: '地址' }
  ],
  data: [
    { id: 10001, name: 'Test10', role: 'Develop', sex: '0', date: '2021-11-14', age: 28, amount: 888, address: 'test abc' },
    { id: 10002, name: 'Test12', role: 'Test', sex: '1', date: '2021-01-20', age: 22, amount: 666, address: 'Guangzhou' },
    { id: 10003, name: 'Test34', role: 'PM', sex: '1', date: '2020-09-17', age: 32, amount: 89, address: 'Shanghai' },
    { id: 10004, name: 'Test24', role: 'Designer', sex: '0', date: '2020-10-25', age: 23, amount: 1000, address: 'test abc' },
    { id: 10005, name: 'Test15', role: 'Develop', sex: '0', date: '2020-12-12', age: 30, amount: 999, address: 'Shanghai' },
    { id: 10006, name: 'Test36', role: 'Designer', sex: '0', date: '2020-08-21', age: 21, amount: 998, address: 'test abc' },
    { id: 10007, name: 'Test27', role: 'Test', sex: '1', date: '2021-01-01', age: 29, amount: 2000, address: 'test abc' },
    { id: 10008, name: 'Test48', role: 'Develop', sex: '1', date: '2021-02-06', age: 35, amount: 999, address: 'test abc' }
  ]
})

const confirmFilterEvent = (option) => {
  const $grid = gridRef.value
  if ($grid) {
    // 设置为选中状态
    option.checked = true
    // 修改条件之后，需要手动调用 updateData 处理表格数据
    $grid.updateData()
  }
}
</script>
