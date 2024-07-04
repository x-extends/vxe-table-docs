<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="flag" title="开关" width="200" :cell-render="flagCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  flag: boolean
}

const flagCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch',
  props: {
    disabled: true
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', flag: false },
  { id: 10002, name: 'Test2', role: 'Test', flag: true },
  { id: 10003, name: 'Test3', role: 'PM', flag: false }
])
</script>
