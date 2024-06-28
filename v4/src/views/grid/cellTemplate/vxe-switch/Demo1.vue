<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #flag_default="{ row }">
        <vxe-switch v-model="row.flag" disabled></vxe-switch>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  flag: boolean
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    { field: 'flag', title: '开关', width: 200, slots: { default: 'flag_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', flag: false },
    { id: 10002, name: 'Test2', role: 'Test', flag: true },
    { id: 10003, name: 'Test3', role: 'PM', flag: false }
  ]
})
</script>
