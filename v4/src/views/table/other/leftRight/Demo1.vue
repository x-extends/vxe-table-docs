<template>
  <div>
    <vxe-split height="600" border padding>
      <vxe-split-pane width="200" min-width="100">
        <vxe-tree v-bind="treeOptions" v-on="treeEvents"></vxe-tree>
      </vxe-split-pane>

      <vxe-split-pane min-width="300">
        <vxe-table
          border
          show-overflow
          height="100%"
          :loading="loading"
          :data="tableData">
          <vxe-column field="seq" type="seq" width="70"></vxe-column>
          <vxe-column field="name" title="Name"></vxe-column>
          <vxe-column field="sex" title="Sex"></vxe-column>
          <vxe-column field="age" title="Age"></vxe-column>
        </vxe-table>
      </vxe-split-pane>
    </vxe-split>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTreeProps, VxeTreeListeners } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

interface NodeVO {
  title: string
  id: string
  parentId?: string | null
}

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const treeOptions = reactive<VxeTreeProps<NodeVO>>({
  transform: true,
  keyField: 'id',
  parentField: 'parentId',
  titleField: 'title',
  nodeConfig: {
    isHover: true,
    isCurrent: true
  },
  data: [
    { title: '节点2', id: '2', parentId: null },
    { title: '节点3', id: '3', parentId: null },
    { title: '节点3-1', id: '31', parentId: '3' },
    { title: '节点3-2', id: '32', parentId: '3' },
    { title: '节点3-2-1', id: '321', parentId: '32' },
    { title: '节点3-2-2', id: '322', parentId: '32' },
    { title: '节点3-3', id: '33', parentId: '3' },
    { title: '节点3-3-1', id: '331', parentId: '33' },
    { title: '节点3-3-2', id: '332', parentId: '33' },
    { title: '节点3-3-3', id: '333', parentId: '33' },
    { title: '节点3-4', id: '34', parentId: '3' },
    { title: '节点4', id: '4', parentId: null },
    { title: '节点4-1', id: '41', parentId: '4' },
    { title: '节点4-1-1', id: '411', parentId: '42' },
    { title: '节点4-1-2', id: '412', parentId: '42' },
    { title: '节点4-2', id: '42', parentId: '4' },
    { title: '节点4-3', id: '43', parentId: '4' },
    { title: '节点4-3-1', id: '431', parentId: '43' },
    { title: '节点4-3-2', id: '432', parentId: '43' },
    { title: '节点5', id: '5', parentId: null }
  ]
})

const treeEvents: VxeTreeListeners = {
  currentChange () {
    loadRightList()
  }
}

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const loadRightList = () => {
  // 模拟后端接口
  loading.value = true
  setTimeout(() => {
    const list = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10005, name: 'Test5', role: 'PM', sex: 'Man', age: 44, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 28, address: 'Guangzhou' },
      { id: 10007, name: 'Test7', role: 'PM', sex: 'Man', age: 46, address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'Designer', sex: 'Women', age: 38, address: 'Shanghai' }
    ]
    tableData.value = XEUtils.sample(list, XEUtils.random(1, 5))
    loading.value = false
  }, 200)
}

loadRightList()
</script>
