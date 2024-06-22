<template>
  <div>
    <vxe-button content="打印图片" @click="printEvent"></vxe-button>

    <img ref="printRef" src="../../assets/image/invoice.png" style="width: 300px">
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable } from 'vxe-table'

const printRef = ref<HTMLImageElement>()

const printEvent = () => {
  const imgEl = printRef.value
  VXETable.print({
    sheetName: '打印图片',
    style: `
      img {
        width: 100%;
      }
    `,
    content: `<img src="${imgEl?.src}">`
  })
}
</script>
