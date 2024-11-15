<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #action="{ row }">
        <vxe-button mode="text" status="primary" @click="validField(row)">校验 role</vxe-button>
        <vxe-button mode="text" status="primary" @click="validMultiFiled(row)">校验 name,role</vxe-button>
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
  height: 300,
  editConfig: {
    trigger: 'click',
    mode: 'cell',
    showStatus: true
  },
  editRules: {
    name: [
      { required: true, message: '必须填写' }
    ],
    role: [
      { required: true, message: '必须填写' }
    ]
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'role', title: 'Role', editRender: { name: 'VxeInput' } },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } },
    { title: '操作', width: 260, slots: { default: 'action' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: '', sex: '0', age: 28, address: 'test abc' },
    { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
    { id: 10003, name: '', role: '', sex: '', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
    { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
  ]
})

const validField = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validateField(row, 'role')
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}

const validMultiFiled = async (row: RowVO) => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validateField(row, ['name', 'role'])
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}
</script>
