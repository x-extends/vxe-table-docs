<template>
  <div>
    <vxe-button @click="openEvent">自定义导出</vxe-button>
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
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

// 模拟接口导出
const exportFileApi = (body: any) => {
  // 模拟后端接口
  return axios.post('/publicapi/api/pub/export', body).then(res => {
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
    async exportMethod ({ options }) {
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
      await exportFileApi(body)
    }
  },
  columns: [
    { type: 'checkbox', width: 50 },
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'nickname', title: 'Nickname' },
    { field: 'role', title: 'Role' },
    { field: 'address', title: 'Address', showOverflow: true }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' }
  ]
})

const openEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.openExport()
  }
}
</script>
