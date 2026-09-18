<template>
  <vxe-number-input
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    prefix-icon="vxe-icon-rmb"
    :digits="customProps.digits"
    :align="customProps.align"
  >
  </vxe-number-input>
</template>

<script lang="ts" setup>
import { ref, PropType, computed, watch } from 'vue'
import { VxeNumberInputProps, VxeGlobalRendererHandles } from 'vxe-pc-ui'

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

const customProps = computed(() => {
  const { renderOpts } = props
  return Object.assign({ digits: 2, align: 'right' }, renderOpts.props) as VxeNumberInputProps
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
