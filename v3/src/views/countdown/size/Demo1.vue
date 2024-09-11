<template>
  <div>
    <vxe-countdown v-model="val1"></vxe-countdown>
    <vxe-countdown v-model="val2" size="medium"></vxe-countdown>
    <vxe-countdown v-model="val3" size="small"></vxe-countdown>
    <vxe-countdown v-model="val4" size="mini"></vxe-countdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 20000,
      val2: 30000,
      val3: 40000,
      val4: 50000
    }
  }
})
</script>
