<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button content="打印下面的区域" @click="printEvent"></vxe-button>
      </template>
    </vxe-toolbar>

    <div ref="printRef">
      <div>
        <p>将当前渲染的<span style="color: #20f320">内容</span>打印出来，仅<span style="color: blue;font-size: 20px">打印</span>内联<span style="color: red">样式</span></p>
        <p>内容<span style="font-size: 30px;font-weight: 700">区域</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    printEvent () {
      const divEl = this.$refs.printRef
      VXETable.print({
        sheetName: '打印下面区域',
        content: divEl?.innerHTML
      })
    }
  }
}
</script>
