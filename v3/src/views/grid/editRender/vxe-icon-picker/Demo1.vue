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
  name: string
  icon: string
  iconList: string[]
}
export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 180, editRender: { name: 'VxeInput', props: { clearable: true } } },
        { field: 'icon', title: '图标', width: 100, editRender: { name: 'VxeIconPicker' } }
      ],
      data: [
        { id: 10001, name: 'Test1', icon: '', iconList: [] },
        { id: 10002, name: 'Test2', icon: 'vxe-icon-home', iconList: [] }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
