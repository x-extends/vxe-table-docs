<template>
  <div>
    <vxe-button @click="openEvent">点击导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeUI, VxeGridInstance, VxeGridProps } from 'vxe-table'
import axios from 'axios'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  no1: string
  no2: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

// 模拟接口导出
const exportFileApi = (body: any) => {
  console.log('获取导出参数', body)
  return new Promise<void>(resolve => {
    setTimeout(() => {
      VxeUI.modal.message({
        content: '导出成功',
        status: 'success'
      })
      resolve()
    }, 800)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  exportConfig: {
    remote: true,
    modes: [
      { label: '自定义的数据', value: 'myData1' },
      { label: '自定义导出全表数据', value: 'myData2' },
      { label: '自定义导出当前数据', value: 'myData3' },
      { label: '自定义导出其他数据', value: 'myData4' }
    ],
    exportMethod ({ options }) {
      // 处理条件参数
      const body = {
        filename: options.filename,
        sheetName: options.sheetName,
        isHeader: options.isHeader,
        original: options.original,
        mode: options.mode,
        ids: options.mode === 'selected' ? options.data.map((item) => item.id) : [],
        fields: options.columns.map((column) => {
          return {
            field: column.field,
            title: column.title
          }
        })
      }
      return exportFileApi(body)
    }
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'no1', title: 'NO1' },
    { field: 'no2', title: 'NO2 String', cellType: 'string' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', no1: '028', no2: '028' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', no1: '220', no2: '220' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', no1: '003200', no2: '003200' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', no1: '02040', no2: '02040' }
  ]
})

const openEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.openExport()
  }
}
</script>
