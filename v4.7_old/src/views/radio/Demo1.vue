<template>
  <div>
    <vxe-radio v-model="val1" label="1">默认尺寸</vxe-radio>
    <vxe-radio v-model="val1" label="2" size="medium">中等尺寸</vxe-radio>
    <vxe-radio v-model="val1" label="3" size="small">小型尺寸</vxe-radio>
    <vxe-radio v-model="val1" label="4" size="mini">超小尺寸</vxe-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref()
</script>
