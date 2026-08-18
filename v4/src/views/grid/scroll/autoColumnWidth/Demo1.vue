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
  nickname: string
  role: string
  sex: string
  age: number
  date: string
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 800,
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 'auto' },
    { field: 'nickname', title: 'Nickname', width: 'auto' },
    { field: 'role', title: 'Role', width: 'auto' },
    { field: 'sex', title: 'Sex', width: 80 },
    { field: 'age', title: 'Age', width: 80 },
    { field: 'date', title: 'date', minWidth: 120 },
    { field: 'address', title: 'Address', minWidth: 120 }
  ],
  data: []
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: i === 30 ? `TestTestTest${i}` : i === 50 ? `TTTTTTTTTTTTTTTTTTTTT${i}` : `Test${i}`,
      nickname: i === 100 ? `NameNameNameNameName${i}` : i === 100 ? `UUUUUUUUUUUUUUUUUUUUUUUUUUUU${i}` : `Name${i}`,
      role: i === 150 ? `DeveloperDeveloperDeveloper${i}` : i === 150 ? `DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD${i}` : `Developer${i}`,
      sex: '男',
      age: 18,
      date: '2018-01-01',
      address: 'address'
    })
  }
  gridOptions.data = dataList
}

loadList(500)
</script>
