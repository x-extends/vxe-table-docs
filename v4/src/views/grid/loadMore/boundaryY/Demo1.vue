<template>
  <div>
    <vxe-grid v-bind="gridOptions" v-on="gridEvents"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps, VxeGridListeners } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
}

const gridOptions = reactive<VxeGridProps<RowVO> & { data: RowVO[] }>({
  border: true,
  loading: false,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 600,
  columnConfig: {
    resizable: true
  },
  scrollY: {
    enabled: true,
    gt: 0,
    threshold: 50
  },
  columns: [
    { type: 'seq', width: 80 },
    { field: 'id', title: 'ID', width: 120 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex', width: 100 }
  ],
  data: []
})

let rowKey = 0

// 模拟行数据
const loadList = (size = 200) => {
  if (gridOptions.loading) {
    return
  }
  // 模拟后端接口
  gridOptions.loading = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      rowKey++
      dataList.push({
        id: `${rowKey}`,
        name: 'Test' + rowKey,
        role: 'Developer' + rowKey,
        sex: '男'
      })
    }
    gridOptions.data = [...gridOptions.data, ...dataList]
    gridOptions.loading = false
  }, 300)
}

const gridEvents: VxeGridListeners = {
  scrollBoundary ({ direction }) {
    switch (direction) {
      case 'top':
        console.log('触发顶部阈值范围')
        break
      case 'bottom':
        console.log('触发底部阈值范围')
        loadList(20)
        break
      case 'left':
        console.log('触发左侧阈值范围')
        break
      case 'right':
        console.log('触发右侧阈值范围')
        break
    }
  }
}

loadList(20)
</script>
