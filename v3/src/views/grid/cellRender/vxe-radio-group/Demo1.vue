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
  hobby: string
}

export default Vue.extend({
  data () {
    const hobbyCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeRadioGroup',
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
        { field: 'hobby', title: '兴趣爱好', width: 300, cellRender: hobbyCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', hobby: '' },
        { id: 10002, name: 'Test2', role: 'Test', hobby: '2' },
        { id: 10003, name: 'Test3', role: 'PM', hobby: '1' }
      ]
    }

    return {
      gridOptions,
      hobbyCellRender
    }
  }
})
</script>
