<template>
  <div>
    <vxe-radio-group v-model="val1" :strict="false">
      <vxe-radio label="1" content="支持取消1"></vxe-radio>
      <vxe-radio label="2" content="支持取消2"></vxe-radio>
      <vxe-radio label="3" content="支持取消3"></vxe-radio>
    </vxe-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null
    }
  }
}
</script>
