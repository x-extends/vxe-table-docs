<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="自适应高度" :autosize="{ minRows: 2, maxRows: 4 }"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
</script>
