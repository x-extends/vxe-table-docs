<template>
  <div>
    <vxe-table
      border
      height="500"
      :data="tableData"
      :checkbox-config="checkboxConfig">
      <vxe-column type="checkbox" title="All"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

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
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Women', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Test', sex: 'Women', age: 38, address: 'Shenzhen' },
      { id: 10007, name: 'Test7', role: 'Develop', sex: 'Women', age: 29, address: 'Shenzhen' }
    ]

    const checkboxConfig: VxeTablePropTypes.CheckboxConfig<RowVO> = {
      labelField: 'name',
      visibleMethod ({ row }) {
        return row.sex === 'Women'
      }
    }

    return {
      tableData,
      checkboxConfig
    }
  }
})
</script>
