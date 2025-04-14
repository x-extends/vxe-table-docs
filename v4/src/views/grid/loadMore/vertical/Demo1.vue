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
  virtualYConfig: {
    enabled: true,
    gt: 0
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
  scroll ({ isTop, isBottom }) {
    if (isTop) {
      console.log('触碰到顶部')
    }
    if (isBottom) {
      console.log('触碰到底部')
      loadList(20)
    }
  }
}

loadList(20)
</script>
