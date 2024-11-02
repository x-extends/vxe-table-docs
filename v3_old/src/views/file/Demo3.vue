<template>
  <div>
    <vxe-button @click="downloadEvent">下载文件</vxe-button>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    downloadEvent () {
      // 请求文件
      fetch('https://vxeui.com/resource/img/546.gif')
        .then(response => response.blob())
        .then(blob => {
          // 下载到本地
          VXETable.saveFile({ filename: '图片', type: 'gif', content: blob })
        })
    }
  }
}
</script>
