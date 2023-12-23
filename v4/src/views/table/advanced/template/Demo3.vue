<template>
  <div>
    <vxe-table
      border
      show-footer
      :data="tableData"
      :footer-method="footerMethod">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number">
        <template #footer="{ items, _columnIndex }">
          <span>￥{{ items[_columnIndex] }}元</span>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
])

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  return [
    columns.map(column => {
      if (column.type === 'seq') {
        return '合计'
      } else if (['num'].includes(column.field)) {
        return sumNum(data, column.field)
      }
      return '-'
    })
  ]
}
</script>
