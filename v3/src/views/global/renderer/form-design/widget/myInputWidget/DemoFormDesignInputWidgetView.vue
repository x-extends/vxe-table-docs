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

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeFormDesignDefines } from 'vxe-design'
import { FormDesignWidgetInputProps } from './demoFormDesignInputWidget'

export default Vue.extend({
  props: {
    renderOpts: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetViewOptions)
    },
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetInputProps>>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetInputProps>)
    }
  },
  computed: {
    widgetModel: {
      get (this: any) {
        const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetInputProps>
        const { $formView, widget } = renderParams
        return $formView ? $formView.getItemValue(widget) : null
      },
      set (this: any, value) {
        const renderParams = this.renderParams as VxeGlobalRendererHandles.RenderFormDesignWidgetViewParams<FormDesignWidgetInputProps>
        const { $formView, widget } = renderParams
        if ($formView) {
          $formView.setItemValue(widget, value)
        }
      }
    } as any,
    currWidget (): VxeFormDesignDefines.WidgetObjItem<FormDesignWidgetInputProps> {
      const { renderParams } = this
      return renderParams.widget
    }
  }
})
</script>
