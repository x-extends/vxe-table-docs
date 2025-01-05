<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #nameHeader="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" clearable @change="confirmFilterEvent(option)" style="width: 100%;"></vxe-input>
        </div>
      </template>

      <template #dateHeader="{ column }">
        <span v-for="(option, index) in column.filters" :key="index">
          <vxe-date-picker v-model="option.data" @change="confirmFilterEvent(option)" clearable style="width: 140px;"></vxe-date-picker>
        </span>
      </template>
      <template #dateFilter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-date-picker v-model="option.data" @change="changeFilterOptionEvent(option)" clearable></vxe-date-picker>
        </div>
      </template>

      <template #sexHeader="{ column }">
        <span v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexList" clearable @change="confirmFilterEvent(option)" style="width: 140px;"></vxe-select>
        </span>
      </template>
      <template #sexFilter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexList" clearable @change="changeFilterOptionEvent(option)"></vxe-select>
        </div>
      </template>

      <template #addressHeader="{ column }">
        <span v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" clearable @change="confirmFilterEvent(option)" style="width: 240px;"></vxe-input>
        </span>
      </template>
      <template #addressFilter="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" clearable @change="changeFilterOptionEvent(option)"></vxe-input>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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

export default Vue.extend({
  data () {
    const sexList = [
      { label: '男', value: '1' },
      { label: '女', value: '0' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {}

    return {
      gridOptions,
      sexList
    }
  },
  methods: {
    confirmFilterEvent (option) {
      this.changeFilterOptionEvent(option)
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 修改条件之后，需要手动调用 updateData 处理表格数据
        $grid.updateData()
        // 关闭筛选面板
        $grid.closeFilter()
      }
    },
    changeFilterOptionEvent (option) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 设置为选中状态
        $grid.updateFilterOptionStatus(option, !!option.data)
      }
    }
  },
  created () {
    this.gridOptions = {
      border: true,
      loading: false,
      height: 500,
      filterConfig: {
        iconVisibleMethod: ({ column }) => {
          if (column.field === 'name') {
            return false
          }
          return true
        }
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
              filterMethod: ({ option, row, column }) => {
                if (option.data) {
                  return `${row[column.field]}`.indexOf(option.data) > -1
                }
                return true
              },
              slots: {
                header: 'nameHeader'
              }
            }
          ]
        },
        {
          title: '时间',
          children: [
            {
              field: 'date',
              width: 200,
              filters: [
                { data: '' }
              ],
              filterMethod: ({ option, row, column }) => {
                if (option.data) {
                  return XEUtils.isDateSame(row[column.field], option.data, 'yyyy-MM-dd')
                }
                return true
              },
              slots: {
                header: 'dateHeader',
                filter: 'dateFilter'
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
              formatter: ({ cellValue }) => {
                const item = this.sexList.find(item => item.value === cellValue)
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
                header: 'sexHeader',
                filter: 'sexFilter'
              }
            }
          ]
        },
        {
          title: '地址',
          children: [
            {
              field: 'address',
              width: 300,
              filters: [
                { data: '' }
              ],
              filterMethod: ({ option, row, column }) => {
                if (option.data) {
                  return `${row[column.field]}`.indexOf(option.data) > -1
                }
                return true
              },
              slots: {
                header: 'addressHeader',
                filter: 'addressFilter'
              }
            }
          ]
        }
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
    }
  }
})
</script>
