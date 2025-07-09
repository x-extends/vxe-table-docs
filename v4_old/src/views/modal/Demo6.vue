<template>
  <div>
    <vxe-button content="多窗口、叠加窗口" @click="openAlert({ content: '多窗口、叠加窗口', lockView: false, mask: false })"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeModalDefines } from 'vxe-pc-ui'
import { VXETable } from 'vxe-table'

const openAlert = (options: VxeModalDefines.ModalOptions) => {
  VXETable.modal.alert(options)
}
</script>
