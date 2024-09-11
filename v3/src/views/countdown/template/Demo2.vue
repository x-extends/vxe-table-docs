<template>
  <div>
    <vxe-countdown v-model="val1">
      <template #prefix>
        <span>倒计时：</span>
      </template>

      <template #suffix>
        <span>，即将开始</span>
      </template>
    </vxe-countdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: 50000
    }
  }
})
</script>
