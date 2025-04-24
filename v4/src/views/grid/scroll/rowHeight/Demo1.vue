<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #name_default="{ row }">
        <vxe-image :src="row.imgUrl" height="100"></vxe-image>
      </template>

      <template #info_default="{ row }">
        <div class="label-ellipsis">{{ row.name }}</div>
        <div class="label-ellipsis">{{ row.num }}</div>
        <div class="label-ellipsis">{{ row.address }}</div>
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
  imgUrl: string
  info: string
  num: number
  address: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  showHeaderOverflow: true,
  showFooterOverflow: true,
  height: 600,
  loading: false,
  cellConfig: {
    height: 120
  },
  virtualYConfig: {
    enabled: true,
    gt: 0
  },
  columns: [
    { type: 'seq', title: '序号', width: 100 },
    { field: 'name', title: '图片', width: 140, align: 'center', slots: { default: 'name_default' } },
    { field: 'info', title: '基本信息', slots: { default: 'info_default' } },
    { field: 'num', title: 'Num', width: 200 },
    { field: 'address', title: 'Address', width: 200 }
  ],
  data: []
})

// 模拟行数据
const loadList = (size = 200) => {
  gridOptions.loading = true
  setTimeout(() => {
    const dataList: RowVO[] = []
    for (let i = 0; i < size; i++) {
      dataList.push({
        id: i,
        name: `名称${i} 名称名称 称`,
        imgUrl: 'https://vxeui.com/resource/img/546.gif',
        info: `info ${i}`,
        num: 20,
        address: 'shenzhen shen'
      })
    }
    gridOptions.data = dataList
    gridOptions.loading = false
  }, 350)
}

loadList(500)
</script>
