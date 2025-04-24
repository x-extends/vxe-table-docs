<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="checked1" title="复选框1" width="100" :cell-render="hc1CellRender"></vxe-column>
      <vxe-column field="checked2" title="复选框2" width="100" :cell-render="hc2CellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  checked1: boolean
  checked2: boolean
}

const hc1CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeCheckbox'
})

const hc2CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeCheckbox'
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', checked1: false, checked2: false },
  { id: 10002, name: 'Test2', role: 'Test', checked1: true, checked2: false },
  { id: 10003, name: 'Test3', role: 'PM', checked1: false, checked2: true }
])
</script>
