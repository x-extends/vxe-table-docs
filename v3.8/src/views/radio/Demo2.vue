<template>
  <div>
    <vxe-radio v-model="val1" label="1" content="默认尺寸" disabled></vxe-radio>
    <vxe-radio v-model="val1" label="2" size="medium" content="中等尺寸" disabled></vxe-radio>
    <vxe-radio v-model="val1" label="3" size="small" content="小型尺寸" disabled></vxe-radio>
    <vxe-radio v-model="val1" label="4" size="mini" content="超小尺寸" disabled></vxe-radio>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '2'
    }
  }
}
</script>
