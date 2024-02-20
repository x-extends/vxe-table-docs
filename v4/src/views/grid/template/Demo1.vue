<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #name_default="{ row }">
        <vxe-button type="text" @click="openDetail(row)">点击{{ row.name }}</vxe-button>
      </template>

      <template #sex_default="{ row }">
        <span>{{ formatSex(row) }}</span>
      </template>

      <template #address_default="{ row }">
        <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;">
        <span>{{ row.address }}</span>
        <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;">
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VXETable, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name', slots: { default: 'name_default' } },
    {
      field: 'sex',
      title: 'Sex',
      slots: {
        default: 'sex_default'
      }
    },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', slots: { default: 'address_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const formatSex = (row: RowVO) => {
  return row.sex === '1' ? '男' : '女'
}

const openDetail = (row: RowVO) => {
  VXETable.modal.message({
    status: 'success',
    content: `点击了${row.name}`
  })
}
</script>
