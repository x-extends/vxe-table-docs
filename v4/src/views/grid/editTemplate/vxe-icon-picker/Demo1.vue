<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #edit_name="{ row }">
        <vxe-input v-model="row.name"></vxe-input>
      </template>
      <template #default_name="{ row }">
        <span>{{ row.name }}</span>
      </template>

      <template #icon_edit="{ row }">
        <vxe-icon-picker v-model="row.icon"></vxe-icon-picker>
      </template>
      <template #icon_default="{ row }">
        <i :class="row.icon"></i>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  icon: string
  iconList: string[]
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { autoFocus: 'input' }, slots: { edit: 'edit_name', default: 'default_name' } },
    { field: 'icon', title: '图标', width: 100, editRender: { }, slots: { edit: 'icon_edit', default: 'icon_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', icon: '', iconList: [] },
    { id: 10002, name: 'Test2', icon: 'vxe-icon-home', iconList: [] }
  ]
})
</script>
