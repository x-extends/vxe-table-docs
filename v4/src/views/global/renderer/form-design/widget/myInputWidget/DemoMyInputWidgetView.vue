<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-input
      v-model="widgetModel"
      :placeholder="currWidget.options.placeholder"
      :maxLength="currWidget.options.maxLength"
      :show-word-count="currWidget.options.showWordCount">
    </vxe-input>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { MyWidgetInputProps } from './demoMyInputWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<MyWidgetInputProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = VxeUI.formDesign.useWidgetView<MyWidgetInputProps>(props)
</script>
