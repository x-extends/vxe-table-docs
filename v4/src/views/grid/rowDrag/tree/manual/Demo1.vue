<template>
  <div>
    <vxe-button status="success" @click="resultEvent">获取数据</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="modePrevRow(row)">同层上移</vxe-button>
        <vxe-button mode="text" status="primary" @click="modeNextRow(row)">同层下移</vxe-button>
        <vxe-button mode="text" status="primary" @click="modePrevCrossRow(row)">跨层上移</vxe-button>
        <vxe-button mode="text" status="primary" @click="modeNextCrossRow(row)">跨层下移</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  rowConfig: {
    drag: true
  },
  rowDragConfig: {
    isCrossDrag: true,
    isSelfToChildDrag: true,
    showIcon: false
  },
  columnConfig: {
    resizable: true
  },
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 300, treeNode: true, dragSort: true },
    { field: 'size', title: 'Size' },
    { field: 'type', title: 'Type' },
    { field: 'date', title: 'Date' },
    { field: 'action', title: '操作', width: 320, slots: { default: 'action' } }
  ],
  data: [
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
  ]
})

const modeNextRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.moveRowTo(row, 1)
  }
}

const modePrevRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.moveRowTo(row, -1)
  }
}

const modeNextCrossRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.moveRowTo(row, 1, {
      isCrossDrag: true
    })
  }
}

const modePrevCrossRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.moveRowTo(row, -1, {
      isCrossDrag: true
    })
  }
}

const resultEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const tableData = $grid.getFullData()
    console.log(tableData)
  }
}
</script>
