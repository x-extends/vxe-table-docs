<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" clearable></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="action" title="操作" width="180">
        <template #default="{ row }">
          <vxe-button mode="text" status="primary" @click="approveRow(row)">通过</vxe-button>
          <vxe-button mode="text" status="error" @click="rejectionRow(row)">驳回</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', address: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    approveRow (row: RowVO) {
      VxeUI.modal.message({
        content: `通过审批：${row.name}`,
        status: 'success'
      })
    },
    rejectionRow (row: RowVO) {
      VxeUI.modal.message({
        content: `驳回审批：${row.name}`,
        status: 'error'
      })
    }
  }
})
</script>
