<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-textarea
      v-model="widgetModel"
      :placeholder="currWidget.options.placeholder"
      :autosize="{minRows: currWidget.options.minRows, maxRows: currWidget.options.maxRows}">
    </vxe-textarea>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { MyWidgetTextareaProps } from './demoMyTextareaWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<MyWidgetTextareaProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = VxeUI.formDesign.useWidgetView<MyWidgetTextareaProps>(props)
</script>
