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
  // 模拟后端接口
  return axios.post('/api/pub/export', body).then(res => {
    if (res.data.url) {
      VxeUI.modal.message({
        content: '导出成功，开始下载',
        status: 'success'
      })
      location.href = res.data.url
    }
  }).catch(() => {
    VxeUI.modal.message({
      content: '导出失败！',
      status: 'error'
    })
  })
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  exportConfig: {
    remote: true,
    modes: [
      { label: '自定义的数据', value: 'myData' }
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
