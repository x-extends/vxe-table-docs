<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>

    <vxe-button status="error" @click="removeSelectEvent">批量删除</vxe-button>
    <vxe-button status="success" @click="getRemoveEvent">获取已删除数据</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      height="500"
      :edit-config="editConfig"
      :keyboard-config="keyboardConfig"
      :mouse-config="mouseConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="action" title="操作">
        <template #default="{ row }">
          <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

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
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
      { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 26, address: 'test abc' },
      { id: 10010, name: 'Test10', role: 'Develop', sex: 'Man', age: 38, address: 'test abc' },
      { id: 10011, name: 'Test11', role: 'Test', sex: 'Women', age: 29, address: 'test abc' },
      { id: 10012, name: 'Test12', role: 'Develop', sex: 'Man', age: 27, address: 'test abc' },
      { id: 10013, name: 'Test13', role: 'Test', sex: 'Women', age: 24, address: 'test abc' },
      { id: 10014, name: 'Test14', role: 'Develop', sex: 'Man', age: 34, address: 'test abc' },
      { id: 10015, name: 'Test15', role: 'Test', sex: 'Man', age: 21, address: 'test abc' },
      { id: 10016, name: 'Test16', role: 'Develop', sex: 'Women', age: 20, address: 'test abc' },
      { id: 10017, name: 'Test17', role: 'Test', sex: 'Man', age: 31, address: 'test abc' },
      { id: 10018, name: 'Test18', role: 'Develop', sex: 'Women', age: 32, address: 'test abc' },
      { id: 10019, name: 'Test19', role: 'Test', sex: 'Man', age: 37, address: 'test abc' },
      { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 41, address: 'test abc' }
    ]

    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'dblclick',
      mode: 'cell',
      showStatus: true
    }

    const mouseConfig: VxeTablePropTypes.MouseConfig = {
      selected: true
    }

    const keyboardConfig: VxeTablePropTypes.KeyboardConfig<RowVO> = {
      isEdit: true,
      isArrow: true,
      isEnter: true,
      isTab: true,
      isDel: true,
      isBack: true,
      isEsc: true,
      isUndoRedo: true
    }

    return {
      tableData,
      editConfig,
      mouseConfig,
      keyboardConfig
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
    getInsertEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const insertRecords = $table.getInsertRecords()
        VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
      }
    },
    async removeRow (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.remove(row)
        VxeUI.modal.message({
          content: '数据已删除',
          status: 'success'
        })
      }
    },
    async removeSelectEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const selectRecords = $table.getCheckboxRecords()
        if (selectRecords.length > 0) {
          $table.removeCheckboxRow()
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
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const removeRecords = $table.getRemoveRecords()
        VxeUI.modal.alert(`删除：${removeRecords.length} 行`)
      }
    }
  }
})
</script>
