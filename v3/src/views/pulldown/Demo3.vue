<template>
  <div>
    <vxe-pulldown ref="pulldownRef" destroy-on-close>
      <template #default>
        <vxe-button icon="vxe-icon-arrow-down" @click="clickEvent3">点击按钮切换下拉</vxe-button>
      </template>
      <template #dropdown>
        <div class="my-dropdown3">
          <vxe-table
            auto-resize
            :data="tableData">
            <vxe-column field="name" title="Name"></vxe-column>
            <vxe-column field="role" title="Role"></vxe-column>
            <vxe-column field="sex" title="Sex"></vxe-column>
          </vxe-table>
        </div>
      </template>
    </vxe-pulldown>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { name: 'Test1', role: '前端', sex: '男' },
        { name: 'Test2', role: '后端', sex: '男' },
        { name: 'Test3', role: '测试', sex: '男' },
        { name: 'Test4', role: '设计师', sex: '女' }
      ]
    }
  },
  methods: {
    clickEvent3  () {
      const $pulldown = this.$refs.pulldownRef
      if ($pulldown) {
        $pulldown.togglePanel()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-dropdown3 {
  width: 400px;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.1);
}
</style>
