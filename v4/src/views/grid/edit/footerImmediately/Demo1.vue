<template>
  <div>
    <vxe-button status="primary" @click="insertEvent">新增</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'
import { VxeInputProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  rate: number
  num: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

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

// 在值发生改变时更新表尾合计
const updateFooterEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.updateFooter()
  }
}

const ageEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeInputProps>>({
  name: 'VxeNumberInput',
  props: {
    type: 'integer',
    min: 1,
    max: 120
  },
  events: {
    change: updateFooterEvent
  }
})

const numEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeInputProps>>({
  name: 'VxeNumberInput',
  events: {
    change: updateFooterEvent
  }
})

const rateEditRender = reactive<VxeColumnPropTypes.EditRender<RowVO, VxeInputProps>>({
  name: 'VxeNumberInput',
  events: {
    change: updateFooterEvent
  }
})

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showFooter: true,
  height: 400,
  editConfig: {
    trigger: 'click',
    mode: 'row'
  },
  columns: [
    { type: 'seq', width: 60 },
    {
      title: '统计信息',
      children: [
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'age', title: 'Age', editRender: ageEditRender },
        { field: 'num', title: 'Num', editRender: numEditRender },
        { field: 'rate', title: 'Rate', editRender: rateEditRender }
      ]
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', age: 10, num: 28, rate: 5, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', age: 34, num: 22, rate: 4, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', age: 56, num: 32, rate: 3, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' },
    { id: 10005, name: 'Test5', role: 'PM', age: 56, num: 32, rate: 4, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', age: 45, num: 24, rate: 1, address: 'Shanghai' }
  ],
  footerMethod ({ columns, data }) {
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
          return `￥${sumNum(data, column.field)}`
        }
        return null
      })
    ]
  }
})

const insertEvent = async () => {
  const record = {
    name: 'New name'
  }
  const $grid = gridRef.value
  if ($grid) {
    const { row: newRow } = await $grid.insert(record)
    $grid.setEditCell(newRow, 'age')
  }
}
</script>
