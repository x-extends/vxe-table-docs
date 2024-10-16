<template>
  <VxeInput
    v-if="currData && currField"
    v-model="currData[currField]"
    type="float"
    digits="2"
    prefix-icon="vxe-icon-rmb">
  </VxeInput>
</template>

<script lang="ts" setup>
import { ref, PropType, watch } from 'vue'
import { VxeInput, VxeGlobalRendererHandles, VxeFormItemPropTypes } from 'vxe-pc-ui'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentOptions>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentOptions)
  },
  params: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormItemContentParams>,
    default: () => ({} as VxeGlobalRendererHandles.RenderFormItemContentParams)
  }
})

const currData = ref<any>()
const currField = ref<VxeFormItemPropTypes.Field>('')

const load = () => {
  const { params } = props
  const { data, field } = params
  currData.value = data
  currField.value = field
}

watch(() => props.params, () => {
  load()
})

load()
</script>
