<template>
  <div>
    <vxe-button status="primary" @click="updateHeight(gridOptions.data[1], 50)">设置第二行高度50</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> & { data: RowVO[] } = {
      border: true,
      cellConfig: {
        height: 60
      },
      rowConfig: {
        resizable: true
      },
      resizableConfig: {
        isDblclickAutoHeight: true
      },
      columns: [
        { type: 'seq', width: 70, rowResize: true },
        { field: 'name', title: 'Name', width: 200 },
        { field: 'role', title: 'Role', width: 100 },
        { field: 'age', title: 'Age', width: 100 },
        { field: 'time', title: 'Time', width: 200 },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2 Test2', role: 'Test Test Test5fffff55 Testgggg22222 Test1hhhh1111 Testjjjjjjj11 Teststjjjjjjj11 Teststjjjjjjj11 Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'Man lMan kkkkkkkkkMan Man jjjjjjMan Man jjjMan Man', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    updateHeight (rowOrId: RowVO | string | number, height: number) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.setRowHeight(rowOrId, height)
      }
    }
  }
})
</script>
