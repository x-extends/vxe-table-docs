<template>
  <div>
    <vxe-table
      border
      show-overflow
      :cell-config="cellConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="remark" title="备注" width="300">
        <template #default="{ row }">
          <vxe-textarea v-model="row.remark" style="height: 80px;"></vxe-textarea>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  remark: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', remark: '备注11 备注 备注 备注 注' },
      { id: 10002, name: 'Test2', remark: '备注22 备注 备注 备注备注备注 注' },
      { id: 10003, name: 'Test3', remark: '备注 备注333 备注 备注备注333备注备注备注 备注备注333备注备注备注 备注备注333备注备注备注' }
    ]

    const cellConfig: VxeTablePropTypes.CellConfig<RowVO> = {
      height: 100
    }

    return {
      tableData,
      cellConfig
    }
  }
})
</script>
