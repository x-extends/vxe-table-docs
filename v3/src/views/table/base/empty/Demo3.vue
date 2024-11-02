<template>
  <div>
    <vxe-table
      border
      height="300"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="300"></vxe-column>
      <vxe-column field="date12" title="Date" width="300"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://vxeui.com/resource/img/546.gif">
          <p>不用再看了，没有更多数据了！</p>
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
    }, 2000)
  }
})
</script>
