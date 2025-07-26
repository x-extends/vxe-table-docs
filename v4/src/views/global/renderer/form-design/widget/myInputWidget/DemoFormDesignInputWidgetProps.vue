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
    <vxe-form-item title="限制字符长度">
      <vxe-number-input v-model="currWidget.options.maxLength" type="integer" min="0" max="3000"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="是否显示字数统计">
      <vxe-switch v-model="currWidget.options.showWordCount"></vxe-switch>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetInputProps } from './demoFormDesignInputWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetInputProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})
</script>
