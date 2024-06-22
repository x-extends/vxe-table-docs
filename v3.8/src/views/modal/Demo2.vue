<template>
  <div>
    <p>
      <vxe-button content="基本提示框" @click="openAlert({ content: '基本提示框', title: '标题1' })"></vxe-button>
      <vxe-button content="info" @click="openAlert({ content: 'info 提示框', status: 'info' })"></vxe-button>
      <vxe-button content="warning" @click="openAlert({ content: 'warning 提示框', status: 'warning' })"></vxe-button>
      <vxe-button content="question" @click="openAlert({ content: 'question 提示框', status: 'question' })"></vxe-button>
      <vxe-button content="success" @click="openAlert({ content: 'success 提示框', status: 'success' })"></vxe-button>
      <vxe-button content="error" @click="openAlert({ content: 'error 提示框', title:'app.body.msg.error', status: 'error' })"></vxe-button>
      <vxe-button content="loading" @click="openAlert({ content: 'loading 提示框', status: 'loading' })"></vxe-button>
      <vxe-button content="自定义图标" @click="openAlert({ content: 'iconStatus 自定义图标', status:'error', iconStatus: 'vxe-icon-question-circle-fill' })"></vxe-button>
      <vxe-button content="禁止拖动" @click="openAlert({ content: '禁止按住头部进行拖动', draggable: false })"></vxe-button>
    </p>
    <p>
      <vxe-button content="打开提示框" @click="openAlert({ id: 'myAlert1', content: '如果需要手动关闭，通过传id来实现', status:'loading', lockView: false, mask: false })"></vxe-button>
      <vxe-button content="手动关闭" @click="closeAlert('myAlert1')"></vxe-button>
    </p>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  methods: {
    openAlert (options) {
      VXETable.modal.alert(options)
    },
    closeAlert  (id) {
      VXETable.modal.close(id)
    }
  }
}
</script>
