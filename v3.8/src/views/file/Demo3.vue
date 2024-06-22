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
      fetch('https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif')
        .then(response => response.blob())
        .then(blob => {
          // 下载到本地
          VXETable.saveFile({ filename: '图片', type: 'gif', content: blob })
        })
    }
  }
}
</script>
