<template>
  <div>
    <vxe-table
      show-footer
      border
      height="300"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70" fixed="left"></vxe-column>
      <vxe-column field="name" title="Name" width="400"></vxe-column>
      <vxe-column field="role" title="Role" width="300"></vxe-column>
      <vxe-column field="sex" title="Sex" width="100"></vxe-column>
      <vxe-column field="num" title="Num" width="150"></vxe-column>
      <vxe-column field="address" title="Address" width="300" show-overflow></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: string
  name: string
  role: string
  sex: string
  num: string
  address: string
}

const tableData = ref<RowVO[]>([
  { id: '10001', name: 'Test1', role: 'Develop', sex: 'Man', num: '28', address: 'test abc' },
  { id: '10002', name: 'Test2', role: 'Test', sex: 'Women', num: '22', address: 'Guangzhou' },
  { id: '10003', name: 'Test3', role: 'PM', sex: 'Man', num: '32', address: 'Shanghai' },
  { id: '10004', name: 'Test4', role: 'Designer', sex: 'Women', num: '24', address: 'Shanghai' },
  { id: '10005', name: 'Test5', role: 'Develop', sex: 'Man', num: '42', address: 'Guangzhou' },
  { id: '10006', name: 'Test6', role: 'Test', sex: 'Women', num: '39', address: 'Shanghai' },
  { id: '10007', name: 'Test7', role: 'Develop', sex: 'Man', num: '46', address: 'Shanghai' },
  { id: '10008', name: 'Test8', role: 'PM', sex: 'Women', num: '49', address: 'Guangzhou' }
])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { seq: '合计', num: '￥282' },
  { seq: '平均', num: '2.88 元' }
])
</script>
