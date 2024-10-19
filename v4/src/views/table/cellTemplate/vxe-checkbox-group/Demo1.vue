<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="hobbyList1" title="只读" width="300">
        <template #default="{ row }">
          <vxe-checkbox-group v-model="row.hobbyList1" :options="hobbyOptions" disabled></vxe-checkbox-group>
        </template>
      </vxe-column>
      <vxe-column field="hobbyList2" title="编辑" width="300">
        <template #default="{ row }">
          <vxe-checkbox-group v-model="row.hobbyList2" :options="hobbyOptions"></vxe-checkbox-group>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  hobbyList1: string[]
  hobbyList2: string[]
}

const hobbyOptions = ref([
  { label: '爬山', value: '1' },
  { label: '游泳', value: '2' },
  { label: '干饭', value: '3' }
])

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', hobbyList1: [], hobbyList2: ['1', '2'] },
  { id: 10002, name: 'Test2', role: 'Test', hobbyList1: ['2'], hobbyList2: [] },
  { id: 10003, name: 'Test3', role: 'PM', hobbyList1: ['1', '3'], hobbyList2: ['2'] }
])
</script>
