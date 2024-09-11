<template>
  <div>
    <div class="row-wrapper">
      <vxe-row gutter="10">
        <vxe-col>
          <div class="mybg">内容1</div>
        </vxe-col>
        <vxe-col>
          <div class="mybg">内容2</div>
        </vxe-col>
        <vxe-col>
          <div class="mybg">内容3</div>
        </vxe-col>
      </vxe-row>
    </div>

    <div class="row-wrapper">
      <vxe-row gutter="10">
        <vxe-col span="8">
          <div class="mybg">占比8</div>
        </vxe-col>
        <vxe-col span="8">
          <div class="mybg">占比8</div>
        </vxe-col>
        <vxe-col span="8">
          <div class="mybg">占比8</div>
        </vxe-col>
      </vxe-row>
    </div>

    <div class="row-wrapper">
      <vxe-row gutter="10">
        <vxe-col span="6">
          <div class="mybg">占比16</div>
        </vxe-col>
        <vxe-col span="4">
          <div class="mybg">占比4</div>
        </vxe-col>
        <vxe-col span="14">
          <div class="mybg">占比14</div>
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
