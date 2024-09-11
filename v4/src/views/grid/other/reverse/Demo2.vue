<template>
  <div>
    <vxe-grid class="reverse-table" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  [key: string]: any
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  height: 400,
  showHeader: false,
  columns: [],
  data: []
})

const myColumns = [
  { field: 'id', title: 'ID' },
  { field: 'name', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'age', title: 'Age' },
  { field: 'address', title: 'Address' },
  { field: 'rate', title: 'Rate' },
  { field: 'date3', title: 'Date' },
  { field: 'updateTime', title: 'UpdateTime' },
  { field: 'createTime', title: 'CreateTime' }
]

const myData = [
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, rate: 2, address: 'Beijin', date3: '20:30', updateTime: '2019-09-16', createTime: '2020-09-16' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, rate: 6, address: 'Shanghai', date3: '20:30', updateTime: '2020-09-16', createTime: '2021-09-16' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2020-09-16', createTime: '2020-09-16' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, rate: 10, address: 'Shanghai Beijin Shenzhen Shenzhen Guangzhou', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, rate: 2, address: 'Shenzhen', date3: '20:30', updateTime: '2018-09-16', createTime: '2020-09-16' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, rate: 2, address: 'Beijin Beijin Beijin', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16' },
  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Test', sex: 'Man', age: 29, rate: 3, address: 'Shenzhen', date3: '20:30', updateTime: '2020-01-16', createTime: '2020-10-16' },
  { id: 10010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 50, rate: 5, address: 'Shenzhen', date3: '20:30', updateTime: '2017-09-16', createTime: '2020-09-16' }
]

const reverseTable = () => {
  const buildData = myColumns.map(column => {
    const item: any = { col0: column.title }
    myData.forEach((row, index) => {
      item[`col${index + 1}`] = row[column.field]
    })
    return item
  })
  const buildColumns: VxeGridPropTypes.Columns = [{
    field: 'col0',
    fixed: 'left',
    width: 100
  }]
  myData.forEach((item, index) => {
    buildColumns.push({
      field: `col${index + 1}`,
      minWidth: 200
    })
  })
  gridOptions.data = buildData
  gridOptions.columns = buildColumns
}

reverseTable()
</script>

<style lang="scss">
.reverse-table .vxe-body--row .vxe-body--column:first-child {
  background-color: #f8f8f9;
}
</style>
