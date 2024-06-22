<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="160">
        <template #default="{ row }">
          <vxe-button mode="text" @click="openDetail(row)">点击{{ row.name }}</vxe-button>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex">
        <template #default="{ row }">
          <span>{{ formatSex(row) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address">
        <template #default="{ row }">
          <img src="https://pic2.zhimg.com/50/v2-f7031359103859e1ed38559715ef5f3f_hd.gif" style="width: 36px;">
          <span>{{ row.address }}</span>
          <img src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" style="width: 30px;">
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
])

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
