<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(tableData[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([tableData[2], tableData[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
      <vxe-button @click="getSelectEvent">获取选中</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      :data="tableData"
      @checkbox-all="selectAllChangeEvent"
      @checkbox-change="selectChangeEvent">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    selectAllChangeEvent ({ checked }) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const records = $table.getCheckboxRecords()
        console.log(checked ? '所有勾选事件' : '所有取消事件', records)
      }
    },
    selectChangeEvent ({ checked }) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const records = $table.getCheckboxRecords()
        console.log(checked ? '勾选事件' : '取消事件', records)
      }
    },
    toggleSelectRow  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.toggleCheckboxRow(row)
      }
    },
    setSelectRow  (rows: RowVO[], checked: boolean) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setCheckboxRow(rows, checked)
      }
    },
    selectAllEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setAllCheckboxRow(true)
      }
    },
    clearSelectEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearCheckboxRow()
      }
    },
    getSelectEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const selectRecords = $table.getCheckboxRecords()
        VxeUI.modal.alert(`${selectRecords.length}条数据`)
      }
    }
  }
})
</script>
