<template>
  <div>
    <vxe-button status="success" @click="saveEvent">保存</vxe-button>

    <vxe-grid v-bind="gridOptions" v-on="gridEvens">
      <template #name_default="{ row }">
        <vxe-input v-if="row.isEdit" v-model="row.name"></vxe-input>
        <span v-else>{{ row.name }}</span>
      </template>

      <template #sex_default="{ row }">
        <vxe-select v-if="row.isEdit" v-model="row.sex" :options="sexList"></vxe-select>
        <span v-else>{{ row.sex }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI } from 'vxe-pc-ui'
import type { VxeGridProps, VxeWithRequired, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
  isEdit: boolean
  isDisabled: boolean
}

const sexList = ref([
  { label: '男', value: 'Man' },
  { label: '女', value: 'Women' }
])

const gridOptions = reactive<VxeWithRequired<VxeGridProps<RowVO>, 'data'>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', slots: { default: 'name_default' } },
    { field: 'sex', title: 'Sex', slots: { default: 'sex_default' } },
    { field: 'age', title: 'Age', slots: { default: 'age_default' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc', isEdit: false, isDisabled: false },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou', isEdit: false, isDisabled: false },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai', isEdit: false, isDisabled: true },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai', isEdit: false, isDisabled: false }
  ]
})

const gridEvens: VxeGridListeners<RowVO> = {
  cellClick ({ row }) {
    handleRowEdit(row)
  }
}

const handleRowEdit = (row: RowVO) => {
  if (row.isDisabled) {
    VxeUI.modal.message({
      content: '禁止编辑',
      status: 'error'
    })
    return
  }
  row.isEdit = true
}

const saveEvent = () => {
  const editRows = gridOptions.data.filter(row => row.isEdit)
  console.log(editRows)
  if (!editRows.length) {
    VxeUI.modal.message({
      content: '数据未编辑',
      status: 'warning'
    })
    return
  }
  gridOptions.loading = true
  // 模拟后端接口
  setTimeout(() => {
    gridOptions.loading = false
  }, 300)
}
</script>
