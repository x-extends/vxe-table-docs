<template>
  <div>
    <p>
      <vxe-button @click="getTreeRadioEvent">获取选中</vxe-button>
      <vxe-button @click="getTreeExpansionEvent">获取已展开</vxe-button>
      <vxe-button @click="expandAllEvent">展开所有</vxe-button>
      <vxe-button @click="claseExpandEvent">关闭所有</vxe-button>
    </p>

    <vxe-table
      show-overflow
      border="outer"
      ref="xTreeRef"
      :show-header="false"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :radio-config="{labelField: 'name'}"
      :data="tableData">
      <vxe-column type="radio" tree-node></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const xTreeRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
])

const getTreeRadioEvent = () => {
  const $table = xTreeRef.value
  if ($table) {
    const selectRow = $table.getRadioRecord()
    VXETable.modal.alert(selectRow ? selectRow.name : '')
  }
}

const getTreeExpansionEvent = () => {
  const $table = xTreeRef.value
  if ($table) {
    const treeExpandRecords = $table.getTreeExpandRecords()
    VXETable.modal.alert(`${treeExpandRecords.length}`)
  }
}

const expandAllEvent = () => {
  const $table = xTreeRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const claseExpandEvent = () => {
  const $table = xTreeRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}
</script>
