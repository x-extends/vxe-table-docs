<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="num" title="数字" width="180" :edit-render="{ name: 'VxeNumberInput' }"></vxe-column>
      <vxe-column field="integer" title="整数" width="180" :edit-render="{ name: 'VxeNumberInput', props: { type: 'integer' } }"></vxe-column>
      <vxe-column field="float" title="小数" width="180" :edit-render="{ name: 'VxeNumberInput', props: { type: 'float' } }"></vxe-column>
      <vxe-column field="money" title="金额" align="right" width="180" :edit-render="{ name: 'VxeNumberInput', props: { type: 'amount', align: 'right', showCurrency: true } }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  num: number | null
  float: number | null
  integer: number | null
  money: number | null
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: null, integer: null, float: null, money: 10000 },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 22, integer: 23, float: 22.35, money: null },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 32, integer: null, float: null, money: null }
])
</script>
