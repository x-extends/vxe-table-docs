<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  num: number | null
}

export default Vue.extend({
  data () {
    const numCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeRate',
      props: {
        disabled: true
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'num', title: '只读', width: 300, cellRender: numCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', num: null },
        { id: 10002, name: 'Test2', role: 'Test', num: 4 },
        { id: 10003, name: 'Test3', role: 'PM', num: 2 }
      ]
    }

    return {
      gridOptions,
      numCellRender
    }
  }
})
</script>
