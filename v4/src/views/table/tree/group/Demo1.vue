<template>
  <div>
    <vxe-button status="primary" @click="listToGroup(allList, 'name')">按名称分组</vxe-button>
    <vxe-button status="primary" @click="listToGroup(allList, 'type')">按类型分组</vxe-button>
    <vxe-button status="primary" @click="listToGroup(allList, 'date')">按时间分组</vxe-button>

    <vxe-table
      border="inner"
      height="600"
      :column-config="{resizable: true}"
      :tree-config="{}"
      :data="tableData">
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  type: string
  size: string
  date: string
  children?: RowVO[]
}

const allList = [
  { id: 10000, name: 'Test1', type: 'mp3', size: '1024', date: '2020-08-01' },
  { id: 10050, name: 'Test2', type: 'mp4', size: '0', date: '2021-04-01' },
  { id: 24300, name: 'Test3', type: 'avi', size: '1024', date: '2020-03-01' },
  { id: 20045, name: 'Test4', type: 'html', size: '600', date: '2021-04-01' },
  { id: 10053, name: 'Test5', type: 'avi', size: '0', date: '2021-04-01' },
  { id: 24330, name: 'Test6', type: 'txt', size: '25', date: '2021-10-01' },
  { id: 21011, name: 'Test7', type: 'pdf', size: '512', date: '2020-01-01' },
  { id: 22200, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23666, name: 'Test9', type: 'xlsx', size: '2048', date: '2020-11-01' },
  { id: 23677, name: 'Test9', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23671, name: 'Test3', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23672, name: 'Test6', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23688, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23681, name: 'Test2', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 23682, name: 'Test8', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 24555, name: 'Test1', type: 'avi', size: '224', date: '2020-10-01' },
  { id: 24566, name: 'Test2', type: 'js', size: '1024', date: '2021-06-01' },
  { id: 24577, name: 'Test1', type: 'js', size: '1024', date: '2021-06-01' }
]

const tableData = ref<RowVO[]>(allList)

let idKey = 1
const listToGroup = (list: RowVO[], field: string) => {
  const result: RowVO[] = []
  XEUtils.each(XEUtils.groupBy(list, field), (childList, field) => {
    result.push({
      id: idKey++,
      name: field,
      type: '',
      size: '',
      date: '',
      children: childList
    })
  })
  tableData.value = result
}
</script>
