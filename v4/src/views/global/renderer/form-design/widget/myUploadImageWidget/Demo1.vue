<template>
  <div>
    <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
    <vxe-form-design  ref="formDesignRef" :widgets="formDesignWidgets" :height="800" show-mobile />
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'layout',
    children: [
      'title',
      'row',
      'subtable'
    ]
  },
  {
    customGroup: '我的控件',
    children: [
      'MyFormDesignUploadImageWidget'
    ]
  }
])

const clickEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    console.log(JSON.stringify($formDesign.getConfig()))
  }
}
</script>
