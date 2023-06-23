<template>
  <div>
    <vxe-select class="my-select6" v-model="val1" placeholder="自定义选项样式" clearable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2" class-name="red"></vxe-option>
      <vxe-option value="3" label="选项3" class-name="green"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5" class-name="red"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
    </vxe-select>

    <vxe-select v-model="val2" placeholder="自定义模板" clearable>
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

    <vxe-select v-model="val3" placeholder="配置式自定义模板" :options="opts3" multiple clearable transfer>
      <template #opt3="{ option }">
        <span style="color: red">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
      </template>

      <template #opt4="{ option }">
        <span style="color: green">
          <i class="vxe-icon-question-circle-fill"></i>
          <span>{{ option.label }}</span>
        </span>
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
      val3: null,
      opts3: [
        { label: '1111', value: '1' },
        { label: '2222', value: '2' },
        { label: '3333', value: '3', slots: { default: 'opt3' } },
        { label: '4444', value: '4', slots: { default: 'opt4' } },
        { label: '5555', value: '5' },
        { label: '6666', value: '6' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep(.my-select6) {
  .red {
    color: red;
  }
  .green {
    color: green;
  }
}
</style>
