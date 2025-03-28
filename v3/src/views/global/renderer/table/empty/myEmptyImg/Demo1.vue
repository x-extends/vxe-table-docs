<template>
  <div>
    <vxe-table
      border
      height="300"
      :loading="loading"
      :empty-render="emptyRender"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  amount: string
  num: number
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', amount: '65', num: 28 },
      { id: 10002, name: 'Test2', amount: '31', num: 22 },
      { id: 10003, name: 'Test3', amount: '20', num: 32 },
      { id: 10004, name: 'Test4', amount: '12', num: 23 }
    ]

    const emptyRender: VxeTablePropTypes.EmptyRender = {
      name: 'MyTableEmptyImg'
    }

    return {
      loading: false,
      tableData,
      emptyRender
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
})
</script>
