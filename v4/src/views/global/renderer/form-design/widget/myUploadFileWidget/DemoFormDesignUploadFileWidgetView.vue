<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-upload
      v-model="widgetModel"
      :button-text="currWidget.options.buttonText"
      :limit-count="currWidget.options.limitCount"
      :limit-size="currWidget.options.limitSize"
      :multiple="currWidget.options.multiple">
    </vxe-upload>
  </vxe-form-item>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetUploadFileProps } from './demoFormDesignUploadFileWidget'

const { useWidgetView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetUploadFileProps>>,
    default: () => ({})
  }
})

const { currWidget, widgetModel } = useWidgetView<FormDesignWidgetUploadFileProps>(props)
</script>
