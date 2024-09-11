<template>
  <div>
    <vxe-countdown v-model="val1"></vxe-countdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 80000000000
    }
  }
})
</script>
