<template>
  <div>
    <vxe-button @click="exportEvent">导出</vxe-button>

    <vxe-table
      border
      show-footer
      ref="tableRef"
      :export-config="{}"
      :footer-data="footerData"
      :data="tableData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column
        field="age"
        title="Age"
        :header-export-method="headerAgeExportMethod"
        :export-method="exportAgeMethod"
        :footer-export-method="footerAgeExportMethod">
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance, VxeTablePropTypes, VxeColumnPropTypes } from 'vxe-table'

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

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '平均', age: '26' }
    ]

    const headerAgeExportMethod: VxeColumnPropTypes.HeaderExportMethod<RowVO> = ({ column }) => {
      return `自定义：${column.title}`
    }

    const exportAgeMethod: VxeColumnPropTypes.ExportMethod<RowVO> = ({ row, column }) => {
      return `自定义：${row.age}`
    }

    const footerAgeExportMethod: VxeColumnPropTypes.FooterExportMethod<RowVO> = ({ row }) => {
      return `平均：${row.age}`
    }

    return {
      tableData,
      footerData,
      headerAgeExportMethod,
      exportAgeMethod,
      footerAgeExportMethod
    }
  },
  methods: {
    exportEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.openExport()
      }
    }
  }
})
</script>
