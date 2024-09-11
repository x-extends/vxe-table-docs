<template>
  <div>
    <p>
      <vxe-button content="允许拖动范围超出屏幕" @click="openAlert({ content: '允许拖动范围超出屏幕', marginSize: -500 })"></vxe-button>
    </p>
    <p>
      <vxe-button content="窗口初始位置" @click="val1 = true"></vxe-button>
      <vxe-modal v-model="val1" width="600" :position="{top: 200, left: 200}">
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
    </p>
    <p>
      <vxe-button content="拖动窗口调整大小" @click="val2 = true"></vxe-button>
      <vxe-modal v-model="val2" show-zoom resize>
        <template #default>
          <div style="color: red">按住头部移动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: red">按住右边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住底边距拖动！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住左下角拖动 ！！！！！！！！！！！！！！！</div>
          <div style="color: blue">按住右下角拖动！！！！！！！！！！！！！！！</div>
        </template>
      </vxe-modal>
    </p>
  </div>
</template>

<script>
import { VXETable } from 'vxe-table'

export default {
  data () {
    return {
      val1: false,
      val2: false,
      tableData: []
    }
  },
  methods: {
    openAlert (options) {
      VXETable.modal.alert(options)
    }
  }
}
</script>
