<template>
  <div>
    <vxe-grid ref="xGrid" v-bind="gridOptions">
      <template #toolbar_buttons>
        <vxe-button @click="loadColumnAndData(1000, 20)">1k列20条</vxe-button>
        <vxe-button @click="loadColumnAndData(1000, 100)">1k列100条</vxe-button>
        <vxe-button @click="loadColumnAndData(5000, 500)">5k列500条</vxe-button>
        <vxe-button @click="loadColumnAndData(10000, 10000)">1w列1w条</vxe-button>
        <vxe-button @click="loadColumnAndData(50000, 100000)">5w列10w条</vxe-button>
        <vxe-button @click="loadColumnAndData(100000, 30000)">10w列30w条</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, reactive, ref } from 'vue'
import { VXETable, VxeGridInstance, VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  [key: string]: string | number | boolean
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showHeaderOverflow: true,
  showOverflow: true,
  height: 500,
  loading: false,
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    slots: {
      buttons: 'toolbar_buttons'
    }
  },
  scrollY: {
    enabled: true
  },
  scrollX: {
    enabled: true
  }
})

const xGrid = ref<VxeGridInstance<RowVO>>()

const columnList: VxeGridPropTypes.Columns<RowVO> = []
const dataList: RowVO[] = []

const mockColumns = (colSize: number) => {
  return new Promise<VxeGridPropTypes.Columns<RowVO>>(resolve => {
    setTimeout(() => {
      const currSize = columnList.length
      if (currSize < colSize) {
        for (let i = currSize; i < colSize; i++) {
          columnList.push({
            field: 'attr' + i,
            title: 'Attr' + i,
            width: 140
          })
        }
      }
      // 模拟数据
      const result = JSON.parse(JSON.stringify(columnList.slice(0, colSize)))
      resolve(result)
    }, 100)
  })
}

const mockList = (rowSize: number) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const currSize = dataList.length
      if (currSize < rowSize) {
        for (let i = currSize; i < rowSize; i++) {
          dataList.push({
            checked: false,
            attr0: 'attr0_row_' + i,
            attr1: 'attr1_row_' + i,
            attr2: 'attr2_row_' + i,
            attr3: 'attr3_row_' + i,
            attr4: 'attr3_row_' + i,
            attr5: 'attr3_row_' + i,
            attr10: 'attr10_row_' + i,
            attr11: 'attr11_row_' + i,
            attr12: 'attr12_row_' + i,
            attr13: 'attr12_row_' + i,
            attr14: 'attr12_row_' + i,
            attr50: 'attr50_row_' + i,
            attr51: 'attr51_row_' + i,
            attr52: 'attr52_row_' + i,
            attr53: 'attr53_row_' + i,
            attr54: 'attr54_row_' + i,
            attr100: 'attr100_row_' + i,
            attr101: 'attr101_row_' + i,
            attr102: 'attr102_row_' + i,
            attr103: 'attr103_row_' + i,
            attr105: 'attr105_row_' + i,
            attr104: 'attr104_row_' + i,
            attr106: 'attr106_row_' + i,
            attr107: 'attr107_row_' + i,
            attr200: 'attr200_row_' + i,
            attr201: 'attr201_row_' + i,
            attr202: 'attr202_row_' + i,
            attr203: 'attr203_row_' + i,
            attr204: 'attr204_row_' + i,
            attr205: 'attr205_row_' + i,
            attr300: 'attr300_row_' + i,
            attr301: 'attr301_row_' + i,
            attr302: 'attr302_row_' + i,
            attr303: 'attr303_row_' + i,
            attr304: 'attr304_row_' + i,
            attr305: 'attr305_row_' + i,
            attr400: 'attr400_row_' + i,
            attr401: 'attr401_row_' + i,
            attr402: 'attr402_row_' + i,
            attr403: 'attr403_row_' + i,
            attr404: 'attr404_row_' + i,
            attr405: 'attr405_row_' + i,
            attr406: 'attr405_row_' + i,
            attr407: 'attr407_row_' + i,
            attr595: 'attr495_row_' + i,
            attr596: 'attr496_row_' + i,
            attr597: 'attr497_row_' + i,
            attr598: 'attr498_row_' + i,
            attr599: 'attr499_row_' + i,
            attr1000: 'attr100_row_' + i,
            attr1001: 'attr1001_row_' + i,
            attr1002: 'attr1002_row_' + i,
            attr1003: 'attr1003_row_' + i,
            attr1004: 'attr1004_row_' + i,
            attr1005: 'attr1005_row_' + i,
            attr1006: 'attr1005_row_' + i,
            attr1007: 'attr1005_row_' + i,
            attr10005: 'attr10005_row_' + i,
            attr10006: 'attr10005_row_' + i,
            attr10007: 'attr10005_row_' + i,
            attr150005: 'attr100005_row_' + i,
            attr150006: 'attr100005_row_' + i,
            attr150007: 'attr100005_row_' + i
          })
        }
      }
      // 模拟数据
      const result = JSON.parse(JSON.stringify(dataList.slice(0, rowSize)))
      resolve(result)
    }, 100)
  })
}

const loadColumnAndData = (colSize: number, rowSize: number) => {
  gridOptions.loading = true
  Promise.all([
    mockColumns(colSize),
    mockList(rowSize)
  ]).then(rest => {
    const columns = rest[0]
    const data = rest[1]
    const startTime = Date.now()
    const $grid = xGrid.value
    // 使用函数式加载
    if ($grid) {
      Promise.all([
        $grid.reloadColumn(columns),
        $grid.reloadData(data)
      ]).then(() => {
        VXETable.modal.message({ content: `渲染 ${colSize} 列 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`, status: 'info' })
        gridOptions.loading = false
      })
    } else {
      gridOptions.loading = false
    }
  })
}

nextTick(() => {
  loadColumnAndData(600, 10)
})
</script>
