<template>
  <div>
    <vxe-table
      border
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :loading="loading"
      :checkbox-config="{labelField: 'name'}"
      :tree-config="treeConfig"
      :data="tableData">
      <vxe-column type="checkbox" title="Name" width="400" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: null | number
  name: string
  type: string
  size: number
  date: string,
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
    const tableData: RowVO[] = []

    const treeConfig: VxeTablePropTypes.TreeConfig<RowVO> = {
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
    }

    return {
      loading: false,
      tableData,
      treeConfig
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      // 默认展开的节点必须在数据初始化之前赋值且只会执行一次
      this.treeConfig.expandRowKeys = [10050, 23666]
      this.tableData = [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
        { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
      ]
    }, 300)
  }
})
</script>
