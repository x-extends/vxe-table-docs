<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" @scroll-boundary="scrollBoundaryEvent"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: string
  [key: string]: string | number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      loading: false,
      showOverflow: true,
      showHeaderOverflow: true,
      showFooterOverflow: true,
      height: 600,
      columnConfig: {
        resizable: true
      },
      virtualXConfig: {
        enabled: true,
        gt: 0,
        threshold: 50
      },
      virtualYConfig: {
        enabled: true,
        gt: 0,
        threshold: 50
      }
    }

    const tableColumn: VxeGridPropTypes.Columns = []
    const tableData: RowVO[] = []

    return {
      gridOptions,
      rowKey: 0,
      colKey: 0,
      tableColumn,
      tableData
    }
  },
  methods: {
    // 模拟行与列数据
    loadDataAndColumns (rowSize: number, colSize: number) {
      if (this.gridOptions.loading) {
        return
      }
      this.gridOptions.loading = true
      setTimeout(() => {
        const colList: VxeGridPropTypes.Columns = []
        for (let i = 0; i < colSize; i++) {
          this.colKey++
          colList.push({
            field: `col${this.colKey}`,
            title: `标题${this.colKey}`,
            width: 160
          })
        }
        const columnList = [...this.tableColumn, ...colList]
        const dataList: RowVO[] = []
        for (let i = 0; i < rowSize; i++) {
          this.rowKey++
          const item: RowVO = {
            id: `${this.rowKey}`
          }
          for (let j = 0; j < 10000; j++) {
            item[`col${j}`] = `值_${i}_${j}`
          }
          dataList.push(item)
        }
        const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
        if ($grid) {
          this.tableColumn = columnList
          this.tableData = [...this.tableData, ...dataList]
          $grid.loadColumn(this.tableColumn)
          $grid.loadData(this.tableData)
          this.gridOptions.loading = false
        }
      }, 500)
    },
    scrollBoundaryEvent ({ direction }) {
      switch (direction) {
        case 'top':
          console.log('触发顶部阈值范围')
          break
        case 'bottom':
          console.log('触发底部阈值范围')
          this.loadDataAndColumns(20, 0)
          break
        case 'left':
          console.log('触发左侧阈值范围')
          break
        case 'right':
          console.log('触发右侧阈值范围')
          this.loadDataAndColumns(0, 15)
          break
      }
    }
  },
  created () {
    this.loadDataAndColumns(20, 15)
  }
})
</script>
