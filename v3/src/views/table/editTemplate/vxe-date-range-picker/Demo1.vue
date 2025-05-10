<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" min-width="180" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.integer }}</span>
        </template>
      </vxe-column>
      <vxe-column field="startAndEnd" title="日期范围" width="320" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-date-range-picker :start-value.sync="row.startDate" :end-value.sync="row.endDate"></vxe-date-range-picker>
        </template>
        <template #default="{ row }">
          <span>{{ row.startDate }} ~ {{ row.endDate }}</span>
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
  startDate: string
  endDate: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', startDate: '', endDate: '', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', startDate: '2025-09-01', endDate: '2025-10-10', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', startDate: '2024-06-06', endDate: '2024-08-06', address: 'Shanghai' }
    ]

    return {
      tableData
    }
  }
})
</script>
