<template>
  <div>
    <vxe-switch v-model="val1"></vxe-switch>
    <vxe-switch v-model="val2" size="medium"></vxe-switch>
    <vxe-switch v-model="val3" size="small"></vxe-switch>
    <vxe-switch v-model="val4" size="mini"></vxe-switch>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(false)
const val2 = ref(false)
const val3 = ref(false)
const val4 = ref(false)
</script>
