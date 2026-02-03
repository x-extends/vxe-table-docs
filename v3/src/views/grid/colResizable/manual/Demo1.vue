<template>
  <div>
    <vxe-button status="primary" @click="updateWidth('name', 200)">设置 name=200</vxe-button>
    <vxe-button status="primary" @click="updateWidth('name', 400)">设置 name=400</vxe-button>
    <vxe-button status="success" @click="getWidth('name')">获取 name</vxe-button>
    <vxe-button status="success" @click="getWidth('address')">获取 address</vxe-button>

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      rowConfig: {
        keyField: 'id'
      },
      columnConfig: {
        resizable: true
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
    updateWidth (field: string, width: number) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setColumnWidth(field, width)
      }
    },
    getWidth (field: string) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        VxeUI.modal.message({
          title: '获取列宽',
          content: `宽度：${$grid.getColumnWidth(field)}px`
        })
      }
    }
  }
})
</script>
