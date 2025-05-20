<template>
  <div>
    <vxe-button status="success" @click="saveMergeData">获取合并规则</vxe-button>

    <vxe-table
      border
      :data="tableData"
      :merge-cells="mergeCells">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-colgroup title="Group1" field="group1" header-align="center">
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
      </vxe-colgroup>
      <vxe-colgroup title="Group2" field="group2" header-align="center">
        <vxe-colgroup title="Attr1" field="attr1" header-align="center">
          <vxe-column field="attr3" title="Attr3"></vxe-column>
          <vxe-column field="attr4" title="Attr4"></vxe-column>
        </vxe-colgroup>
        <vxe-colgroup title="Attr2" field="attr2" header-align="center">
          <vxe-column field="attr5" title="Attr5"></vxe-column>
          <vxe-column field="attr6" title="Attr6"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  attr3: number
  attr4: number
  attr5: number
  attr6: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 46, attr3: 22, attr4: 100, attr5: 66, attr6: 86, address: 'Guangzhou' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 0, attr3: 22, attr4: 0, attr5: 0, attr6: 0, address: '' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' }
    ]

    const mergeCells: VxeTablePropTypes.MergeCells = [
      { row: 0, col: 3, rowspan: 4, colspan: 1 },
      { row: 0, col: 4, rowspan: 4, colspan: 1 },
      { row: 0, col: 5, rowspan: 4, colspan: 1 },
      { row: 0, col: 6, rowspan: 4, colspan: 1 },
      { row: 0, col: 7, rowspan: 4, colspan: 1 },
      { row: 0, col: 8, rowspan: 4, colspan: 1 }
    ]

    return {
      tableData,
      mergeCells
    }
  },
  methods: {
    saveMergeData () {
      console.log(this.mergeCells)
    }
  }
})
</script>
