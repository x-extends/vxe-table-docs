<template>
  <div>
    <vxe-button status="error" @click="removeSelectEvent">批量删除</vxe-button>
    <vxe-button status="success" @click="getRemoveEvent">获取已删除数据</vxe-button>
    <vxe-table
      border
      show-overflow
      height="400"
      ref="tableRef"
      :edit-config="editConfig"
      :data="tableData">
      <vxe-column type="checkbox" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'input'}"></vxe-column>
      <vxe-column field="action" title="操作" width="140">
        <template #default="{ row }">
          <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
        </template>
      </vxe-column>
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
      mode: 'cell'
    }

    const removeRecords: RowVO[] = []

    return {
      tableData,
      editConfig,
      removeRecords
    }
  },
  methods: {
    removeRow (row: RowVO) {
      this.tableData = this.tableData.filter(item => item.id !== row.id)
      this.removeRecords.push(row)
      VxeUI.modal.message({
        content: '数据已删除',
        status: 'success'
      })
    },
    async removeSelectEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const selectRecords = $table.getCheckboxRecords()
        if (selectRecords.length > 0) {
          this.tableData = this.tableData.filter(item => !selectRecords.some(row => row.id === item.id))
          this.removeRecords.push(...selectRecords)
          VxeUI.modal.message({
            content: '已删除选中',
            status: 'success'
          })
        } else {
          VxeUI.modal.message({
            content: '未选择数据',
            status: 'info'
          })
        }
      }
    },
    getRemoveEvent () {
      VxeUI.modal.alert(`删除：${this.removeRecords.length} 行`)
    }
  }
})
</script>
