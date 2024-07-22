<template>
  <div>
    <vxe-table
      border
      height="500"
      :loading="loading"
      :seq-config="seqConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>

    <vxe-pager
      v-model:currentPage="pageVO.currentPage"
      v-model:pageSize="pageVO.pageSize"
      :total="pageVO.total"
      @page-change="pageChange">
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'
import { VxePagerEvents } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const AllList = [
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
  { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
  { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { id: 10009, name: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
  { id: 100010, name: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
  { id: 100011, name: 'Test11', nickname: 'T11', role: 'Develop', sex: 'Man', age: 49, address: 'Guangzhou' },
  { id: 100012, name: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai' },
  { id: 100013, name: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100014, name: 'Test14', nickname: 'T14', role: 'Test', sex: 'Man', age: 29, address: 'Shanghai' },
  { id: 100015, name: 'Test15', nickname: 'T15', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100016, name: 'Test16', nickname: 'T16', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100017, name: 'Test17', nickname: 'T17', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100018, name: 'Test18', nickname: 'T18', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
  { id: 100019, name: 'Test19', nickname: 'T19', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { id: 100020, name: 'Test20', nickname: 'T20', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { id: 100021, name: 'Test21', nickname: 'T21', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { id: 100022, name: 'Test22', nickname: 'T22', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' }
]

const pageVO = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10
})

const seqConfig = reactive<VxeTablePropTypes.SeqConfig<RowVO>>({
  seqMethod ({ rowIndex }) {
    const { pageSize, currentPage } = pageVO
    return (currentPage - 1) * pageSize + rowIndex + 1
  }
})

const loading = ref(false)
const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

// 前端分页
const handlePageData = () => {
  loading.value = true
  setTimeout(() => {
    const { pageSize, currentPage } = pageVO
    pageVO.total = AllList.length
    tableData.value = AllList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    loading.value = false
  }, 100)
}

const pageChange: VxePagerEvents.PageChange = ({ pageSize, currentPage }) => {
  pageVO.currentPage = currentPage
  pageVO.pageSize = pageSize
  handlePageData()
}

handlePageData()
</script>
