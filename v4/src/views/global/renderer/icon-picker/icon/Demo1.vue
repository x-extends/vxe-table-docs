<template>
  <div>
    <vxe-icon-picker v-model="val1" :icons="iconList" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('myoptionIcon2')
const iconList = ref<VxeIconPickerPropTypes.Icons>([
  { icon: 'myoptionIcon1', iconRender: { name: 'myIconPickerOptionIcon' } },
  { icon: 'myoptionIcon2', iconRender: { name: 'myIconPickerOptionIcon' } },
  { icon: 'myoptionIcon3', iconRender: { name: 'myIconPickerOptionIcon' } }
])
</script>
