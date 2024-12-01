<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（第三行插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
    <vxe-table
      border
      show-overflow
      keep-source
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

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
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'click',
      mode: 'cell',
      showStatus: true
    }

    return {
      tableData,
      editConfig
    }
  },
  methods: {
    async addEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insert(record)
        $table.setEditRow(newRow)
      }
    },
    async pushEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertAt(record, -1)
        $table.setEditRow(newRow)
      }
    },
    async insertEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          name: `Name_${new Date().getTime()}`
        }
        const { row: newRow } = await $table.insertAt(record, 2)
        $table.setEditRow(newRow)
      }
    },
    getInsertEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const insertRecords = $table.getInsertRecords()
        VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
      }
    }
  }
})
</script>
