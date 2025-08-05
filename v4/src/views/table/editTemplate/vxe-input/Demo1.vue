<template>
  <div>
    <vxe-table
      border
      show-overflow
      :edit-config="{mode: 'row', trigger: 'click'}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name"></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="{ row, column }">
          <vxe-input v-model="row.role" clearable show-word-count @input="roleInput($event, row, column)"></vxe-input>
        </template>
        <template #default="{ row }">
          <span>{{ row.num }}</span>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', address: 'Shanghai' }
])

const roleInput = (eventParams, row, column) => {
  console.log('input', row, column.field, eventParams.value)
}
</script>
