<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents">
      <template #name_edit="{ row }">
        <vxe-input v-model="row.name" :disabled="disabledName"></vxe-input>
      </template>
      <template #sex_edit="{ row }">
        <vxe-input v-model="row.sex" :disabled="disabledSex"></vxe-input>
      </template>
      <template #age_edit="{ row }">
        <vxe-number-input v-model="row.age" type="integer" :disabled="disabledAge"></vxe-number-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

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
    { field: 'name', title: 'Name', editRender: { }, slots: { edit: 'name_edit' } },
    { field: 'sex', title: 'Sex', editRender: { }, slots: { edit: 'sex_edit' } },
    { field: 'age', title: 'Age', editRender: { }, slots: { edit: 'age_edit' } },
    { field: 'address', title: 'Address', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'xest3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
  ]
})

const disabledName = ref(false)
const disabledSex = ref(false)
const disabledAge = ref(false)

const gridEvents: VxeGridListeners<RowVO> = {
  editActivated ({ row }) {
  // name 为 'x' 开头的列禁止编辑
    disabledName.value = (row.name || '').indexOf('x') === 0
    // age 小于 27 的列禁止编辑
    disabledAge.value = row.age < 27
    // sex 值编辑为 1 的列禁止编辑
    disabledSex.value = row.sex === 'Women'
  }
}
</script>
