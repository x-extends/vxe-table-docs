<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  keyId: number
  name: string
  type: string
  size: number
  date: string
  childList?: RowVO[]
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      treeConfig: {
        rowField: 'keyId',
        childrenField: 'childList'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 300, treeNode: true },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        { keyId: 10000, name: 'Test1', type: 'mp3', size: 1024, date: '2020-08-01' },
        {
          keyId: 10050,
          name: 'Test2',
          type: 'mp4',
          size: 0,
          date: '2021-04-01',
          childList: [
            {
              keyId: 24300,
              name: 'Test3',
              type: 'avi',
              size: 1024,
              date: '2020-03-01',
              childList: [
                { keyId: 20045, name: 'Test4', type: 'html', size: 600, date: '2021-04-01' },
                {
                  keyId: 10053,
                  name: 'Test5',
                  type: 'avi',
                  size: 0,
                  date: '2021-04-01',
                  childList: [
                    { keyId: 24330, name: 'Test6', type: 'txt', size: 25, date: '2021-10-01' },
                    { keyId: 21011, name: 'Test7', type: 'pdf', size: 512, date: '2020-01-01' },
                    { keyId: 22200, name: 'Test8', type: 'js', size: 1024, date: '2021-06-01' }]
                }
              ]
            }]
        },
        {
          keyId: 23666,
          name: 'Test9',
          type: 'xlsx',
          size: 2048,
          date: '2020-11-01',
          childList: [
            {
              keyId: 23677,
              name: 'Test10',
              type: 'js',
              size: 1024,
              date: '2021-06-01',
              childList: [
                { keyId: 23671, name: 'Test11', type: 'js', size: 1024, date: '2021-06-01' },
                { keyId: 23672, name: 'Test12', type: 'js', size: 1024, date: '2021-06-01' }]
            },
            {
              keyId: 23688,
              name: 'Test13',
              type: 'js',
              size: 1024,
              date: '2021-06-01',
              childList: [
                { keyId: 23681, name: 'Test14', type: 'js', size: 1024, date: '2021-06-01' },
                { keyId: 23682, name: 'Test15', type: 'js', size: 1024, date: '2021-06-01' }]
            }
          ]
        },
        {
          keyId: 24555,
          name: 'Test16',
          type: 'avi',
          size: 224,
          date: '2020-10-01',
          childList: [
            { keyId: 24566, name: 'Test17', type: 'js', size: 1024, date: '2021-06-01' },
            { keyId: 24577, name: 'Test18', type: 'js', size: 1024, date: '2021-06-01' }]
        }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
