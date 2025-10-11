<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #expand_content="{ row }">
        <div style="height: 220px;padding: 16px;">
          <vxe-grid
            border
            height="100%"
            :columns="row.subColumns"
            :data="row.subData">
          </vxe-grid>
        </div>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnProps } from 'vxe-table'

interface SubVO {
  [key: string]: string
}

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
  subColumns: VxeColumnProps[]
  subData: SubVO[]
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
        { type: 'checkbox', width: 120, treeNode: true },
        { type: 'expand', width: 60, slots: { content: 'expand_content' } },
        { field: 'name', title: 'Name' },
        { field: 'size', title: 'Size' },
        { field: 'type', title: 'Type' },
        { field: 'date', title: 'Date' }
      ],
      data: [
        {
          id: 10000,
          parentId: null,
          name: 'Test1',
          type: 'mp3',
          size: 1024,
          date: '2020-08-01',
          subColumns: [
            { field: 'bb', title: 'B' },
            { field: 'cc', title: 'C' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' },
            { aa: '44', bb: '55', cc: '66' },
            { aa: '77', bb: '88', cc: '99' },
            { aa: '2', bb: '7', cc: '8' }
          ]
        },
        {
          id: 10050,
          parentId: null,
          name: 'Test2',
          type: 'mp4',
          size: 0,
          date: '2021-04-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'bb', title: 'B' }
          ],
          subData: [
            { aa: '44', bb: '55', cc: '66' },
            { aa: '77', bb: '88', cc: '99' }
          ]
        },
        {
          id: 24300,
          parentId: 10050,
          name: 'Test3',
          type: 'avi',
          size: 1024,
          date: '2020-03-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'bb', title: 'B' },
            { field: 'cc', title: 'C' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' },
            { aa: '44', bb: '55', cc: '66' },
            { aa: '77', bb: '88', cc: '99' }
          ]
        },
        {
          id: 20045,
          parentId: 24300,
          name: 'Test4',
          type: 'html',
          size: 600,
          date: '2021-04-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'bb', title: 'B' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' }
          ]
        },
        {
          id: 10053,
          parentId: 24300,
          name: 'Test5',
          type: 'avi',
          size: 0,
          date: '2021-04-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'cc', title: 'C' },
            { field: 'dd', title: 'D' }
          ],
          subData: [
            { aa: '77', bb: '88', cc: '99' }
          ]
        },
        {
          id: 24555,
          parentId: null,
          name: 'Test16',
          type: 'avi',
          size: 224,
          date: '2020-10-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'cc', title: 'C' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' },
            { aa: '77', bb: '88', cc: '99' }
          ]
        },
        {
          id: 24566,
          parentId: 24555,
          name: 'Test17',
          type: 'js',
          size: 1024,
          date: '2021-06-01',
          subColumns: [
            { field: 'bb', title: 'B' },
            { field: 'cc', title: 'C' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' },
            { aa: '44', bb: '55', cc: '66' },
            { aa: '77', bb: '88', cc: '99' }
          ]
        },
        {
          id: 24577,
          parentId: 24555,
          name: 'Test18',
          type: 'js',
          size: 1024,
          date: '2021-06-01',
          subColumns: [
            { field: 'aa', title: 'A' },
            { field: 'bb', title: 'B' },
            { field: 'cc', title: 'C' },
            { field: 'dd', title: 'D' }
          ],
          subData: [
            { aa: '11', bb: '22', cc: '33' },
            { aa: '44', bb: '55', cc: '66' },
            { aa: '77', bb: '88', cc: '99' },
            { aa: '2', bb: '7', cc: '8' }
          ]
        }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
