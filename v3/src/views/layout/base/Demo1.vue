<template>
  <div>
    <div class="page-wrapper">
      <vxe-layout-container vertical>
        <vxe-layout-header class="bg1">
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
    </div>
  </div>
</template>

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
