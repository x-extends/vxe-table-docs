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
    <vxe-form-item title="是否启用桌面端">
      <vxe-switch v-model="formConfig.isPC"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="是否启用移动端">
      <vxe-switch v-model="formConfig.isMobile"></vxe-switch>
    </vxe-form-item>
    <vxe-form-item title="是否启用小程序">
      <vxe-switch v-model="formConfig.isApplet"></vxe-switch>
    </vxe-form-item>
  </vxe-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { VxeUI, VxeGlobalRendererHandles } from 'vxe-pc-ui'
import { DemoDesignMyForm2Data } from './demo1.form-design.data'

const { useFormView } = VxeUI.formDesignHandle

const props = defineProps({
  renderOpts: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignSettingFormViewParams>,
    default: () => ({})
  },
  renderParams: {
    type: Object as PropType<VxeGlobalRendererHandles.RenderFormDesignSettingFormViewParams<DemoDesignMyForm2Data>>,
    default: () => ({})
  }
})

const { formConfig } = useFormView(props)
</script>
