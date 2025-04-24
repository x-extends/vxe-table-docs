<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #checked1Default="{ row  }">
        <vxe-checkbox v-model="row.checked1"></vxe-checkbox>
      </template>

      <template #checked2Default="{ row  }">
        <vxe-checkbox v-model="row.checked2"></vxe-checkbox>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  checked1: boolean
  checked2: boolean
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 200 },
    {
      field: 'checked1',
      title: '复选框1',
      width: 100,
      slots: {
        default ({ row }) {
          return <vxe-checkbox v-model={row.checked1}></vxe-checkbox>
        }
      }
    },
    {
      field: 'checked2',
      title: '复选框2',
      width: 100,
      slots: {
        default ({ row }) {
          return <vxe-checkbox v-model={row.checked2}></vxe-checkbox>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', checked1: false, checked2: false },
    { id: 10002, name: 'Test2', role: 'Test', checked1: true, checked2: false },
    { id: 10003, name: 'Test3', role: 'PM', checked1: false, checked2: true }
  ]
})
</script>
