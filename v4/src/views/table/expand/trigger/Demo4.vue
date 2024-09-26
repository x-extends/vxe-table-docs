<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      :expand-config="expandConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column type="expand" width="60">
        <template #content="{ row }">
          <div>Name：{{ row.name }}</div>
          <div>Role：{{ row.role }}</div>
          <div>Age：{{ row.age }}</div>
          <div>Sex：{{ row.sex }}</div>
          <div>Address：{{ row.address }}</div>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column title="操作">
        <template #default="{ row }">
          <vxe-button status="primary" mode="text" @click="toggleExpand(row)">点击切换展开</vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const expandConfig = reactive<VxeTablePropTypes.ExpandConfig<RowVO>>({
  trigger: 'manual'
})

const toggleExpand = (row) => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleRowExpand(row)
  }
}
</script>
