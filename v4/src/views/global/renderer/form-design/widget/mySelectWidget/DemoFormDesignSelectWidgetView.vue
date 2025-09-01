<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-select
      v-model="widgetModel"
      :options="currWidget.options.options"
      :placeholder="currWidget.options.placeholder"
      :filterable="currWidget.options.filterable"
      :multiple="currWidget.options.multiple"
      :clearable="currWidget.options.clearable">
    </vxe-select>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetSelectProps } from './demoFormDesignSelectWidget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetSelectProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = useWidgetView<FormDesignWidgetSelectProps>(props)
</script>
