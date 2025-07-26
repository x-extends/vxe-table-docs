<template>
  <div>
    <p>
      <vxe-button @click="insertEvent">新增</vxe-button>
      <vxe-button @click="removeSelectRowEvent">删除选中</vxe-button>
      <vxe-button @click="getInsertEvent">获取新增</vxe-button>
      <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
      <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      <vxe-button @click="saveEvent">保存</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :loading="loading"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{autofocus: true}">
        <template #edit="scope">
          <vxe-input type="text" v-model="scope.row.name" @input="updateRowStatus(scope)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{autofocus: true}">
        <template #edit="scope">
          <vxe-input type="text" v-model="scope.row.sex" @input="updateRowStatus(scope)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="scope">
          <vxe-input type="text" v-model="scope.row.address" @input="updateRowStatus(scope)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :formatter="formatDate" :edit-render="{}">
        <template #edit="scope">
          <vxe-date-picker type="date" v-model="scope.row.date12" @input="updateRowStatus(scope)"></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="200">
        <template #default="{ row }">
          <template v-if="hasUpdateStatus(row)">
            <vxe-button @click="saveUpdateEvent(row)" :loading="row.loading">局部保存</vxe-button>
          </template>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
  loading: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '', loading: false },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20', loading: false },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '', loading: false },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04', loading: false }
    ]

    const formatDate: VxeColumnPropTypes.Formatter<RowVO> = ({ cellValue }) => {
      return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
    }

    return {
      tableData,
      loading: false,
      formatDate
    }
  },
  methods: {
    async insertEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const record = {}
        const { row: newRow } = await $table.insert(record)
        await $table.setEditCell(newRow, 'name')
      }
    },
    removeSelectRowEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.removeCheckboxRow()
      }
    },
    hasUpdateStatus  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        return $table.isUpdateByRow(row)
      }
    },
    updateRowStatus  (params: any) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        return $table.updateStatus(params)
      }
    },
    saveUpdateEvent  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        if ($table.isUpdateByRow(row)) {
          row.loading = true
          // 模拟异步
          setTimeout(() => {
            row.loading = false
            // 保存完成后将行恢复到初始状态
            $table.reloadRow(row, {})
            VxeUI.modal.message({ content: '保存成功！', status: 'success' })
          }, 300)
        } else {
          VxeUI.modal.message({ content: '数据未改动！', status: 'info' })
        }
      }
    },
    saveEvent () {
      this.loading = true
      // 默认异步
      setTimeout(() => {
        this.loading = false
        // 保存完成后重新刷新数据
        this.tableData = [
          { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '', loading: false },
          { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20', loading: false },
          { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '', loading: false },
          { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04', loading: false }
        ]
      }, 300)
    },
    getInsertEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const insertRecords = $table.getInsertRecords()
        VxeUI.modal.alert(`新增：${insertRecords.length}`)
      }
    },
    getRemoveEvent  () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const removeRecords = $table.getRemoveRecords()
        VxeUI.modal.alert(`删除：${removeRecords.length}`)
      }
    },
    getUpdateEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const updateRecords = $table.getUpdateRecords()
        VxeUI.modal.alert(`更新：${updateRecords.length}`)
      }
    }
  }
})
</script>
