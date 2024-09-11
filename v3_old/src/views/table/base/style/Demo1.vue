<template>
  <div>
    <vxe-table
      border
      class="mytable-style"
      :header-cell-class-name="headerCellClassName"
      :row-class-name="rowClassName"
      :cell-class-name="cellClassName"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="attr1" title="Attr1"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
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
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
::v-deep(.mytable-style.vxe-table .vxe-body--row.row-green) {
  background-color: #187;
  color: #fff;
}
::v-deep(.mytable-style.vxe-table .vxe-header--column.col-blue) {
  background-color: #2db7f5;
  color: #fff;
}
::v-deep(.mytable-style.vxe-table .vxe-body--column.col-red) {
  background-color: red;
  color: #fff;
}
</style>
