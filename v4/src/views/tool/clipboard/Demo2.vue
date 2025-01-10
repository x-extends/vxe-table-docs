<template>
  <div>
    <vxe-button @click="readEvent">点击读取</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const readEvent = () => {
  VxeUI.modal.message({
    status: 'success',
    content: `内容：${VxeUI.clipboard.getText()}`,
    duration: 20000
  })
}
</script>
