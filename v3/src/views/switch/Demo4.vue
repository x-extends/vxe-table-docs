<template>
  <div>
    <vxe-switch v-model="val1" open-label="开" close-label="关"></vxe-switch>
    <vxe-switch v-model="val2" size="medium" open-label="是" close-label="否"></vxe-switch>
    <vxe-switch v-model="val3" size="small" open-label="启用" close-label="禁用"></vxe-switch>
    <vxe-switch v-model="val4" size="mini" open-label="打开" close-label="关闭"></vxe-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false,
      val2: false,
      val3: true,
      val4: false
    }
  }
}
</script>
