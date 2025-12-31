<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  date: string
  address: string
  startDate: string
  endDate: string
}

const list: RowVO[] = [
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, date: '', address: 'Shenzhen', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, date: '', address: 'test abc', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, date: '', address: 'Shenzhen', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, date: '', address: 'Shenzhen', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, date: '', address: 'test abc', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, date: '', address: 'Shenzhen', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Develop', sex: 'Man', age: 49, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 45, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 35, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100014, name: 'Test14', nickname: 'T14', role: 'Test', sex: 'Man', age: 29, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100015, name: 'Test15', nickname: 'T15', role: 'Develop', sex: 'Man', age: 39, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100016, name: 'Test16', nickname: 'T16', role: 'Test', sex: 'Women', age: 35, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100017, name: 'Test17', nickname: 'T17', role: 'Test', sex: 'Man', age: 39, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100018, name: 'Test18', nickname: 'T18', role: 'Develop', sex: 'Man', age: 44, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100019, name: 'Test19', nickname: 'T19', role: 'Develop', sex: 'Man', age: 39, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100020, name: 'Test20', nickname: 'T20', role: 'Test', sex: 'Women', age: 35, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100021, name: 'Test21', nickname: 'T21', role: 'Test', sex: 'Man', age: 39, date: '', address: 'Shanghai', startDate: '2025-01-01', endDate: '2025-02-10' },
  { id: 100022, name: 'Test22', nickname: 'T22', role: 'Develop', sex: 'Man', age: 44, date: '', address: 'Guangzhou', startDate: '2025-01-01', endDate: '2025-02-10' }
]

// 模拟接口
const findPageList = (pageSize: number, currentPage: number, queryObj: any) => {
  console.log(`调用查询接口 pageSize=${pageSize} currentPage=${currentPage}`, queryObj)
  return new Promise<{
    result: RowVO[]
    page: {
      total: number
    }
  }>(resolve => {
    setTimeout(() => {
      resolve({
        result: list.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        page: {
          total: list.length
        }
      })
    }, 100)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 500,
  pagerConfig: {},
  formConfig: {
    items: [
      { field: 'name', title: '名称', span: 8, itemRender: { name: 'VxeInput' } },
      {
        field: 'sex',
        title: '性别',
        span: 8,
        itemRender: {
          name: 'VxeSelect',
          options: [
            { label: '女', value: 'Women' },
            { label: '男', value: 'Man' }
          ],
          changeToSubmit: true
        }
      },
      { field: 'date', title: '日期', span: 8, itemRender: { name: 'VxeDatePicker', changeToSubmit: true } },
      { field: '_startAndEnd', title: '日期范围', span: 16, itemRender: { name: 'VxeDateRangePicker', changeToSubmit: true, startField: 'startDate', endField: 'endDate' } },
      {
        span: 24,
        align: 'center',
        itemRender: {
          name: 'VxeButtonGroup',
          options: [
            { type: 'submit', content: '搜索', status: 'primary' },
            { type: 'reset', content: '重置' }
          ]
        }
      }
    ]
  },
  proxyConfig: {
    // 启用表单代理
    form: true,
    ajax: {
      query: ({ page, form }) => {
        return findPageList(page.pageSize, page.currentPage, form)
      }
    }
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'date', title: 'Date' },
    { field: 'address', title: 'Address' }
  ]
})
</script>
