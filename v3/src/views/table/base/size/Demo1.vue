<template>
  <div>
    <vxe-table
      border
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column type="radio" width="60"></vxe-column>
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="age" title="Age" sortable></vxe-column>
      <vxe-column field="sex" title="Sex" :filters="sexOptions"></vxe-column>
      <vxe-column field="sex2" title="Sex2" sortable :filters="sexOptions" :filter-multiple="false"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
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
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' }
    ]

    const sexOptions = [
      { value: '0', label: '女' },
      { value: '1', label: '男' }
    ]

    return {
      tableData,
      sexOptions
    }
  }
})
</script>
