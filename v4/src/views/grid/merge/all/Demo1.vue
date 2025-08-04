<template>
  <div>
    <vxe-button @click="setMerge1">设置合并1</vxe-button>
    <vxe-button @click="setMerge2">设置合并2</vxe-button>
    <vxe-button status="success" @click="saveMergeData">获取合并规则</vxe-button>

    <vxe-grid  ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  attr3: number
  attr4: number
  attr5: number
  attr6: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  mergeCells: [
    { row: 0, col: 4, rowspan: 1, colspan: 2 },
    { row: 2, col: 4, rowspan: 1, colspan: 2 },
    { row: 0, col: 6, rowspan: 4, colspan: 1 },
    { row: 0, col: 7, rowspan: 4, colspan: 1 },
    { row: 0, col: 8, rowspan: 6, colspan: 1 }
  ],
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    {
      title: 'Group1',
      field: 'group1',
      headerAlign: 'center',
      children: [
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ]
    },
    {
      title: 'Group2',
      field: 'group2',
      headerAlign: 'center',
      children: [
        {
          field: 'attr1',
          title: 'Attr1',
          headerAlign: 'center',
          children: [
            { field: 'attr3', title: 'Attr3' },
            { field: 'attr4', title: 'Attr4' }
          ]
        },
        {
          field: 'attr2',
          title: 'Attr2',
          headerAlign: 'center',
          children: [
            { field: 'attr5', title: 'Attr5' },
            { field: 'attr6', title: 'Attr6' }
          ]
        }
      ]
    },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 46, attr3: 22, attr4: 100, attr5: 66, attr6: 86, address: 'Guangzhou' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 0, attr3: 22, attr4: 0, attr5: 0, attr6: 0, address: '' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' },
    { id: 10005, name: 'Test5', role: 'Test', sex: 'Women', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' },
    { id: 10006, name: 'Test6', role: 'Develop', sex: 'Man', age: 0, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: '' }
  ]
})

const setMerge1 = () => {
  gridOptions.mergeCells = [
    { row: 1, col: 1, rowspan: 2, colspan: 2 },
    { row: 2, col: 4, rowspan: 3, colspan: 2 }
  ]
}

const setMerge2 = () => {
  gridOptions.mergeCells = [
    { row: 0, col: 4, rowspan: 1, colspan: 2 },
    { row: 2, col: 4, rowspan: 1, colspan: 2 },
    { row: 0, col: 6, rowspan: 4, colspan: 1 },
    { row: 0, col: 7, rowspan: 4, colspan: 1 },
    { row: 0, col: 8, rowspan: 6, colspan: 1 }
  ]
}

const saveMergeData = () => {
  const $grid = gridRef.value
  if ($grid) {
    const mergeList = $grid.getMergeCells()
    console.log(mergeList)
  }
}
</script>
