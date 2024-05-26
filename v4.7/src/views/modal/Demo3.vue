<template>
  <div>
    <vxe-button content="确认提示框" @click="confirmEvent"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-table'

const confirmEvent = async () => {
  const type = await VxeUI.modal.confirm('您确定要删除吗？')
  VxeUI.modal.message({ content: `点击了 ${type}` })
}
</script>
