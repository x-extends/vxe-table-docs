<template>
  <div>
    <p>
      <vxe-button @click="toggleSelectRow(tableData[1])">切换第二行选中</vxe-button>
      <vxe-button @click="setSelectRow([tableData[2], tableData[3]], true)">设置第三、四行选中</vxe-button>
      <vxe-button @click="selectAllEvent">设置所有行选中</vxe-button>
      <vxe-button @click="clearSelectEvent">清除所有行选中</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      :row-config="{isHover: true}"
      :tree-config="{}"
      :data="tableData"
      :checkbox-config="{checkField: 'isChecked', indeterminateField: 'isIndeterminate'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  type: string
  size: number
  date: string,
  isChecked: boolean
  isIndeterminate: boolean
  children?: RowVO[]
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01', isChecked: false, isIndeterminate: false },
  {
    id: 1005,
    name: 'Test2',
    type: 'mp4',
    size: 0,
    date: '2021-04-01',
    isChecked: false,
    isIndeterminate: false,
    children: [
      { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01', isChecked: false, isIndeterminate: false },
      { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01', isChecked: false, isIndeterminate: false },
      {
        id: 10053,
        name: 'test abc96',
        type: 'avi',
        size: 0,
        date: '2021-04-01',
        isChecked: false,
        isIndeterminate: false,
        children: [
          { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01', isChecked: false, isIndeterminate: false },
          { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01', isChecked: false, isIndeterminate: false },
          { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01', isChecked: false, isIndeterminate: false }
        ]
      }
    ]
  },
  { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01', isChecked: false, isIndeterminate: false },
  { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01', isChecked: false, isIndeterminate: false }
])

const toggleSelectRow = (row: RowVO) => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleCheckboxRow(row)
  }
}

const setSelectRow = (rows: RowVO[], checked: boolean) => {
  const $table = tableRef.value
  if ($table) {
    $table.setCheckboxRow(rows, checked)
  }
}

const selectAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllCheckboxRow(true)
  }
}

const clearSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearCheckboxRow()
  }
}
</script>
