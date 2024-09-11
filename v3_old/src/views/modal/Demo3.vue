<template>
  <div>
    <vxe-button content="确认提示框" @click="confirmEvent"></vxe-button>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    async confirmEvent  () {
      const type = await VXETable.modal.confirm('您确定要删除吗？')
      VXETable.modal.message({ content: `点击了 ${type}` })
    }
  }
}
</script>
