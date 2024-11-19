<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeTableDefines, VxeGridPropTypes, VxeGridProps } from 'vxe-table'

interface RowVO {
  [key: string]: any
}

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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
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
      footerData: [
        { id: '合计', col_1: '99', col_2: '666', col_6: '888', col_198: '556', col_199: '756' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    async init () {
      this.gridOptions.loading = true
      await Promise.all([
        findColumnList(200).then(columns => {
          const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
          if ($grid) {
            $grid.loadColumn(columns)
          }
        }),
        findDataList(600).then(data => {
          const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
          if ($grid) {
            $grid.loadData(data)
          }
        })
      ])
      this.gridOptions.loading = false
    }

  },
  created () {
    this.init()
  }
})
</script>
