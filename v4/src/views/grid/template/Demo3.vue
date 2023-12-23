<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #num_footer="{ items, _columnIndex }">
        <span>￥{{ items[_columnIndex] }}元</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
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
  showFooter: true,
  columns: [
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number', slots: { footer: 'num_footer' } },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ],
  footerMethod ({ columns, data }) {
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
})
</script>
