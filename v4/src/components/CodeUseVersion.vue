<template>
  <div class="plugins-insert">
    <h2 v-if="$slots.v5" class="pi-header">
      <a class="link" href="https://vxetable.cn/v5/" target="_blank">vxe-table v5.x 版本</a>
    </h2>
    <div v-if="$slots.v5">
      <slot name="v5"></slot>
    </div>

    <h2 v-if="$slots.v4" class="pi-header">
      <a class="link" href="https://vxetable.cn/v4/" target="_blank">vxe-table v4.x 版本</a>
    </h2>
    <div v-if="$slots.v4">
      <slot name="v4"></slot>
    </div>

    <h2 v-if="$slots.v3" class="pi-header">
      <a class="link" href="https://vxetable.cn/v3/" target="_blank">vxe-table v3.x 版本</a>
    </h2>
    <div v-if="$slots.v3">
      <slot name="v3"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.pi-header {
  cursor: pointer;
  .pi-icon,
  .pi-title {
    display: inline-block;
    vertical-align: middle;
    user-select: none;
  }
  .pi-icon {
    transition: transform 0.2s ease-in-out;
  }
  .pi-title {
    padding-left: 10px;
  }
  &.active {
    .pi-icon {
      transform: rotate(90deg);
    }
  }
}
.pi-body {
  padding-left: 64px;
}
</style>
