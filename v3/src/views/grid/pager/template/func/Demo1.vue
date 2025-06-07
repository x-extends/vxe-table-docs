<template>
  <div>
    <vxe-grid v-bind="gridOptions" @page-change="pageChangeEvent">
      <template #pagerHome>
        <span style="background: #f7b6b6;" @click="pagerConfig.currentPage = 1">首页</span>
      </template>
      <template #pagerPrevJump>
        <span style="background: #8989d7;" @click="pagerConfig.currentPage -= 3">向上跳页</span>
      </template>
      <template #pagerPrevPage>
        <span style="background: #f785ef;" @click="pagerConfig.currentPage--">上一页</span>
      </template>
      <template #pagerNumber="{ numList }">
        <span>
          <span v-for="(num, i) in numList" :key="i" @click="pagerConfig.currentPage = num">{{ num }}，</span>
        </span>
      </template>
      <template #pagerNextPage>
        <span style="background: #c0f9dc;" @click="pagerConfig.currentPage++">下一页</span>
      </template>
      <template #pagerNextJump>
        <span style="background: #48f146;" @click="pagerConfig.currentPage += 3">向下跳页</span>
      </template>
      <template #pagerEnd="{ pageCount }">
        <span style="background: #f9f192;" @click="pagerConfig.currentPage = pageCount">末页</span>
      </template>
      <template #pagerSizes="{ options }">
        <span style="background: #cff395;">选择页大小 <vxe-select v-model="pagerConfig.pageSize" :options="options" transfer></vxe-select></span>
      </template>
      <template #pagerFullJump>
        <span style="background: #dbd7d7;">跳页<vxe-number-input v-model="pagerConfig.currentPage" type="integer"></vxe-number-input></span>
      </template>
      <template #pagerPageCount="{ pageCount }">
        <span style="background: #f3b27a;">总页数 {{ pageCount }}</span>
      </template>
      <template #pagerTotal="{ total }">
        <span style="background: #f95e5e;">总条数 {{ total }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const allList = [
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

export default Vue.extend({
  data () {
    const pagerConfig: VxeGridPropTypes.PagerConfig & {
      currentPage: number
      pageSize: number
    } = {
      total: 0,
      currentPage: 1,
      pageSize: 10,
      layouts: ['Home', 'PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'End', 'Sizes', 'FullJump', 'PageCount', 'Total'],
      slots: {
        home: 'pagerHome',
        prevJump: 'pagerPrevJump',
        prevPage: 'pagerPrevPage',
        number: 'pagerNumber',
        nextPage: 'pagerNextPage',
        nextJump: 'pagerNextJump',
        end: 'pagerEnd',
        sizes: 'pagerSizes',
        fullJump: 'pagerFullJump',
        pageCount: 'pagerPageCount',
        total: 'pagerTotal'
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      showOverflow: true,
      loading: false,
      border: true,
      height: 500,
      pagerConfig,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'time', title: 'Time' },
        { field: 'address', title: 'Address' }
      ],
      data: []
    }

    return {
      gridOptions,
      pagerConfig
    }
  },
  methods: {
    // 前端分页
    handlePageData () {
      this.gridOptions.loading = true
      setTimeout(() => {
        const { pageSize, currentPage } = this.pagerConfig
        this.pagerConfig.total = allList.length
        this.gridOptions.data = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        this.gridOptions.loading = false
      }, 100)
    },
    pageChangeEvent ({ pageSize, currentPage }) {
      this.pagerConfig.currentPage = currentPage
      this.pagerConfig.pageSize = pageSize
      this.handlePageData()
    }
  },
  created () {
    this.handlePageData()
  }
})
</script>
