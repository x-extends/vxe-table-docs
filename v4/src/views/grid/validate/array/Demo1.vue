<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
      <vxe-button @click="fullValidEvent">校验全量数据</vxe-button>
    </div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'
import { VxeUI, VxeGridProps, VxeGridInstance, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  roleList: string[]
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const roleListEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  props: {
    multiple: true
  },
  options: [
    { label: 'Develop', value: 'develop' },
    { label: 'Test', value: 'test' },
    { label: 'PM', value: 'pm' }
  ]
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  keepSource: true,
  height: 300,
  editConfig: {
    trigger: 'click',
    mode: 'row',
    showStatus: true
  },
  editRules: {
    roleList: [
      { required: true, type: 'array', message: '至少选一个' }
    ]
  },
  columns: [
    { type: 'checkbox', width: 60 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
    { field: 'roleList', title: 'Role', editRender: roleListEditRender },
    { field: 'sex', title: 'Sex', editRender: { name: 'VxeInput' } },
    { field: 'age', title: 'Age', editRender: { name: 'VxeInput' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeInput' } }
  ],
  data: [
    { id: 10001, name: 'Test1', roleList: ['develop'], sex: '0', age: 28, address: 'test abc' },
    { id: 10002, name: '', roleList: ['develop', 'test'], sex: '1', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', roleList: ['pm'], sex: '', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', roleList: ['develop'], sex: '', age: 23, address: 'test abc' },
    { id: 10005, name: '', roleList: [], sex: '1', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', roleList: ['pm'], sex: '1', age: 21, address: 'test abc' }
  ]
})

const validEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validate()
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}

const fullValidEvent = async () => {
  const $grid = gridRef.value
  if ($grid) {
    const errMap = await $grid.validate(true)
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}
</script>
