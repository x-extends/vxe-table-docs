<template>
  <div>
    <vxe-date-picker v-model="selectYear" type="year"></vxe-date-picker>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeGridPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  [key: string]: any
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      loading: false,
      height: 500,
      columns: [],
      data: []
    }

    return {
      gridOptions,
      selectYear: '2024-01-01'
    }
  },
  methods: {
    // 模拟接口数据
    loadList  (size: number) {
      this.gridOptions.loading = true
      setTimeout(() => {
        const tableData: RowVO[] = []
        if (this.selectYear) {
          const currYear = XEUtils.toDateString(this.selectYear, 'yyyy')
          for (let i = 0; i < size; i++) {
            const item: RowVO = {}
            for (let j = 0; j < 12; j++) {
              const currMonth = XEUtils.padStart(`${j + 1}`, 2, '0')
              item[`${currYear}-${currMonth}`] = 'xx'
            }
            tableData.push(item)
          }
        }
        this.gridOptions.data = tableData
        this.gridOptions.loading = false
      }, 500)
    },
    createColumns  () {
      const columns: VxeGridPropTypes.Columns = [
        { type: 'seq', width: 70 }
      ]
      if (this.selectYear) {
        const currYear = XEUtils.toDateString(this.selectYear, 'yyyy')
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
      this.gridOptions.columns = columns
      this.loadList(20)
    }
  },
  watch: {
    selectYear () {
      this.createColumns()
    }
  },
  created () {
    this.createColumns()
  }
})
</script>
