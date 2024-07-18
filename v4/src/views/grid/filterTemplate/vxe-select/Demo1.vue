<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #filter_sex="{ $panel, column }">
        <div v-for="(option, index) in column.filters" :key="index">
          <vxe-select v-model="option.data" :options="sexOptions" @change="$panel.changeOption($event, !!option.data, option)"></vxe-select>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const sexOptions = ref([
  { label: 'Women', value: 'Women' },
  { label: 'Man', value: 'Man' }
])

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  columns: [
    { field: 'id', title: 'ID' },
    { field: 'name', title: 'Name' },
    {
      field: 'sex',
      title: 'Sex',
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
        filter: 'filter_sex'
      }
    },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})
</script>
