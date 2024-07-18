<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #header_name="{ column }">
        <span v-for="(option, index) in column.filters" :key="index">
          <vxe-input v-model="option.data" style="width: 100%;" clearable @change="changeNameFilter(option)"></vxe-input>
        </span>
      </template>

      <template #header_sex="{ column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexOptions" clearable @change="changeSexFilter(option)"></vxe-select>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const sexOptions = ref([
  { label: 'Women', value: 'Women' },
  { label: 'Man', value: 'Man' }
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  loading: false,
  height: 500,
  filterConfig: {
    showIcon: false
  },
  columns: [
    { type: 'seq', width: 70 },
    {
      title: 'Name',
      children: [
        {
          field: 'name',
          title: 'Name',
          width: 200,
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return `${row[column.field]}`.indexOf(option.data) > -1
            }
            return true
          },
          slots: {
            header: 'header_name'
          }
        }
      ]
    },
    { field: 'role', title: 'Role' },
    {
      title: 'Sex',
      children: [
        {
          field: 'sex',
          width: 200,
          filters: [
            { data: '' }
          ],
          filterMethod ({ option, row, column }) {
            if (option.data) {
              return row[column.field] === option.data
            }
            return true
          },
          slots: {
            header: 'header_sex'
          }
        }
      ]
    },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Women', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 24, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 32, address: 'Shenzhen' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 28, address: 'Shanghai' }
  ]
})

const changeNameFilter = (option: any) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFilterOptionStatus(option, !!option.data)
    $grid.updateData()
  }
}

const changeSexFilter = (option: any) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFilterOptionStatus(option, !!option.data)
    $grid.updateData()
  }
}
</script>
