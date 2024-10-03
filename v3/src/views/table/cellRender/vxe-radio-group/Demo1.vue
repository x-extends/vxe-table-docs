<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name" min-width="200"></vxe-column>
      <vxe-column field="hobby" title="兴趣爱好" width="300" :cell-render="hobbyCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  hobby: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', hobby: '' },
      { id: 10002, name: 'Test2', role: 'Test', hobby: '2' },
      { id: 10003, name: 'Test3', role: 'PM', hobby: '1' }
    ]

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

    return {
      tableData,
      hobbyCellRender
    }
  }
})
</script>
