<template>
  <div>
    <p>
      <vxe-button @click="exportCurrDataEvent4">导出当前页</vxe-button>
      <vxe-button @click="exportDataEvent4">自定义数据导出</vxe-button>
      <vxe-button @click="exportAllDataEvent4">全量导出后台数据</vxe-button>
    </p>

    <vxe-table
      border
      show-footer
      ref="tableRef"
      height="300"
      :row-config="{isHover: true}"
      :loading="loading"
      :footer-method="footerMethod"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex" :formatter="formatterSex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column type="html" field="html1" title="Html片段"></vxe-column>
    </vxe-table>

    <vxe-pager
      :loading="loading"
      :current-page="pageVO.currentPage"
      :page-size="pageVO.pageSize"
      :total="pageVO.totalResult"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange4">
    </vxe-pager>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxePagerEvents, VxeButtonEvents } from 'vxe-pc-ui'
import { VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
  html1: string
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const pageVO = reactive({
  currentPage: 1,
  pageSize: 10,
  totalResult: 0
})

const tableRef = ref<VxeTableInstance<RowVO>>()

const findList4 = () => {
  loading.value = true
  setTimeout(() => {
    const list = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
    ]
    tableData.value = list
    pageVO.totalResult = 20
    loading.value = false
  }, 100)
}

const formatterSex: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
  if (cellValue === '1') {
    return '男'
  } else if (cellValue === '0') {
    return '女'
  }
  return cellValue
}

const handlePageChange4: VxePagerEvents.PageChange = ({ currentPage, pageSize }) => {
  pageVO.currentPage = currentPage
  pageVO.pageSize = pageSize
  findList4()
}

const exportCurrDataEvent4: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      filename: '自定义文件名',
      type: 'html',
      isHeader: true,
      isFooter: true
    })
  }
}

const exportDataEvent4: VxeButtonEvents.Click = () => {
  const $table = tableRef.value
  if ($table) {
    $table.exportData({
      filename: '自定义文件名',
      type: 'html',
      isHeader: true,
      isFooter: true,
      // 自定义导出的数据源
      data: [
        { name: 'Name1', sex: '男', age: 26, role: '前端', html1: '<a>xxx1</a>' },
        { name: 'Name2', sex: '女', age: 20, role: '测试', html1: '<a>xxx2</a>' },
        { name: 'Name4', sex: '女', age: 22, role: '设计师', html1: '<a>xxx3</a>' }
      ]
    })
  }
}

const exportAllDataEvent4: VxeButtonEvents.Click = () => {
  loading.value = true
  setTimeout(() => {
    const $table = tableRef.value
    const list: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', html1: '<span>111</span>' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', html1: '<span>111</span>' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', html1: '<span>456</span>' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc', html1: '<span>111</span>' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai', html1: '<span>456</span>' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc', html1: '<span>56</span>' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'test abc', html1: '<span>768</span>' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc', html1: '<span>789</span>' }
    ]
    if ($table) {
      $table.exportData({
        filename: '自定义文件名',
        type: 'csv',
        isHeader: true,
        isFooter: true,
        data: list
      })
    }
    loading.value = false
  }, 100)
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

findList4()
</script>
