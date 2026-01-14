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
  time: number
  num: number
  address: string
  attr1: string
  attr2: string
  attr3: string
  attr4: string
  attr5: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 800,
  cellConfig: {
    // padding: false,
    height: 30
  },
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', minWidth: 100 },
    { field: 'nickname', title: 'Nickname', width: 200 },
    { field: 'sex', title: 'Sex', width: 100 },
    { field: 'age', title: 'Age', width: 100 },
    { field: 'num', title: 'Num', width: 100 },
    { field: 'time', title: 'Time', width: 100 },
    { field: 'attr1', title: 'Attr1', width: 150 },
    { field: 'attr2', title: 'Attr2', width: 200 },
    { field: 'attr3', title: 'Attr3', width: 150 },
    { field: 'attr4', title: 'Attr4', width: 100 },
    { field: 'attr5', title: 'Attr5', width: 150 },
    { field: 'address', title: 'Address', width: 200 }
  ],
  data: []
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: 'Test' + i,
      nickname: 'nickname' + i,
      role: 'Developer',
      sex: '女',
      age: 18,
      num: 100000 + i,
      time: 10000000 + i,
      address: 'address' + i,
      attr1: 'attr1' + i,
      attr2: 'attr2' + i,
      attr3: 'attr3' + i,
      attr4: 'attr4' + i,
      attr5: 'attr4' + i
    })
  }
  gridOptions.data = dataList
}

loadList(1000)
</script>
