<template>
  <div>
    <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
    <vxe-form-design  ref="formDesignRef" :widgets="formDesignWidgets" :height="800" show-mobile />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeFormDesignInstance, VxeFormDesignPropTypes } from 'vxe-design'

interface RowVO {
  id: number
  name: string
  sex: string
  age: number
  url: string
}

export default Vue.extend({
  data () {
    const formDesignWidgets: VxeFormDesignPropTypes.Widgets = [
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
          'MyFormDesignTextareaWidget'
        ]
      }
    ]

    return {
      formDesignWidgets
    }
  },
  methods: {
    clickEvent  () {
      const $formDesign = this.$refs.formDesignRef as VxeFormDesignInstance
      if ($formDesign) {
        console.log(JSON.stringify($formDesign.getConfig()))
      }
    }
  }
})
</script>
