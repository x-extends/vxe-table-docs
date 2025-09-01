<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-number-input
      v-model="widgetModel"
      :type="currWidget.options.type"
      :placeholder="currWidget.options.placeholder"
      :min="currWidget.options.min"
      :max="currWidget.options.max"
      :step="currWidget.options.step"
      :control-config="currWidget.options.controlConfig"
      :align="currWidget.options.align">
    </vxe-number-input>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetNumberInputProps } from './demoFormDesignNumberInputWidget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetNumberInputProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = useWidgetView<FormDesignWidgetNumberInputProps>(props)
</script>
