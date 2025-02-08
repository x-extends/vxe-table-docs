<template>
  <div>
    <vxe-button status="success" @click="getUpdateEvent">获取已修改数据</vxe-button>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="updateRow1(row)">修改1</vxe-button>
        <vxe-button mode="text" status="primary" @click="updateRow2(row)">修改2</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const updateRecords: RowVO[] = []

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  showOverflow: true,
  height: 400,
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'input' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'input' } },
    { field: 'age', title: 'Age', editRender: { name: 'input' } },
    { field: 'action', title: '操作', width: 140, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  editClosed ({ row }) {
    if (!updateRecords.some(item => item.id === row.id)) {
      updateRecords.push(row)
    }
  }
}

const updateRow1 = (row: RowVO) => {
  row.name = `Name_${new Date().getTime()}`
  if (!updateRecords.some(item => item.id === row.id)) {
    updateRecords.push(row)
  }
}

const updateRow2 = (row: RowVO) => {
  row.age++
  if (!updateRecords.some(item => item.id === row.id)) {
    updateRecords.push(row)
  }
}

const getUpdateEvent = () => {
  VxeUI.modal.alert(`修改：${updateRecords.length} 行`)
}
</script>
