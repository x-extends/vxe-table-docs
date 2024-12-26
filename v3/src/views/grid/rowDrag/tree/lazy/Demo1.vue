<template>
  <div>
    <vxe-button status="success" @click="resultEvent">获取数据</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
        { id: parentRow.id + 1000000, parentId: parentRow.id, name: parentRow.name + Date.now(), type: 'mp4', size: 0, date: '2021-10-03', hasChild: true },
        { id: parentRow.id + 1500000, parentId: parentRow.id, name: parentRow.name + Date.now() + 1, type: 'mp3', size: 0, date: '2021-07-09', hasChild: false }
      ]
      resolve(childs)
    }, 500)
  })
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      rowConfig: {
        drag: true
      },
      rowDragConfig: {
        isCrossDrag: true,
        isSelfToChildDrag: true,
        isToChildDrag: true,
        showGuidesStatus: false
      },
      columnConfig: {
      },
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId',
        lazy: true,
        hasChild: 'hasChild',
        loadMethod ({ row }) {
          // 异步加载子节点
          return fetchChildListApi(row)
        }
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300, treeNode: true, dragSort: true },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01', hasChild: true },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: false },
        { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01', hasChild: true },
        { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01', hasChild: true }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    resultEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        const tableData = $grid.getFullData()
        console.log(tableData)
      }
    }
  }
})
</script>
