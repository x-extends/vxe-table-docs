<template>
  <div v-if="currOption" class="my-filter-input">
    <vxe-input mode="text" v-model="currOption.data" placeholder="支持回车筛选" @keyup="keyupEvent" @input="changeOptionEvent"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { watch, PropType, ref, computed } from 'vue'
import type { VxeInputEvents } from 'vxe-pc-ui'
import type { VxeTableDefines, VxeGlobalRendererHandles } from 'vxe-table'

const props = defineProps({
  renderOpts: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterOptions>,
  renderParams: Object as PropType<VxeGlobalRendererHandles.RenderTableFilterParams>
})

const currOption = ref<VxeTableDefines.FilterOption>()

const currField = computed(() => {
  const { column } = props.renderParams || {}
  return column ? column.field : ''
})

const load = () => {
  const { renderParams } = props
  if (renderParams) {
    const { column } = renderParams
    const option = column.filters[0]
    currOption.value = option
  }
}

const changeOptionEvent = () => {
  const { renderParams } = props
  const option = currOption.value
  if (renderParams && option) {
    const { $table } = renderParams
    const checked = !!option.data
    $table.updateFilterOptionStatus(option, checked)
  }
}

const keyupEvent: VxeInputEvents.Keyup = ({ $event }) => {
  const { renderParams } = props
  if (renderParams) {
    const { $table } = renderParams
    if ($event.key === 'Enter') {
      $table.saveFilterPanel()
    }
  }
}

watch(currField, () => {
  load()
})

load()
</script>

<style scoped>
.my-filter-input {
  padding: 10px;
}
</style>
