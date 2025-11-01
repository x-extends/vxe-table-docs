<template>
  <div>
    <vxe-table ref="tableRef" border :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="200" sortable>
        <template #sort="{ column }">
          <vxe-button mode="text" :status="column.order ? 'primary' : ''" :icon="column.order === 'desc' ? 'vxe-icon-sort-alpha-desc' : 'vxe-icon-sort-alpha-asc'" @click="sortEvent(column.field, column.order)"></vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number" sortable>
        <template #sort="{ column }">
          <vxe-button mode="text" :status="column.order ? 'primary' : ''" :icon="column.order === 'desc' ? 'vxe-icon-sort-numeric-desc' : 'vxe-icon-sort-numeric-asc'" @click="sortEvent(column.field, column.order)"></vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 100, address: 'test abc' },
  { id: 10002, name: 'Test3', role: 'Test', sex: '1', age: 22, num: 234, address: 'Guangzhou' },
  { id: 10003, name: 'Test5', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' },
  { id: 10003, name: 'Test4', role: 'Test', sex: '1', age: 8, num: 10, address: 'Shanghai' }
])

const sortEvent = (field: string, order: string | null) => {
  const $table = tableRef.value
  if ($table) {
    // 触发事件用 setSortByEvent
    $table.setSort({
      field,
      order: order === 'desc' ? 'asc' : (order === 'asc' ? null : 'desc')
    }, true)
  }
}
</script>
