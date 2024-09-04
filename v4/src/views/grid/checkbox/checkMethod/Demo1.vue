<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(gridOptions.data[0])">设置第一行选中</vxe-button>
      <vxe-button @click="toggleSelectRow(gridOptions.data[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([gridOptions.data[2], gridOptions.data[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  height: 500,
  rowConfig: {
    isHover: true
  },
  checkboxConfig: {
    labelField: 'name',
    checkMethod: ({ row }) => {
      return row.age > 26
    }
  },
  columns: [
    { type: 'checkbox', title: 'All' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 38, address: 'Shenzhen' },
    { id: 10007, name: 'Test7', role: 'Develop', sex: 'Women', age: 29, address: 'Shenzhen' }
  ]
})

const toggleSelectRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.toggleCheckboxRow(row)
  }
}

const setSelectRow = (rows: RowVO[], checked: boolean) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setCheckboxRow(rows, checked)
  }
}

const selectAllEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setAllCheckboxRow(true)
  }
}

const clearSelectEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.clearCheckboxRow()
  }
}
</script>
