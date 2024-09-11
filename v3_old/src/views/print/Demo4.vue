<template>
  <div>
    <vxe-button content="打印图片" @click="printEvent"></vxe-button>

    <img ref="printRef" src="../../assets/image/invoice.png" style="width: 300px">
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    printEvent () {
      const imgEl = this.$refs.printRef
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
  }
}
</script>
