<template>
  <div>
    <div>
      <vxe-button @click="validEvent">校验变动数据</vxe-button>
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
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="slotParams">
          <vxe-input v-model="slotParams.row.name" @change="changeEditEvent(slotParams)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="role" title="Role" :edit-render="{}">
        <template #edit="slotParams">
          <vxe-input v-model="slotParams.row.role" clearable @change="changeEditEvent(slotParams)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="sex" title="Sex" :edit-render="{}">
        <template #edit="slotParams">
          <vxe-select v-model="slotParams.row.sex" :options="sexOptions" clearable @change="changeEditEvent(slotParams)"></vxe-select>
        </template>
        <template #default="{ row }">
          <span>{{ formatSexLabel(row.sex) }}</span>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{}">
        <template #edit="slotParams">
          <vxe-input v-model="slotParams.row.age" @change="changeEditEvent(slotParams)"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="slotParams">
          <vxe-date-picker v-model="slotParams.row.date" @change="changeEditEvent(slotParams)"></vxe-date-picker>
        </template>
      </vxe-column>
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
  age: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: '', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '', age: 23, address: 'test abc' },
  { id: 10005, name: '', role: '', sex: '1', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const validRules = ref<VxeTablePropTypes.EditRules<RowVO>>({
  name: [
    { required: true, message: '必须填写' }
  ],
  role: [
    { required: true, message: '必须填写' }
  ],
  sex: [
    { required: true, message: '必须填写' }
  ],
  age: [
    { required: true, message: '必须填写' }
  ],
  date: [
    { required: true, message: '必须填写' }
  ]
})

const sexOptions = ref([
  { label: '女', value: '0' },
  { label: '男', value: '1' }
])

const formatSexLabel = (cellValue: string) => {
  const item = sexOptions.value.find(item => item.value === cellValue)
  return item ? item.label : cellValue
}

const changeEditEvent = (slotParams: any) => {
  const $table = tableRef.value
  if ($table) {
    $table.updateStatus(slotParams)
  }
}

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
</script>
