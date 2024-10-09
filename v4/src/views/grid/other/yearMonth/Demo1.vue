<template>
  <div>
    <vxe-date-picker v-model="selectYear" type="year"></vxe-date-picker>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import type { VxeGridProps, VxeGridPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  [key: string]: any
}

const selectYear = ref('2024-01-01')

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  height: 500,
  columns: [],
  data: []
})

// 模拟接口数据
const loadList = (size: number) => {
  gridOptions.loading = true
  setTimeout(() => {
    const tableData: RowVO[] = []
    if (selectYear.value) {
      const currYear = XEUtils.toDateString(selectYear.value, 'yyyy')
      for (let i = 0; i < size; i++) {
        const item: RowVO = {}
        for (let j = 0; j < 12; j++) {
          const currMonth = XEUtils.padStart(`${j + 1}`, 2, '0')
          item[`${currYear}-${currMonth}`] = ''
        }
        tableData.push(item)
      }
    }
    gridOptions.data = tableData
    gridOptions.loading = false
  }, 500)
}

const createColumns = () => {
  const columns: VxeGridPropTypes.Columns = [
    { type: 'seq', width: 70 }
  ]
  if (selectYear.value) {
    const currYear = XEUtils.toDateString(selectYear.value, 'yyyy')
    const ymCols: VxeGridPropTypes.Columns = []
    for (let i = 0; i < 12; i++) {
      const currMonth = XEUtils.padStart(`${i + 1}`, 2, '0')
      ymCols.push({
        title: `${currYear}-${currMonth}`,
        field: `${currYear}-${currMonth}`
      })
    }
    columns.push({
      title: `${currYear}`,
      children: ymCols
    })
  }
  gridOptions.columns = columns
  loadList(10)
}

watch(selectYear, () => {
  createColumns()
})

createColumns()
</script>
