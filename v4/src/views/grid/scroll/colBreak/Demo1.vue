<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  [key: string]: string | number
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  showOverflow: true,
  showHeaderOverflow: false,
  showFooterOverflow: true,
  height: 600,
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  virtualXConfig: {
    enabled: true,
    gt: 0
  }
})

// 模拟行与列数据
const loadDataAndColumns = (rowSize: number, colSize: number) => {
  gridOptions.loading = true
  setTimeout(() => {
    const $grid = gridRef.value
    const colList: VxeGridPropTypes.Columns = []
    for (let i = 0; i < colSize; i++) {
      colList.push({
        field: `col${i}`,
        title: i % 5 === 0 ? `长长长标题长长长标题长长长标题长长长标题${i}` : (i % 3 === 0 ? `标题标题标题标题${i}` : `标题${i}`),
        width: 160
      })
    }
    const dataList: RowVO[] = []
    for (let i = 0; i < rowSize; i++) {
      const item: RowVO = {
        id: 10000 + i
      }
      for (let j = 0; j < 20; j++) {
        item[`col${j * 5}`] = `值_${i}_${j * 5}`
      }
      dataList.push(item)
    }
    if ($grid) {
      const startTime = Date.now()
      $grid.loadColumn(colList).then(() => {
        return $grid.reloadData(dataList)
      }).then(() => {
        VxeUI.modal.message({
          content: `加载时间 ${Date.now() - startTime} 毫秒`,
          status: 'success'
        })
        gridOptions.loading = false
      })
    }
  }, 50)
}

onMounted(() => {
  loadDataAndColumns(200, 100)
})
</script>
