<template>
  <div>
    <vxe-button status="primary" @click="updateHeight(gridOptions.data[1], 80)">设置第二行=80</vxe-button>
    <vxe-button status="primary" @click="updateHeight(10002, 140)">设置第二行=140</vxe-button>
    <vxe-button status="primary" @click="updateBatchHeight()">批量设置高度</vxe-button>
    <vxe-button status="success" @click="getHeight(gridOptions.data[1])">获取第二行</vxe-button>
    <vxe-button status="success" @click="getHeight(10003)">获取 10003</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGridProps, VxeGridInstance } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      rowConfig: {
        resizable: true,
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'time', title: 'Time' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    updateHeight (rowOrId: RowVO | string | number, height: number) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setRowHeight(rowOrId, height)
      }
    },
    updateBatchHeight () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const heightConf = {
          10001: 60,
          10003: 90,
          10004: 50
        }
        $grid.setRowHeightConf(heightConf)
      }
    },
    getHeight (rowOrId: RowVO | string | number) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        VxeUI.modal.message({
          title: '获取高度',
          content: `高度：${$grid.getRowHeight(rowOrId)}px`
        })
      }
    }
  }
})
</script>
