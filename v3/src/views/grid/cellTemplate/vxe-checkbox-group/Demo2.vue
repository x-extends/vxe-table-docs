<template>
  <div>
    <vxe-grid v-bind="gridOptions">
      <template #hobbyList1Default="{ row  }">
        <vxe-checkbox-group v-model="row.checked1" :options="hobbyOptions"></vxe-checkbox-group>
      </template>

      <template #hobbyList2Default="{ row  }">
        <vxe-checkbox-group v-model="row.checked2" :options="hobbyOptions"></vxe-checkbox-group>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  hobbyList1: string[]
  hobbyList2: string[]
}

export default Vue.extend({
  data () {
    const hobbyOptions = [
      { label: '爬山', value: '1' },
      { label: '游泳', value: '2' },
      { label: '干饭', value: '3' }
    ]

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      rowConfig: {
        keyField: 'id'
      },
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', hobbyList1: [], hobbyList2: ['1', '2'] },
        { id: 10002, name: 'Test2', role: 'Test', hobbyList1: ['2'], hobbyList2: [] },
        { id: 10003, name: 'Test3', role: 'PM', hobbyList1: ['1', '3'], hobbyList2: ['2'] }
      ]
    }

    return {
      gridOptions,
      hobbyOptions
    }
  },
  created () {
    this.gridOptions.columns = [
      { type: 'seq', width: 70 },
      { field: 'name', title: 'Name', minWidth: 200 },
      {
        field: 'hobbyList1',
        title: '只读',
        width: 300,
        slots: {
          default: ({ row }) => {
            return <vxe-checkbox-group v-model={row.hobbyList1} options={this.hobbyOptions}></vxe-checkbox-group>
          }
        }
      },
      {
        field: 'hobbyList2',
        title: '编辑',
        width: 300,
        slots: {
          default: ({ row }) => {
            return <vxe-checkbox-group v-model={row.hobbyList2} options={this.hobbyOptions}></vxe-checkbox-group>
          }
        }
      }
    ]
  }
})
</script>
