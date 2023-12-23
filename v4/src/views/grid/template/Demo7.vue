<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #sex_filter="{ $panel, column }">
        <input class="my-filter" type="type" v-model="option.data" v-for="(option, index) in column.filters" :key="index" @input="changeFilterEvent($event, option, $panel)">
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
  num: number
  address: string,
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    {
      field: 'sex',
      title: 'Sex',
      filters: [
        { data: '' }
      ],
      filterMethod ({ option, cellValue }) {
        return option.data === cellValue
      },
      slots: {
        filter: 'sex_filter'
      }
    },
    { field: 'num', title: 'Number' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const changeFilterEvent = (event: any, option: any, $panel: any) => {
  $panel.changeOption(event, !!option.data, option)
}
</script>
