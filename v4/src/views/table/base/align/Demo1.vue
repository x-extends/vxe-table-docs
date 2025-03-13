<template>
  <div>
    <vxe-table
      border
      show-footer
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="列居中" align="center"></vxe-column>
      <vxe-column field="sex" title="列头居中" header-align="center"></vxe-column>
      <vxe-column field="age" title="列尾居中" footer-align="center"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', name: '777', sex: '333', age: '111' }
])
</script>
