<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeColumnPropTypes, VxeGridProps, VxeGridListeners } from 'vxe-table'
import { VxeSelectProps, VxeNumberInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const nameEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO>>({
  name: 'input',
  events: {
    input (cellParams) {
      const { row, column } = cellParams
      console.log('name', row[column.field])
    }
  }
})

const sexEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeSelectProps>>({
  name: 'VxeSelect',
  options: [
    { label: '女', value: 'Women' },
    { label: '男', value: 'Man' }
  ],
  events: {
    change (cellParams, targetParams) {
      const { row, column } = cellParams
      console.log('sex', row[column.field])
    }
  }
})

const ageEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeNumberInputProps>>({
  name: 'VxeNumberInput',
  events: {
    change (cellParams, targetParams) {
      const { row, column } = cellParams
      console.log('age', row[column.field])
    }
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  rowConfig: {
    keyField: 'id'
  },
  editConfig: {
    trigger: 'click',
    mode: 'cell'
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', editRender: nameEditRender },
    { field: 'sex', title: 'Sex', editRender: sexEditRender },
    { field: 'age', title: 'Age', editRender: ageEditRender }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners<RowVO> = {
  editActivated ({ column }) {
    console.log(`激活编辑 field=${column.field}`)
  },
  editClosed ({ column, row }) {
    console.log(`编辑结束 field=${column.field} 值=${row[column.field]}`)
  }
}
</script>
