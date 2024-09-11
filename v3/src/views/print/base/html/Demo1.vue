<template>
  <div>
    <vxe-print ref="printRef" custom-layout>
      <div>内容1</div>
      <div style="color: red">内容2</div>
      <div style="color: orange;">内容3</div>
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
    printEvent1 () {
      const $print = this.$refs.printRef as VxePrintInstance
      if ($print) {
        $print.print()
      }
    },
    printEvent2  () {
      VxeUI.print({
        html: `
        <div>内容1</div>
        <div style="color: red">内容2</div>
        <div style="color: orange;">内容3</div>
        `
      })
    }
  }
})
</script>
