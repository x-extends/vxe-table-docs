<template>
  <VxeLink :href="cellUrl" status="primary" target="_blank">{{ cellLabel }}</VxeLink>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from 'vue'
import { VxeLink, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'

const props = defineProps({
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableDefaultParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const cellUrl = computed(() => {
  if (currRow.value && currColumn.value) {
    return currRow.value.url
  }
  return ''
})

const cellLabel = computed(() => {
  if (currRow.value && currColumn.value) {
    return currRow.value[currColumn.value.field]
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
