<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData"
    >
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name">
        <template #default="{ row }">
          <vxe-input v-if="row.isEdit" v-model="row.name"></vxe-input>
          <span v-else>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex">
        <template #default="{ row }">
          <vxe-select v-if="row.isEdit" v-model="row.sex" :options="sexList"></vxe-select>
          <span v-else>{{ row.sex }}</span>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age">
        <template #default="{ row }">
          <vxe-input v-if="row.isEdit" v-model="row.age"></vxe-input>
          <span v-else>{{ row.age }}</span>
        </template>
      </vxe-column>
      <vxe-column field="action" title="操作">
        <template #default="{ row }">
          <vxe-button v-if="row.isEdit" mode="text" status="success" :loading="row.isLoading" @click="handleSave(row)">保存</vxe-button>
          <vxe-button v-else mode="text" status="primary" @click="handleEdit(row)">编辑</vxe-button>
          <vxe-button v-if="row.isEdit" mode="text" @click="cancelEdit(row)">取消</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  isEdit: boolean
  isLoading: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', isEdit: false, isLoading: false },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', isEdit: false, isLoading: false },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', isEdit: false, isLoading: false },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', isEdit: false, isLoading: false }
    ]

    const sexList = [
      { label: '男', value: 'Man' },
      { label: '女', value: 'Women' }
    ]

    return {
      tableData,
      sexList
    }
  },
  methods: {
    handleEdit (row: RowVO) {
      row.isEdit = true
    },
    cancelEdit (row: RowVO) {
      row.isEdit = false
    },
    handleSave (row: RowVO) {
      row.isLoading = true
      // 模拟后端接口
      setTimeout(() => {
        row.isEdit = false
        row.isLoading = false
      }, 300)
    }
  }
})
</script>
