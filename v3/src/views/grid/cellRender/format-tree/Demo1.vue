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
  city: string | string[] | null
}

export default Vue.extend({
  data () {
    const cityCellRender: VxeColumnPropTypes.CellRender = {
      name: 'FormatTreeSelect',
      options: [
        {
          label: '广东省',
          value: '1',
          children: [
            { label: '深圳市', value: '1-1' },
            { label: '广州市', value: '1-2' }
          ]
        },
        {
          label: '北京',
          value: '2',
          children: [
            { label: '东城区', value: '2-1' },
            { label: '西城区', value: '2-2' }
          ]
        }
      ]
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name', minWidth: 200 },
        { field: 'city', title: 'City', width: 300, cellRender: cityCellRender }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', city: null },
        { id: 10002, name: 'Test2', role: 'Test', city: '1-2' },
        { id: 10003, name: 'Test3', role: 'PM', city: '1-1' },
        { id: 10003, name: 'Test4', role: 'Develop', city: ['1-1', '2-1'] }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
