<template>
  <div>
    <vxe-switch v-model="gridOptions.showFooter">表尾开关</vxe-switch>

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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      loading: false,
      height: 400,
      showFooter: true,
      showOverflow: true,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 400 },
        { field: 'role', title: 'Role', width: 300 },
        { field: 'sex', title: 'Sex', width: 100 },
        { field: 'num', title: 'Num', width: 120 },
        { field: 'address', title: 'Address', minWidth: 300 }
      ],
      data: [],
      footerData: [
        { seq: '合计', num: '-' },
        { seq: '平均', num: '-' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    // 模拟后端接口
    loadList  () {
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
          { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
          { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
          { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
          { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
          { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
          { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
          { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
        ]
        this.gridOptions.footerData = [
          { seq: '合计', num: '￥282' },
          { seq: '平均', num: '2.88 元' }
        ]
        this.gridOptions.loading = false
      }, 3000)
    }
  },
  created () {
    this.loadList()
  }
})
</script>
