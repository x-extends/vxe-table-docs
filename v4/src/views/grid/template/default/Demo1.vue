<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #imgUrl_default="{ row }">
        <vxe-image :src="row.imgUrl" width="36" height="30"></vxe-image>
      </template>

      <template #name_default="{ row }">
        <vxe-button mode="text" @click="openDetail(row)">点击{{ row.name }}</vxe-button>
      </template>

      <template #sex_default="{ row }">
        <span>{{ formatSex(row) }}</span>
      </template>

      <template #address_default="{ row }">
        <vxe-image src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" width="36" height="30"></vxe-image>
        <span>{{ row.address }}</span>
        <vxe-image src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" width="30" height="30"></vxe-image>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  imgUrl: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'imgUrl', title: 'imgUrl', slots: { default: 'imgUrl_default' } },
    { field: 'name', title: 'Name', slots: { default: 'name_default' } },
    {
      title: 'Group1',
      children: [
        { field: 'sex', title: 'Sex', slots: { default: 'sex_default' } },
        { field: 'num', title: 'Number' },
        { field: 'age', title: 'Age' }
      ]
    },
    { field: 'address', title: 'Address', width: 200, slots: { default: 'address_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg', address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Shanghai' }
  ]
})

const formatSex = (row: RowVO) => {
  return row.sex === '1' ? '男' : '女'
}

const openDetail = (row: RowVO) => {
  VxeUI.modal.message({
    status: 'success',
    content: `点击了${row.name}`
  })
}
</script>
