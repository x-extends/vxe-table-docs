<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeGridPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

let spanFields: string[] = []

const gridOptions = reactive<VxeGridProps<RowVO> & { columns: VxeGridPropTypes.Columns }>({
  border: true,
  scrollX: {
    enabled: false
  },
  scrollY: {
    enabled: false
  },
  spanMethod ({ column }) {
    if (spanFields.includes(column.field)) {
      if (spanFields[0] === column.field) {
        return { rowspan: 1, colspan: spanFields.length }
      }
      return { rowspan: 0, colspan: 0 }
    }
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

spanFields = gridOptions.columns.slice(2, 4).map(item => item.field || '')
</script>
