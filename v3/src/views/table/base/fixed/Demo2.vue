<template>
  <div>
    <vxe-table
      border
      show-overflow
      :data="tableData">
      <vxe-colgroup title="操作" fixed="left">
        <vxe-column type="seq" width="70"></vxe-column>
        <vxe-column type="checkbox" width="70"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="name" title="Name" min-width="800"></vxe-column>
      <vxe-column field="role" title="Role" min-width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="500"></vxe-column>
      <vxe-colgroup title="其他信息" fixed="right">
        <vxe-column field="age" title="Age" width="100"></vxe-column>
        <vxe-column field="address" title="Address" width="200"></vxe-column>
      </vxe-colgroup>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    return {
      tableData
    }
  }
})
</script>
