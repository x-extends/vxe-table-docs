<template>
  <div>
    <vxe-table
      border
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="num" title="数字" width="180" :edit-render="{ name: 'VxeInput', props: { type: 'number' } }"></vxe-column>
      <vxe-column field="integer" title="整数" width="180" :edit-render="{ name: 'VxeInput', props: { type: 'integer' } }"></vxe-column>
      <vxe-column field="float" title="小数" width="180" :edit-render="{ name: 'VxeInput', props: { type: 'float' } }"></vxe-column>
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
  num: string
  float: string
  integer: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: '', integer: '', float: '' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: '22', integer: '23', float: '22.35' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: '32', integer: '', float: '' }
])
</script>
