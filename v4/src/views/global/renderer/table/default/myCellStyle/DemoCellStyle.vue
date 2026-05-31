<template>
  <span style="color: red;">{{ cellLabel }}元</span>
</template>

<script lang="ts" setup>
import { ref, PropType, computed } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

const props = defineProps({
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableDefaultParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const cellLabel = computed(() => {
  const { renderParams } = props
  const { $table, row, column } = renderParams
  if ($table && row && column) {
    return $table.getCellLabel(row, column)
  }
  return ''
})

const load = () => {
  const { renderParams } = props
  const { row, column } = renderParams
  currRow.value = row
  currColumn.value = column
}

load()
</script>
