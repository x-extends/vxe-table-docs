<template>
  <div>
    <vxe-table
      :row-group-config="rowGroupConfig"
      :data="tableData">
      <vxe-column field="name" title="Name" min-width="300" row-group-node></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  date: string
  address: string
}

export default Vue.extend({
  data () {
    const rowGroupConfig: VxeTablePropTypes.RowGroupConfig<RowVO> = {
      groupFields: ['role']
    }

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Woman', age: 28, date: '2025-02-01', address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Man', age: 22, date: '2025-01-01', address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Woman', age: 32, date: '2025-05-01', address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Man', age: 32, date: '2025-01-01', address: 'test abc' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Man', age: 30, date: '2025-01-01', address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', age: 30, date: '2025-03-01', address: 'test abc' },
      { id: 10007, name: 'Test7', role: 'Test', sex: 'Woman', age: 29, date: '2025-05-01', address: 'test abc' },
      { id: 10008, name: 'Test8', role: 'PM', sex: 'Woman', age: 35, date: '2025-11-01', address: 'test abc' },
      { id: 10009, name: 'Test9', role: 'Test', sex: 'Man', age: 21, date: '2025-05-01', address: 'test abc' },
      { id: 10010, name: 'Test10', role: 'PM', sex: 'Woman', age: 28, date: '2025-03-01', address: 'test abc' },
      { id: 10011, name: 'Test11', role: 'Test', sex: 'Woman', age: 29, date: '2025-03-01', address: 'test abc' },
      { id: 10012, name: 'Test12', role: 'Develop', sex: 'Man', age: 37, date: '2025-10-01', address: 'test abc' },
      { id: 10013, name: 'Test13', role: 'Test', sex: 'Woman', age: 24, date: '2025-02-01', address: 'test abc' },
      { id: 10014, name: 'Test14', role: 'Develop', sex: 'Man', age: 34, date: '2025-08-01', address: 'test abc' },
      { id: 10015, name: 'Test15', role: 'Designer', sex: 'Man', age: 21, date: '2025-05-01', address: 'test abc' },
      { id: 10016, name: 'Test16', role: 'Designer', sex: 'Woman', age: 21, date: '2025-10-01', address: 'test abc' },
      { id: 10017, name: 'Test17', role: 'Test', sex: 'Man', age: 31, date: '2025-12-01', address: 'test abc' },
      { id: 10018, name: 'Test18', role: 'Develop', sex: 'Woman', age: 32, date: '2025-10-01', address: 'test abc' },
      { id: 10019, name: 'Test19', role: 'Test', sex: 'Man', age: 37, date: '2025-02-01', address: 'test abc' },
      { id: 10020, name: 'Test20', role: 'Develop', sex: 'Man', age: 41, date: '2025-03-01', address: 'test abc' }
    ]

    return {
      tableData,
      rowGroupConfig
    }
  }
})
</script>
