<template>
  <div>
    <vxe-button @click="printEvent">同时打印2张表</vxe-button>

    <vxe-table
      border
      show-footer
      height="300"
      ref="table1Ref"
      :footer-data="footerData1"
      :data="tableData1">
      <vxe-column field="id" title="ID" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>

    <vxe-table
      border
      show-footer
      height="300"
      ref="table2Ref"
      :footer-data="footerData2"
      :data="tableData2">
      <vxe-column field="id" title="ID" width="60"></vxe-column>
      <vxe-column field="role" title="Role"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  age: number
  sex: string
  address: string
}

export default Vue.extend({
  data () {
    const tableData1: RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]
    const footerData1 = [
      { id: '合计', name: '666', sex: '999', address: '888' }
    ]

    const tableData2 : RowVO[] = [
      { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
      { id: 10005, name: 'Test5', role: 'PM', sex: 'Man', age: 29, address: 'Shanghai' },
      { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 38, address: 'Shanghai' }
    ]
    const footerData2 = [
      { id: '合计', role: '555', age: '999' },
      { id: '平均', role: '555', age: '333' }
    ]

    return {
      tableData1,
      footerData1,
      tableData2,
      footerData2
    }
  },
  methods: {
    printEvent () {
      const $table1 = this.$refs.table1Ref as VxeTableInstance<RowVO>
      const $table2 = this.$refs.table1Ref as VxeTableInstance<RowVO>
      if ($table1 && $table2) {
        Promise.all(
          [
            $table1.getPrintHtml().then(({ html }) => {
              return {
                headerHtml: '<div style="text-align: center;font-size: 28px;">第一张表</div>',
                bodyHtml: html
              }
            }),
            $table2.getPrintHtml().then(({ html }) => {
              return {
                headerHtml: '<div style="text-align: center;font-size: 28px;">第二张表</div>',
                bodyHtml: html
              }
            })
          ]
        ).then(pageBreaks => {
          VxeUI.print({
            title: '打印多张表',
            showPageNumber: true,
            pageBreaks
          })
        })
      }
    }
  }
})
</script>
