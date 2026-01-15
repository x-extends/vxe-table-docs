<template>
  <div>
    <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
    <vxe-form-design  ref="formDesignRef" :widgets="formDesignWidgets" :form-render="{name: 'DemoDesignMyForm1'}" :height="800" />
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
    group: 'layout',
    children: [
      'MyFormDesignInputWidget',
      'MyFormDesignSelectWidget'
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
