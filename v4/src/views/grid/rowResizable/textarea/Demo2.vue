<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import type { VxeGridProps, VxeGridInstance, VxeGridListeners } from 'vxe-table'

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
  showOverflow: true,
  height: 500,
  rowConfig: {
    resizable: true,
    keyField: 'id'
  },
  headerCellConfig: {
    padding: true
  },
  cellConfig: {
    padding: false,
    height: 60,
    verticalAlign: 'top'
  },
  resizableConfig: {
    isDblclickAutoHeight: true
  },
  editConfig: {
    mode: 'cell',
    trigger: 'click'
  },
  columns: [
    { type: 'seq', width: 70, rowResize: true, verticalAlign: 'center', align: 'center' },
    { field: 'name', title: 'Name', rowResize: true, editRender: { name: 'textarea' } },
    { field: 'sex', title: 'Sex', rowResize: true, editRender: { name: 'textarea' } },
    { field: 'age', title: 'Age', rowResize: true, editRender: { name: 'textarea' } },
    { field: 'time', title: 'Time', rowResize: true, editRender: { name: 'textarea' } },
    { field: 'address', title: 'Address', rowResize: true, editRender: { name: 'textarea' } }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test Test Test Test Test Test', sex: 'Women', age: 22, address: 'Guangzhou Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai Shanghai' },
    { id: 10004, name: 'Test4 Test4 Test4 Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const gridEvents: VxeGridListeners = {
  editClosed ({ row }) {
    nextTick(() => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.recalcRowHeight(row)
      }
    })
  }
}
</script>
