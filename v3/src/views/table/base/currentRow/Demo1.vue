<template>
  <div>
    <p>
      <vxe-button @click="selectRowEvent">设置第二行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :row-config="{isCurrent: true, isHover: true}"
      :data="tableData"
      @current-row-change="currentRowChangeEvent">
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
  name: string
  role: string
  sex: string
  age: number
  content: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
      { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
      { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
      { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    currentRowChangeEvent ({ rowIndex }) {
      console.log(`行选中事件 ${rowIndex}`)
    },
    selectRowEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.setCurrentRow(this.tableData[1])
      }
    },
    clearSelectEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        $table.clearCurrentRow()
      }
    },
    getCurrentEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance
      if ($table) {
        VxeUI.modal.alert(JSON.stringify($table.getCurrentRecord()))
      }
    }
  }
})
</script>
