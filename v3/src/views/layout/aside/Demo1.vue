<template>
  <div>
    <div class="page-wrapper">
      <vxe-layout-container>
        <vxe-layout-aside class="bg2" :loading="loading">
          <vxe-button mode="text" @click="openLoading">点击加载中</vxe-button>
          <div style="height: 400px">菜单</div>
          <div style="height: 400px">菜单</div>
        </vxe-layout-aside>

        <vxe-layout-container vertical>
          <vxe-layout-header fixed class="bg1">
            <div style="height: 50px">头部</div>
          </vxe-layout-header>

          <vxe-layout-body class="bg3">
            <div style="height: 400px">内容</div>
            <div style="height: 400px">内容</div>
          </vxe-layout-body>

          <vxe-layout-footer class="bg4">
            <div style="height: 30px">底部</div>
          </vxe-layout-footer>
        </vxe-layout-container>
      </vxe-layout-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  methods: {
    openLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
})
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 300px;
}
.bg1 {
  background-color: #a6c9ed;
}
.bg2 {
  background-color: #c0dcf7;
}
.bg3 {
  background-color: #dfedfb;
}
.bg4 {
  background-color: #a6c9ed;
}
</style>
