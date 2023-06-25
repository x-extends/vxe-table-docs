<template>
  <div>
    <vxe-tooltip ref="tooltipRef" :enter-delay="150"></vxe-tooltip>
    <vxe-table
      border
      height="200"
      :tooltip-config="{}"
      :data="tableData"
      @cell-mouseenter="cellMouseenterEvent"
      @cell-mouseleave="cellMouseleaveEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }
  },
  methods: {
    cellMouseenterEvent ({ cell }) {
      const $tooltip = this.$refs.tooltipRef
      if ($tooltip) {
        $tooltip.open(cell, `自定义提示内容：${cell.innerText}`)
      }
    },
    cellMouseleaveEvent () {
      const $tooltip = this.$refs.tooltipRef
      if ($tooltip) {
        $tooltip.close()
      }
    }
  }
}
</script>
