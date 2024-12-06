<template>
  <span>{{ cellLabel }}</span>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeTableDefines } from 'vxe-table'
import XEUtils from 'xe-utils'

const props = defineProps({
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderTableDefaultParams>,
    default: () => ({})
  }
})

const currColumn = ref<VxeTableDefines.ColumnInfo>()
const currRow = ref()

const cellLabel = computed(() => {
  if (currRow.value && currColumn.value) {
    return XEUtils.commafy(XEUtils.toNumber(currRow.value[currColumn.value.field]))
  }
  return ''
})

const load = () => {
  const { params } = props
  const { row, column } = params
  currRow.value = row
  currColumn.value = column
}

load()
</script>
