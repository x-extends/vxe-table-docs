<template>
  <div>
    <vxe-button @click="printEvent">自定义打印</vxe-button>

    <vxe-table
      border
      height="500"
      ref="tableRef"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    return {
      tableData: [] as RowVO[]
    }
  },
  methods: {
    printEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.getPrintHtml().then(({ html }) => {
          VxeUI.print({
            title: '标题1',
            html: html
          })
        })
      }
    }
  },
  created () {
    const list: RowVO[] = []
    for (let i = 0; i < 100; i++) {
      list.push({
        id: 10000 + i,
        name: 'Test1',
        role: 'Develop',
        sex: 'Man',
        address: 'test abc'
      })
    }

    this.tableData = list
  }
})
</script>
