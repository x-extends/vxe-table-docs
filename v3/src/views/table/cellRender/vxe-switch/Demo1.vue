<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="flag1" title="只读" width="200" :cell-render="flag1CellRender"></vxe-column>
      <vxe-column field="flag2" title="编辑" width="200" :cell-render="flag2CellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  flag1: boolean
  flag2: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
      { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
      { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
    ]

    const flag1CellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSwitch',
      props: {
        disabled: true
      }
    }

    const flag2CellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeSwitch'
    }

    return {
      tableData,
      flag1CellRender,
      flag2CellRender
    }
  }
})
</script>
