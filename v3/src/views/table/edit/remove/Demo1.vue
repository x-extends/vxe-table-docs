<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent()">在第1行插入</vxe-button>
        <vxe-button @click="removeRow(tableData[1])">删除第2行</vxe-button>
        <vxe-button @click="removeSelectRowEvent">删除选中</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getSelectionEvent">获取选中</vxe-button>
        <vxe-button @click="saveEvent">保存</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      ref="tableRef"
      border
      show-overflow
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: '.vxe-input--inner'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.sex" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="action" title="操作" width="100">
        <template #default="{row }">
          <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
        </template>
      </vxe-column>
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
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
    ]

    return {
      tableData
    }
  },
  methods: {
    async insertEvent  (row?: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {
          sex: '1'
        }
        const { row: newRow } = await $table.insertAt(record, row)
        await $table.setEditCell(newRow, 'sex')
      }
    },
    removeSelectRowEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.removeCheckboxRow()
      }
    },
    async removeRow  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const type = await VxeUI.modal.confirm('您确定要删除该数据?')
        if (type === 'confirm') {
          $table.remove(row)
        }
      }
    },
    getRemoveEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const removeRecords = $table.getRemoveRecords()
        VxeUI.modal.alert(removeRecords.length)
      }
    },
    getSelectionEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const selectRecords = $table.getCheckboxRecords()
        VxeUI.modal.alert(selectRecords.length)
      }
    },
    saveEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
        VxeUI.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
      }
    }
  }
})
</script>
