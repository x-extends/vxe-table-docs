<template>
  <div>
    <vxe-table
      max-height="600"
      :loading="loading"
      :data="tableData"
      :sort-config="{remote: true}"
      :tree-config="{children: 'children'}"
      @sort-change="sortChangeEvent">
      <vxe-column field="id" title="ID" width="80"></vxe-column>
      <vxe-column field="name" title="名称" tree-node></vxe-column>
      <vxe-column field="size" title="大小" width="140"></vxe-column>
      <vxe-column field="type" title="类型" width="140"></vxe-column>
      <vxe-column field="date" title="修改日期" width="260" sortable></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes, VxeTableEvents } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])

// 模拟后台接口
const findList = (order?: VxeTablePropTypes.SortOrder) => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    // 将有关联的列表转成树结构
    const mockData = [
      { id: 1000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
      { id: 1005, parentId: 1000, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
      { id: 24300, parentId: 1000, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
      { id: 20045, parentId: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
      { id: 20046, parentId: 20045, name: 'test abc66', type: 'html', size: 55, date: '2021-04-23' },
      { id: 10053, parentId: null, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
      { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
      { id: 21011, parentId: 24330, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
      { id: 22200, parentId: 20045, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 22201, parentId: 20045, name: 'Test88', type: 'mp3', size: 34, date: '2021-07-01' },
      { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
      { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
    ]
    if (order === 'asc') {
      tableData.value = XEUtils.toArrayTree(mockData, { key: 'id', parentKey: 'parentId', sortKey: 'date', reverse: false })
    } else if (order === 'desc') {
      tableData.value = XEUtils.toArrayTree(mockData, { key: 'id', parentKey: 'parentId', sortKey: 'date', reverse: true })
    } else {
      tableData.value = XEUtils.toArrayTree(mockData, { key: 'id', parentKey: 'parentId' })
    }
  }, 300)
}

const sortChangeEvent: VxeTableEvents.SortChange = ({ order }) => {
  findList(order)
}

findList()
</script>
