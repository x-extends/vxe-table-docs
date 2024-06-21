<template>
  <div>
    <vxe-button content="多窗口、叠加窗口" @click="openAlert({ content: '多窗口、叠加窗口', lockView: false, mask: false })"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI, VxeModalDefines } from 'vxe-table'

const openAlert = (options: VxeModalDefines.ModalOptions) => {
  VxeUI.modal.alert(options)
}
</script>
