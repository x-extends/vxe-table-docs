<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="showHeader = !showHeader">显示/隐藏表头</vxe-button>
        <vxe-button @click="showFooter = !showFooter">显示/隐藏表尾</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      class="mytable-footer"
      height="400"
      :show-header="showHeader"
      :show-footer="showFooter"
      :footer-method="footerMethod"
      :footer-cell-class-name="footerCellClassName"
      :data="tableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-column field="name" title="Name" min-width="600" sortable></vxe-column>
        <vxe-column field="age" title="Age" min-width="600"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="date" title="Date" min-width="600"></vxe-column>
      <vxe-column field="amount" title="Amount" width="200" fixed="right"></vxe-column>
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
  amount: number
  address: string
}

const showHeader = ref(true)
const showFooter = ref(true)

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, amount: 888, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, amount: 666, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '1', age: 32, amount: 89, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '0', age: 23, amount: 1000, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '0', age: 30, amount: 999, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '0', age: 21, amount: 998, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: '1', age: 29, amount: 2000, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: '1', age: 35, amount: 999, address: 'test abc' }
])

const footerCellClassName: VxeTablePropTypes.FooterCellClassName<RowVO> = ({ $rowIndex, column }) => {
  if (column.type === 'seq') {
    if ($rowIndex === 0) {
      return 'col-blue'
    } else {
      return 'col-red'
    }
  } else if (column.field === 'age') {
    if ($rowIndex === 1) {
      return 'col-red'
    }
  }
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return `${count / list.length}`
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return `${count}`
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  const means: string[] = []
  const sums: string[] = []
  const others: string[] = []
  columns.forEach((column, columnIndex) => {
    if (columnIndex === 0) {
      means.push('平均')
      sums.push('和值')
      others.push('其他')
    } else {
      let meanCell = ''
      let sumCell = ''
      let otherCell = '-'
      switch (column.field) {
        case 'age':
        case 'amount':
          meanCell = meanNum(data, column.field)
          sumCell = sumNum(data, column.field)
          break
        case 'sex':
          otherCell = '无'
          break
      }
      means.push(meanCell)
      sums.push(sumCell)
      others.push(otherCell)
    }
  })
  // 返回一个二维数组的表尾合计
  return [means, sums, others]
}
</script>

<style scoped>
.mytable-footer:deep() .col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.mytable-footer:deep() .col-red {
  background-color: red;
  color: #fff;
}
</style>
