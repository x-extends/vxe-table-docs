<template>
  <div>
    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :loading="loading"
      :data="tableData"
      :edit-config="editConfig">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row.sex) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" transfer>
            <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="date12" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-picker v-model="row.date12" type="date" placeholder="请选择日期" transfer></vxe-date-picker>
        </template>
      </vxe-column>
      <vxe-column field="num1" title="Num" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-number-input v-model="row.num1" type="number" placeholder="请输入数值"></vxe-number-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.address" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="160">
        <template #default="{ row }">
          <template v-if="hasEditStatus(row)">
            <vxe-button @click="saveRowEvent(row)">保存</vxe-button>
            <vxe-button @click="cancelRowEvent(row)">取消</vxe-button>
          </template>
          <template v-else>
            <vxe-button @click="editRowEvent(row)">编辑</vxe-button>
          </template>
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
  nickname: string
  role: string
  sex: string
  sex2: string[]
  num1: number
  age: number
  address: string
  date12: string
  date13: string
}

export default Vue.extend({
  data () {
    const editConfig: VxeTablePropTypes.EditConfig = {
      trigger: 'manual',
      mode: 'row',
      autoClear: false,
      showStatus: true
    }

    const tableData: RowVO[] = []
    const sexList: {
      label: string
      value: string
    }[] = []

    const formatSex = (value: string) => {
      if (value === '1') {
        return '男'
      }
      if (value === '0') {
        return '女'
      }
      return ''
    }

    return {
      editConfig,
      loading: false,
      tableData,
      sexList,
      formatSex
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      const list: RowVO[] = [
        { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 20, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
        { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
        { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['0'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
        { id: 10005, name: 'Test5', nickname: 'T5', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 26, address: 'Shenzhen', date12: '', date13: '' },
        { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 28, address: 'BeiJing', date12: '', date13: '2020-09-04' },
        { id: 10007, name: 'Test7', nickname: 'T7', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 30, address: 'BeiJing', date12: '', date13: '2020-04-10' }
      ]
      this.loading = false
      this.tableData = list
      this.sexList = [
        { label: '女', value: '0' },
        { label: '男', value: '1' }
      ]
    }, 100)
  },
  methods: {
    async editRowEvent  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        await $table.setEditRow(row)
      }
    },
    hasEditStatus (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        return $table.isEditByRow(row)
      }
    },
    async saveRowEvent  (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        await $table.clearEdit()
        // 重新加载行
        await $table.reloadRow(row, {})
        VxeUI.modal.message({ content: 'success', status: 'success' })
      }
    },
    async cancelRowEvent (row: RowVO) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        await $table.clearEdit()
        // 还原数据
        await $table.revertData(row)
      }
    }
  }
})
</script>
