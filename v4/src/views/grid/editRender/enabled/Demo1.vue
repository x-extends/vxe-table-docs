<template>
  <div>
    name编辑：<vxe-switch v-model="nameEditRender.enabled"></vxe-switch>
    sex编辑：<vxe-switch v-model="sexEditRender.enabled"></vxe-switch>

    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const nameEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'VxeInput',
  enabled: true
})

const sexEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'VxeSelect',
  enabled: true,
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ]
})

const ageEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'VxeNumberInput',
  props: {
    type: 'integer'
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 50 },
    { field: 'name', title: 'Name', editRender: nameEditRender },
    { field: 'sex', title: 'Sex', editRender: sexEditRender },
    { field: 'age', title: 'Age', editRender: ageEditRender },
    { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'x1111', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ]
})
</script>
