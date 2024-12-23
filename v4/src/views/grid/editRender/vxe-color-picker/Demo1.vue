<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  color1: string
  color2: string
}

const color2EditRender = reactive<VxeColumnPropTypes.EditRender<RowVO>>({
  name: 'VxeColorPicker',
  options: [
    '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD', '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF', '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371', '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500'
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput', props: { clearable: true } } },
    { field: 'color1', title: '颜色1', width: 100, editRender: { name: 'VxeColorPicker' } },
    { field: 'color2', title: '颜色2', width: 100, editRender: color2EditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', color1: '', color2: '#FF00FF' },
    { id: 10002, name: 'Test2', color1: '#409eff', color2: '' }
  ]
})
</script>
