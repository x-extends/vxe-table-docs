<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridProps, VxeGridInstance, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
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
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '', address: 'test abc' },
    { id: 10002, name: '', role: 'Test', sex: '1', age: 22, date: '', address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, date: '', address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, date: '', address: 'test abc' },
    { id: 10005, name: '', role: '', sex: '1', age: 30, date: '', address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '', address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: '0', age: 36, date: '', address: 'test abc' },
    { id: 10008, name: 'Test8', role: 'Designer', sex: '1', age: 39, date: '', address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  async editClosed ({ row, column }) {
    const $grid = gridRef.value
    if (!$grid) {
      return
    }
    if ($grid.isUpdateByRow(row)) {
      const field = column.field
      const cellValue = row[field]
      setTimeout(() => {
        VxeUI.modal.message({
          content: `局部保存成功！ ${field}=${cellValue}`,
          status: 'success'
        })
        // 局部更新单元格为已保存状态
        $grid.reloadRow(row, null, field)
      }, 300)
    }
  }
}
</script>
