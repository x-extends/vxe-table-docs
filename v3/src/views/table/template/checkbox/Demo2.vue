<template>
  <div>
    <vxe-table border :data="tableData">
      <vxe-column field="checked1" title="列1" width="60">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checked1"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="checked2" title="列2" width="100">
        <template #default="{ row }">
          <vxe-checkbox v-model="row.checked2"></vxe-checkbox>
          <vxe-checkbox v-model="row.checked3"></vxe-checkbox>
        </template>
      </vxe-column>
      <vxe-column field="name" title="Name" width="160"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Number"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  num: number
  address: string
  checked1: boolean
  checked2: boolean
  checked3: boolean
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: '0', age: 28, num: 234, address: 'test abc', checked1: false, checked2: false, checked3: false },
      { id: 10002, name: 'Test2', role: 'Test', sex: '1', age: 22, num: 34, address: 'Guangzhou', checked1: false, checked2: false, checked3: false },
      { id: 10003, name: 'Test3', role: 'PM', sex: '0', age: 32, num: 12, address: 'Shanghai', checked1: false, checked2: false, checked3: false }
    ]

    return {
      tableData
    }
  }
})
</script>
