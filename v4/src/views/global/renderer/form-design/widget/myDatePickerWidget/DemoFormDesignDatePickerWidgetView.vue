<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-date-picker
      v-model="widgetModel"
      :type="dateType"
      :placeholder="currWidget.options.placeholder"
      :label-format="currWidget.options.labelFormat"
      :clearable="currWidget.options.clearable">
    </vxe-date-picker>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue'
import { VxeUI, VxeGlobalRendererHandles, VxeDatePickerPropTypes } from 'vxe-pc-ui'
import { FormDesignWidgetDatePickerProps } from './demoFormDesignDatePickerWidget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetDatePickerProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = useWidgetView<FormDesignWidgetDatePickerProps>(props)

const dateType = computed<VxeDatePickerPropTypes.Type>(() => {
  switch (currWidget.value.options.labelFormat) {
    case 'yyyy-MM-dd HH:mm:ss':
    case 'yyyy-MM-dd HH:mm':
      return 'datetime'
    case 'yyyy-MM-dd':
      return 'date'
    case 'yyyy-MM':
      return 'month'
  }
  return 'date'
})
</script>
