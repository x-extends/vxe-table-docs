<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="color1" title="颜色1" width="100" :edit-render="{name: 'VxeColorPicker'}"></vxe-column>
      <vxe-column field="color1" title="颜色2" width="100" :edit-render="color2EditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  color1: string
  color2: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', color1: '', color2: '#FF00FF' },
  { id: 10002, name: 'Test2', color1: '#409eff', color2: '' }
])

const color2EditRender = reactive<VxeColumnPropTypes.EditRender<RowVO>>({
  name: 'VxeColorPicker',
  options: [
    '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD', '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF', '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371', '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500'
  ]
})
</script>
