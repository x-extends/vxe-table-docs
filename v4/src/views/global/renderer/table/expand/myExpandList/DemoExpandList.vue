<template>
  <ul v-if="currRow && currColumn">
    <li>
      <span>ID：</span>
      <span>{{ currRow.id }}</span>
    </li>
    <li>
      <span>Name：</span>
      <span>{{ currRow.name }}</span>
    </li>
    <li>
      <span>Sex：</span>
      <span>{{ currRow.sex }}</span>
    </li>
    <li>
      <span>Age：</span>
      <span>{{ currRow.age }}</span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { PropType, ref } from 'vue'
import type { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import type { VxeTableDefines } from 'vxe-table'

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
