<template>
  <div>
    <vxe-switch v-model="val1" disabled></vxe-switch>
    <vxe-switch v-model="val2" size="medium" disabled></vxe-switch>
    <vxe-switch v-model="val3" size="small" disabled></vxe-switch>
    <vxe-switch v-model="val4" size="mini" disabled></vxe-switch>
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
