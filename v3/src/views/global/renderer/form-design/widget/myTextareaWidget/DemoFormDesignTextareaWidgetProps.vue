<template>
  <vxe-form
    vertical
    title-bold
    title-overflow
    span="24"
    :data="currWidget.options">
    <vxe-form-item title="控件名称">
      <vxe-input v-model="currWidget.title"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="是否必填">
      <vxe-switch v-model="currWidget.required"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="空值占位提示">
      <vxe-input v-model="currWidget.options.placeholder"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="是否显示字数统计">
      <vxe-switch v-model="currWidget.options.showWordCount"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="最小行高">
      <vxe-number-input v-model="currWidget.options.minRows" type="integer" min="2" max="10"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="最大行高">
      <vxe-number-input v-model="currWidget.options.maxRows" type="integer" min="2" max="20"></vxe-number-input>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { VxeFormDesignDefines } from 'vxe-design'
import { FormDesignWidgetTextareaProps } from './demoFormDesignTextareaWidget'

export default Vue.extend({
  props: {
    renderOpts: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions)
    },
    renderParams: {
      type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetTextareaProps>>,
      default: () => ({} as VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetTextareaProps>)
    }
  },
  computed: {
    currWidget (this: any): VxeFormDesignDefines.WidgetObjItem<FormDesignWidgetTextareaProps> {
      const { renderParams } = this
      return renderParams.widget
    }
  }
})
</script>
