<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>

      <template #edit_num="{ row }">
        <vxe-input v-model="row.num" type="number"></vxe-input>
      </template>

      <template #edit_integer="{ row }">
        <vxe-input v-model="row.integer" type="integer"></vxe-input>
      </template>

      <template #edit_float="{ row }">
        <vxe-input v-model="row.float" type="float"></vxe-input>
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
  sex: string
  num: number | null
  float: number | null
  integer: number | null
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { }, slots: { edit: 'edit_name' } },
    { field: 'num', title: '数字', width: 180, editRender: { }, slots: { edit: 'edit_num' } },
    { field: 'integer', title: '整数', width: 180, editRender: { }, slots: { edit: 'edit_integer' } },
    { field: 'float', title: '小数', width: 180, editRender: { }, slots: { edit: 'edit_float' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: null, integer: null, float: null },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 22, integer: 23, float: 22.35 },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 32, integer: null, float: null }
  ]
})
</script>
