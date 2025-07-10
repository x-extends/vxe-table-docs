<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const val1 = 'myoptionIcon2'
    const iconList: VxeIconPickerPropTypes.Icons = [
      { icon: 'myoptionIcon1', iconRender: { name: 'myIconPickerOptionIcon' } },
      { icon: 'myoptionIcon2', iconRender: { name: 'myIconPickerOptionIcon' } },
      { icon: 'myoptionIcon3', iconRender: { name: 'myIconPickerOptionIcon' } }
    ]

    return {
      val1,
      iconList
    }
  }
})
</script>
