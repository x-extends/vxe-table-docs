<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="600"
      :column-config="{resizable: true}"
      :virtual-y-config="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
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
          role: 'Developer',
          sex: '男'
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
