<template>
  <div>
    <vxe-button @click="printEvent">打印每页26条</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: []
    }

    return {
      gridOptions
    }
  },
  methods: {
    printEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 分割每页26条
        Promise.all(
          XEUtils.chunk(this.gridOptions.data, 26).map((pageData, index) => {
            return $grid.getPrintHtml({
              isHeader: index === 0,
              data: pageData
            }).then(({ html }) => {
              return {
                bodyHtml: html
              }
            })
          })
        ).then(pageBreaks => {
          VxeUI.print({
            title: '分页打印表格',
            showPageNumber: true,
            pageBreaks
          })
        })
      }
    }
  },
  created () {
    const list: RowVO[] = []
    for (let i = 0; i < 100; i++) {
      list.push({
        id: 10001 + i,
        name: 'Test1',
        role: 'Develop',
        age: 66,
        sex: 'Man',
        address: 'test abc'
      })
    }
    this.gridOptions.data = list
  }
})
</script>
