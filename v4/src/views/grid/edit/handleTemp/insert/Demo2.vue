<template>
  <div>
    <vxe-button status="primary" @click="addEvent">新增（顶部）</vxe-button>
    <vxe-button status="primary" @click="pushEvent">新增（尾部）</vxe-button>
    <vxe-button status="primary" @click="insertEvent">新增（ID:23666位置插入）</vxe-button>
    <vxe-button status="success" @click="getInsertEvent">获取新增的数据</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button status="primary" mode="text" @click="insertChild(row)">插入子节点</vxe-button>
        <vxe-button status="primary" mode="text" @click="insertRow(row)">当前位置插入</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  height: 400,
  rowConfig: {
    keyField: 'id'
  },
  treeConfig: {
    transform: true,
    rowField: 'id',
    parentField: 'parentId'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { field: 'name', title: 'Name', minWidth: 300, treeNode: true, editRender: { name: 'input' } },
    { field: 'size', title: 'Size', editRender: { name: 'input' } },
    { field: 'type', title: 'Type', editRender: { name: 'input' } },
    { field: 'date', title: 'Date', editRender: { name: 'input' } },
    { field: 'action', title: '操作', width: 220, slots: { default: 'action' } }
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

const addEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditRow(newRow)
  }
}

const pushEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertAt(record, -1)
    $grid.setEditRow(newRow)
  }
}

const insertEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertAt(record, $grid.getRowById(23666))
    $grid.setEditRow(newRow)
  }
}

const insertRow = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertAt(record, row)
    $grid.setEditRow(newRow)
  }
}

const insertChild = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    const record = {
      name: `Name_${new Date().getTime()}`
    }
    const { row: newRow } = await $grid.insertChild(record, row)
    $grid.setEditRow(newRow)
  }
}

const getInsertEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const insertRecords = $grid.getInsertRecords()
    VxeUI.modal.alert(`新增：${insertRecords.length} 行`)
  }
}
</script>
