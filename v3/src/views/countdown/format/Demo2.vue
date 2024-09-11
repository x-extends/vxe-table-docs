<template>
  <div>
    <vxe-countdown v-model="val1" format="倒计时：HH:mm:ss 秒后结束"></vxe-countdown>
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
