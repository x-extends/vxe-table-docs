<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="removeSelectEvent()">删除选中</vxe-button>
        <vxe-button @click="validEvent">快速校验全量数据</vxe-button>
        <vxe-button @click="selectValidEvent">选中行校验</vxe-button>
        <vxe-button @click="getSelectEvent">获取选中</vxe-button>
        <vxe-button @click="getInsertEvent">获取新增</vxe-button>
        <vxe-button @click="getRemoveEvent">获取删除</vxe-button>
        <vxe-button @click="getUpdateEvent">获取修改</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :data="tableData"
      :edit-rules="validRules"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}">
      <vxe-column type="checkbox" width="80"></vxe-column>
      <vxe-column type="seq" width="80"></vxe-column>
      <vxe-column field="name" title="Name" width="400" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="age" title="Age" width="200" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="sex" title="Sex" width="200" :edit-render="{name: 'VxeInput'}"></vxe-column>
      <vxe-column field="date" title="Date" width="300" fixed="right" :edit-render="{name: 'VxeInput'}"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
  { id: 10004, name: '', role: '', sex: '1', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: '', sex: '', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const validRules = ref<VxeTablePropTypes.EditRules>({
  name: [
    {
      validator ({ cellValue }) {
        if (cellValue && !/^\w+$/.test(cellValue)) {
          return new Error('名称格式不正确，必须字母或数字')
        }
      }
    }
  ],
  sex: [
    { required: true, message: '性别必须填写' }
  ],
  age: [
    { type: 'number', min: 10, max: 100000, message: '输入 10 ~ 100000 范围' }
  ],
  date: [
    { required: true, message: '日期必须填写' }
  ]
})

const validEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const errMap = await $table.validate(true)
    if (errMap) {
      VXETable.modal.message({ status: 'error', message: '校验不通过！' })
    } else {
      VXETable.modal.message({ status: 'success', message: '校验成功！' })
    }
  }
}

const removeSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const selectValidEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    if (selectRecords.length > 0) {
      const errMap = await $table.validate(selectRecords)
      if (errMap) {
        VXETable.modal.message({ status: 'error', message: '校验不通过！' })
      } else {
        VXETable.modal.message({ status: 'success', message: '校验成功！' })
      }
    } else {
      VXETable.modal.message({ status: 'warning', message: '未选中数据！' })
    }
  }
}

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const { row: newRow } = await $table.insert({})
    // 插入一条数据并触发校验
    const errMap = await $table.validate(newRow)
    if (errMap) {
      // 校验失败
    }
  }
}

const getSelectEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const selectRecords = $table.getCheckboxRecords()
    VXETable.modal.alert(selectRecords.length)
  }
}

const getInsertEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const insertRecords = $table.getInsertRecords()
    VXETable.modal.alert(insertRecords.length)
  }
}

const getRemoveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const removeRecords = $table.getRemoveRecords()
    VXETable.modal.alert(removeRecords.length)
  }
}

const getUpdateEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const updateRecords = $table.getUpdateRecords()
    VXETable.modal.alert(updateRecords.length)
  }
}
</script>
