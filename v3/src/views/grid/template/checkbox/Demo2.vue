<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {}

    return {
      gridOptions
    }
  },
  created () {
    this.gridOptions = {
      border: true,
      columns: [
        {
          type: 'checkbox',
          width: 60,
          slots: {
            header: ({ checked, indeterminate }) => {
              return <span
                class="custom-checkbox"
                onClick={
                  () => {
                    this.toggleAllCheckboxEvent()
                  }
                }>
                {
                  indeterminate
                    ? <i class="vxe-icon-square-minus-fill"></i>
                    : (
                        checked ? <i class="vxe-icon-square-checked-fill"></i> : <i class="vxe-icon-checkbox-unchecked"></i>
                      )
                }
              </span>
            },
            checkbox: ({ row, checked, indeterminate }) => {
              return <span
                class="custom-checkbox"
                onClick={
                  () => {
                    this.toggleCheckboxEvent(row)
                  }
                }>
                {
                  indeterminate
                    ? <i class="vxe-icon-square-minus-fill"></i>
                    : (
                        checked ? <i class="vxe-icon-square-checked-fill"></i> : <i class="vxe-icon-checkbox-unchecked"></i>
                      )
                }
              </span>
            }
          }
        },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'num', title: 'Number' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai' }
      ]
    }
  },
  methods: {
    toggleAllCheckboxEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleAllCheckboxRow()
      }
    },
    toggleCheckboxEvent (row) {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.toggleCheckboxRow(row)
      }
    }
  }
})
</script>
