<template>
  <div>
    <p>
      <vxe-checkbox v-model="column.visible" v-for="(column,index) in tableColumn" :key="index" @change="refreshColEvent">{{ column.title }}</vxe-checkbox>
    </p>

    <vxe-table
      border
      ref="xTable"
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

const xTable = ref<VxeTableInstance<RowVO>>()

const loading = ref(false)
const tableColumn = ref<VxeTableDefines.ColumnInfo<RowVO>[]>([])
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
  const $table = xTable.value
  if ($table) {
    $table.refreshColumn()
  }
}

setTimeout(() => {
  nextTick(() => {
    // 获取所有列配置
    const $table = xTable.value
    if ($table) {
      loading.value = true
      tableColumn.value = $table.getColumns()
      setTimeout(() => {
        // 将指定列设置为隐藏状态
        tableColumn.value.forEach(column => {
          if (['name'].includes(column.field)) {
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
