<template>
  <div>
    <vxe-table
      border
      show-footer
      height="400"
      :footer-span-method="footerRowspanMethod"
      :footer-method="footerMethod"
      :data="demo3.tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" sortable></vxe-column>
      <vxe-column field="role" title="Role" sortable></vxe-column>
      <vxe-column field="rate" title="Rate" footer-align="center"></vxe-column>
      <vxe-column field="age" title="Age" footer-align="center"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

const demo3 = reactive({
  tableData: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
  ]
})

const footerRowspanMethod: VxeTablePropTypes.FooterSpanMethod = ({ _rowIndex, _columnIndex }) => {
  if (_rowIndex === 0) {
    if (_columnIndex === 1) {
      return { rowspan: 2, colspan: 1 }
    }
  } else if (_rowIndex === 1) {
    if (_columnIndex === 1) {
      return { rowspan: 0, colspan: 0 }
    }
  }
}

const meanNum = (list: any[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count / list.length
}

const sumNum = (list: any[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {
  const footerData = [
    columns.map((column, _columnIndex) => {
      if (_columnIndex === 0) {
        return '平均'
      }
      if (['age', 'rate'].includes(column.field)) {
        return meanNum(data, 'age')
      }
      if (['name'].includes(column.field)) {
        return '合并了'
      }
      if (['content'].includes(column.field)) {
        return '合并了'
      }
      return null
    }),
    columns.map((column, _columnIndex) => {
      if (_columnIndex === 0) {
        return '和值'
      }
      if (['age', 'rate'].includes(column.field)) {
        return sumNum(data, 'age')
      }
      return null
    })
  ]
  return footerData
}
</script>
