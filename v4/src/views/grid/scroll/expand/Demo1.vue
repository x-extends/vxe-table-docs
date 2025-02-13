<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div>Name：{{ row.name }}</div>
        <div>Role：{{ row.role }}</div>
        <div>Age：{{ row.age }}</div>
        <div>Sex：{{ row.sex }}</div>
        <div>Address：{{ row.address }}</div>
      </template>
    </vxe-grid>
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
  height: 600,
  expandConfig: {
    padding: true
  },
  scrollY: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 70 },
    { type: 'expand', width: 60, slots: { content: 'expand_content' } },
    { field: 'name', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' }
  ],
  data: []
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: '名称 Test' + i,
      role: 'Developer',
      sex: '男'
    })
  }
  gridOptions.data = dataList
}

loadList(500)
</script>
