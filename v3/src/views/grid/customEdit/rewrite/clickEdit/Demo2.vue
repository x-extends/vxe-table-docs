<template>
  <div>
    <vxe-button status="success" @click="saveEvent">保存</vxe-button>

    <vxe-grid v-bind="gridOptions" @cell-click="cellClickEvent">
      <template #name_default="{ row }">
        <vxe-input v-if="row.isEdit" v-model="row.name"></vxe-input>
        <span v-else>{{ row.name }}</span>
      </template>

      <template #sex_default="{ row }">
        <vxe-select v-if="row.isEdit" v-model="row.sex" :options="sexList"></vxe-select>
        <span v-else>{{ row.sex }}</span>
      </template>

      <template #age_default="{ row }">
        <vxe-input v-if="row.isEdit" v-model="row.age"></vxe-input>
        <span v-else>{{ row.age }}</span>
      </template>

      <template #action="{ row }">
        <vxe-button v-if="row.isEdit" mode="text" status="success" :loading="row.isLoading" @click.stop="handleRowSave(row)">保存</vxe-button>
        <vxe-button v-else-if="!row.isDisabled" mode="text" status="primary" @click.stop="handleRowEdit(row)">编辑</vxe-button>
        <vxe-button v-if="row.isEdit" mode="text" @click.stop="cancelRowEdit(row)">取消</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeWithRequired } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  isEdit: boolean
  isLoading: boolean
  isDisabled: boolean
}

export default Vue.extend({
  data () {
    const gridOptions: VxeWithRequired<VxeGridProps<RowVO>, 'data'> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', slots: { default: 'name_default' } },
        { field: 'sex', title: 'Sex', slots: { default: 'sex_default' } },
        { field: 'age', title: 'Age', slots: { default: 'age_default' } },
        { field: 'action', title: '操作', width: 140, slots: { default: 'action' } }
      ],
      data: []
    }

    const sexList = [
      { label: '男', value: 'Man' },
      { label: '女', value: 'Women' }
    ]

    return {
      gridOptions,
      sexList
    }
  },
  created () {
    this.loadList()
  },
  methods: {
    loadList () {
      // 模拟后端接口
      this.gridOptions.loading = true
      setTimeout(() => {
        this.gridOptions.data = [
          { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', isEdit: false, isDisabled: false, isLoading: false },
          { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', isEdit: false, isDisabled: false, isLoading: false },
          { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', isEdit: false, isDisabled: true, isLoading: false },
          { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', isEdit: false, isDisabled: false, isLoading: false }
        ]
        this.gridOptions.loading = false
      }, 200)
    },
    cellClickEvent ({ row }) {
      this.handleRowEdit(row)
    },
    handleRowEdit (row: RowVO) {
      if (row.isDisabled) {
        VxeUI.modal.message({
          content: '禁止编辑',
          status: 'error'
        })
        return
      }
      row.isEdit = true
    },
    cancelRowEdit (row: RowVO) {
      row.isEdit = false
    },
    handleRowSave (row: RowVO) {
      row.isLoading = true
      // 模拟后端接口
      setTimeout(() => {
        row.isEdit = false
        row.isLoading = false
      }, 300)
    },
    saveEvent () {
      this.gridOptions.loading = true
      console.log(this.gridOptions.data.filter(row => row.isEdit))
      // 模拟后端接口
      setTimeout(() => {
        this.gridOptions.loading = false
      }, 300)
    }
  }
})
</script>
