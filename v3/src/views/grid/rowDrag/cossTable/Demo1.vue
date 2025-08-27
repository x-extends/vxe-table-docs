<template>
  <div>
    <vxe-button status="success" @click="resultEvent1">获取数据1</vxe-button>
    <vxe-grid ref="gridRef1" v-bind="gridOptions1"></vxe-grid>

    <vxe-button status="success" @click="resultEvent2">获取数据2</vxe-button>
    <vxe-grid ref="gridRef2" v-bind="gridOptions2"></vxe-grid>

    <vxe-button status="success" @click="resultEvent3">获取数据3</vxe-button>
    <vxe-grid ref="gridRef3" v-bind="gridOptions3"></vxe-grid>
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
    const gridOptions1: VxeGridProps<RowVO> = {
      border: true,
      height: 240,
      rowConfig: {
        drag: true,
        keyField: 'id'
      },
      rowDragConfig: {
        isCrossTableDrag: true // 允许跨表
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role', dragSort: true },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test11', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test12', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test13', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test14', role: 'Test', sex: 'Women', age: 48, address: 'Guangzhou' },
        { id: 10005, name: 'Test15', role: 'PM', sex: 'Man', age: 38, address: 'Shanghai' },
        { id: 10006, name: 'Test16', role: 'Develop', sex: 'Man', age: 42, address: 'Guangzhou' }
      ]
    }

    const gridOptions2: VxeGridProps<RowVO> = {
      border: true,
      height: 240,
      rowConfig: {
        drag: true,
        keyField: 'id'
      },
      rowDragConfig: {
        isCrossTableDrag: true // 允许跨表
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role', dragSort: true },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 20001, name: 'Test21', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 20002, name: 'Test22', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 20003, name: 'Test23', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 20004, name: 'Test24', role: 'Test', sex: 'Women', age: 48, address: 'Guangzhou' },
        { id: 20005, name: 'Test25', role: 'PM', sex: 'Man', age: 38, address: 'Shanghai' },
        { id: 20006, name: 'Test26', role: 'Develop', sex: 'Man', age: 42, address: 'Guangzhou' }
      ]
    }

    const gridOptions3: VxeGridProps<RowVO> = {
      border: true,
      height: 240,
      rowConfig: {
        drag: true,
        keyField: 'id'
      },
      rowDragConfig: {
        isCrossTableDrag: true // 允许跨表
      },
      columns: [
        { field: 'name', title: 'Name' },
        { field: 'role', title: 'Role', dragSort: true },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 30001, name: 'Test31', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 30002, name: 'Test32', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 30003, name: 'Test33', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 30004, name: 'Test34', role: 'Test', sex: 'Women', age: 48, address: 'Guangzhou' },
        { id: 30005, name: 'Test35', role: 'PM', sex: 'Man', age: 38, address: 'Shanghai' },
        { id: 30006, name: 'Test36', role: 'Develop', sex: 'Man', age: 42, address: 'Guangzhou' }
      ]
    }

    return {
      gridOptions1,
      gridOptions2,
      gridOptions3
    }
  },
  methods: {
    resultEvent1 () {
      const $grid = this.$refs.gridRef1 as VxeGridInstance<RowVO>
      if ($grid) {
        const { insertRecords, removeRecords } = $grid.getRecordset()
        const tableData = $grid.getFullData()
        VxeUI.modal.message({
          content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${tableData.length}`,
          status: 'success'
        })
      }
    },
    resultEvent2 () {
      const $grid = this.$refs.gridRef2 as VxeGridInstance<RowVO>
      if ($grid) {
        const { insertRecords, removeRecords } = $grid.getRecordset()
        const tableData = $grid.getFullData()
        VxeUI.modal.message({
          content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${tableData.length}`,
          status: 'success'
        })
      }
    },
    resultEvent3 () {
      const $grid = this.$refs.gridRef3 as VxeGridInstance<RowVO>
      if ($grid) {
        const { insertRecords, removeRecords } = $grid.getRecordset()
        const tableData = $grid.getFullData()
        VxeUI.modal.message({
          content: `新增：${insertRecords.length} 删除：${removeRecords.length} 现有：${tableData.length}`,
          status: 'success'
        })
      }
    }
  }
})
</script>
