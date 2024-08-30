<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="flag1" title="开关" width="200" :cell-render="flag1CellRender"></vxe-column>
      <vxe-column field="flag2" title="开关" width="200" :cell-render="flag2CellRender"></vxe-column>
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
  flag1: boolean
  flag2: boolean
}

const flag1CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch',
  props: {
    disabled: true
  }
})

const flag2CellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeSwitch'
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', flag1: false, flag2: false },
  { id: 10002, name: 'Test2', role: 'Test', flag1: true, flag2: true },
  { id: 10003, name: 'Test3', role: 'PM', flag1: false, flag2: false }
])
</script>
