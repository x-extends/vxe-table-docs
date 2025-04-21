<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
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
        transform: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300, treeNode: true, sortable: true },
        { field: 'size', title: 'Size', sortable: true },
        { field: 'type', title: 'Type', sortable: true },
        { field: 'date', title: 'Date', sortable: true }
      ],
      data: [
        { id: 10000, parentId: null, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-22' },
        { id: 10050, parentId: null, name: 'Abc2', type: 'mp4', size: 0, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 256, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'Abc4', type: 'html', size: 600, date: '2021-04-17' },
        { id: 10053, parentId: 24300, name: 'Test5', type: 'avi', size: 0, date: '2021-04-25' },
        { id: 24330, parentId: 10053, name: 'Abc6', type: 'avi', size: 25, date: '2021-10-23' },
        { id: 21011, parentId: 10053, name: 'Test7', type: 'avi', size: 512, date: '2020-01-15' },
        { id: 22200, parentId: 10053, name: 'Abc8', type: 'mp4', size: 1024, date: '2021-06-19' },
        { id: 23666, parentId: null, name: 'Test9', type: 'mp4', size: 4086, date: '2020-11-21' },
        { id: 23677, parentId: 23666, name: 'Abc10', type: 'js', size: 7226, date: '2021-06-06' },
        { id: 23671, parentId: 23677, name: 'Test11', type: 'html', size: 8340, date: '2021-06-05' },
        { id: 23672, parentId: 23677, name: 'Abc12', type: 'css', size: 512, date: '2021-06-03' },
        { id: 23688, parentId: 23666, name: 'Test13', type: 'mp4', size: 256, date: '2021-06-12' },
        { id: 23681, parentId: 23688, name: 'Test14', type: 'mp3', size: 10240, date: '2021-06-11' },
        { id: 23682, parentId: 23688, name: 'Abc15', type: 'js', size: 4086, date: '2021-06-08' },
        { id: 24555, parentId: null, name: 'Abc16', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Abc17', type: 'html', size: 1024, date: '2021-06-16' },
        { id: 24577, parentId: 24555, name: 'Test18', type: 'js', size: 9600, date: '2021-06-14' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
