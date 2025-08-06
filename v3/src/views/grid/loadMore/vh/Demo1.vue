<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" @scroll="scrollEvent"></vxe-grid>
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
        gt: 0
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
          $grid.reloadData(this.tableData)
          this.gridOptions.loading = false
        }
      }, 500)
    },
    scrollEvent ({ isTop, isBottom, isLeft, isRight }) {
      if (isTop) {
        console.log('触碰到顶部')
      }
      if (isBottom) {
        console.log('触碰到底部')
        this.loadDataAndColumns(20, 0)
      }
      if (isLeft) {
        console.log('触碰到左侧')
      }
      if (isRight) {
        console.log('触碰到右侧')
        this.loadDataAndColumns(0, 15)
      }
    }
  },
  created () {
    this.loadDataAndColumns(20, 15)
  }
})
</script>
