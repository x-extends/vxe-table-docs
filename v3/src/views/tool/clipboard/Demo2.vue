<template>
  <div>
    <vxe-button @click="readEvent">点击读取</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    readEvent  () {
      VxeUI.modal.message({
        status: 'success',
        content: `内容：${VxeUI.clipboard.getText()}`,
        duration: 20000
      })
    }
  }
})
</script>
