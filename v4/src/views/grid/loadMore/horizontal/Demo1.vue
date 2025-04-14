<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeGridPropTypes, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: string
  [key: string]: string | number
}

const gridOptions = reactive<VxeGridProps<RowVO> & {
  data: RowVO[]
  columns: VxeGridPropTypes.Columns
}>({
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
  },
  columns: [],
  data: []
})

let rowKey = 0
let colKey = 0

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
    const columnList = [...gridOptions.columns, ...colList]
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
    gridOptions.columns = columnList
    gridOptions.data = [...gridOptions.data, ...dataList]
    gridOptions.loading = false
  }, 500)
}

const gridEvents: VxeGridListeners = {
  scroll ({ isLeft, isRight }) {
    if (isLeft) {
      console.log('触碰到左侧')
    }
    if (isRight) {
      console.log('触碰到右侧')
      loadDataAndColumns(0, 15)
    }
  }
}

loadDataAndColumns(20, 15)
</script>
