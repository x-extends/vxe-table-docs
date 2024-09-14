<template>
  <div>
    <vxe-table
      border
      show-footer
      show-overflow
      height="400"
      :loading="loading"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" min-width="400"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100"></vxe-column>
      <vxe-column field="num" title="Num" width="150"></vxe-column>
      <vxe-column field="address" title="Address" min-width="300"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = []

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', num: '-' },
      { seq: '平均', num: '-' }
    ]

    return {
      loading: false,
      tableData,
      footerData
    }
  },
  methods: {
    // 模拟后端接口
    loadList () {
      this.loading = true
      setTimeout(() => {
        this.tableData = [
          { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
          { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
          { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
          { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
          { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
          { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
          { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
          { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
        ]
        this.footerData = [
          { seq: '合计', num: '￥282' },
          { seq: '平均', num: '2.88 元' }
        ]
        this.loading = false
      }, 3000)
    }
  },
  created () {
    this.loadList()
  }
})
</script>
