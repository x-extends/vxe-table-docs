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
  hobbyList: string[]
}

export default Vue.extend({
  data () {
    const hobbyListCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeCheckboxGroup',
      props: {
        disabled: true
      },
      options: [
        { label: '爬山', value: '1' },
        { label: '游泳', value: '2' },
        { label: '干饭', value: '3' }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'hobbyList', title: '兴趣爱好', width: 300, cellRender: hobbyListCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', hobbyList: [] },
        { id: 10002, name: 'Test2', role: 'Test', hobbyList: ['2'] },
        { id: 10003, name: 'Test3', role: 'PM', hobbyList: ['1', '3'] }
      ]
    }

    return {
      gridOptions,
      hobbyListCellRender
    }
  }
})
</script>
