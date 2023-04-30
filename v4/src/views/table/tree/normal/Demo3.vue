<template>
  <div>
    <vxe-table
      show-overflow
      ref="xTreeRef"
      border="inner"
      :row-config="{isHover: true, useKey: true}"
      :show-header="false"
      :data="tableData"
      :checkbox-config="{labelField: 'name'}"
      :scroll-y="{enabled: false}"
      :tree-config="{transform: true, accordion: true, line: true, iconOpen: 'vxe-icon-square-minus-fill', iconClose: 'vxe-icon-square-plus-fill'}">
      <vxe-column type="checkbox" tree-node>
        <template #default="{ row }">
          <span>
            <template v-if="row.children && row.children.length">
              <i class="tree-node-icon" :class="hasRowExpand(row) ? 'vxe-icon-folder-open' : 'vxe-icon-folder'"></i>
            </template>
            <template v-else>
              <i class="tree-node-icon vxe-icon-file-txt"></i>
            </template>
            <span>{{ row.name }}</span>
          </span>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="140">
        <template #default="{ row }">
          <vxe-button type="text" icon="vxe-icon-setting-fill"></vxe-button>
          <vxe-button type="text" icon="vxe-icon-edit"></vxe-button>
          <vxe-button type="text" icon="vxe-icon-delete" @click="removeRowEvent(row)"></vxe-button>
          <vxe-button type="text" icon="vxe-icon-home-fill"></vxe-button>
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VXETable, VxeTableInstance } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const xTreeRef = ref<VxeTableInstance>()

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
])

const hasRowExpand = (row: RowVO) => {
  const $table = xTreeRef.value
  if ($table) {
    return $table.isTreeExpandByRow(row)
  }
  return false
}

const removeRowEvent = async (row: RowVO) => {
  const type = await VXETable.modal.confirm('您确定要删除吗？')
  if (type === 'confirm') {
    const matchObj = XEUtils.findTree(tableData.value, item => item.id === row.id)
    if (matchObj) {
      // 从树节点中移除
      matchObj.items.splice(matchObj.index, 1)
    }
  }
}
</script>
