<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-number-input
      v-model="widgetModel"
      type="amount"
      :placeholder="currWidget.options.placeholder"
      :min="currWidget.options.min"
      :max="currWidget.options.max"
      :step="currWidget.options.step"
      :show-currency="currWidget.options.showCurrency"
      :control-config="currWidget.options.controlConfig">
    </vxe-number-input>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetAmountInputProps } from './demoFormDesignAmountInputWidget'

const { useWidgetView } = VxeUI.formDesign

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetAmountInputProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = useWidgetView<FormDesignWidgetAmountInputProps>(props)
</script>
