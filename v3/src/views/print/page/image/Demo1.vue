<template>
  <div>
    <vxe-button @click="printEvent">批量打印图片</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
    }
  },
  methods: {
    printEvent  () {
      const urlList = [
        'https://vxeui.com/resource/img/fj573.jpeg',
        'https://vxeui.com/resource/img/fj562.png',
        'https://vxeui.com/resource/img/fj581.jpeg',
        'https://vxeui.com/resource/img/fj187.jpg'
      ]
      VxeUI.print({
        title: '分页打印表格',
        showPageNumber: true,
        pageBreaks: urlList.map(url => {
          return {
            bodyHtml: `<img src="${url}" style="max-width: 100%;max-height: 100%;" >`
          }
        })
      })
    }
  }
})
</script>
