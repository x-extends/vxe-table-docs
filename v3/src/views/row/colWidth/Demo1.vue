<template>
  <div>
    <div class="row-wrapper">
      <vxe-row gutter="10">
        <vxe-col width="100">
          <div class="mybg">宽度100</div>
        </vxe-col>
        <vxe-col>
          <div class="mybg">内容1</div>
        </vxe-col>
        <vxe-col>
          <div class="mybg">内容2</div>
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
  text-align: center;
  color: #ffffff;
  background-color: #409eff;
}
</style>
