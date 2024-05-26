<template>
  <div>
    <vxe-input v-model="val1" placeholder="100位整数" type="integer" :maxlength="100" style="width: 800px;"></vxe-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
