<template>
  <div>
    <vxe-button @click="copyEvent">点击复制 123456789</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    copyEvent  () {
      if (VxeUI.clipboard.copy('123456789')) {
        VxeUI.modal.message({
          status: 'success',
          content: '复制成功',
          duration: 20000
        })
      }
    }
  }
})
</script>
