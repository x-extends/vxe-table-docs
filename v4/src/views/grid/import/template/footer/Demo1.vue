<template>
  <div>
    <vxe-button @click="openEvent">高级导入</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #importFooter="{ options }">
        <vxe-button>自定义按钮1</vxe-button>
        <vxe-button status="error">自定义按钮2</vxe-button>
        <vxe-button @click="cancelEvent">取消</vxe-button>
        <vxe-button status="primary" @click="customImport(options)">自定义导入</vxe-button>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeTablePropTypes } from 'vxe-table'

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
  height: 500,
  showFooter: true,
  importConfig: {
    slots: {
      footer: 'importFooter'
    }
  },
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ],
  footerData: [
    { seq: '合计', sex: '666', age: '999' },
    { seq: '平均', sex: '888', age: '333' }
  ]
})

const openEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.openImport()
  }
}

const cancelEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.closeImport()
  }
}

const customImport = (options: VxeTablePropTypes.ImportConfig) => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.importData(options)
  }
}
</script>
