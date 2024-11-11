<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeGridPropTypes, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: string
  [key: string]: string | number
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 600,
  columnConfig: {
    resizable: true
  },
  scrollX: {
    enabled: true,
    gt: 0
  }
})

let rowKey = 0
let colKey = 0

let tableColumn: VxeGridPropTypes.Columns = []
let tableData: RowVO[] = []

// 模拟行与列数据
const loadDataAndColumns = (rowSize: number, colSize: number) => {
  if (gridOptions.loading) {
    return
  }
  gridOptions.loading = true
  setTimeout(() => {
    const colList: VxeGridPropTypes.Columns = []
    for (let i = 0; i < colSize; i++) {
      colKey++
      colList.push({
        field: `col${colKey}`,
        title: `标题${colKey}`,
        width: 160
      })
    }
    const columnList = [...tableColumn, ...colList]
    const dataList: RowVO[] = []
    for (let i = 0; i < rowSize; i++) {
      rowKey++
      const item: RowVO = {
        id: `${rowKey}`
      }
      for (let j = 0; j < 10000; j++) {
        item[`col${j}`] = `值_${i}_${j}`
      }
      dataList.push(item)
    }
    const $grid = gridRef.value
    if ($grid) {
      tableColumn = columnList
      tableData = [...tableData, ...dataList]
      $grid.loadColumn(tableColumn)
      $grid.loadData(tableData)
      gridOptions.loading = false
    }
  }, 500)
}

const gridEvents: VxeGridListeners = {
  scrollBoundary ({ direction }) {
    switch (direction) {
      case 'top':
        console.log('触发顶部阈值')
        break
      case 'bottom':
        console.log('触发底部阈值')
        loadDataAndColumns(20, 0)
        break
      case 'left':
        console.log('触发左侧阈值')
        break
      case 'right':
        console.log('触发右侧阈值')
        loadDataAndColumns(0, 15)
        break
    }
  }
}

loadDataAndColumns(20, 15)
</script>
