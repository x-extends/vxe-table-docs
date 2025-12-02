<template>
  <div>
    <vxe-grid class="mygrid-style1" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

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
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      headerCellClassName ({ column }) {
        if (column.field === 'name') {
          return 'col-blue'
        }
        return null
      },
      rowClassName ({ rowIndex }) {
        if ([2, 3, 5].includes(rowIndex)) {
          return 'row-green'
        }
        return null
      },
      cellClassName ({ row, column }) {
        if (column.field === 'sex') {
          if (row.sex >= '1') {
            return 'col-red'
          } else if (row.age === 26) {
            return 'col-orange'
          }
        }
        return null
      },
      columns: [
        { type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'attr1', title: 'Attr1' },
        { field: 'address', title: 'Address', showOverflow: true }
      ],
      data: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>

<style lang="scss">
.mygrid-style1.vxe-grid .vxe-body--row.row-green {
  background-color: #187;
  color: #fff;
}
.mygrid-style1.vxe-grid .vxe-header--column.col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.mygrid-style1.vxe-grid .vxe-body--column.col-red {
  background-color: red;
  color: #fff;
}
</style>
