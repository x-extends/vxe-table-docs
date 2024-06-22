<template>
  <div>
    <vxe-input v-model="val1" placeholder="自定义前缀图标">
      <template #prefix>
        <i class="vxe-icon-search my-red"></i>
      </template>
    </vxe-input>
    <vxe-input v-model="val2" placeholder="自定义后缀图标">
      <template #suffix>
        <i class="vxe-icon-warning-triangle-fill"></i>
      </template>
    </vxe-input>
    <vxe-input v-model="val3" class="my-domain" placeholder="自定义前缀模板">
      <template #prefix>
        <span>Http://</span>
      </template>
    </vxe-input>
    <vxe-input v-model="val4" class="my-search" placeholder="自定义后缀模板">
      <template #suffix>
        <i class="vxe-icon-user-fill"></i>
      </template>
    </vxe-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: '',
      val2: '',
      val3: '',
      val4: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.my-red {
  color: red;
}
.my-green {
  color: green;
}
.my-domain.vxe-input {
  height: 34px;
  width: 300px;
}
.my-domain.vxe-input:deep() .vxe-input--prefix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-right: 1px solid #dcdfe6;
  background-color: #f5f7fa;
}
.my-domain.vxe-input:deep() .vxe-input--inner {
  padding-left: 72px;
  border: 1px solid #dcdfe6;
}
.my-search.vxe-input {
  height: 34px;
  width: 300px;
}
.my-search.vxe-input:deep() .vxe-input--suffix {
  width: 60px;
  height: 32px;
  top: 1px;
  text-align: center;
  border-left: 1px solid #dcdfe6;
  background-color: #f5f7fa;
  cursor: pointer;
}
.my-search.vxe-input:deep() .vxe-input--inner {
  padding-right: 72px;
  border: 1px solid #dcdfe6;
}
</style>
