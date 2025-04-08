<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div>Name：{{ row.name }}</div>
        <div>Role：{{ row.role }}</div>
        <div>Age：{{ row.age }}</div>
        <div>Sex：{{ row.sex }}</div>
        <div>Address：{{ row.address }}</div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      treeConfig: {
        transform: true,
        rowField: 'id',
        parentField: 'parentId'
      },
      columns: [
        { field: 'name', title: 'Name', minWidth: 300, fixed: 'left', treeNode: true },
        { type: 'expand', width: 60, fixed: 'left', slots: { content: 'expand_content' } },
        { field: 'size', title: 'Size', width: 160 },
        { field: 'type', title: 'Type', width: 180 },
        { field: 'attr1', title: 'Attr1', minWidth: 300 },
        { field: 'attr2', title: 'Attr2', minWidth: 400 },
        { field: 'attr3', title: 'Attr3', minWidth: 300 },
        { field: 'attr4', title: 'Attr4', minWidth: 360 },
        { field: 'date', title: 'Date', width: 200, fixed: 'right' }
      ],
      data: [
        { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'Test5 Test5 Test5 Test5 Test5 Test5', type: 'avi', size: 0, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9 Test9', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test10', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test13', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'Test16', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
