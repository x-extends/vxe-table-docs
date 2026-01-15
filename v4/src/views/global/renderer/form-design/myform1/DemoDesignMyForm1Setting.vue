<template>
  <vxe-form
    vertical
    title-bold
    title-overflow
    span="24"
    :data="formConfig">
    <vxe-form-item title="表单名称">
      <vxe-input v-model="formConfig.title"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="是否显示操作日志">
      <vxe-switch v-model="formConfig.isLog"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="更多字段1">
      <vxe-input v-model="formConfig.attr1"></vxe-input>
    </vxe-form-item>
    <vxe-form-item title="更多字段2">
      <vxe-input v-model="formConfig.attr2"></vxe-input>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { DemoDesignMyForm1Data } from './demo1.form-design.data'

const { useFormView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignSettingFormViewParams>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignSettingFormViewParams<DemoDesignMyForm1Data>>,
    default: () => ({})
  }
})

const { formConfig } = useFormView(props)
</script>
