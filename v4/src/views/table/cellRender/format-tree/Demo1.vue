<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="city" title="City" width="300" :cell-render="cityCellRender"></vxe-column>
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
  city: string | string[] | null
}

const cityCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'FormatTreeSelect',
  options: [
    {
      label: '广东省',
      value: '1',
      children: [
        { label: '深圳市', value: '1-1' },
        { label: '广州市', value: '1-2' }
      ]
    },
    {
      label: '北京',
      value: '2',
      children: [
        { label: '东城区', value: '2-1' },
        { label: '西城区', value: '2-2' }
      ]
    }
  ]
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', city: null },
  { id: 10002, name: 'Test2', role: 'Test', city: '1-2' },
  { id: 10003, name: 'Test3', role: 'PM', city: '1-1' },
  { id: 10003, name: 'Test4', role: 'Develop', city: ['1-1', '2-1'] }
])
</script>
