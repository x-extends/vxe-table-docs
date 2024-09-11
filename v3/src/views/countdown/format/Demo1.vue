<template>
  <div>
    <vxe-countdown v-model="val1" format="HH:mm:ss"></vxe-countdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 400000
    }
  }
})
</script>
