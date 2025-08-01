<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #pager>
        <vxe-pager :current-page.sync="pageVO.currentPage" :page-size.sync="pageVO.pageSize" :total="pageVO.total" @page-change="pageEvent"></vxe-pager>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      showOverflow: true,
      border: true,
      height: 500,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Num' },
        { field: 'address', title: 'Address' }
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
      ]
    }

    const pageVO = {
      currentPage: 1,
      pageSize: 20,
      total: 288
    }

    return {
      gridOptions,
      pageVO
    }
  },
  methods: {
    pageEvent () {
      console.log(`currentPage=${this.pageVO.currentPage} pageSize=${this.pageVO.pageSize}`)
    }
  }
})
</script>
