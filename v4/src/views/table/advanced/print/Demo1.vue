<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="printEvent1">打印</vxe-button>
        <vxe-button @click="printSelectEvent">打印选中</vxe-button>
        <vxe-button @click="printEvent2">高级打印</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-footer
      ref="xTable"
      height="500"
      :print-config="printConfig"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-colgroup title="Group2">
          <vxe-column field="role" title="Role"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-colgroup>
        <vxe-column field="address" title="Address"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeTableInstance, VxeTablePropTypes, VxeButtonEvents } from 'vxe-table'

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

const printConfig = reactive<VxeTablePropTypes.PrintConfig>({
  // 自定义打印的样式示例
  style: `
    .vxe-table {
      color: #000000; // 修改表格默认颜色
      font-size: 12px; // 修改表格默认字体大小
      font-family: "Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu; // 修改表格默认字体
    }
    .vxe-table,
    .vxe-table thead th,
    .vxe-table tbody td,
    .vxe-table tfoot td  {
      border-color: #000000; // 修改表格边框颜色
    }
    .vxe-table thead th {
      color: green; // 修改表头字体颜色
      font-size: 14px; // 修改表头默认字体大小
    }
    .vxe-table tfoot td {
      color: red; // 修改表尾字体颜色
    }
    `
})

const xTable = ref<VxeTableInstance<RowVO>>()

const printEvent1: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    $table.print()
  }
}

const printSelectEvent: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    $table.print({
      data: $table.getCheckboxRecords()
    })
  }
}

const printEvent2: VxeButtonEvents.Click = () => {
  const $table = xTable.value
  if ($table) {
    $table.openPrint()
  }
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

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  const footerData = [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均'
      }
      if (['age', 'rate'].includes(column.field)) {
        return meanNum(data, column.field)
      }
      return null
    }),
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '和值'
      }
      if (['age', 'rate'].includes(column.field)) {
        return sumNum(data, column.field)
      }
      return null
    })
  ]
  return footerData
}
</script>
