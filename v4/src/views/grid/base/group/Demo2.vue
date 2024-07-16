<template>
  <div>
    <vxe-toolbar>
      <template #buttons>
        <vxe-button @click="toggleFixedColumn('group0', 'left')">切换第一列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn('group1', 'left')">切换第二列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn('group3', 'right')">切换第四列固定</vxe-button>
        <vxe-button @click="toggleFixedColumn('group4', 'right')">切换第五列固定</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  columns: [
    {
      field: 'group0',
      title: '基本信息',
      children: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', width: 180 }
      ]
    },
    {
      field: 'group1',
      title: '分类信息1',
      children: [
        { field: 'age', title: 'Age', width: 120 }
      ]
    },
    {
      field: 'group2',
      title: '更多信息',
      children: [
        { field: 'role', title: 'Role', width: 300 },
        { field: 'attr1', title: 'Attr1', width: 200 },
        {
          title: '详细信息',
          children: [
            { field: 'sex', title: 'Sex', width: 200 },
            { field: 'age', title: 'Age', width: 300 }
          ]
        }
      ]
    },
    {
      field: 'group3',
      title: '分类信息2',
      children: [
        { field: 'attr6', title: 'Attr6', width: 2000 }
      ]
    },
    {
      field: 'group4',
      title: '额外信息',
      children: [
        { field: 'date3', title: 'Date', width: 140 },
        { field: 'address', title: 'Address', width: 200 }
      ]
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou test abc test abc test abc test abc test abc test abc test abc' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc test abc' },
    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc test abc test abc test abc test abc test abc test abc test abc' },
    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
  ]
})

const toggleFixedColumn = (field: string, type: VxeColumnPropTypes.Fixed) => {
  const $grid = gridRef.value
  if ($grid) {
    const column = $grid.getColumnByField(field)
    if (column) {
      $grid.setColumnFixed(column, column.fixed ? null : type)
    }
  }
}
</script>
