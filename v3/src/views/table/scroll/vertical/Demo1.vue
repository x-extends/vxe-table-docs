<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      show-footer-overflow
      height="600"
      :column-config="{resizable: true}"
      :virtual-y-config="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="nickname" title="Nickname"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  date: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    return {
      tableData
    }
  },
  methods: {
    // 模拟行数据
    loadList (size = 200) {
      const dataList: RowVO[] = []
      for (let i = 0; i < size; i++) {
        dataList.push({
          id: 10000 + i,
          name: 'Test' + i,
          nickname: 'Name' + i,
          role: 'Developer',
          sex: '男',
          age: 18,
          date: '2018-01-01',
          address: 'address'
        })
      }
      this.tableData = dataList
    }
  },
  created () {
    this.loadList(500)
  }
})
</script>
