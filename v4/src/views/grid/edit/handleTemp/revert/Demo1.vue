<template>
  <div>
    <vxe-button status="success" @click="revertAllEvent">恢复全部</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
        <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
        <vxe-button mode="text" status="success" @click="revertRow(row)">恢复</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  height: 400,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'age', title: 'Age', editRender: { name: 'input' } },
    { field: 'action', title: '操作', width: 200, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const updateRow1 = (row: RowVO) => {
  row.name = `Name_${new Date().getTime()}`
}

const updateRow2 = (row: RowVO) => {
  row.age++
}

const revertRow = (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    if ($grid.isUpdateByRow(row)) {
      $grid.revertData(row)
      VxeUI.modal.message({
        content: '数据已恢复',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'info'
      })
    }
  }
}

const revertAllEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    const updateRecords = $grid.getUpdateRecords()
    if (updateRecords.length > 0) {
      $grid.revertData()
      VxeUI.modal.message({
        content: '数据已恢复',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '数据未改动',
        status: 'info'
      })
    }
  }
}
</script>
