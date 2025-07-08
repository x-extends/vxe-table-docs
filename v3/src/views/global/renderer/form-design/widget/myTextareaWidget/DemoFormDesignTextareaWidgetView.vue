<template>
  <vxe-form-item :field="currWidget.field" :title="currWidget.title">
    <vxe-textarea
      v-model="widgetModel"
      :placeholder="currWidget.options.placeholder"
      :autosize="{minRows: currWidget.options.minRows, maxRows: currWidget.options.maxRows}">
    </vxe-textarea>
  </vxe-form-item>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeFormDesignDefines } from 'vxe-design'
import { FormDesignWidgetTextareaProps } from './demoFormDesignTextareaWidget'

export default Vue.extend({
  props: {
    renderOpts: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions)
    },
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetTextareaProps>>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetTextareaProps>)
    }
  },
  computed: {
    widgetModel: {
      get () {
        const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetTextareaProps>
        const { $formView, widget } = renderParams
        return $formView ? $formView.getItemValue(widget) : null
      },
      set (value) {
        const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetTextareaProps>
        const { $formView, widget } = renderParams
        if ($formView) {
          $formView.setItemValue(widget, value)
        }
      }
    } as any,
    currWidget (): VxeFormDesignDefines.WidgetObjItem<FormDesignWidgetTextareaProps> {
      const renderParams = this.renderParams
      return renderParams.widget
    }
  }
})
</script>
