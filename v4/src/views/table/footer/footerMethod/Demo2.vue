<template>
  <div>
    <vxe-table
      show-footer
      border
      height="300"
      :data="tableData"
      :footer-method="footerMethod">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Num"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

const tableData = ref<RowVO[]>([
  { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
  { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
  { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
  { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
  { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
  { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
  { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
  { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
])

const sumMethod = (list: RowVO[], field: string) => {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return num
}

const meanMethod = (list: RowVO[], field: string) => {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return (num / list.length).toFixed(2)
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns }) => {
  const data = tableData.value
  return [
    columns.map((column, index) => {
      if (index === 0) {
        return '合计'
      }
      if (column.field === 'num') {
        return `￥${sumMethod(data, column.field)}`
      }
      return '-'
    }),
    columns.map((column, index) => {
      if (index === 0) {
        return '平均'
      }
      if (column.field === 'num') {
        return `${meanMethod(data, column.field)}元`
      }
      return '-'
    })
  ]
}
</script>
