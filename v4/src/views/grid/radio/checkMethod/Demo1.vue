<template>
  <div>
    <p>
      <vxe-button @click="setSelectRow(0)">设置第一行选中（如果被禁用，不可选中）</vxe-button>
      <vxe-button @click="setSelectRow(1)">设置第二行选中</vxe-button>
      <vxe-button @click="clearRadioRowEevnt">清除所有行选中</vxe-button>
    </p>

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

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  height: 300,
  radioConfig: {
    labelField: 'name',
    checkMethod ({ row }) {
      return row.age > 26
    }
  },
  columns: [
    { type: 'radio', title: '请选择', width: 100 },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
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

const setSelectRow = (index: number) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.setRadioRow(gridOptions.data[index])
  }
}

const clearRadioRowEevnt = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.clearRadioRow()
  }
}
</script>
