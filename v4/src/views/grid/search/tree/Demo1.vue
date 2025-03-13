<template>
  <div>
    <p>
      <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent"></vxe-input>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions" class="mytree-grid"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  type: string
  size: number
  date: string
  children?: RowVO[]
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const filterName = ref('')
const allData = [
  { id: 1000, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
  {
    id: 1005,
    name: 'Test2',
    type: 'mp4',
    size: 0,
    date: '2021-04-01',
    children: [
      { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
      { id: 20045, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
      {
        id: 10053,
        name: 'Test96',
        type: 'avi',
        size: 0,
        date: '2021-04-01',
        children: [
          { id: 24330, name: 'Test5', type: 'txt', size: 25, date: '2021-10-01' },
          { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
          { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
        ]
      }
    ]
  },
  { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 24555, name: 'Test9', type: 'avi', size: 224, date: '2020-10-01' }
]

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: 400,
  columnConfig: {
    useKey: true
  },
  rowConfig: {
    useKey: true
  },
  treeConfig: {},
  columns: [
    { type: 'seq', title: '序号', width: 220, treeNode: true },
    { field: 'name', title: 'Name', type: 'html' },
    { field: 'size', title: 'Size', type: 'html' },
    { field: 'type', title: 'Type', type: 'html' },
    { field: 'date', title: 'Date', type: 'html' }
  ],
  data: []
})

const handleSearch = () => {
  const filterVal = XEUtils.toValueString(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const searchProps = ['name', 'size', 'type', 'date']
    const rest = XEUtils.searchTree(allData, item => {
      return searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1)
    }, { children: 'children' })
    XEUtils.eachTree(rest, item => {
      searchProps.forEach(key => {
        item[key] = String(item[key]).replace(filterRE, match => `<span class="keyword-highlight">${match}</span>`)
      })
    }, { children: 'children' })
    gridOptions.data = rest
    // 搜索之后默认展开所有子节点
    nextTick(() => {
      const $grid = gridRef.value
      if ($grid) {
        $grid.setAllTreeExpand(true)
      }
    })
  } else {
    gridOptions.data = allData
  }
}

// 节流函数,间隔500毫秒触发搜索
const searchEvent = XEUtils.throttle(function () {
  handleSearch()
}, 500, { trailing: true, leading: true })

handleSearch()
</script>

<style lang="scss" scoped>
.mytree-grid {
  ::v-deep(.keyword-highlight)  {
    background-color: #FFFF00;
  }
}
</style>
