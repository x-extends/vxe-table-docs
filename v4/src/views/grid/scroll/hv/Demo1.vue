<template>
  <div>
    <p>
      <vxe-button @click="loadDataAndColumns(5, 50)">5行50列</vxe-button>
      <vxe-button @click="loadDataAndColumns(1000, 12)">1k行12列</vxe-button>
      <vxe-button @click="loadDataAndColumns(5000, 100)">5k行100列</vxe-button>
      <vxe-button @click="loadDataAndColumns(10000, 150)">1w行150列</vxe-button>
      <vxe-button @click="loadDataAndColumns(50000, 200)">5w行200列</vxe-button>
      <vxe-button @click="loadDataAndColumns(100000, 200)">10w行200列</vxe-button>
      <vxe-button @click="loadDataAndColumns(300000, 1000)">30w行200列</vxe-button>
    </p>
    <p>
      <vxe-button @click="loadDataAndColumns(5, 12)">5行12列</vxe-button>
      <vxe-button @click="loadDataAndColumns(50, 50)">50行100列</vxe-button>
      <vxe-button @click="loadDataAndColumns(80, 1000)">80行1k列</vxe-button>
      <vxe-button @click="loadDataAndColumns(100, 5000)">100行5k列</vxe-button>
      <vxe-button @click="loadDataAndColumns(150, 10000)">200行1w列</vxe-button>
      <vxe-button @click="loadDataAndColumns(200, 30000)">200行3w列</vxe-button>
      <vxe-button @click="loadDataAndColumns(1000, 50000)">200行5w列</vxe-button>
    </p>
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
  showHeaderOverflow: true,
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
        title: `标题${i}`,
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
      $grid.reloadColumn(colList).then(() => {
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
  loadDataAndColumns(50, 50)
})
</script>
