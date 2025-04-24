<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #hl1Default="{ row  }">
        <vxe-checkbox-group v-model="row.hobbyList1" :options="hobbyOptions"></vxe-checkbox-group>
      </template>

      <template #hl2Default="{ row  }">
        <vxe-checkbox-group v-model="row.hobbyList2" :options="hobbyOptions"></vxe-checkbox-group>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

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

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'hobbyList1', title: '只读', width: 300, slots: { default: 'hl1Default' } },
    { field: 'hobbyList2', title: '编辑', width: 300, slots: { default: 'hl2Default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', hobbyList1: [], hobbyList2: ['1', '2'] },
    { id: 10002, name: 'Test2', role: 'Test', hobbyList1: ['2'], hobbyList2: [] },
    { id: 10003, name: 'Test3', role: 'PM', hobbyList1: ['1', '3'], hobbyList2: ['2'] }
  ]
})
</script>
