<template>
  <div>
    <p>
      <vxe-button @click="getTreeExpansionEvent">获取已展开</vxe-button>
      <vxe-button @click="expandAllEvent">展开所有</vxe-button>
      <vxe-button @click="claseExpandEvent">关闭所有</vxe-button>
    </p>

    <vxe-table
      border="inner"
      ref="tableRef"
      :column-config="{resizable: true}"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :data="tableData"
      @toggle-tree-expand="toggleExpandChangeEvent">
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

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

const toggleExpandChangeEvent: VxeTableEvents.ToggleTreeExpand = (params) => {
  const $table = tableRef.value
  if ($table) {
    const { row, expanded } = params
    console.log('节点展开事件', expanded, '获取父节点：', $table.getParentRow(row))
  }
}

const getTreeExpansionEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const treeExpandRecords = $table.getTreeExpandRecords()
    VxeUI.modal.alert(treeExpandRecords.length)
  }
}

const expandAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const claseExpandEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}
</script>
