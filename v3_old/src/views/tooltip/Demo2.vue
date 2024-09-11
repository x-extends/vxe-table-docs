<template>
  <div>
    <vxe-tooltip content="除了点击之外不会自动消息" trigger="click">
      <vxe-button>点击触发</vxe-button>
    </vxe-tooltip>
    <vxe-tooltip content="hover 提示内容">
      <vxe-button>Hover 触发</vxe-button>
    </vxe-tooltip>
    <vxe-tooltip content="鼠标可以进入到 tooltip 中" enterable>
      <vxe-button>鼠标可以进入</vxe-button>
    </vxe-tooltip>
  </div>
</template>

<script>
export default {
}
</script>
