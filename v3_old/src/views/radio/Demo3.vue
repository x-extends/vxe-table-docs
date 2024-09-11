<template>
  <div>
    <vxe-radio-group v-model="val1">
      <vxe-radio label="1" content="HTML"></vxe-radio>
      <vxe-radio label="2" content="CSS"></vxe-radio>
      <vxe-radio label="3" content="Javascript"></vxe-radio>
      <vxe-radio label="4" content="SASS"></vxe-radio>
      <vxe-radio label="5" content="LESS"></vxe-radio>
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
