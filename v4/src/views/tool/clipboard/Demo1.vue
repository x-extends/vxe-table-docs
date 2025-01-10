<template>
  <div>
    <vxe-button @click="copyEvent">点击复制 123456789</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const copyEvent = () => {
  if (VxeUI.clipboard.copy('123456789')) {
    VxeUI.modal.message({
      status: 'success',
      content: '复制成功',
      duration: 20000
    })
  }
}
</script>
