<template>
  <div>
    <vxe-grid v-bind="gridOptions" @sort-change="sortChangeEvent"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  name: string
  role: string
  num: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      height: 300,
      sortConfig: {
        multiple: true,
        chronological: true
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', sortable: true },
        { field: 'role', title: 'Role', sortable: true },
        { field: 'num', title: 'Num', sortable: true }
      ],
      data: [
        { name: '小红', role: '前端', num: 7 },
        { name: '老王', role: '后端', num: 6 },
        { name: '小红', role: '后端', num: 1 },
        { name: '小明', role: '前端', num: 2 },
        { name: '老徐', role: '测试', num: 3 },
        { name: '老王', role: '前端', num: 3 },
        { name: '老徐', role: '测试', num: 4 },
        { name: '小明', role: '前端', num: 4 },
        { name: '小明', role: '前端', num: 8 },
        { name: '小明', role: '测试', num: 6 },
        { name: '小红', role: '后端', num: 9 },
        { name: '老徐', role: '前端', num: 5 },
        { name: '老徐', role: '测试', num: 1 },
        { name: '小红', role: '前端', num: 4 },
        { name: '小红', role: '前端', num: 2 },
        { name: '小明', role: '测试', num: 3 },
        { name: '老王', role: '前端', num: 6 },
        { name: '老王', role: '后端', num: 4 },
        { name: '老徐', role: '前端', num: 8 },
        { name: '小明', role: '测试', num: 7 }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    sortChangeEvent ({ sortList }) {
      console.info(sortList.map((item) => `${item.field},${item.order}`).join('; '))
    }
  }
})
</script>
