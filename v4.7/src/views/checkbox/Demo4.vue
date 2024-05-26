<template>
  <div>
    <vxe-checkbox v-model="val1" content="复选框1" unchecked-value="0"></vxe-checkbox>
    <vxe-checkbox v-model="val2" size="medium" content="复选框2" checked-value="1"></vxe-checkbox>
    <vxe-checkbox v-model="val3" size="small" content="复选框3" :checked-value="1" :unchecked-value="0"></vxe-checkbox>
    <vxe-checkbox v-model="val4" size="mini" content="复选框4" checked-value="Y" unchecked-value="N"></vxe-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref(0)
const val2 = ref('1')
const val3 = ref(1)
const val4 = ref('N')
</script>
