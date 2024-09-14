<template>
  <div>
    <vxe-table
      border
      show-footer
      :footer-data="footerData"
      :data="tableData"
      :menu-config="menuConfig">
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="num" title="Num"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
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
  num: number
  address: string
}

export default Vue.extend({
  data () {
    const tableData: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', num: 2, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', num: 3, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', num: 4, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', num: 5, address: 'Guangzhou' },
      { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', num: 6, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Man', num: 1, address: 'test abc' }
    ]

    const menuConfig: VxeTablePropTypes.MenuConfig<RowVO> = {
      header: {
        options: [
          [
            { code: 'myExportMenu', name: '导出数据' }
          ]
        ]
      },
      body: {
        options: [
          [
            { code: 'myExportMenu', name: '导出数据' },
            { code: 'myPrintMenu', name: '打印' },
            { code: 'myLinkMenu', name: '打开官网' }
          ]
        ]
      },
      footer: {
        options: [
          [
            { code: 'myLinkMenu', name: '打开官网' }
          ]
        ]
      }
    }

    const footerData: VxeTablePropTypes.FooterData = [
      { seq: '合计', num: 21 }
    ]

    return {
      tableData,
      menuConfig,
      footerData
    }
  }
})
</script>
