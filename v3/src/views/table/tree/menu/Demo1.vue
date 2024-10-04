<template>
  <div>
    <vxe-toolbar ref="toolbarRef" custom></vxe-toolbar>

    <vxe-table
      show-overflow
      keep-source
      ref="tableRef"
      :column-config="{resizable: true}"
      :tree-config="treeConfig"
      :menu-config="menuConfig"
      :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
      :data="tableData"
      @menu-click="contextMenuClickEvent">
      <vxe-column type="checkbox" width="120" tree-node></vxe-column>
      <vxe-column field="name" title="Name" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.name" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="size" title="Size" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.size" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="type" title="Type" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.type" mode="text"></vxe-input>
        </template>
      </vxe-column>
      <vxe-column field="date" title="Date" :edit-render="{}">
        <template #edit="{ row }">
          <vxe-input v-model="row.date" type="date"></vxe-input>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTableInstance, VxeTablePropTypes, VxeToolbarInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  hasChild?: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
      { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
      { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01', hasChild: true },
      { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
      { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-01', hasChild: true },
      { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
      { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
      { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23666, parentId: null, name: 'Test9', type: 'xlsx', size: 2048, date: '2020-11-01', hasChild: true },
      { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01', hasChild: true },
      { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01', hasChild: true },
      { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01', hasChild: true },
      { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
      { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }
    ]

    const treeConfig: VxeTablePropTypes.TreeConfig<RowVO> = {
      transform: true,
      rowField: 'id',
      parentField: 'parentId'
    }

    const menuConfig: VxeTablePropTypes.MenuConfig<RowVO> = {
      header: {
        options: [
          [
            { code: 'hideCurrColumn', name: '隐藏列', disabled: false },
            { code: 'showAllColumn', name: '取消所有隐藏列', disabled: false }
          ]
        ]
      },
      body: {
        options: [
          [
            { code: 'expand', name: '展开节点', disabled: false },
            { code: 'contract', name: '收缩节点', disabled: false }
          ]
        ]
      },
      visibleMethod: ({ row, type, options }) => {
        const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
        if ($table) {
          if (type === 'body') {
            options.forEach(list => {
              list.forEach(item => {
                if (item.code === 'expand' || item.code === 'contract') {
                  if (row && row.hasChild) {
                    const isExpand = $table.isTreeExpandByRow(row)
                    item.disabled = item.code === 'expand' ? isExpand : !isExpand
                  } else {
                    item.disabled = true
                  }
                }
              })
            })
          }
        }
        return true
      }
    }

    return {
      tableData,
      treeConfig,
      menuConfig
    }
  },
  methods: {
    contextMenuClickEvent ({ menu, row, column }) {
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      if ($table) {
        switch (menu.code) {
          case 'hideCurrColumn':
            $table.hideColumn(column)
            break
          case 'showAllColumn':
            $table.resetColumn()
            break
          case 'expand':
            $table.setTreeExpand(row, true)
            break
          case 'contract':
            $table.setTreeExpand(row, false)
            break
        }
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 将表格和工具栏进行关联
      const $table = this.$refs.tableRef as VxeTableInstance<RowVO>
      const $toolbar = this.$refs.toolbarRef as VxeToolbarInstance
      if ($table && $toolbar) {
        $table.connect($toolbar)
      }
    })
  }
})
</script>
