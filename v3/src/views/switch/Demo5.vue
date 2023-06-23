<template>
  <div>
    <vxe-switch v-model="val1" open-icon="vxe-icon-check" close-icon="vxe-icon-close"></vxe-switch>
    <vxe-switch v-model="val2" size="medium" open-icon="vxe-icon-fixed-fill" close-icon="vxe-icon-fixed"></vxe-switch>
    <vxe-switch v-model="val3" size="small" open-icon="vxe-icon-swap-left" close-icon="vxe-icon-swap-right" class="my-switch1"></vxe-switch>
    <vxe-switch v-model="val4" size="mini" open-icon="vxe-icon-star-fill" close-icon="vxe-icon-star" class="my-switch2"></vxe-switch>
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

<style lang="scss">
.my-switch1.vxe-switch .vxe-switch--button {
  background-color: #13ce66;
}
.my-switch2.vxe-switch.is--on .vxe-switch--button {
  background-color: #13ce66;
}
.my-switch2.vxe-switch.is--off .vxe-switch--button {
  background-color: #ff4949;
}
</style>
