<template>
  <div>
    <p>
      <vxe-button @click="open1Event">加载中</vxe-button>
    </p>
    <p>
      <vxe-button @click="open2Event">自定义文字</vxe-button>
    </p>
    <p>
      <vxe-button @click="open3Event">自定义图标</vxe-button>
    </p>
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
    open1Event () {
      VxeUI.loading.open()
      setTimeout(() => {
        VxeUI.loading.close()
      }, 1000)
    },
    open2Event  () {
      VxeUI.loading.open({
        text: '正则加载中，请稍后...'
      })
      setTimeout(() => {
        VxeUI.loading.close()
      }, 1000)
    },
    open3Event  () {
      VxeUI.loading.open({
        icon: 'vxe-icon-indicator roll',
        text: '正则拼命加载中...'
      })
      setTimeout(() => {
        VxeUI.loading.close()
      }, 1000)
    }
  }
})
</script>
