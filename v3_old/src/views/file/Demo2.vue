<template>
  <div>
    <vxe-button @click="saveEvent1">保存为txt文件</vxe-button>
    <vxe-button @click="saveEvent2">保存为html文件</vxe-button>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    saveEvent1 () {
      VXETable.saveFile({
        filename: '文本',
        type: 'txt',
        content: '内容xxx'
      })
    },
    saveEvent2  () {
      VXETable.saveFile({
        filename: '页面',
        type: 'html',
        content: '<html><head></head><body>内容xx</body></html>'
      })
    }
  }
}
</script>
