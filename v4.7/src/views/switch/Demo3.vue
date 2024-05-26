<template>
  <div>
    <vxe-switch v-model="val1" open-value="Y"></vxe-switch>
    <vxe-switch v-model="val2" size="medium" close-value="N"></vxe-switch>
    <vxe-switch v-model="val3" size="small" open-value="1" close-value="0"></vxe-switch>
    <vxe-switch v-model="val4" size="mini" open-value="是" close-value="否"></vxe-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('Y')
const val2 = ref('N')
const val3 = ref('0')
const val4 = ref('否')
</script>
