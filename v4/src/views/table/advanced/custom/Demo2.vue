<template>
  <div>
    <p>
      <vxe-checkbox v-model="column.visible" v-for="(column,index) in columns" :key="index" @change="refreshColEvent">{{ column.title }}</vxe-checkbox>
    </p>

    <vxe-table
      border
      ref="tableRef"
      height="200"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" title="序号" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
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

// 模拟异步
setTimeout(() => {
  nextTick(() => {
    // 获取所有列配置
    const $table = tableRef.value
    if ($table) {
      loading.value = true
      columns.value = $table.getColumns()
      // 模拟异步
      setTimeout(() => {
        // 将指定列设置为隐藏状态
        columns.value.forEach(column => {
          if (['name'].includes(column.field)) {
            // 如果是直接修改实例属性，则需要调用 refreshColumn 刷新列
            column.visible = false
          }
        })
        if ($table) {
          $table.refreshColumn()
        }
        loading.value = false
      }, 800)
    }
  })
}, 100)
</script>
