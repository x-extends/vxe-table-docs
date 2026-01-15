<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'
import { VxeNumberInput } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string,
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  columns: [
    { type: 'checkbox', width: 60 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'num', title: 'Number' },
    {
      field: 'age',
      title: 'Age',
      filters: [
        { data: '' }
      ],
      filterMethod ({ option, cellValue }) {
        return option.data === cellValue
      },
      slots: {
        filter ({ column }) {
          return column.filters.map((option, index) => {
            return <vxe-number-input v-model={option.data} key={index} onChange={() => { changeAgeFilterEvent(option) }}></vxe-number-input>
          })
        }
      }
    },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
  ]
})

const changeAgeFilterEvent = (option: any) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFilterOptionStatus(option, !!option.data)
  }
}
</script>
