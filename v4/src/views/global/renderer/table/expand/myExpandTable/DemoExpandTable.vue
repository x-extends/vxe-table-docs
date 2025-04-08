<template>
  <div v-if="currRow && currColumn" class="demo-expand-table">
    <vxe-table
      height="100%"
      :data="currRow.subList">
      <vxe-column type="seq" width="50"></vxe-column>
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="sex" title="sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

const props = defineProps({
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableEditParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const load = () => {
  const { renderParams } = props
  const { row, column } = renderParams
  currRow.value = row
  currColumn.value = column
}

load()
</script>

<style lang="scss" scoped>
.demo-expand-table {
  height: 300px;
  overflow: hidden;
}
</style>
