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
    <vxe-form-item title="显示操作按钮">
      <vxe-switch v-model="currWidget.options.controlConfig.showButton"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item v-if="currWidget.options.controlConfig.showButton" title="按钮布局">
      <vxe-radio-group v-model="currWidget.options.controlConfig.layout">
        <vxe-radio label="left" content="左侧"></vxe-radio>
        <vxe-radio label="default" content="两侧"></vxe-radio>
        <vxe-radio label="right" content="右侧"></vxe-radio>
      </vxe-radio-group>
    </vxe-form-item>
    <vxe-form-item v-if="currWidget.options.controlConfig.showButton" title="按钮步数">
      <vxe-number-input v-model="currWidget.options.step"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="类型">
      <vxe-radio-group v-model="currWidget.options.type">
        <vxe-radio label="number" content="数值"></vxe-radio>
        <vxe-radio label="integer" content="整数"></vxe-radio>
        <vxe-radio label="float" content="小数"></vxe-radio>
      </vxe-radio-group>
    </vxe-form-item>
    <vxe-form-item v-if="['number', 'float'].includes(currWidget.options.type)" title="小数位数">
      <vxe-number-input v-model="currWidget.options.digits" :min="1" :max="9"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="最小值">
      <vxe-number-input v-model="currWidget.options.min"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="最大值">
      <vxe-number-input v-model="currWidget.options.max"></vxe-number-input>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetNumberInputProps } from './demoFormDesignNumberInputWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetNumberInputProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})
</script>
