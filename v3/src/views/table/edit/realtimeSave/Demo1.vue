<template>
  <div>
    <vxe-table
      border
      keep-source
      show-overflow
      ref="tableRef"
      :column-config="{resizable: true}"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'cell', showStatus: true}"
      @edit-closed="editClosedEvent">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.role" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #default="{ row }">
          <span>{{ formatSex(row) }}</span>
        </template>
        <template #edit="{ row }">
          <vxe-select v-model="row.sex" transfer>
            <vxe-option v-for="item in sexList" :key="item.value" :value="item.value" :label="item.label"></vxe-option>
          </vxe-select>
        </template>
      </vxe-column>
      <vxe-column field="num1" title="Number" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.num1" type="number"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date13" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date13" type="date" transfer></vxe-input>
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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '0', sex2: ['0'], num1: 40, age: 28, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10002, name: 'Test2', nickname: 'T2', role: 'Designer', sex: '1', sex2: ['0', '1'], num1: 44, age: 22, address: 'Guangzhou', date12: '', date13: '2020-08-20' },
      { id: 10003, name: 'Test3', nickname: 'T3', role: 'Test', sex: '0', sex2: ['1'], num1: 200, age: 32, address: 'Shanghai', date12: '2020-09-10', date13: '' },
      { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '1', sex2: ['1'], num1: 30, age: 23, address: 'Shenzhen', date12: '', date13: '2020-12-04' },
      { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', sex2: ['1', '0'], num1: 20, age: 30, address: 'Shanghai', date12: '2020-09-20', date13: '' },
      { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '1', sex2: ['0'], num1: 10, age: 21, address: 'Shenzhen', date12: '', date13: '' },
      { id: 10007, name: 'Test7', nickname: 'T7', role: 'Develop', sex: '0', sex2: ['0'], num1: 5, age: 29, address: 'Shenzhen', date12: '2020-01-02', date13: '2020-09-20' },
      { id: 10008, name: 'Test8', nickname: 'T8', role: 'PM', sex: '1', sex2: ['0'], num1: 2, age: 35, address: 'Shenzhen', date12: '', date13: '' }
    ]

    const sexList = [
      { label: '男', value: '1' },
      { label: '女', value: '0' }
    ]

    return {
      tableData,
      sexList
    }
  },
  methods: {
    formatSex  (row: RowVO) {
      if (row.sex === '1') {
        return '男'
      }
      if (row.sex === '0') {
        return '女'
      }
      return ''
    },
    editClosedEvent ({ row, column }) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const field = column.field
        const cellValue = row[field]
        // 判断单元格值是否被修改
        if ($table.isUpdateByRow(row, field)) {
          setTimeout(() => {
            VxeUI.modal.message({
              content: `局部保存成功！ ${field}=${cellValue}`,
              status: 'success'
            })
            // 局部更新单元格为已保存状态
            $table.reloadRow(row, null, field)
          }, 300)
        }
      }
    }
  }
})
</script>
