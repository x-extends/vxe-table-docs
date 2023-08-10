<template>
  <div>
    <vxe-table
      border
      ref="tableRef"
      height="400"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :menu-config="menuConfig"
      :tree-config="treeConfig"
      :data="tableData"
      :scroll-y="{enabled: true}"
      @menu-click="contextMenuClickEvent">
      <vxe-column field="id" title="Id" width="400" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeTableInstance, VxeTablePropTypes, VxeTableEvents } from 'vxe-table'

interface RowVO {
  id: number
  parentKey: number | null
  name: string
  type: string
  size: number
  date: string
  hasChild?: boolean
}

const tableRef = ref<VxeTableInstance<RowVO>>()
let key = 1

const tableData = ref<RowVO[]>([
  { id: ++key, parentKey: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: ++key, parentKey: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
  { id: ++key, parentKey: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
  { id: ++key, parentKey: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-04' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-04-01' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-03' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-09' },
  { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-05-01' }
])

const treeConfig = reactive<VxeTablePropTypes.TreeConfig<RowVO>>({
  lazy: true,
  transform: true,
  rowField: 'id',
  parentField: 'parentId',
  hasChild: 'hasChild',
  loadMethod ({ row }) {
    // 异步加载子节点
    return new Promise(resolve => {
      // 模拟后台接口
      setTimeout(() => {
        const childs = [
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: false },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: true },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-08-05', hasChild: false },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: true },
          { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false }
        ]
        resolve(childs)
      }, 500)
    })
  }
})

const menuConfig = reactive<VxeTablePropTypes.MenuConfig<RowVO>>({
  body: {
    options: [
      [
        { code: 'clearLoaded', name: '清除加载状态', disabled: false },
        { code: 'reloadNodes', name: '重新加载子节点', disabled: false },
        { code: 'expand', name: '展开节点', disabled: false },
        { code: 'contract', name: '收起节点', disabled: false }
      ]
    ]
  },
  visibleMethod ({ row, type, options }) {
    const $table = tableRef.value
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
})

const contextMenuClickEvent: VxeTableEvents.MenuClick<RowVO> = ({ menu, row }) => {
  const $table = tableRef.value
  if ($table) {
    switch (menu.code) {
      case 'clearLoaded':
        $table.clearTreeExpandLoaded(row)
        break
      case 'reloadNodes':
        $table.reloadTreeExpand(row)
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
</script>
