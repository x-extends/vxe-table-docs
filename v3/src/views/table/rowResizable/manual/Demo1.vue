<template>
  <div>
    <vxe-button status="primary" @click="updateHeight(tableData[1], 80)">设置第二行=80</vxe-button>
    <vxe-button status="primary" @click="updateHeight(10002, 140)">设置第二行=140</vxe-button>
    <vxe-button status="primary" @click="updateBatchHeight()">批量设置高度</vxe-button>
    <vxe-button status="success" @click="getHeight(tableData[1])">获取第二行</vxe-button>
    <vxe-button status="success" @click="getHeight(10003)">获取 10003</vxe-button>

    <vxe-table
      border
      ref="tableRef"
      :row-config="rowConfig"
      :data="tableData">
      <vxe-column type="seq" width="70" row-resize></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="time" title="Time"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const rowConfig: VxeTablePropTypes.RowConfig = {
      resizable: true,
      keyField: 'id'
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    return {
      rowConfig,
      tableData
    }
  },
  methods: {
    updateHeight (rowOrId: RowVO | string | number, height: number) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setRowHeight(rowOrId, height)
      }
    },
    updateBatchHeight () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const heightConf = {
          10001: 60,
          10003: 90,
          10004: 50
        }
        $table.setRowHeightConf(heightConf)
      }
    },
    getHeight (rowOrId: RowVO | string | number) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        VxeUI.modal.message({
          title: '获取高度',
          content: `高度：${$table.getRowHeight(rowOrId)}px`
        })
      }
    }
  }
})
</script>
