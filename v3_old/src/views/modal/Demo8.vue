<template>
  <div>
    <vxe-button content="最大化显示" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1" title="最大化显示" width="600" height="400" show-zoom resize fullscreen>
        <template #default>
          <div style="color: red">默认最大化显示</div>
          <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
        </template>
      </vxe-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false
    }
  }
}
</script>
