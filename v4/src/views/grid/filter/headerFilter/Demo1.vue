<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #header_name="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" clearable @change="confirmFilterEvent(option)" style="width: 100%;"></vxe-input>
        </div>
      </template>

      <template #header_date="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" type="date" @change="confirmFilterEvent(option)" placeholder="请选择" clearable transfer style="width: 100%;"></vxe-input>
        </div>
      </template>

      <template #header_sex="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexList" clearable @change="confirmFilterEvent(option)" style="width: 100%;"></vxe-select>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'
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
  loading: false,
  height: 500,
  filterConfig: {
    showIcon: false
  },
  columns: [
    { type: 'seq', width: 70 },
    {
      title: '名字',
      children: [
        {
          field: 'name',
          width: 200,
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return `${row[column.field]}`.indexOf(option.data) > -1
            }
            return true
          },
          slots: {
            header: 'header_name'
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
            header: 'header_date'
          }
        }
      ]
    },
    {
      title: '性别',
      children: [
        {
          field: 'sex',
          width: 200,
          formatter ({ cellValue }) {
            const item = sexList.value.find(item => item.value === cellValue)
            return item ? item.label : ''
          },
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return row[column.field] === option.data
            }
            return true
          },
          slots: {
            header: 'header_sex'
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
    $grid.updateFilterOptionStatus(option, !!option.data)
    // 修改条件之后，需要手动调用 updateData 处理表格数据
    $grid.updateData()
  }
}
</script>
