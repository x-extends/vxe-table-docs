<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count / list.length
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  stripe: true,
  showFooter: true,
  height: 400,
  tooltipConfig: {},
  exportConfig: {},
  menuConfig: {},
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    export: true,
    zoom: true,
    custom: true
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '2021-03-13' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, date: '2021-01-05' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, date: '2021-04-13' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, date: '2021-09-13' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, date: '2021-10-13' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '2021-01-33' }
  ],
  footerMethod ({ columns, data }) {
    return [
      columns.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return '和值'
        }
        if (['age', 'rate'].includes(column.field)) {
          return sumNum(data, column.field)
        }
        return ''
      }),
      columns.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return '平均'
        }
        if (['age', 'rate'].includes(column.field)) {
          return meanNum(data, column.field)
        }
        return ''
      })
    ]
  }
})

const gridEvents: VxeGridListeners<RowVO> = {
  headerCellClick (params) {
    const { column } = params
    console.log(`表头单元格点击${column.title}`)
  },
  headerCellDblclick (params) {
    const { column } = params
    console.log(`表头单元格双击${column.title}`)
  },
  headerCellMenu (params) {
    const { column } = params
    console.log(`表头右键单元格 ${column.title}`)
  },
  cellClick (params) {
    const { column } = params
    console.log(`单元格点击${column.title}`)
  },
  cellDblclick (params) {
    const { column } = params
    console.log(`单元格双击${column.title}`)
  },
  cellMenu (params) {
    const { row } = params
    console.log(`单元格右键行 ${row.name}`)
  },
  footerCellClick (params) {
    const { column } = params
    console.log(`表尾单元格点击${column.title}`)
  },
  footerCellDblclick (params) {
    const { column } = params
    console.log(`表尾单元格双击${column.title}`)
  },
  footerCellMenu (params) {
    const { column } = params
    console.log(`表尾右键单元格 ${column.title}`)
  },
  checkboxChange (params) {
    console.log(`复选框切换 ${params.checked}`)
  },
  checkboxAll (params) {
    console.log(`复选框全选切换 ${params.checked}`)
  },
  scroll (params) {
    console.log(`滚动事件scrollTop=${params.scrollTop} scrollLeft=${params.scrollLeft}`)
  },
  zoom (params) {
    console.log(`表格全屏 type=${params.type}`)
  },
  custom (params) {
    console.log(`表格自定义列 type=${params.type}`)
  }
}
</script>
