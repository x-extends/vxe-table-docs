<template>
  <div>
    <vxe-input v-model="val1" placeholder="可清除" clearable></vxe-input>
    <vxe-input v-model="val2" placeholder="带图标" prefix-icon="vxe-icon-question-circle-fill" suffix-icon="vxe-icon-question-circle-fill" clearable></vxe-input>
    <vxe-input v-model="val3" placeholder="只读的" suffix-icon="vxe-icon-question-circle-fill" readonly></vxe-input>
    <vxe-input v-model="val4" placeholder="禁用的" prefix-icon="vxe-icon-question-circle-fill" disabled></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
