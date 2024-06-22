<template>
  <div>
    <div style="overflow: hidden; height: 500px">
      <vxe-table
        border
        height="40%"
        :data="tableData1">
        <vxe-column type="seq" width="60"></vxe-column>
        <vxe-column field="name" title="Name"></vxe-column>
        <vxe-column field="sex" title="Sex"></vxe-column>
        <vxe-column field="age" title="Age"></vxe-column>
        <vxe-column field="address" title="Address" show-overflow></vxe-column>
      </vxe-table>
      <vxe-table
        border
        height="60%"
        :data="tableData2">
        <vxe-column type="seq" width="60" fixed="left"></vxe-column>
        <vxe-column field="name" title="Name" width="300"></vxe-column>
        <vxe-column field="sex" title="Sex" width="300"></vxe-column>
        <vxe-column field="age" title="Age" width="300"></vxe-column>
        <vxe-column field="date13" title="Date" width="300"></vxe-column>
        <vxe-column field="address" title="Address" width="200" fixed="right" show-overflow></vxe-column>
      </vxe-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData1: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      tableData2: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ]
    }
  }
}
</script>
