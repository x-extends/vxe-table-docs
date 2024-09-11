<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading">
        <template #icon>
          <vxe-icon name="indicator" roll></vxe-icon>
        </template>
        <template #text>
          <span>正则加载中，请稍后...</span>
        </template>
      </vxe-loading>
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
