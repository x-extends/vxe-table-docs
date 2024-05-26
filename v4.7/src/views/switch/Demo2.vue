<template>
  <div>
    <vxe-switch v-model="val1" disabled></vxe-switch>
    <vxe-switch v-model="val2" size="medium" disabled></vxe-switch>
    <vxe-switch v-model="val3" size="small" disabled></vxe-switch>
    <vxe-switch v-model="val4" size="mini" disabled></vxe-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(true)
const val2 = ref(false)
const val3 = ref(true)
const val4 = ref(false)
</script>
