<template>
  <vxe-form
    vertical
    title-bold
    title-overflow
    span="24"
    :data="currWidget.options">
    <vxe-form-item title="控件字段名" :title-prefix="{icon: 'vxe-icon-question-circle-fill', content: '唯一字段名，默认自动生成'}">
      <vxe-input v-model="currWidget.field" placeholder="唯一，默认自动生成"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="控件名称">
      <vxe-input v-model="currWidget.title"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="是否必填">
      <vxe-switch v-model="currWidget.required"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="按钮文字">
      <vxe-input v-model="currWidget.options.buttonText" placeholder="点击或拖拽上传"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="允许多选">
      <vxe-switch v-model="currWidget.options.multiple"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="最大数量">
      <vxe-number-input v-model="currWidget.options.limitCount" :min="1" :max="100"></vxe-number-input>
    </vxe-form-item>
    <vxe-form-item title="文件大小">
      <vxe-select v-model="currWidget.options.limitSize" :options="sizeOptions"></vxe-select>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { FormDesignWidgetUploadImageProps } from './demoFormDesignUploadImageWidget'

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewOptions>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignWidgetFormViewParams<FormDesignWidgetUploadImageProps>>,
    default: () => ({})
  }
})

const currWidget = computed(() => {
  const { renderParams } = props
  return renderParams.widget
})

const sizeOptions = ref([
  { value: 5, label: '5M' },
  { value: 3, label: '3M' },
  { value: 1, label: '1M' }
])
</script>
