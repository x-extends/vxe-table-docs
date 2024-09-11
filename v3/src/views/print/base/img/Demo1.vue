<template>
  <div>
    <vxe-print ref="printRef" custom-layout>
      <img src="https://vxeui.com/resource/img/invoice345.png" style="width: 100%;">
    </vxe-print>
    <vxe-button @click="printEvent1">直接打印</vxe-button>
    <vxe-button @click="printEvent2">调用方法打印</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxePrintInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
    }
  },
  methods: {
    printEvent1  () {
      const $print = this.$refs.printRef as VxePrintInstance
      if ($print) {
        $print.print()
      }
    },
    printEvent2  () {
      VxeUI.print({
        html: `
        <img src="https://vxeui.com/resource/img/invoice345.png" style="width: 100%;">
        `
      })
    }
  }
})
</script>
