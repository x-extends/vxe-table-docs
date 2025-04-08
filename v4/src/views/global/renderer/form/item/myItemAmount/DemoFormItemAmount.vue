<template>
  <VxeInput
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb"
    align="right">
  </VxeInput>
</template>

<script lang="ts" setup>
import { ref, PropType, computed, watch } from 'vue'
import { VxeInput, VxeGlobalRendererHandles } from 'vxe-pc-ui'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
  }
})

const currData = ref<any>()

const currField = computed(() => {
  const { renderParams } = props
  return renderParams.field
})

const load = () => {
  const { renderParams } = props
  const { data } = renderParams
  currData.value = data
}

watch(currField, () => {
  load()
})

load()
</script>
