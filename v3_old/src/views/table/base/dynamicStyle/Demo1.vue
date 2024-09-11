<template>
  <div>
    <vxe-table
      border
      :header-cell-style="headerCellStyle"
      :row-style="rowStyle"
      :cell-style="cellStyle"
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
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }
  },
  methods: {
    headerCellStyle ({ column }) {
      if (column.field === 'name') {
        return {
          backgroundColor: '#f60',
          color: '#ffffff'
        }
      }
    },
    rowStyle ({ rowIndex }) {
      if ([2, 3, 5].includes(rowIndex)) {
        return {
          backgroundColor: 'red',
          color: '#ffffff'
        }
      }
    },
    cellStyle ({ row, column }) {
      if (column.field === 'sex') {
        if (row.sex >= '1') {
          return {
            backgroundColor: '#187'
          }
        } else if (row.age === 26) {
          return {
            backgroundColor: '#2db7f5'
          }
        }
      }
    }
  }
}
</script>
