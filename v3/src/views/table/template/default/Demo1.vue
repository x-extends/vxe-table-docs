<template>
  <div>
    <vxe-table border show-overflow :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="imgUrl" title="头像" :cell-render="{name: 'VxeImage', props: { width: 36, height: 36 }}"></vxe-column>
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
      <vxe-column field="address" title="Address" width="200">
        <template #default="{ row }">
          <vxe-image src="https://vxeui.com/resource/img/546.gif" width="36" height="36"></vxe-image>
          <span>{{ row.address }}</span>
          <vxe-image src="https://n.sinaimg.cn/sinacn17/w120h120/20180314/89fc-fyscsmv5911424.gif" width="36" height="36"></vxe-image>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

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

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, imgUrl: 'https://vxeui.com/resource/img/fj581.jpeg', address: 'Shanghai' }
    ]

    return {
      tableData
    }
  },
  methods: {
    formatSex (row: RowVO) {
      return row.sex === '1' ? '男' : '女'
    },
    openDetail (row: RowVO) {
      VxeUI.modal.message({
        status: 'success',
        content: `点击了${row.name}`
      })
    }
  }
})
</script>
