<template>
  <div>
    <vxe-toolbar ref="toolbarRef" refresh :refresh-options="refreshOptions"></vxe-toolbar>
    <vxe-table
      ref="tableRef"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeToolbarInstance, VxeTableInstance, VxeToolbarPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    const refreshOptions: VxeToolbarPropTypes.RefreshOptions = {}

    return {
      loading: false,
      tableData,
      refreshOptions
    }
  },
  methods: {
    // 模拟后端接口
    queryMethod () {
      this.loading = true
      setTimeout(() => {
        const currNow = Date.now()
        this.tableData = [
          { id: 10001, name: 'Test1' + currNow + 1, role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
          { id: 10002, name: 'Test2' + currNow + 2, role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
          { id: 10003, name: 'Test3' + currNow + 3, role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
          { id: 10004, name: 'Test4' + currNow + 4, role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
        ]
        this.loading = false
      }, 300)
    }
  },
  created () {
    this.refreshOptions = {
      queryMethod: this.queryMethod
    }

    this.queryMethod()
  },
  mounted () {
    const $table = this.$refs.tableRef as VxeTableInstance
    const $toolbar = this.$refs.toolbarRef as VxeToolbarInstance
    if ($table && $toolbar) {
      $table.connect($toolbar)
    }
  }
})
</script>
