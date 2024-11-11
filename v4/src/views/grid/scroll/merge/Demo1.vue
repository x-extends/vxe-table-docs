<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showFooter: true,
  height: 600,
  scrollY: {
    enabled: true,
    gt: 0
  },
  mergeCells: [
    { row: 2, col: 1, rowspan: 4, colspan: 2 },
    { row: 16, col: 2, rowspan: 12, colspan: 3 },
    { row: 30, col: 2, rowspan: 5, colspan: 2 },
    { row: 100, col: 1, rowspan: 18, colspan: 3 },
    { row: 150, col: 1, rowspan: 8, colspan: 2 }
  ],
  mergeFooterItems: [
    { row: 0, col: 1, rowspan: 2, colspan: 1 }
  ],
  columns: [
    { field: 'seq', type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' }
  ],
  data: [],
  footerData: [
    { seq: '合计', name: '666', role: '888', sex: '999' },
    { seq: '均值', name: '222', role: '333', sex: '777' }
  ]
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: 'Test' + i,
      role: 'Developer',
      sex: '男'
    })
  }
  gridOptions.data = dataList
}

loadList(500)
</script>
