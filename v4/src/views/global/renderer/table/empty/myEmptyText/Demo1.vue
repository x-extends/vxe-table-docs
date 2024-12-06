<template>
  <div>
    <vxe-table
      border
      height="300"
      :loading="loading"
      :empty-render="{name: 'MyTableEmptyText'}"
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
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = []

    return {
      loading: false,
      tableData
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
