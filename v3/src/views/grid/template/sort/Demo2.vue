<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      columns: [],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 100, address: 'test abc' },
        { id: 10002, name: 'Test3', role: 'Test', sex: '1', age: 22, num: 234, address: 'Guangzhou' },
        { id: 10003, name: 'Test5', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' },
        { id: 10003, name: 'Test4', role: 'Test', sex: '1', age: 8, num: 10, address: 'Shanghai' }
      ]
    }

    return {
      gridOptions
    }
  },
  created () {
    this.gridOptions.columns = [
      { type: 'seq', width: 70 },
      {
        field: 'name',
        title: 'Name',
        width: 200,
        sortable: true,
        slots: {
          sort: ({ column }) => {
            return <vxe-button mode="text" title="点击排序" status={column.order ? 'primary' : ''} icon={column.order === 'desc' ? 'vxe-icon-sort-alpha-desc' : 'vxe-icon-sort-alpha-asc'} onClick={ () => this.sortEvent(column.field, column.order) }></vxe-button>
          }
        }
      },
      { field: 'sex', title: 'Sex' },
      {
        field: 'num',
        title: 'Number',
        sortable: true,
        slots: {
          sort: ({ column }) => {
            return <vxe-button mode="text" title="点击排序" status={column.order ? 'primary' : ''} icon={column.order === 'desc' ? 'vxe-icon-sort-numeric-desc' : 'vxe-icon-sort-numeric-asc'} onClick={ () => this.sortEvent(column.field, column.order) }></vxe-button>
          }
        }
      },
      { field: 'age', title: 'Age' },
      { field: 'address', title: 'Address' }
    ]
  },
  methods: {
    sortEvent (field: string, order: string | null) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        // 触发事件用 setSortByEvent
        $grid.setSort({
          field,
          order: order === 'desc' ? 'asc' : (order === 'asc' ? null : 'desc')
        }, true)
      }
    }
  }
})
</script>
