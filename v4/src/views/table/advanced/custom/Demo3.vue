<template>
  <div>
    <p>
      <vxe-checkbox v-model="column.visible" v-for="(column,index) in columns" :key="index">{{ column.title }}</vxe-checkbox>
      <vxe-button @click="refreshColEvent">刷新列信息</vxe-button>
      <vxe-button @click="resetColEvent">重置自定义列</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="300"
      :loading="loading"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :visible="false"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-colgroup title="基本信息">
        <vxe-column field="sex" title="Sex" :visible="false"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
        <vxe-colgroup title="其他信息">
          <vxe-column field="rate" title="Rate"></vxe-column>
          <vxe-column field="flag" title="Flag"></vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableDefines, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const columns = ref<VxeTableDefines.ColumnInfo<RowVO>[]>([])
const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
  { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
  { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
])

const refreshColEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.refreshColumn()
  }
}

const resetColEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.resetColumn()
  }
}

setTimeout(() => {
  nextTick(() => {
    // 获取所有列配置
    const $table = tableRef.value
    if ($table) {
      loading.value = true
      columns.value = $table.getColumns()
      setTimeout(() => {
        loading.value = false
      }, 800)
    }
  })
}, 100)
</script>
