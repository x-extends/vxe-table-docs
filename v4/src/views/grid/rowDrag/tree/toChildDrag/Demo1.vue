<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  code: number
  parentCode: number | null
  name: string
  type: string
  size: number
  date: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  rowConfig: {
    drag: true
  },
  rowDragConfig: {
    isCrossDrag: true,
    isSelfToChildDrag: true,
    isToChildDrag: true
  },
  columnConfig: {
  },
  treeConfig: {
    transform: true,
    rowField: 'code',
    parentField: 'parentCode'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300, treeNode: true, dragSort: true },
    { field: 'size', title: 'Size' },
    { field: 'type', title: 'Type' },
    { field: 'date', title: 'Date' }
  ],
  data: [
    { code: 10000, parentCode: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
    { code: 10050, parentCode: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
    { code: 24300, parentCode: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
    { code: 20045, parentCode: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
    { code: 10053, parentCode: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-01' },
    { code: 24330, parentCode: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
    { code: 21011, parentCode: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
    { code: 22200, parentCode: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23666, parentCode: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },
    { code: 23677, parentCode: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23671, parentCode: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23672, parentCode: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23688, parentCode: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23681, parentCode: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 23682, parentCode: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 24555, parentCode: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },
    { code: 24566, parentCode: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
    { code: 24577, parentCode: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  rowDragend ({ dragToChild }) {
    console.log(`拖成子级=${dragToChild}`)
  }
}
</script>
