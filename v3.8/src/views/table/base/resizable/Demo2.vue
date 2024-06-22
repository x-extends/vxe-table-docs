<template>
  <div>
    <vxe-table
      border
      :column-config="{resizable: true}"
      :row-config="{isHover: true}"
      :data="tableData">
      <vxe-column type="seq" width="60"></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="sex" title="最小列宽" min-width="300"></vxe-column>
      <vxe-column field="age" title="Age" width="300"></vxe-column>
      <vxe-column field="time" title="Time" width="300"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
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
