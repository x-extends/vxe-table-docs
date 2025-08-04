<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

function sumMethod (list: RowVO[] = [], field: string) {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return num
}

function meanMethod (list: RowVO[], field: string) {
  let num = 0
  list.forEach(row => {
    num += Number(row[field])
  })
  return (num / list.length).toFixed(2)
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {}

    return {
      gridOptions
    }
  },
  created () {
    this.gridOptions = {
      border: true,
      showFooter: true,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Num' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
        { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
        { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
        { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
        { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
        { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
        { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
        { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
      ],
      footerMethod: () => {
        const { columns = [], data = [] } = this.gridOptions
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
    }
  }
})
</script>
