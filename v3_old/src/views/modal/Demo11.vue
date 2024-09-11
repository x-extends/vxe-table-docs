<template>
  <div>
    <vxe-button content="自定义模板" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1" width="600" show-footer>
        <template #title>
          <span style="color:red">自定义标题</span>
        </template>
        <template #corner>
          <vxe-icon name="bell-fill"></vxe-icon>
          <vxe-icon name="minus"></vxe-icon>
        </template>
        <template #default>
          <vxe-table
            show-overflow
            height="300"
            :sync-resize="val1"
            :data="tableData">
            <vxe-column type="seq" width="60"></vxe-column>
            <vxe-column field="name" title="Name"></vxe-column>
            <vxe-column field="sex" title="Sex"></vxe-column>
            <vxe-column field="age" title="Age"></vxe-column>
          </vxe-table>
        </template>
      </vxe-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      val1: false,
      tableData: []
    }
  }
}
</script>
