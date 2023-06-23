<template>
  <div>
    <vxe-switch v-model="val1"></vxe-switch>
    <vxe-switch v-model="val2" size="medium"></vxe-switch>
    <vxe-switch v-model="val3" size="small"></vxe-switch>
    <vxe-switch v-model="val4" size="mini"></vxe-switch>
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
