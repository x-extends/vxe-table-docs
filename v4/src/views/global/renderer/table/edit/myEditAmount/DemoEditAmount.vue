<template>
  <vxe-input
    v-if="currRow && currColumn"
    v-model="currRow[currColumn.field]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb"
    align="right">
  </vxe-input>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
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
