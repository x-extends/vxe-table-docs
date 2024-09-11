<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading" text="正则加载中，请稍后..."></vxe-loading>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      loading: true
    }
  }
})
</script>
