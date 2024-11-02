<template>
  <div>
    <p>
      <vxe-input v-model="filterName" type="search" placeholder="试试全表搜索" @keyup="searchEvent"></vxe-input>
    </p>

    <vxe-table
      ref="tableRef"
      max-height="400"
      :column-config="{useKey: true}"
      :row-config="{useKey: true}"
      :tree-config="{}"
      :data="list">
      <vxe-column type="seq" width="220" title="序号" tree-node></vxe-column>
      <vxe-column field="name" title="Name" type="html"></vxe-column>
      <vxe-column field="size" title="Size" type="html"></vxe-column>
      <vxe-column field="type" title="Type" type="html"></vxe-column>
      <vxe-column field="date" title="Date" type="html"></vxe-column>
      <template #empty>
        <span style="color: red;">
          <img src="https://vxeui.com/resource/img/546.gif">
          <p>搜索不到数据，可能输入的关键字姿势不对！</p>
        </span>
      </template>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import { VxeTableInstance } from 'vxe-table'
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

const searchEvent = () => {
  const filterVal = XEUtils.toValueString(filterName.value).trim().toLowerCase()
  if (filterVal) {
    const filterRE = new RegExp(filterVal, 'gi')
    const options = { children: 'children' }
    const searchProps = ['name', 'size', 'type', 'date']
    const rest = XEUtils.searchTree(tableData.value, item => searchProps.some(key => String(item[key]).toLowerCase().indexOf(filterVal) > -1), options)
    XEUtils.eachTree(rest, item => {
      searchProps.forEach(key => {
        item[key] = String(item[key]).replace(filterRE, match => `<span class="keyword-lighten">${match}</span>`)
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

searchEvent()
</script>
