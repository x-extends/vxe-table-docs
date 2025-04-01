<template>
  <div>
    <p>
      <vxe-button @click="getTreeExpansionEvent">获取已展开</vxe-button>
      <vxe-button @click="expandAllEvent">展开所有</vxe-button>
      <vxe-button @click="clearExpandEvent">关闭所有</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      :column-config="columnConfig"
      :tree-config="treeConfig"
      :data="tableData"
      @toggle-tree-expand="toggleExpandChangeEvent">
      <vxe-column field="name" title="Name" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  type: string
  size: number
  date: string,
  children?: RowVO[]
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 1000, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
      {
        id: 1005,
        name: 'Test2',
        type: 'mp4',
        size: 0,
        date: '2021-04-01',
        children: [
          { id: 24300, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
          { id: 20045, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
          {
            id: 10053,
            name: 'test abc96',
            type: 'avi',
            size: 0,
            date: '2021-04-01',
            children: [
              { id: 24330, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
              { id: 21011, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
              { id: 22200, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
            ]
          }
        ]
      },
      { id: 23666, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
      { id: 24555, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
    ]

    const columnConfig: VxeTablePropTypes.ColumnConfig = {
      resizable: true
    }

    const treeConfig: VxeTablePropTypes.TreeConfig = {
    }

    return {
      tableData,
      columnConfig,
      treeConfig
    }
  },
  methods: {
    toggleExpandChangeEvent (params: any) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const { row, expanded } = params
        console.log('节点展开事件', expanded, '获取父节点：', $table.getParentRow(row))
      }
    },
    getTreeExpansionEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        const treeExpandRecords = $table.getTreeExpandRecords()
        VxeUI.modal.alert(treeExpandRecords.length)
      }
    },
    expandAllEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.setAllTreeExpand(true)
      }
    },
    clearExpandEvent () {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        $table.clearTreeExpand()
      }
    }
  }
})
</script>
