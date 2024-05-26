<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="关闭调节元素" resize="none"></vxe-textarea>
    <vxe-textarea v-model="val2" placeholder="可以调节元素的高度" resize="vertical"></vxe-textarea>
    <vxe-textarea v-model="val3" placeholder="以调节元素的宽度" resize="horizontal"></vxe-textarea>
    <vxe-textarea v-model="val4" placeholder="可以调节元素的宽度和高度" resize="both"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
