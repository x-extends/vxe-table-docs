<template>
  <div>
    <div style="height: 200px;position: relative;">
      <vxe-loading v-model="loading">
        <template #default>
          <span>
            <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif"/>
            <div>请稍后...</div>
          </span>
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
