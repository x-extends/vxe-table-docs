<template>
  <div>
    <vxe-input v-model="val1" placeholder="默认尺寸"></vxe-input>
    <vxe-input v-model="val2" placeholder="中等尺寸" size="medium"></vxe-input>
    <vxe-input v-model="val3" placeholder="小型尺寸" size="small"></vxe-input>
    <vxe-input v-model="val4" placeholder="超小尺寸" size="mini"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
