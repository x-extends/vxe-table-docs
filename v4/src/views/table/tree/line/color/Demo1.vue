<template>
  <div>
    线颜色：<vxe-color-picker v-model="lineColor" :colors="colorList" clearable></vxe-color-picker>

    <vxe-table
      show-overflow
      border="outer"
      :row-config="rowConfig"
      :column-config="columnConfig"
      :tree-config="treeConfig"
      :data="tableData"
      :style="{
        '--vxe-ui-table-tree-node-line-color': lineColor
      }"
    >
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const lineColor = ref('#FF0000')

const colorList = ref([
  '#DC143C', '#FF1493', '#FF00FF', '#9932CC', '#6A5ACD',
  '#0000FF', '#00008B', '#778899', '#1E90FF', '#00BFFF',
  '#5F9EA0', '#00FFFF', '#008080', '#7FFFAA', '#3CB371',
  '#8FBC8F', '#008000', '#7CFC00', '#556B2F', '#FFFFE0',
  '#FFFF00', '#808000', '#EEE8AA', '#FFD700', '#FFA500',
  '#FF4500', '#FA8072', '#FF0000', '#800000', '#C0C0C0'
])

const rowConfig = reactive<VxeTablePropTypes.RowConfig>({
  useKey: true
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  resizable: true
})

const treeConfig = reactive<VxeTablePropTypes.TreeConfig>({
  transform: true,
  showLine: true
})

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }
])
</script>
