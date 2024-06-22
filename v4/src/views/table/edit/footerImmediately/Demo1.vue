<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>

    <vxe-table
      border
      show-footer
      show-overflow
      ref="tableRef"
      height="400"
      :row-config="{isHover: true}"
      :export-config="{}"
      :footer-method="footerMethod"
      :data="tableData"
      :edit-config="{trigger: 'click', mode: 'row'}">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-colgroup title="统计信息">
        <vxe-column field="name" title="Name" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.name"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="age" title="Age" :edit-render="{autofocus: '.vxe-input--inner'}">
          <template #edit="{ row }">
            <vxe-input v-model="row.age" type="integer" :min="1" :max="120" @change="updateFooterEvent"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="num" title="Num" :edit-render="{autofocus: '.vxe-input--inner'}">
          <template #edit="{ row }">
            <vxe-input v-model="row.num" type="number" @input="updateFooterEvent"></vxe-input>
          </template>
        </vxe-column>
        <vxe-column field="rate" title="Rate" :edit-render="{}">
          <template #edit="{ row }">
            <vxe-input v-model="row.rate" type="number" @input="updateFooterEvent"></vxe-input>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  rate: number
  num: number
  address: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', age: 10, num: 28, rate: 5, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', age: 34, num: 22, rate: 4, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', age: 56, num: 32, rate: 3, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' },
  { id: 10005, name: 'Test5', role: 'PM', age: 56, num: 32, rate: 4, address: 'Shanghai' },
  { id: 10006, name: 'Test6', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' }
])

const meanNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return (count / list.length).toFixed(2)
}

const sumNum = (list: RowVO[], field: string) => {
  let count = 0
  list.forEach(item => {
    count += Number(item[field])
  })
  return count.toFixed(2)
}

const footerMethod: VxeTablePropTypes.FooterMethod<RowVO> = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均'
      }
      if (['age'].includes(column.field)) {
        return meanNum(data, column.field)
      } else if (['rate', 'num'].includes(column.field)) {
        return meanNum(data, column.field)
      }
      return null
    }),
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '和值'
      }
      if (['rate', 'num'].includes(column.field)) {
        return sumNum(data, column.field)
      }
      return null
    })
  ]
}

const insertEvent = async () => {
  const record = {
    name: 'New name'
  }
  const $table = tableRef.value
  if ($table) {
    const { row: newRow } = await $table.insert(record)
    $table.setEditCell(newRow, 'age')
  }
}

// 在值发生改变时更新表尾合计
const updateFooterEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.updateFooter()
  }
}
</script>
