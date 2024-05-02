<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #name_edit="{ row, column }">
        <vxe-input v-model="row.name" @change="nameChangeEvent({ column })"></vxe-input>
      </template>
      <template #role_edit="{ row, column }">
        <vxe-input v-model="row.role" @change="roleChangeEvent({ column })"></vxe-input>
      </template>
      <template #age_edit="{ row, column }">
        <vxe-input v-model="row.age" @focus="ageFocusEvent({ column })"></vxe-input>
      </template>
      <template #age_filter="{ column, $panel }">
        <input type="type" v-for="(option, index) in column.filters" :key="index" v-model="option.data" @input="$panel.changeOption($event, !!option.data, option)" @keyup.enter="enterFilterEvent({ column, $panel })">
      </template>
      <template #sex_default="{ row }">
        <span>{{ formatSex(row) }}</span>
      </template>
      <template #sex_edit="{ row, column }">
        <vxe-select v-model="row.sex" transfer @change="sexChangeEvent({ column })">
          <vxe-option value="1" label="男"></vxe-option>
          <vxe-option value="0" label="女"></vxe-option>
        </vxe-select>
      </template>
      <template #date_edit="{ row, column }">
        <vxe-input v-model="row.date" type="date" transfer @change="dateChangeEvent({ column })"></vxe-input>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
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

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  stripe: true,
  showFooter: true,
  height: 400,
  tooltipConfig: {},
  exportConfig: {},
  menuConfig: {},
  columnConfig: {
    resizable: true
  },
  toolbarConfig: {
    export: true,
    zoom: true,
    custom: true
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 60 },
    { field: 'name', title: 'Name', editRender: { name: 'VxeInput' }, slots: { edit: 'name_edit' } },
    { field: 'role', title: 'Role', editRender: { name: 'VxeInput' }, slots: { edit: 'role_edit' } },
    { field: 'age', title: 'Age', filters: [{ data: '' }], editRender: { name: 'VxeInput' }, slots: { filter: 'age_filter', edit: 'age_edit' } },
    { field: 'sex', title: 'Sex', editRender: {}, slots: { default: 'sex_default', edit: 'sex_edit' } },
    { field: 'date', title: 'Date', editRender: { name: 'VxeInput' }, slots: { edit: 'date_edit' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, date: '2021-03-13' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, date: '2021-01-05' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, date: '2021-04-13' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: '1', age: 23, date: '2021-09-13' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: '1', age: 30, date: '2021-10-13' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: '1', age: 21, date: '2021-01-33' }
  ],
  footerMethod ({ columns, data }) {
    return [
      columns.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return '和值'
        }
        if (['age', 'rate'].includes(column.field)) {
          return sumNum(data, column.field)
        }
        return ''
      }),
      columns.map((column, columnIndex) => {
        if (columnIndex === 0) {
          return '平均'
        }
        if (['age', 'rate'].includes(column.field)) {
          return meanNum(data, column.field)
        }
        return ''
      })
    ]
  }
})

const formatSex = (row: RowVO) => {
  if (row.sex === '1') {
    return '男'
  }
  if (row.sex === '0') {
    return '女'
  }
  return ''
}

const enterFilterEvent = ({ $panel }: any) => {
  console.log('筛选回车事件')
  $panel.confirmFilter()
}

const nameChangeEvent = ({ column }: any) => {
  console.log(`${column.title} 触发 input 事件`)
}

const roleChangeEvent = ({ column }: any) => {
  console.log(`${column.title} 触发 input 事件`)
}

const ageFocusEvent = ({ column }: any) => {
  console.log(`${column.title} 触发 focus 事件`)
}

const sexChangeEvent = ({ column }: any) => {
  console.log(`${column.title} 触发 change 事件`)
}

const dateChangeEvent = ({ column }: any) => {
  console.log(`${column.title} 触发 change 事件`)
}
</script>
