<template>
  <div>
    <p>
      <vxe-button @click="selectRowEvent">设置第二行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-table'
import type { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  sex: string
  age: number
  content: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  height: 300,
  rowConfig: {
    isCurrent: true,
    isHover: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { name: 'Test1', role: 'Develop', sex: 'Man', age: 28, content: 'test abc' },
    { name: 'Test2', role: 'Test', sex: 'Women', age: 41, content: 'Guangzhou' },
    { name: 'Test3', role: 'PM', sex: 'Man', age: 32, content: 'Shanghai' },
    { name: 'Test4', role: 'Designer', sex: 'Women', age: 24, content: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  currentChange ({ rowIndex }) {
    console.log(`行选中事件 ${rowIndex}`)
  }
}

const selectRowEvent = () => {
  const $grid = gridRef.value
  if ($grid && gridOptions.data) {
    $grid.setCurrentRow(gridOptions.data[1])
  }
}

const clearSelectEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.clearCurrentRow()
  }
}

const getCurrentEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    VxeUI.modal.alert(JSON.stringify($grid.getCurrentRecord()))
  }
}
</script>
