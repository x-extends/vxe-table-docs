<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="num" title="只读" width="300" :cell-render="numCellRender"></vxe-column>
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
  num: number | null
}

const numCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeRate',
  props: {
    disabled: true
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', num: null },
  { id: 10002, name: 'Test2', role: 'Test', num: 4 },
  { id: 10003, name: 'Test3', role: 'PM', num: 2 }
])
</script>
