<template>
  <div>
    <vxe-countdown v-model="val1">
      <template #default="{ diffConf }">
        <span class="my-countdown">
          <span>还剩余：</span>
          <span class="my-countdown-num">{{ diffConf.HH }}</span>
          <span>时</span>
          <span class="my-countdown-num">{{ diffConf.mm }}</span>
          <span>分</span>
          <span class="my-countdown-num">{{ diffConf.ss }}</span>
          <span>秒</span>
        </span>
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

<style lang="scss" scoped>
.my-countdown-num {
  padding: 0 6px;
  margin: 0 2px;
  font-size: 20px;
  line-height: 30px;
  background-color: #f4f4f4;
}
</style>
