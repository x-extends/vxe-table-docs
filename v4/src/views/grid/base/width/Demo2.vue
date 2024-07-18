<template>
  <div>
    <vxe-button @click="changeNameWidth(300)">修改name=300宽度</vxe-button>
    <vxe-button @click="changeNameWidth(400)">修改name=400宽度</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}
const gridRef = ref<VxeGridInstance>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq' },
    { field: 'name', title: 'Name', width: 200 },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex', width: 140 },
    { field: 'date', title: 'Date' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' }
  ]
})

const changeNameWidth = (width: number) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setColumnWidth('name', width)
  }
}
</script>
