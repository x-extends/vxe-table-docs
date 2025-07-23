<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
    <vxe-button @click="importEvent">高级导入</vxe-button>
    <vxe-table
      height="500"
      ref="tableRef"
      :export-config="{}"
      :import-config="{}"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="名字"></vxe-column>
      <vxe-column field="sex" title="性别"></vxe-column>
      <vxe-column field="age" title="年龄"></vxe-column>
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
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    exportEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.openExport()
      }
    },
    importEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.openImport()
      }
    }
  }
})
</script>
