<template>
  <div>
    <vxe-button content="点击遮罩层可以关闭" @click="openAlert({ content: '点击遮罩层可以关闭', maskClosable: true })"></vxe-button>
    <vxe-button content="按 Esc 键可以关闭" @click="openAlert({ content: '按 Esc 键可以关闭', escClosable: true })"></vxe-button>
    <vxe-button content="锁界面不要遮罩层" @click="openAlert({ content: '锁界面不要遮罩层', mask: false })"></vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeModalDefines } from 'vxe-pc-ui'
import { VXETable } from 'vxe-table'

const openAlert = (options: VxeModalDefines.ModalOptions) => {
  VXETable.modal.alert(options)
}
</script>
