<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
      <vxe-button @click="fullValidEvent">校验全量数据</vxe-button>
    </div>

    <vxe-table
      border
      show-overflow
      keep-source
      height="300"
      ref="tableRef"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vxe-column type="checkbox" width="60" fixed="left"></vxe-column>
      <vxe-column type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="100" fixed="left" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-colgroup field="group1" title="基础信息">
        <vxe-column field="nickname" title="Nickname" min-width="260" :edit-render="{name: 'VxeInput'}"></vxe-column>
        <vxe-column field="role" title="Role" min-width="260" :edit-render="{name: 'VxeInput'}"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="sex" title="Sex" min-width="300" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="attr1" title="Attr1" min-width="250" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="attr2" title="Attr2" min-width="300" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="address" title="Address" min-width="500" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" min-width="200" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="date" title="Date" width="160" fixed="right" :edit-render="{name: 'VxeInput'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number | null
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: null, address: 'test abc' },
  { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '', age: null, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
  { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const validRules = ref<VxeTablePropTypes.EditRules<RowVO>>({
  name: [
    { required: true, message: '必须填写' }
  ],
  nickname: [
    { required: true, message: '必须填写' }
  ],
  role: [
    { required: true, message: '必须填写' }
  ],
  age: [
    { required: true, message: '必须填写' }
  ],
  date: [
    { required: true, message: '必须填写' }
  ]
})

const validEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const errMap = await $table.validate()
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}

const fullValidEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const errMap = await $table.validate(true)
    if (errMap) {
      VxeUI.modal.message({ status: 'error', content: '校验不通过！' })
    } else {
      VxeUI.modal.message({ status: 'success', content: '校验成功！' })
    }
  }
}
</script>
