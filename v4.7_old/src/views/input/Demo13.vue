<template>
  <div>
    <vxe-input v-model="val1" placeholder="数值类型" type="number"></vxe-input>
    <vxe-input v-model="val2" placeholder="数值间隔 1.4" type="number" step="1.4" clearable></vxe-input>
    <vxe-input v-model="val3" placeholder="数值范围限制 0-10" type="number" min="0" max="10" clearable></vxe-input>
    <vxe-input v-model="val4" placeholder="允许输入科学计数" type="number" exponential clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
