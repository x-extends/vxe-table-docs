<template>
  <div>
    <vxe-button status="error" @click="removeSelectEvent">批量删除</vxe-button>
    <vxe-button status="success" @click="getRemoveEvent">获取已删除数据</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="error" @click="removeRow(row)">删除</vxe-button>
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

const removeRecords: RowVO[] = []

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  showOverflow: true,
  height: 400,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'checkbox', width: 70 },
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

const removeRow = async (row: RowVO) => {
  gridOptions.data = gridOptions.data.filter(item => item.id !== row.id)
  removeRecords.push(row)
  VxeUI.modal.message({
    content: '数据已删除',
    status: 'success'
  })
}

const removeSelectEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const selectRecords = $grid.getCheckboxRecords()
    if (selectRecords.length > 0) {
      gridOptions.data = gridOptions.data.filter(item => !selectRecords.some(row => row.id === item.id))
      removeRecords.push(...selectRecords)
      VxeUI.modal.message({
        content: '已删除选中',
        status: 'success'
      })
    } else {
      VxeUI.modal.message({
        content: '未选择数据',
        status: 'info'
      })
    }
  }
}

const getRemoveEvent = () => {
  VxeUI.modal.alert(`删除：${removeRecords.length} 行`)
}
</script>
