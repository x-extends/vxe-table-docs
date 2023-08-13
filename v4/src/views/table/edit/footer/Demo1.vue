<template>
  <div>
    <vxe-toolbar export>
      <template #buttons>
        <vxe-button @click="insertEvent">新增</vxe-button>
        <vxe-button @click="removeEvent">删除</vxe-button>
        <vxe-button @click="saveEvent">保存</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      show-footer
      show-overflow
      ref="tableRef"
      height="400"
      class="editable-footer"
      :row-config="{isHover: true}"
      :export-config="{}"
      :footer-method="footerMethod"
      :footer-cell-class-name="footerCellClassName"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="age" title="Age" :edit-render="{autofocus: '.vxe-input--inner'}">
        <template #edit="{ row }">
          <vxe-input v-model="row.age" type="number" :min="1" :max="120"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="address" title="Address" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.address" type="text"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
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

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, address: 'test abc' },
  { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, address: 'test abc' }
])

const tableRef = ref<VxeTableInstance<RowVO>>()

const footerCellClassName: VxeTablePropTypes.FooterCellClassName<RowVO> = ({ $rowIndex, columnIndex }) => {
  if (columnIndex === 0) {
    if ($rowIndex === 0) {
      return 'col-blue'
    } else {
      return 'col-red'
    }
  }
}

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count / list.length
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均'
      }
      if (['age'].includes(column.field)) {
        return meanNum(data, column.field)
      }
      return null
    }),
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '和值'
      }
      if (['age'].includes(column.field)) {
        return sumNum(data, column.field)
      }
      return null
    })
  ]
}

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const record = {
      name: 'New name',
      age: 18
    }
    const { row: newRow } = await $table.insert(record)
    $table.setEditCell(newRow, 'age')
  }
}

const removeEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.removeCheckboxRow()
  }
}

const saveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    VXETable.modal.alert(`insertRecords=${insertRecords.length} removeRecords=${removeRecords.length} updateRecords=${updateRecords.length}`)
  }
}
</script>
