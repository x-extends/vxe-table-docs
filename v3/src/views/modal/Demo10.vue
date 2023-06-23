<template>
  <div>
    <vxe-button content="阻止关闭" @click="val1 = true"></vxe-button>
    <vxe-modal v-model="val1" title="阻止关闭" width="800" height="400" :before-hide-method="beforeHideMethod" show-zoom esc-closable resize>
      <template #default>
        <vxe-table
          border
          show-overflow
          auto-resize
          height="auto"
          :column-config="{resizable: true}"
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
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      val1: false,
      tableData: []
    }
  },
  methods: {
    async beforeHideMethod  () {
      const type = await VXETable.modal.confirm('您确定要关闭吗？')
      if (type === 'confirm') {
        VXETable.modal.message({ content: `允许关闭 ${type}`, status: 'success' })
      } else {
        VXETable.modal.message({ content: `禁止关闭 ${type}`, status: 'error' })
        return new Error()
      }
    }
  }
}
</script>
