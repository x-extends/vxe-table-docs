<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-footer
      height="600"
      :column-config="columnConfig"
      :merge-cells="mergeCells"
      :merge-footer-items="mergeFooterItems"
      :scroll-y="scrollY"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="300"></vxe-column>
      <vxe-column field="role" title="Role" min-width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" min-width="300"></vxe-column>
      <vxe-column field="age" title="Age" min-width="300"></vxe-column>
      <vxe-column field="address" title="Address" min-width="500"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

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
    const tableData: VxeTablePropTypes.Data<RowVO> = []

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', name: '666', role: '888', sex: '999', age: '234', address: '453' },
      { seq: '均值', name: '222', role: '333', sex: '777', age: '876', address: '134' }
    ]

    const columnConfig: VxeTablePropTypes.ColumnConfig = {
      resizable: true
    }

    const mergeCells: VxeTablePropTypes.MergeCells = [
      { row: 2, col: 1, rowspan: 4, colspan: 2 },
      { row: 16, col: 2, rowspan: 12, colspan: 3 },
      { row: 30, col: 2, rowspan: 5, colspan: 2 },
      { row: 100, col: 1, rowspan: 18, colspan: 3 },
      { row: 150, col: 1, rowspan: 8, colspan: 2 }
    ]

    const mergeFooterItems: VxeTablePropTypes.MergeFooterItems = [
      { row: 0, col: 1, rowspan: 2, colspan: 1 }
    ]

    const scrollY: VxeTablePropTypes.ScrollY = {
      enabled: true,
      gt: 0
    }

    return {
      tableData,
      footerData,
      columnConfig,
      mergeCells,
      mergeFooterItems,
      scrollY
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
          sex: '男',
          age: 20,
          address: 'Address abc'
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
