<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeTableDefines, VxeGridPropTypes, VxeGridProps } from 'vxe-table'

interface RowVO {
  [key: string]: any
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const footerData = ref<string[][]>([])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  showFooter: true,
  height: 500,
  loading: false,
  scrollX: {
    enabled: true
  },
  scrollY: {
    enabled: true
  },
  rowConfig: {
    keyField: 'id'
  },
  checkboxConfig: {
    labelField: 'id'
  },
  footerMethod () {
    return footerData.value
  }
})

let colIndex = 0
let rowIndex = 1

const findColumnList = (size: number) => {
  return new Promise<VxeGridPropTypes.Columns>(resolve => {
    setTimeout(() => {
      const columns: VxeGridPropTypes.Columns = []
      for (let index = 0; index < size; index++) {
        const key = colIndex++
        const config: VxeTableDefines.ColumnOptions = {
          field: key ? `col_${key}` : 'id',
          title: key ? `标题_${key}` : 'ID',
          width: 140,
          type: null,
          fixed: null
        }
        if (!key) {
          config.type = 'checkbox'
        }
        if (key < 2) {
          config.fixed = 'left'
        }
        columns.push(config)
      }
      resolve(columns)
    }, 250)
  })
}

const findDataList = (size: number) => {
  return new Promise<any[]>(resolve => {
    setTimeout(() => {
      const list: any[] = []
      for (let index = 0; index < size; index++) {
        const key = rowIndex++
        const item: any = { id: key, checked: false }
        // 由于生成数据比较耗时，所以固定生成1000字段
        Array.from(new Array(1000)).forEach((num, cIndex) => {
          item[`col_${cIndex}`] = `内容_${cIndex}_${index}`
        })
        list.push(item)
      }
      resolve(list)
    }, 250)
  })
}

const init = async () => {
  let tableColumn: VxeGridPropTypes.Columns = []
  gridOptions.loading = true
  await Promise.all([
    findColumnList(200).then(columns => {
      const $grid = gridRef.value
      if ($grid) {
        tableColumn = columns
        $grid.loadColumn(columns)
      }
    }),
    findDataList(600).then(data => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.loadData(data)
      }
    })
  ])

  const $grid = gridRef.value
  gridOptions.loading = false

  // 计算表尾数据
  const footList: string[][] = [[]]
  tableColumn.forEach((column, index) => {
    footList[0].push(index === 0 ? '合计' : `${index}`)
  })
  footerData.value = footList
  if ($grid) {
    $grid.updateFooter()
  }
}

init()
</script>
