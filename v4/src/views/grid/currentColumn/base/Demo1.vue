<template>
  <div>
    <p>
      <vxe-button @click="selectCurrentEvent">设置第二列选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮列</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  columnConfig: {
    isCurrent: true,
    isHover: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  currentColumnChange ({ column }) {
    console.log(`列选中事件 ${column.field}`)
  }
}

const selectCurrentEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setCurrentColumn('name')
  }
}

const clearSelectEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.clearCurrentColumn()
  }
}

const getCurrentEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const currentColumn = $grid.getCurrentColumn()
    VxeUI.modal.alert(currentColumn ? currentColumn.field : '')
  }
}
</script>
