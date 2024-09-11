<template>
  <div>
    <vxe-tooltip ref="tooltipRef"></vxe-tooltip>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例1</a>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例2</a>
    <a @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">只创建一个实例3</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false,
      val2: false,
      val3: false,
      val4: false
    }
  },
  methods: {
    mouseenterEvent  (event) {
      const $tooltip = this.$refs.tooltipRef
      if ($tooltip) {
        $tooltip.open(event.target, '自定义提示内容')
      }
    },
    mouseleaveEvent () {
      const $tooltip = this.$refs.tooltipRef
      if ($tooltip) {
        $tooltip?.close()
      }
    }
  }
}
</script>
