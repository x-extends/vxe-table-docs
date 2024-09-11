<template>
  <div>
    <vxe-checkbox v-model="val1" content="默认尺寸" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val2" size="medium" content="中等尺寸" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val3" size="small" content="小型尺寸" disabled></vxe-checkbox>
    <vxe-checkbox v-model="val4" size="mini" content="超小尺寸" disabled></vxe-checkbox>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: true,
      val2: false,
      val3: true,
      val4: false
    }
  }
}
</script>
