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
    <vxe-form-item title="显示格式">
      <vxe-select v-model="currWidget.options.labelFormat" :options="formatOptions"></vxe-select>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetDatePickerProps } from './demoFormDesignDatePickerWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetDatePickerProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})

const formatOptions = ref([
  { value: 'yyyy-MM-dd HH:mm:ss', label: '年-月-日 时:分:秒' },
  { value: 'yyyy-MM-dd HH:mm', label: '年-月-日 时:分' },
  { value: '', label: '年-月-日' },
  { value: 'yyyy-MM', label: '年-月' }
])
</script>
