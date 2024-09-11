<template>
  <div>
    <div class="row-wrapper">
      <vxe-row gutter="10">
        <vxe-col span="8" align="left">
          <div class="mybg">居左</div>
        </vxe-col>
        <vxe-col span="8" align="center">
          <div class="mybg">居左</div>
        </vxe-col>
        <vxe-col span="8" align="right">
          <div class="mybg">居右</div>
        </vxe-col>
      </vxe-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.row-wrapper {
  margin: 10px 0;
}
.mybg {
  line-height: 30px;
  color: #ffffff;
  background-color: #409eff;
}
</style>
