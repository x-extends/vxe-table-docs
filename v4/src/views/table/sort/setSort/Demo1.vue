<template>
  <div>
    <vxe-button @click="handleSort('role', 'desc')">只修改 role 倒序</vxe-button>
    <vxe-button @click="handleSort('role', 'asc')">只修改 role 升序</vxe-button>
    <vxe-button @click="handleUpdateSort('role', 'desc')">修改并触发 role 倒序</vxe-button>
    <vxe-button @click="handleUpdateSort('role', 'asc')">修改并触发 role 升序</vxe-button>
    <vxe-button @click="clearSortEvent">清除排序</vxe-button>
    <vxe-table
      border
      height="400"
      ref="tableRef"
      :data="tableData"
      :sort-config="sortConfig">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role" sortable></vxe-column>
      <vxe-column field="sex" title="Sex" sortable></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="address" title="Address" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: string
  num2: string
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, num: '3.8', num2: '3.8', address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, num: '511', num2: '511', address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, num: '12.8', num2: '12.8', address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, num: '103', num2: '103', address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, num: '56', num2: '56', address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, num: '49', num2: '49', address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, num: '400.9', num2: '400.9', address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, num: '5000', num2: '5000', address: 'test abc' }
])

const sortConfig = ref<VxeTablePropTypes.SortConfig<RowVO>>({
})

const handleSort = (field: string, order: 'asc' | 'desc') => {
  const $table = tableRef.value
  if ($table) {
    $table.setSort({ field, order })
  }
}

const handleUpdateSort = (field: string, order: 'asc' | 'desc') => {
  const $table = tableRef.value
  if ($table) {
    $table.setSort({ field, order }, true)
  }
}

const clearSortEvent = () => {
  const $table = tableRef.value
  if ($table) {
    // 清除排序状态，调用该方法不会触发 sort-change 事件，如果是本地排序，会自动更新数据
    $table.clearSort()
  }
}
</script>
