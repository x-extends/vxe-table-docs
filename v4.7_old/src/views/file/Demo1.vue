<template>
  <div>
    <vxe-button @click="selectEvent1">选择一个文件</vxe-button>
    <vxe-button @click="selectEvent2">选择指定类型文件</vxe-button>
    <vxe-button @click="selectEvent3">选择多个文件</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { VxeUI } from 'vxe-pc-ui'

const selectEvent1 = async () => {
  try {
    const { file } = await VxeUI.readFile()
    VxeUI.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
  } catch (e) {}
}

const selectEvent2 = async () => {
  try {
    const { file } = await VxeUI.readFile({
      types: ['xlsx', 'html']
    })
    VxeUI.modal.alert(`文件名：${file.name}，文件大小：${file.size}`)
  } catch (e) {}
}

const selectEvent3 = async () => {
  try {
    const { files } = await VxeUI.readFile({
      multiple: true
    })
    VxeUI.modal.alert(`共：${files.length} 个文件`)
  } catch (e) {}
}
</script>
