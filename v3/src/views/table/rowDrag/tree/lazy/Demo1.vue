<template>
  <div>
    <vxe-button status="success" @click="resultEvent">获取数据</vxe-button>
    <vxe-table
      border
      ref="tableRef"
      :row-config="rowConfig"
      :row-drag-config="rowDragConfig"
      :column-config="columnConfig"
      :tree-config="treeConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="300" tree-node drag-sort></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

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
    const tableData: RowVO[] = [
      { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01', hasChild: true },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: false },
      { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01', hasChild: true },
      { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01', hasChild: true }
    ]

    const rowConfig: VxeTablePropTypes.RowConfig<RowVO> = {
      drag: true
    }

    const rowDragConfig: VxeTablePropTypes.RowDragConfig<RowVO> = {
      isCrossDrag: true,
      isSelfToChildDrag: true,
      isToChildDrag: true,
      showGuidesStatus: false
    }

    const columnConfig: VxeTablePropTypes.ColumnConfig<RowVO> = {
    }

    const treeConfig: VxeTablePropTypes.TreeConfig<RowVO> = {
      transform: true,
      rowField: 'id',
      parentField: 'parentId',
      lazy: true,
      hasChild: 'hasChild',
      loadMethod ({ row }) {
        // 异步加载子节点
        return fetchChildListApi(row)
      }
    }

    return {
      tableData,
      rowConfig,
      rowDragConfig,
      columnConfig,
      treeConfig
    }
  },
  methods: {
    resultEvent () {
      const $table = this.$refs.tableRe as VxeTableInstance<RowVO>
      if ($table) {
        const tableData = $table.getFullData()
        console.log(tableData)
      }
    }
  }
})
</script>
