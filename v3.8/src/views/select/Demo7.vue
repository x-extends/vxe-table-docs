<template>
  <div>
    <vxe-select class="my-select7" v-model="val1" placeholder="自定义选项样式" clearable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2" class-name="red"></vxe-option>
      <vxe-option value="3" label="选项3" class-name="green"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5" class-name="red"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
    </vxe-select>

    <vxe-select v-model="val2" placeholder="自定义某一行模板" clearable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3">
        <template #default="{ option }">
          <span style="color: red">
            <i class="vxe-icon-question-circle-fill"></i>
            <span>{{ option.label }}</span>
          </span>
        </template>
      </vxe-option>
      <vxe-option value="4" label="选项4">
        <template #default>
          <span style="color: green">
            <i class="vxe-icon-question-circle-fill"></i>
            <span>选项4</span>
          </span>
        </template>
      </vxe-option>
      <vxe-option value="5" label="选项5"></vxe-option>
    </vxe-select>

    <vxe-select v-model="val3" placeholder="自定义头部和底部" multiple clearable>
      <template #default>
        <vxe-option value="1" label="选项1"></vxe-option>
        <vxe-option value="2" label="选项2"></vxe-option>
        <vxe-option value="3" label="选项3"></vxe-option>
        <vxe-option value="4" label="选项4"></vxe-option>
        <vxe-option value="5" label="选项5"></vxe-option>
        <vxe-option value="6" label="选项6"></vxe-option>
        <vxe-option value="7" label="选项7"></vxe-option>
        <vxe-option value="8" label="选项8"></vxe-option>
      </template>

      <template #header>
        <vxe-button mode="text" status="primary">按钮1</vxe-button>
        <vxe-button mode="text" status="danger">按钮2</vxe-button>
      </template>

      <template #option="{ option }">
        <div>-- {{ option.label }} --</div>
      </template>

      <template #footer>
        <div class="selected-num7">已选 {{ val3.length }} 条</div>
      </template>
    </vxe-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: null,
      val2: null,
      val3: []
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.my-select7) {
  .red {
    color: red;
  }
  .green {
    color: green;
  }
}
.selected-num7 {
  line-height: 24px;
  text-align: right;
  padding: 0 4px;
}
</style>
