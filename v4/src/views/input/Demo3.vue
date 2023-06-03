<template>
  <div>
    <vxe-input v-model="val1" placeholder="搜索类型" type="search"></vxe-input>
    <vxe-input v-model="val2" placeholder="可清除" type="search" clearable></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
</script>
