<template>
  <div>
    <vxe-switch v-model="val1" open-value="Y"></vxe-switch>
    <vxe-switch v-model="val2" size="medium" close-value="N"></vxe-switch>
    <vxe-switch v-model="val3" size="small" open-value="1" close-value="0"></vxe-switch>
    <vxe-switch v-model="val4" size="mini" open-value="是" close-value="否"></vxe-switch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: 'Y',
      val2: 'N',
      val3: '0',
      val4: '否'
    }
  }
}
</script>
