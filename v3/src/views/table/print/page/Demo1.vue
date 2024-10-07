<template>
  <div>
    <vxe-button @click="printEvent">打印每页26条</vxe-button>

    <vxe-table
      border
      height="500"
      ref="tableRef"
      :data="tableData">
      <vxe-column field="id" title="ID" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'
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

    return {
      tableData: list
    }
  },
  methods: {
    printEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        // 分割每页26条
        Promise.all(
          XEUtils.chunk(this.tableData, 26).map(pageData => {
            return $table.getPrintHtml({
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
  }
})
</script>
