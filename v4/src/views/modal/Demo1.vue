<template>
  <div>
    <p>
      <vxe-button content="默认消息框" @click="openMessage({ content: '消息提示' })"></vxe-button>
      <vxe-button content="info" @click="openMessage({ content: 'info 消息提示', status: 'info' })"></vxe-button>
      <vxe-button content="warning" @click="openMessage({ content: 'warning 消息提示', status: 'warning' })"></vxe-button>
      <vxe-button content="question" @click="openMessage({ content: 'question 消息提示', status: 'question' })"></vxe-button>
      <vxe-button content="success" @click="openMessage({ content: 'success 消息提示', status: 'success' })"></vxe-button>
      <vxe-button content="error" @click="openMessage({ content: 'error 消息提示', status: 'error' })"></vxe-button>
      <vxe-button content="loading" @click="openMessage({ content: 'loading 消息提示', status: 'loading' })"></vxe-button>
    </p>
    <p>
      <vxe-button content="自定义图标" @click="openMessage({ content: 'iconStatus 自定义图标', status:'success', iconStatus: 'vxe-icon-question-circle-fill' })"></vxe-button>
      <vxe-button content="不允许重复点击" @click="openMessage({ content: '不允许重复点击', id: 'unique1' })"></vxe-button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import { VXETable, VxeModalDefines } from 'vxe-table'

const openMessage = (options: VxeModalDefines.ModalOptions) => {
  VXETable.modal.message(options)
}
</script>
