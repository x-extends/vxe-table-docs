<template>
  <div>
    <vxe-checkbox v-model="val1">默认尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val2" size="medium">中等尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val3" size="small">小型尺寸</vxe-checkbox>
    <vxe-checkbox v-model="val4" size="mini">超小尺寸</vxe-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false,
      val2: false,
      val3: false,
      val4: false
    }
  }
}
</script>
