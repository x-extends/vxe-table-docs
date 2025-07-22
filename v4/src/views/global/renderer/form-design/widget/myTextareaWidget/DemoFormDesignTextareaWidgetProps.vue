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
    <vxe-form-item title="显示清除按钮">
      <vxe-switch v-model="currWidget.options.clearable"></vxe-switch>
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

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetTextareaProps } from './demoFormDesignTextareaWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetTextareaProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})
</script>
