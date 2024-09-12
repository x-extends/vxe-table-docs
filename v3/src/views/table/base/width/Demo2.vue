<template>
  <div>
    <vxe-button @click="changeNameWidth(300)">修改name=300宽度</vxe-button>
    <vxe-button @click="changeNameWidth(400)">修改name=400宽度</vxe-button>
    <vxe-table
      border
      ref="tableRef"
      :data="tableData">
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column field="name" title="Name" width="200"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex" width="140"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    changeNameWidth  (width: number) {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.setColumnWidth('name', width)
      }
    }
  }
})
</script>
