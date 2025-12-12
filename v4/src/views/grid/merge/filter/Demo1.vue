<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeGridListeners } from 'vxe-table'

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
  columnConfig: {
    resizable: true
  },
  mergeCells: [],
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    {
      field: 'sex',
      title: 'Sex',
      filters: [
        { label: 'Man', value: 'Man' },
        { label: 'Women', value: 'Women' }
      ]
    },
    { field: 'age', title: 'Age' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 46, attr3: 22, attr4: 100, attr5: 66, attr6: 86, address: 'Guangzhou' },
    { id: 10002, name: 'Test2', role: 'PM', sex: 'Women', age: 46, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Shenzheng' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 38, attr3: 22, attr4: 0, attr5: 0, attr6: 0, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 38, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Guangzhou' },
    { id: 10005, name: 'Test5', role: 'Designer', sex: 'Women', age: 28, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Shenzheng' },
    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 28, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Guangzhou' },
    { id: 10007, name: 'Test7', role: 'Test', sex: 'Women', age: 28, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Guangzhou' },
    { id: 10008, name: 'Test8', role: 'Test', sex: 'Man', age: 30, attr3: 0, attr4: 0, attr5: 0, attr6: 0, address: 'Guangzhou' }
  ]
})

const gridEvents: VxeGridListeners = {
  initRendered () {
    updateColSpan()
  },
  filterChange () {
    updateColSpan()
  }
}

/**
 * 生成合并指定列通用函数
 */
const calculateColumnSpans = (data: RowVO[], field: string, colIndex: number) => {
  const result: {
    row: number
    col: number
    rowspan: number
    colspan: number
  }[] = []
  let currentValue = null
  let startIndex = 0
  let spanCount = 0
  for (let i = 0; i <= data.length; i++) {
    if (i === data.length || (i < data.length && data[i][field] !== currentValue)) {
      if (currentValue !== null && spanCount > 1) {
        result.push({
          row: startIndex,
          col: colIndex,
          rowspan: spanCount,
          colspan: 1
        })
      }
      if (i < data.length) {
        currentValue = data[i][field]
        startIndex = i
        spanCount = 1
      }
    } else {
      spanCount++
    }
  }
  return result
}

const updateColSpan = () => {
  const $grid = gridRef.value
  if ($grid) {
    const { visibleData } = $grid.getTableData()
    gridOptions.mergeCells = calculateColumnSpans(visibleData, 'role', 4)
  }
}
</script>
