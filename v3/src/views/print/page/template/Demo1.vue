<template>
  <div>
    <vxe-print ref="printRef" title="标题444">
      <vxe-print-page-break>
        <div>第一页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <div>第二页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <div>第三页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>

      <template #header>
        <div>自定义页眉</div>
      </template>
      <template #footer>
        <div>自定义页尾</div>
      </template>
      <template #left>
        <div>自定义左侧</div>
      </template>
      <template #right>
        <div>自定义右侧</div>
      </template>
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
        title: '标题444',
        headerHtml: '自定义页眉',
        footerHtml: '自定义页尾',
        leftHtml: '自定义左侧',
        rightHtml: '自定义右侧',
        pageBreaks: [
          {
            bodyHtml: `
              <div>第一页</div>
              <div>内容</div>
              <div>内容</div>
              `
          },
          {
            bodyHtml: `
              <div>第二页</div>
              <div>内容</div>
              <div>内容</div>
              `
          },
          {
            bodyHtml: `
              <div>第三页</div>
              <div>内容</div>
              <div>内容</div>
              `
          }
        ]
      })
    }
  }
})
</script>
