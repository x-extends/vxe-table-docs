<template>
  <div>
    <vxe-table
      :height="500"
      :data="tableData"
      :tree-config="{transform: true}">
      <vxe-column field="id" title="ID" width="80"></vxe-column>
      <vxe-column field="name" title="名称" tree-node></vxe-column>
      <vxe-column field="size" title="大小" width="140"></vxe-column>
      <vxe-column field="type" title="类型" width="140"></vxe-column>
      <vxe-column field="date" title="修改日期" width="260" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const tableData = ref<RowVO[]>([
  { id: 1000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 1005, parentId: 1000, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 1000, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 20046, parentId: 20045, name: 'test abc66', type: 'html', size: 55, date: '2021-04-23' },
  { id: 26897, parentId: 1000, name: 'Test223', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20146, parentId: 26897, name: 'test ab44c4', type: 'html', size: 67, date: '2021-04-22' },
  { id: 20356, parentId: 26897, name: 'test abc5666', type: 'html', size: 55, date: '2021-05-23' },
  { id: 10053, parentId: null, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 24330, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 22201, parentId: 22200, name: 'Test88', type: 'mp3', size: 34, date: '2021-07-01' },
  { id: 22266, parentId: 22200, name: 'Test167', type: 'mp3', size: 34, date: '2021-07-22' },
  { id: 22277, parentId: 22200, name: 'Test3457', type: 'mp3', size: 5, date: '2021-07-15' },
  { id: 22886, parentId: 22200, name: 'Test6787', type: 'mp3', size: 1, date: '2021-01-22' },
  { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
])
</script>
