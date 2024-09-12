<template>
  <div>
    <vxe-table
      border
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif">
          <p>没有更多数据了！</p>
        </span>
      </template>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  address: string
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
      this.tableData = []
      this.loading = false
    }, 1000)
  }
})
</script>
