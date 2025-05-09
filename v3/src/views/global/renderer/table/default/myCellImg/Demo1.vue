<template>
  <div>
    <vxe-table
      border
      show-overflow
      height="300"
      :cell-config="cellConfig"
      :data="tableData">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="url" title="Image" :cell-render="{ name: 'MyTableCellImg' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
  url: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', sex: 'Man', age: 28, url: 'https://vxeui.com/resource/img/fj577.jpg' },
      { id: 10002, name: 'Test2', sex: 'Women', age: 22, url: 'https://vxeui.com/resource/img/fj843.jpg' },
      { id: 10003, name: 'Test3', sex: 'Man', age: 32, url: 'https://vxeui.com/resource/img/fj573.jpeg' },
      { id: 10004, name: 'Test4', sex: 'Women', age: 23, url: 'https://vxeui.com/resource/img/fj567.jpeg' }
    ]

    const cellConfig: VxeTablePropTypes.CellConfig<RowVO> = {
      height: 80
    }

    return {
      tableData,
      cellConfig
    }
  }
})
</script>
