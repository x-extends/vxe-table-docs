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

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  parentId: null | number
  name: string
  type: string
  size: number
  date: string,
  hasChild?: boolean
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const treeConfig = reactive<VxeTablePropTypes.TreeConfig>({
  lazy: true,
  transform: true,
  hasChild: 'hasChild',
  expandRowKeys: [],
  iconOpen: 'vxe-icon-folder-open',
  iconClose: 'vxe-icon-folder',
  loadMethod ({ row }) {
    // 异步加载子节点
    return new Promise(resolve => {
      setTimeout(() => {
        const childs = [
          { id: row.id + 100000, parentId: row.id, name: row.name + 'Test45', type: 'mp4', size: 0, date: '2021-10-03', hasChild: true },
          { id: row.id + 150000, parentId: row.id, name: row.name + 'Test56', type: 'mp3', size: 0, date: '2021-07-09', hasChild: false }
        ]
        resolve(childs)
      }, 500)
    })
  }
})

loading.value = true
setTimeout(() => {
  loading.value = false
  // 默认展开的节点必须在数据初始化之前赋值且只会执行一次
  treeConfig.expandRowKeys = [10050, 23666]
  tableData.value = [
    { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
    { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
    { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
    { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
  ]
}, 300)
</script>
