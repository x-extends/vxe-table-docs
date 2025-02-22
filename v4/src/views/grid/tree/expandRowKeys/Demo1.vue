<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { VxeGridProps, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  hasChild?: boolean
}

// 模拟后台
const fetchChildListApi = (parentRow: RowVO) => {
  return new Promise<RowVO[]>(resolve => {
    setTimeout(() => {
      const childs = [
        { id: parentRow.id + 1000000, parentId: parentRow.id, name: parentRow.name + 'Test111111111111', type: 'mp4', size: 0, date: '2021-10-03', hasChild: true },
        { id: parentRow.id + 1500000, parentId: parentRow.id, name: parentRow.name + 'Test222222222222', type: 'mp3', size: 0, date: '2021-07-09', hasChild: false }
      ]
      resolve(childs)
    }, 500)
  })
}

const gridOptions = reactive<VxeGridProps<RowVO> & {
  treeConfig: VxeTablePropTypes.TreeConfig<RowVO>
}>({
  border: true,
  loading: false,
  columnConfig: {
    resizable: true
  },
  rowConfig: {
    keyField: 'id'
  },
  treeConfig: {
    lazy: true,
    transform: true,
    hasChild: 'hasChild',
    expandRowKeys: [],
    iconOpen: 'vxe-icon-folder-open',
    iconClose: 'vxe-icon-folder',
    loadMethod ({ row }) {
      // 异步加载子节点
      return fetchChildListApi(row)
    }
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name', width: 400, treeNode: true },
    { field: 'size', title: 'Size' },
    { field: 'type', title: 'Type' },
    { field: 'date', title: 'Date' }
  ],
  data: []
})

gridOptions.loading = true
setTimeout(() => {
  gridOptions.loading = false
  // 默认展开的节点必须在数据初始化之前赋值且只会执行一次
  gridOptions.treeConfig.expandRowKeys = [10050, 23666]
  gridOptions.data = [
    { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
    { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
    { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
    { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
  ]
}, 300)
</script>
