<template>
  <div>
    <vxe-button @click="openCustomEvent">打开自定义列设置</vxe-button>
    <vxe-button @click="closeCustomEvent">关闭自定义列设置</vxe-button>
    <vxe-table
      ref="tableRef"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age">
        <template #header="{ column }">
          <span>{{ column.title }}</span>
          <vxe-button mode="text" icon="vxe-icon-setting-fill" @click="openCustomEvent"></vxe-button>
        </template>
      </vxe-column>
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
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const openCustomEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openCustom()
  }
}

const closeCustomEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.closeCustom()
  }
}
</script>
