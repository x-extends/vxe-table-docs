<template>
  <div>
    <vxe-table
      border
      show-overflow
      :column-config="{resizable: true}"
      :data="tableData">
      <vxe-column type="seq" width="60" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="100" fixed="left"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100" fixed="left"></vxe-column>
      <vxe-column field="age" title="Age" width="100" fixed="left"></vxe-column>
      <vxe-column field="atrr1" title="atrr1" width="200"></vxe-column>
      <vxe-column field="atrr2" title="atrr2 其他2" width="200"></vxe-column>
      <vxe-column field="atrr3" title="atrr3" width="200"></vxe-column>
      <vxe-column field="atrr4" title="atrr4 其他4" width="200"></vxe-column>
      <vxe-column field="date" title="Date" width="100" fixed="right"></vxe-column>
      <vxe-column field="time" title="Time" width="100" fixed="right"></vxe-column>
      <vxe-column field="address" title="Address" width="100" fixed="right"></vxe-column>
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
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' }
      ]
    }
  }
}
</script>
