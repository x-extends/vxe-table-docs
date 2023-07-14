<template>
  <div>
    <p>
      <vxe-button @click="exportDataEvent">导出 sex=1 的行</vxe-button>
    </p>

    <vxe-table
      show-footer
      height="300"
      ref="tableRef"
      :row-config="{isHover: true}"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeColumnPropTypes, VxeTablePropTypes, VxeButtonEvents } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const tableRef = ref<VxeTableInstance<RowVO>>()

const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  if (cellValue === '1') {
    return '男'
  } else if (cellValue === '0') {
    return '女'
  }
  return cellValue
}

const meanNum = (list: any[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count / list.length
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  const footerData = [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均'
      }
      if (['age'].includes(column.field)) {
        return meanNum(data, column.field)
      }
      return null
    })
  ]
  return footerData
}

const exportDataEvent: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      type: 'csv',
      dataFilterMethod ({ row }) {
        return row.sex === '1'
      }
    })
  }
}
</script>
