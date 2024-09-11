<template>
  <div>
    <p>
      <vxe-breadcrumb :options="navList"></vxe-breadcrumb>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      navList: [
        { title: '首页' },
        { title: '系统设置' },
        { title: '菜单设置' }
      ]
    }
  }
})
</script>
