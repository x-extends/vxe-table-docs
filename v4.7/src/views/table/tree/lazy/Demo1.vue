<template>
  <div>
    <p>
      <vxe-button @click="expandEvent1">切换第二行展开</vxe-button>
      <vxe-button @click="expandEvent2">设置第二、四行展开</vxe-button>
      <vxe-button @click="expandEvent3">展开所有</vxe-button>
      <vxe-button @click="expandEvent4">关闭所有</vxe-button>
    </p>

    <vxe-table
      border
      ref="tableRef"
      :row-config="{keyField: 'id'}"
      :column-config="{resizable: true}"
      :tree-config="treeConfig"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" width="400" tree-node></vxe-column>
      <vxe-column field="size" title="Size"></vxe-column>
      <vxe-column field="type" title="Type"></vxe-column>
      <vxe-column field="date" title="Date"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTablePropTypes, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  hasChild?: boolean
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01', hasChild: true },
  { id: 23666, parentId: null, name: 'Test23', type: 'mp4', size: 0, date: '2021-01-02', hasChild: true },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' }
])

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

const treeConfig = reactive<VxeTablePropTypes.TreeConfig<RowVO>>({
  transform: true,
  rowField: 'id',
  parentField: 'parentId',
  lazy: true,
  hasChild: 'hasChild',
  loadMethod ({ row }) {
    // 异步加载子节点
    return fetchChildListApi(row)
  }
})

const expandEvent1 = () => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleTreeExpand(tableData.value[1])
  }
}

const expandEvent2 = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setTreeExpand([tableData.value[1], tableData.value[3]], true)
  }
}

const expandEvent3 = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const expandEvent4 = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}
</script>
