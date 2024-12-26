<template>
  <div>
    <p>
      <vxe-button @click="expandEvent1">切换第二行展开</vxe-button>
      <vxe-button @click="expandEvent2">设置第二、四行展开</vxe-button>
      <vxe-button @click="expandEvent3">展开所有</vxe-button>
      <vxe-button @click="expandEvent4">关闭所有</vxe-button>
    </p>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeGridInstance, VxeGridProps } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      columnConfig: {
        resizable: true
      },
      rowConfig: {
        keyField: 'id'
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
        { field: 'name', title: 'Name', width: 400, treeNode: true },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
        { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01', hasChild: true }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    expandEvent1 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleTreeExpand(this.gridOptions.data[1])
      }
    },
    expandEvent2 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setTreeExpand([this.gridOptions.data[1], this.gridOptions.data[3]], true)
      }
    },
    expandEvent3 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setAllTreeExpand(true)
      }
    },
    expandEvent4 () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.clearTreeExpand()
      }
    }
  }
})
</script>
