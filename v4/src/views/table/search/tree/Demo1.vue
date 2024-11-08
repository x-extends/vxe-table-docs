<template>
  <div>
    <p>
      <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" clearable @change="searchEvent"></vxe-input>
    </p>

    <vxe-table
      ref="tableRef"
      class="mytree-table"
      height="400"
      :column-config="{useKey: true}"
      :row-config="{useKey: true}"
      :tree-config="{}"
      :data="list">
      <vxe-column type="seq" width="220" title="序号" tree-node></vxe-column>
      <vxe-column field="name" title="Name" type="html"></vxe-column>
      <vxe-column field="size" title="Size" type="html"></vxe-column>
      <vxe-column field="type" title="Type" type="html"></vxe-column>
      <vxe-column field="date" title="Date" type="html"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import type { VxeTableInstance } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  type: string
  size: number
  date: string
  children?: RowVO[]
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const filterName = ref('')
const list = ref<RowVO[]>([])

const tableData = ref<RowVO[]>([
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
])

const handleSearch = () => {
  const filterVal = XEUtils.toValueString(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const options = { children: 'children' }
    const searchProps = ['name', 'size', 'type', 'date']
    // 搜索为克隆数据，不会污染源数据
    const rest = XEUtils.searchTree(tableData.value, item => searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1), options)
    XEUtils.eachTree(rest, item => {
      searchProps.forEach(key => {
        item[key] = String(item[key]).replace(filterRE, match => `<span class="keyword-highlight">${match}</span>`)
      })
    }, options)
    list.value = rest
    // 搜索之后默认展开所有子节点
    nextTick(() => {
      const $table = tableRef.value
      if ($table) {
        $table.setAllTreeExpand(true)
      }
    })
  } else {
    list.value = tableData.value
  }
}

// 节流函数,间隔500毫秒触发搜索
const searchEvent = XEUtils.throttle(function () {
  handleSearch()
}, 500, { trailing: true, leading: true })

handleSearch()
</script>

<style lang="scss" scoped>
.mytree-table {
  ::v-deep(.keyword-highlight)  {
    background-color: #FFFF00;
  }
}
</style>
