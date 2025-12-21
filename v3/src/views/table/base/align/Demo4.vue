<template>
  <div>
    <vxe-radio-group v-model="footerAlign">
      <vxe-radio-button checked-value="left" content="居左"></vxe-radio-button>
      <vxe-radio-button checked-value="center" content="居中"></vxe-radio-button>
      <vxe-radio-button checked-value="right" content="居右"></vxe-radio-button>
    </vxe-radio-group>

    <vxe-table
      border
      show-footer
      :footer-align="footerAlign"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
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
  address: string
}

export default Vue.extend({
  data () {
    const footerAlign: VxeTablePropTypes.FooterAlign = 'left'

    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', name: '777', sex: '333', age: '111' }
    ]

    return {
      footerAlign,
      tableData,
      footerData
    }
  }
})
</script>
