<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableDefines, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: string
  num2: string
  address: string
}

const queryFilterConfs = ref<{
  field: string
  vals: string[]
}[]>([])

const pageVO = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  height: 400,
  columnConfig: {
    resizable: true
  },
  filterConfig: {
    remote: true
  },
  pagerConfig: pageVO,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300 },
    {
      field: 'role',
      title: 'Role',
      width: 240,
      filters: [
        { label: 'Develop', value: 'Develop' },
        { label: 'Test', value: 'Test' },
        { label: 'PM', value: 'PM' },
        { label: 'Designer', value: 'Designer' }
      ]
    },
    {
      field: 'sex',
      title: 'Sex',
      width: 200,
      filters: [
        { label: 'Man', value: 'Man' },
        { label: 'Women', value: 'Women' }
      ]
    },
    { field: 'age', title: 'Age', width: 200 },
    { field: 'address', title: 'Address', width: 300 }
  ],
  data: []
})

// 模拟后端接口
const loadList = () => {
  const mockList = [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 48, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10009, name: 'Test9', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10010, name: 'Test10', role: 'Develop', sex: 'Women', age: 29, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10011, name: 'Test11', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10012, name: 'Test12', role: 'Test', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10013, name: 'Test13', role: 'Develop', sex: 'Man', age: 23, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10014, name: 'Test14', role: 'Develop', sex: 'Women', age: 21, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10015, name: 'Test15', role: 'Develop', sex: 'Women', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10016, name: 'Test16', role: 'Test', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10017, name: 'Test17', role: 'Develop', sex: 'Man', age: 28, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10018, name: 'Test18', role: 'PM', sex: 'Women', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10019, name: 'Test19', role: 'Designer', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10021, name: 'Test21', role: 'Designer', sex: 'Man', age: 51, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10022, name: 'Test22', role: 'PM', sex: 'Women', age: 64, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10023, name: 'Test23', role: 'PM', sex: 'Man', age: 67, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10024, name: 'Test24', role: 'Develop', sex: 'Women', age: 45, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10023, name: 'Test25', role: 'PM', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10025, name: 'Test23', role: 'Develop', sex: 'Man', age: 59, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10026, name: 'Test26', role: 'Designer', sex: 'Women', age: 53, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10027, name: 'Test27', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10028, name: 'Test28', role: 'Designer', sex: 'Man', age: 30, num: '5000', num2: '5000', address: 'test abc' },
    { id: 10029, name: 'Test29', role: 'Test', sex: 'Man', age: 25, num: '5000', num2: '5000', address: 'test abc' }
  ]

  gridOptions.loading = true
  const searchConfs = queryFilterConfs.value
  setTimeout(() => {
    const { pageSize, currentPage } = pageVO
    const result = searchConfs.length
      ? mockList.filter(item => {
        return searchConfs.every(fItem => {
          const callValue = item[fItem.field]
          return fItem.vals.some(val => `${callValue}`.indexOf(val) > -1)
        })
      })
      : mockList
    pageVO.total = result.length
    gridOptions.data = result.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    gridOptions.loading = false
  }, 300)
}

const gridEvents: VxeGridListeners = {
  pageChange ({ currentPage, pageSize }) {
    pageVO.currentPage = currentPage
    pageVO.pageSize = pageSize
    loadList()
  },
  filterChange ({ filterList }) {
    const searchConfs = filterList.map(item => {
      return {
        field: item.field,
        vals: item.values
      }
    })
    queryFilterConfs.value = searchConfs
    pageVO.currentPage = 1
    loadList()
  },
  clearAllFilter () {
    queryFilterConfs.value = []
    pageVO.currentPage = 1
    loadList()
  }
}

loadList()
</script>
